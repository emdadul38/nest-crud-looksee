import { Controller, Get, Post, Param, Put, Delete, Body, Query } from '@nestjs/common';
import { LookseeService } from './looksee.service';
import { LookseeDto} from "./looksee.dto"

@Controller('looksee')
export class LookseeController {
  constructor(private lookseeService: LookseeService) {}
  @Get()
  public async getLooksees() {
    return this.lookseeService.getLooksees();
  }

  @Post()
  public postLooksee(@Body() looksee: LookseeDto) {
    return this.lookseeService.postLooksee(looksee);
  }

  @Get(':id')
  public getLookseeById(@Param('id') id: number) {
    return this.lookseeService.getLookseeById(id);
  }

  @Put(':id')
  public putLooksee(@Param('id') id: number, @Query() query) {
    return this.lookseeService.putLookseeById(id, query);
  }

  @Delete(':id')
  public deleteLooksee(@Param('id') id: number) {
    return this.lookseeService.deleteLooksee(id);
  }
}
