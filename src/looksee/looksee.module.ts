import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { LookseeController } from './looksee.controller';
import { LookseeService } from './looksee.service';
import { LookseeSchema } from './schemas/looksee.schemas'

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Looksee',
        schema: LookseeSchema
      },
    ]),
  ],
  controllers: [LookseeController],
  providers: [LookseeService]
})
export class LookseeModule {}
