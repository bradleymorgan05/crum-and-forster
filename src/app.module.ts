import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PolicyController } from './policy/policy.controller';
import { PolicyModule } from './policy/policy.module';

@Module({
	imports: [ TypeOrmModule.forRoot(), PolicyModule ],
	controllers: [ PolicyController, AppController ],
	providers: [ AppService ]
})
export class AppModule {}
