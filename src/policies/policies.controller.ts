import { Controller, Get, Post, Delete, Put } from '@nestjs/common';

@Controller('policies')
export class PoliciesController {
	@Get()
	findAll(): string {
		return 'this is a GET request for all policies';
	}
	@Post()
	create(): string {
		return 'this is a POST request to create a policy';
	}
}
