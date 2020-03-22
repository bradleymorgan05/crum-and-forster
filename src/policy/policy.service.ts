import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PolicyEntity } from './policy.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { PolicyDTO } from './policy.dto';

@Injectable()
export class PolicyService {
	constructor(@InjectRepository(PolicyEntity) private policyRepository: Repository<PolicyEntity>) {}

	async getAllPolicies() {
		return await this.policyRepository.find({ where: { is_deleted: false } });
	}

	async createPolicy(data: Partial<PolicyDTO>) {
		const policy = await this.policyRepository.create(data);
		await this.policyRepository.save(policy);
		return policy;
	}

	async getPolicy(id: number) {
		return this.policyRepository.findOne({ where: { id } });
	}

	async updatePolicy(id: number, data: Partial<PolicyDTO>) {
		await this.policyRepository.update({ id }, data);
		return await this.policyRepository.findOne({ id });
	}

	async deletePolicy(id: number, data: Partial<PolicyDTO>) {
		await this.policyRepository.update({ id }, data);
		return { deleted: true };
	}
}
