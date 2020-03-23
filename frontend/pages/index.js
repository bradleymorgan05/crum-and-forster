import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { createPolicy } from '../api/requestsHandler';

const Index = () => {
	const [ userdata, setUserdata ] = useState({
		first_name: '',
		last_name: '',
		email_address: '',
		phone_number: '',
		company_name: '',
		effective_date: '',
		primary_al: false,
		primary_el: false,
		primary_gl: false
	});

	const handleChange = (event) => {
		setUserdata({ ...userdata, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		createPolicy(userdata).then((data) => {
			console.log(data);
		});
	};

	return (
		<div>
			<div>
				<Link href="dashboard">
					<a>Dashboard</a>
				</Link>
			</div>
			<input type="text" placeholder="First name" name="first_name" onChange={handleChange} />
			<input type="text" placeholder="Last name" name="last_name" onChange={handleChange} />
			<input type="text" placeholder="Email address" name="email_address" onChange={handleChange} />
			<input type="text" placeholder="Phone number" name="phone_number" onChange={handleChange} />
			<input type="text" placeholder="Company name" name="company_name" onChange={handleChange} />
			<Calendar
				value={userdata.effective_date}
				onChange={handleChange}
				placeholder="Effective Date"
				name="effective_date"
			/>
			<input value="al" type="checkbox" id="primary_al" name="al" />
			<label for="al">AL</label>
			<input value="gl" type="checkbox" id="primary_gl" name="gl" />
			<label for="gl">GL</label>
			<input value="el" type="checkbox" id="primary_el" name="el" />
			<label for="el">EL</label>
			<button onClick={(event) => handleSubmit(event)}>Submit</button>
		</div>
	);
};

export default Index;
