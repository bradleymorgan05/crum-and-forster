import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('policy')
export class PolicyEntity {
	@PrimaryGeneratedColumn() id: number;

	@Column({ length: 50, nullable: true })
	first_name: string;

	@Column({ length: 50, nullable: true  })
	last_name: string;

	@Column({ length: 50, nullable: true  })
	email_address: string;

	@Column({ length: 50, nullable: true  })
	phone_number: string;

	@Column({ length: 50, nullable: true  })
	company_name: string;

	@Column() effective_date: Date;

	@Column({ length: 20, nullable: true })
	status: string;

	@Column({default: false}) primary_al: boolean;

	@Column({default: false}) primary_gl: boolean;

	@Column({default: false}) primary_el: boolean;

	@Column({default: false}) is_deleted: boolean;

	@CreateDateColumn() created_at: Date;
}
