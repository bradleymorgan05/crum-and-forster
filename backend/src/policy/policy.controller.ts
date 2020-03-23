import { Controller, Get, Post, Delete, Put, Body, Param, ValidationPipe } from '@nestjs/common';
import { PolicyService } from './policy.service';
import { PolicyDTO } from './policy.dto';
import { PolicyEntity } from "./policy.entity";
import { Logger } from '@nestjs/common';

@Controller('policies')
export class PolicyController {
	constructor(private policyService: PolicyService) {}

	@Get()
	findAllPolicies() {
		return this.policyService.getAllPolicies();
	}

	@Post()
  createPolicy(@Body() policyDto: PolicyDTO) {
    return this.policyService.createPolicy(policyDto);
	}
	
	@Put(':id')
  update(@Param('id') id: number, @Body() policyDto: Partial<PolicyDTO>) {

   return this.policyService.updatePolicy(id, policyDto);
  }
	// @Post()
	// createPolicy(@Body() data: PolicyDTO) {
	// 	console.log(data)
	// 	return true
	// 	//return this.policyService.createPolicy(data);
	// }

	// @Get(':id')
	// getPolicy(@Param('id') id: number) {
	// 	return this.policyService.getPolicy(id);
	// }

	// @Put(':id')
	// updatePolicy(@Param('id') id: number, @Body() data: Partial<PolicyDTO>) {
	// 	return this.policyService.updatePolicy(id, data);
	// }
	// @Delete(':id')
	// deletePolicy(@Param('id') id: number, @Body() data: Partial<PolicyDTO>) {
	// 	return this.policyService.deletePolicy(id, data);
	// }
}
