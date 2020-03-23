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
		primary_gl: false,
		primary_el: false
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

	const handleCheckbox = (event) => {
		setUserdata({ ...userdata, [event.target.name]: event.target.checked });
	};

	return (
		<div>
			<div>
				<Link href="dashboard">
					<a>Dashboard</a>
				</Link>
			</div>
			<p>
				{' '}
				<input type="text" placeholder="First name" name="first_name" onChange={handleChange} />
			</p>
			<p>
				<input type="text" placeholder="Last name" name="last_name" onChange={handleChange} />
			</p>
			<p>
				<input type="text" placeholder="Email address" name="email_address" onChange={handleChange} />
			</p>
			<p>
				{' '}
				<input type="text" placeholder="Phone number" name="phone_number" onChange={handleChange} />
			</p>
			<p>
				<input type="text" placeholder="Company name" name="company_name" onChange={handleChange} />
			</p>
			<p>
				<input
					type="checkbox"
					name="primary_al"
					onChange={(e) => handleCheckbox(e)}
					checked={userdata.primary_al}
					id="primary_al"
				/>
				<label htmlFor="primary_al">primary_al</label>
			</p>
			<p>
				<input
					type="checkbox"
					name="primary_gl"
					onChange={(e) => handleCheckbox(e)}
					checked={userdata.primary_gl}
					id="primary_gl"
				/>
				<label htmlFor="primary_gl">primary_gl</label>
			</p>
			<p>
				<input
					type="checkbox"
					name="primary_el"
					onChange={(e) => handleCheckbox(e)}
					checked={userdata.primary_el}
					id="primary_el"
				/>
				<label htmlFor="primary_el">primary_el</label>
			</p>
			<Calendar value={userdata.effective_date} onChange={handleChange} name="effective_date" />

			<button onClick={(event) => handleSubmit(event)}>Submit</button>
		</div>
	);
};

export default Index;
