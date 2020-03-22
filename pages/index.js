import Link from 'next/link';
import React from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:4000/';
import fetch from 'isomorphic-unfetch';

export default class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			email_address: '',
			phone_number: '',
			company_name: '',
			effective_date: '',
			status: 'Pending'
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.postData = this.postData.bind(this)
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.first_name);
		event.preventDefault();
		const policy = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			email_address: this.state.email_address,
			phone_number: this.state.phone_number,
			company_name: this.state.company_name,
			effective_date: this.state.effective_date,
			status: 'Submitted'
		};
		this.postData(policy)
		// axios.post(`http://localhost:', { user })
		// .then(res => {
		// 	console.log(res);
		// 	console.log(res.data);
		// })
		// console.log('current policy', policy);
	}
		
	postData = (object) => {
		console.log(JSON.stringify(object))
		// axios.post(`${baseUrl}policies`, object)
		// .then(res => {
		// 	console.log(res);
		// 	console.log(111);
		// 	//console.log(res.data);
		// })
		fetch(`${baseUrl}policies`, {
			method: 'post',
			body: object,
			headers: new Headers({
				'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
				'Accept': 'application/json, application/xml, text/plain, text/html, *.*'
			}),
		})
	}

	render() {
		return (
			<div>
				<div style={{ margin: '5px', padding: '3px'  }}>
					<Link href="dashboard-nx" >
						<a>Dashboard</a>
					</Link>
				</div>

				{/* <form onSubmit={this.handleSubmit}> */}
				<input
					type="text"
					placeholder="First name"
					name="first_name"
					style={{ margin: '5px', padding: '3px', borderRadius: '5px'  }}
					onChange={this.handleChange}
				/>
				<input type="text" placeholder="Last name" name="last_name" style={{ margin: '5px', padding: '3px', borderRadius: '5px' }} onChange={this.handleChange} />
				<input type="text" placeholder="Email address" name="email_address"style={{ margin: '5px', padding: '3px', borderRadius: '5px' }}  onChange={this.handleChange} />
				<input type="text" placeholder="Phone number" name="phone_number" style={{ margin: '5px', padding: '3px', borderRadius: '5px' }} onChange={this.handleChange} />
				<input type="text" placeholder="Company name" name="company_name" style={{ margin: '5px', padding: '3px', borderRadius: '5px' }} onChange={this.handleChange} />
				<input type="text" placeholder="Effective date MM-DD-YYYY" name="effective_date" style={{ margin: '5px', padding: '3px', borderRadius: '5px' }} onChange={this.handleChange} />
				<div> <button style={{ margin: '5px', padding: '3px', borderRadius: '5px' }} onClick={this.handleSubmit}>Submit</button></div>
				
			</div>
		);
	}
}
