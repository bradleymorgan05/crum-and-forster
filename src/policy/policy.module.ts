import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PolicyController } from './policy.controller';
import { PolicyService } from './policy.service';
import { PolicyEntity } from './policy.entity';

@Module({
	imports: [ TypeOrmModule.forFeature([ PolicyEntity ]) ],
	controllers: [ PolicyController ],
	providers: [ PolicyService ],
	exports: [ PolicyService ]
})
export class PolicyModule {}
