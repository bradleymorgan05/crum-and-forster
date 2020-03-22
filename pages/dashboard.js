import Link from 'next/link';
import React from 'react';
import fetch from 'isomorphic-unfetch';
const baseUrl = 'http://localhost:4000/';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ColumnGroup } from 'primereact/columngroup';
import { Row } from 'primereact/row';

export default function Dashboard({ data }) {
	return (
		<div>
			<Link href="/">
				<a title="New Policy">Create new policy</a>
			</Link>
			{/* <ul>{data.map((policy) => <div key={policy.id}>{policy.first_name}</div>)}</ul> */}
			<DataTable style={{border: '1px'}}value={data}>
				<Column field="first_name" header="First Name" style={{ height: '3.5em'}} />
				<Column field="last_name" header="Last Name" style={{ height: '3.5em' }} />
				<Column field="email_address" header="Email Address" style={{ height: '3.5em' }} />
				<Column field="phone_number" header="Phone Number" style={{ height: '3.5em' }} />
				<Column field="company_name" header="Company Name" style={{ height: '3.5em' }} />
				<Column field="effective_date" header="Effective Date" style={{ height: '3.5em' }} />
			</DataTable>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await fetch(`${baseUrl}policies`);
	const data = await res.json();
	return { props: { data } };
}
