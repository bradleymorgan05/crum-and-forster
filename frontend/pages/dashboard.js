import Link from 'next/link';
import React, { useState } from 'react';
import { getPolicies, updatePolicy } from '../api/requestsHandler';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
var moment = require('moment');
const baseUrl = 'http://127.0.0.1:3001';

const Dashboard = ({ data }) => {
	const [ cell, setCell ] = useState({});
	const [ policies, setPolicies ] = useState(data);

	const requiredValidator = (props) => {
		let value = props.rowData[props.field];
		return value && value.length > 0;
	};

	const onEditorValueChange = (props, value) => {
		//for field visually
		let updatedData = [ ...props.value ];
		updatedData[props.rowIndex][props.field] = value;

		//for server put/post
		const id = props.rowData.id;
		const newData = { [props.field]: value };
		setCell(newData);
		updatePolicy(id, newData).then((data) => {
			console.log(data);
		});
	};

	const dateTemplate = (rowData, column) => {
		return moment(rowData['effective_date']).format('MM/DD/YYYY');
	};

	const inputTextEditor = (props, field) => {
		console.log(props.rowData[field]);
		return (
			<InputText
				type="text"
				value={props.rowData[field]}
				onChange={(e) => onEditorValueChange(props, e.target.value)}
			/>
		);
	};

	const textEditor = (props) => {
		return inputTextEditor(props, props.field);
	};

	const checkboxEditor = (props, field) => {
		return <Checkbox onChange={(e) => onEditorValueChange(props, e.target.checked)} checked={props.rowData[field]} />;
	};

	const checkEditor = (props) => {
		return checkboxEditor(props, props.field);
	};

	const checkboxTemplate = (rowData, column) => {
		return <Checkbox checked={column.rowData[column.field]} />;
	};

	const deleteButton = (rowData, column) => {
		return <Button label="Danger" onClick={() => handleDelete(rowData, column)} className="p-button-danger" />;
	};

	const handleDelete = (rowData, column) => {
		const id = rowData.id;
		const newData = { is_deleted: true };
		updatePolicy(id, newData).then((data) => {
			console.log(data);
			const res = getPolicies().then((r) => setPolicies(r));
		});
	};

	return (
		<div>
			<div>
				<Link href="/">
					<a>New Policy</a>
				</Link>
			</div>
			<div className="content-section implementation">
				<DataTable value={data} editable={true}>
					<Column
						field="first_name"
						header="First Name"
						editor={textEditor}
						editorValidator={requiredValidator}
						style={{ height: '3.5em' }}
					/>
					<Column field="last_name" header="Last Name" style={{ height: '3.5em' }} />
					<Column field="email_address" header="Email Address" style={{ height: '3.5em' }} />
					<Column field="phone_number" header="Phone Number" style={{ height: '3.5em' }} />
					<Column field="company_name" header="Company Name" style={{ height: '3.5em' }} />
					<Column field="effective_date" body={dateTemplate} header="effective_date" style={{ height: '3.5em' }} />
					<Column
						field="primary_al"
						editor={checkEditor}
						body={checkboxTemplate}
						header="Primary AL"
						style={{ height: '3.5em' }}
					/>
					<Column
						field="primary_gl"
						editor={checkEditor}
						body={checkboxTemplate}
						header="Primary GL"
						style={{ height: '3.5em' }}
					/>
					<Column
						field="primary_el"
						editor={checkEditor}
						body={checkboxTemplate}
						header="Primary EL"
						style={{ height: '3.5em' }}
					/>
					<Column field="delete_policy" body={deleteButton} header="delete" style={{ height: '3.5em' }} />
				</DataTable>
			</div>
		</div>
	);
};

export async function getServerSideProps() {
	const data = await getPolicies();
	return { props: { data } };
}

export default Dashboard;
