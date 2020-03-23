import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('policy')
export class PolicyEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 50 })
	first_name: string;

	@Column({ length: 50 })
	last_name: string;

	@Column({ length: 50 })
	email_address: string;

	@Column({ length: 50 })
	phone_number: string;

	@Column({ length: 50 })
	company_name: string;

	@Column() effective_date: Date;

	@Column({ type: 'int', default: 1 })
	status: number;

	@Column({ nullable: true }) primary_al: boolean;

	@Column({ nullable: true }) primary_gl: boolean;

	@Column({ nullable: true }) primary_el: boolean;

	@Column({ default: false }) is_deleted: boolean;

	@CreateDateColumn() created_at: Date;
}
