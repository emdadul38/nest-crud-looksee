import { Module } from '@nestjs/common';
import { DBConnection } from './config/db.connection'
import { LookseeModule } from './looksee/looksee.module';
import { MongooseModule } from "@nestjs/mongoose"

@Module({
  imports: [
    MongooseModule.forRoot(DBConnection.url, { useFindAndModify: false }),
    LookseeModule
  ]
})

export class AppModule {}
