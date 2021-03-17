import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { SLooksee } from './interfaces/looksee.interface';
import { LookseeDto } from './looksee.dto';

const lookseeProjection = {
  __v: false,
  _id: false
}

@Injectable()
export class LookseeService {
  constructor(@InjectModel('Looksee') private readonly  lookseeModel: Model<SLooksee>) {}

  public async  getLooksees(): Promise<LookseeDto[]> {
    const looksees = await this.lookseeModel.find({}, lookseeProjection).exec();
    if(!looksees) {
      throw new HttpException('Not Found', 404);
    }
    return looksees;
  }

  public async postLooksee(newLooksee: LookseeDto) {
    const looksee = new this.lookseeModel(newLooksee);
    return looksee.save();
  }

  public async getLookseeById(id: number): Promise<LookseeDto> {
    const looksees = await this.lookseeModel.find({id}, lookseeProjection).exec();
    if(!looksees) {
      throw new HttpException('Not found', 404);
    }
    // @ts-ignore
    return looksees;
  }

  public async deleteLooksee(id: number): Promise<LookseeDto> {
    const looksee =  await this.lookseeModel.deleteOne({id}).exec();
    if(looksee.deletedCount === 0) {
      throw  new  HttpException('Not found', 404)
    }
    // @ts-ignore
    return looksee;
  }

  public async putLookseeById(id: number, query): Promise<LookseeDto> {
    const name = query.name;
    const quantity = query.quantity;
    const looksee = await this.lookseeModel.findOneAndUpdate({id}, {name, quantity}, {new: true}).exec();
    if(!looksee) {
      throw new HttpException('Not found', 404);
    }
    return looksee;
  }
}
