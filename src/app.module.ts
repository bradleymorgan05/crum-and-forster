import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PoliciesController } from './policies/policies.controller';

@Module({
  imports: [],
  controllers: [AppController, PoliciesController],
  providers: [AppService],
})
export class AppModule {}
