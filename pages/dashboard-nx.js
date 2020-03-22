import Link from 'next/link';
import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {Growl} from 'primereact/growl';
import Dashboard from './dashboard';
import axios from 'axios';
//import {CarService} from '../service/CarService';
const baseUrl = 'http://127.0.0.1:4000/';

class DashboardNX extends Component {

    constructor() {
        super();
        this.state = {
					data: []
        };
				this.clonedCars = {};

				this.data
				
        this.textEditor = this.textEditor.bind(this);
        this.yearEditor = this.yearEditor.bind(this);
        this.brandEditor = this.brandEditor.bind(this);
        this.colorEditor = this.colorEditor.bind(this);
        this.requiredValidator = this.requiredValidator.bind(this);

        this.editorForRowEditing = this.editorForRowEditing.bind(this);
        this.onRowEditorValidator = this.onRowEditorValidator.bind(this);
        this.onRowEditInit = this.onRowEditInit.bind(this);
        this.onRowEditSave = this.onRowEditSave.bind(this);
        this.onRowEditCancel = this.onRowEditCancel.bind(this);
    }


		// static async getInitialProps({ Component, router, ctx }) {
		// 	let pageProps = {}
	
	
		// 	if (Component.getInitialProps) {
		// 		pageProps = await Component.getInitialProps(ctx)
		// 	}
	
		// 	/* your own logic */
	
		// 	return { pageProps }
		// }
	

    async componentDidMount() {
				const res = fetch(`${baseUrl}policies`).then( r => r.json() ).then(data => this.setState({data: data}));
    }

    /* Cell Editing */
    onEditorValueChange(props, value) {
        let updatedData = [...props.value];
        updatedData[props.rowIndex][props.field] = value;
        this.setState({data: updatedData});
    }

    inputTextEditor(props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChange(props, e.target.value)} />;
    }

    textEditor(props) {
			console.log(props)
			this.postData()
      return this.inputTextEditor(props, props.field);
		}
		
		postData = () => {
			console.log(this.state.data)
			axios.post(`${baseUrl}policies`, this.state.data)
			.then(res => {
				console.log(res);
				console.log(111);
				//console.log(res.data);
			})
		}

    yearEditor(props) {
        return this.inputTextEditor(props, 'year');
    }


    brandEditor(props) {
        let brands = [
            {label: 'Audi', value: 'Audi'},
            {label: 'BMW', value: 'BMW'},
            {label: 'Fiat', value: 'Fiat'},
            {label: 'Ford', value: 'Ford'},
            {label: 'Honda', value: 'Honda'},
            {label: 'Jaguar', value: 'Jaguar'},
            {label: 'Mercedes', value: 'Mercedes'},
            {label: 'Renault', value: 'Renault'},
            {label: 'VW', value: 'VW'},
            {label: 'Volvo', value: 'Volvo'}
        ];

        return (
            <Dropdown value={props.value[props.rowIndex].brand} options={brands}
                    onChange={(e) => this.onEditorValueChange(props, e.value)} style={{width:'100%'}} placeholder="Select a City"/>
        );
    }

    colorEditor(props) {
        return this.inputTextEditor(props, 'color');
    }

    requiredValidator(props) {
        let value = props.rowData[props.field];
        return value && value.length > 0;
    }

    /* Row Editing */
    onEditorValueChangeForRowEditing(props, value) {
        let updatedCars = [...props.value];
        updatedCars[props.rowIndex][props.field] = value;
        this.setState({cars2: updatedCars});
    }

    editorForRowEditing(props, field) {
        return <InputText type="text" value={props.rowData[field]} onChange={(e) => this.onEditorValueChangeForRowEditing(props, e.target.value)} />;
    }

    onRowEditorValidator(rowData) {
        let value = rowData['brand'];
        return value.length > 0;
    }

    onRowEditInit(event) {
        this.clonedCars[event.data.vin] = {...event.data};
    }

    onRowEditSave(event) {
        if (this.onRowEditorValidator(event.data)) {
            delete this.clonedCars[event.data.vin];
            this.growl.show({severity: 'success', summary: 'Success', detail: 'Car is updated'});
        }
        else {
            this.growl.show({severity: 'error', summary: 'Error', detail: 'Brand is required'});
        }
    }

    onRowEditCancel(event) {
        let cars = [...this.state.cars2];
        cars[event.index] = this.clonedCars[event.data.vin];
        delete this.clonedCars[event.data.vin];
        this.setState({
            cars2: cars
        })
    }

    render() {
			console.log(this.state.data)	
        return (
            <div>
                			<Link href="/">
				<a title="New Policy">Create new policy</a>
			</Link>


                <div className="content-section implementation">
                    <Growl ref={(el) => this.growl = el} />

                    <h3>Cell Editing</h3>
                    <DataTable value={this.state.data} editable={true}>
                        <Column field="first_name" header="first_name" editor={this.textEditor} editorValidator={this.requiredValidator} style={{height: '3.5em'}}/>
                        <Column field="last_name" header="last_name" editor={this.yearEditor} style={{height: '3.5em'}}/>
                        <Column field="email_address" header="email_address" editor={this.brandEditor} style={{height: '3.5em'}}/>
                        <Column field="phone_number" header="phone_number" editor={this.colorEditor} style={{height: '3.5em'}}/>
                        <Column field="company_name" header="company_name" editor={this.colorEditor} style={{height: '3.5em'}}/>
                        <Column field="effective_date" header="effective_date" editor={this.colorEditor} style={{height: '3.5em'}}/>
                        <Column field="status" header="status" editor={this.colorEditor} style={{height: '3.5em'}}/>
                    </DataTable>

                    <h3>Row Editing</h3>
                    <DataTable value={this.state.data} editMode="row" rowEditorValidator={this.onRowEditorValidator} onRowEditInit={this.onRowEditInit} onRowEditSave={this.onRowEditSave} onRowEditCancel={this.onRowEditCancel}>
                        <Column field="first_name" header="first_name" style={{height: '3.5em'}}/>
                        <Column field="last_name" header="last_name" editor={(props) => this.editorForRowEditing(props, 'year')} style={{height: '3.5em'}}/>
                        <Column field="email_address" header="email_address" editor={(props) => this.editorForRowEditing(props, 'brand')} style={{height: '3.5em'}}/>
                        <Column field="phone_number" header="phone_number" editor={(props) => this.editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                        <Column field="company_name" header="company_name" editor={(props) => this.editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                        <Column field="effective_date" header="effective_date" editor={(props) => this.editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                        <Column field="status" header="status" editor={(props) => this.editorForRowEditing(props, 'color')} style={{height: '3.5em'}}/>
                        <Column rowEditor={true} style={{'width': '70px', 'textAlign': 'center'}}></Column>
                    </DataTable>
                </div>
            </div>
        );
    }
}

export default DashboardNX