import Link from 'next/link';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Growl} from 'primereact/growl';
import {Calendar} from 'primereact/calendar';
import axios from 'axios';
import moment from 'moment';
const baseUrl = 'http://127.0.0.1:4000/';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {data: []};
			
        this.textEditor = this.textEditor.bind(this);
        this.postData = this.postData.bind(this);
        this.dateTemplate = this.dateTemplate.bind(this);
        this.calendarEditor = this.calendarEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);
        this.onEditorValueChange = this.onEditorValueChange.bind(this);
    }

    async componentDidMount() {
		const res = fetch(`${baseUrl}policies`).then( r => r.json() ).then(data => this.setState({data: data}));
    }

    onEditorValueChange(props, value) {
        let updatedData = [...props.value];
        updatedData[props.rowIndex][props.field] = value;
        this.setState({data: updatedData});
    }

    dateTemplate(rowData, column) {
        return moment(rowData['effective_date']).format("MM-DD-YYYY");
    }

    textEditor(props) {
		this.postData()
        return this.inputTextEditor(props, props.field);
	}
		
	postData(){
		axios.post(`${baseUrl}policies`, this.state.data)
			.then(res => {
				console.log(res);
		})
	}

	calendarEditor(props, field){	
		return <InputText type="text" value={moment(props.rowData[field]).format("MM/DD/YYYY")} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />
	}

    requiredValidator(props) {
        let value = props.rowData[props.field];
        return value && value.length > 0;
    }

    render() {
        return (
            <div>
              <Link href="/"><a title="New Policy">Create new policy</a></Link>
                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />
                    <DataTable value={this.state.data} editable={true}>
                        <Column field="first_name" header="First Name" editor={this.textEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column field="last_name" header="Last Name" editor={this.textEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column field="email_address" header="Email Address" editor={this.textEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column field="phone_number" header="Phone Number" editor={this.textEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column field="company_name" header="Company Name" editor={this.textEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column 
                         field="effective_date" body={this.dateTemplate} header="Effective Date" editor={this.calendarEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default Dashboard