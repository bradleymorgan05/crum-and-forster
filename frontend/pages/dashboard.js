import Link from "next/link";
import React, { useState } from "react";
import { getPolicies, updatePolicy } from "../api/requestsHandler";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Dropdown } from "primereact/dropdown";
var moment = require("moment");
const baseUrl = "http://127.0.0.1:3001";

const Dashboard = ({ data }) => {
  const [cell, setCell] = useState({});

  const requiredValidator = props => {
    let value = props.rowData[props.field];
    return value && value.length > 0;
  };

  const onEditorValueChange = (props, value) => {
    //for field visually
    let updatedData = [...props.value];
    updatedData[props.rowIndex][props.field] = value;

    //for server put/post
    const id = props.rowData.id;
    const newData = { [props.field]: value };
    setCell(newData);
    updatePolicy(id, newData).then(data => {
      console.log(data);
    });
  };

  const dateTemplate = (rowData, column) => {
    return moment(rowData["effective_date"]).format("MM/DD/YYYY");
  };

  const inputTextEditor = (props, field) => {
    console.log(props.rowData[field]);
    return (
      <InputText
        type="text"
        value={props.rowData[field]}
        onChange={e => onEditorValueChange(props, e.target.value)}
      />
    );
  };

  const textEditor = props => {
    return inputTextEditor(props, props.field);
  };

  //checkbox
  const checkboxEditor = (props, field) => {
    return (
      <Checkbox
        onChange={e => onEditorValueChange(props, e.target.checked)}
        checked={props.rowData[field]}
      ></Checkbox>
    );
  };

  const checkEditor = props => {
    return checkboxEditor(props, props.field);
  };

  const checkboxTemplate = (rowData, column) => {
    return <Checkbox checked={column.rowData[column.field]}></Checkbox>;
  };

  //dropdown
  const dropdownCheckboxEditor = props => {
    let opt = [
      { label: "Yes", value: true },
      { label: "No", value: false }
    ];

    return (
      <Dropdown
        value={props.value[props.rowIndex][props.field]}
        options={opt}
        onChange={e => onEditorValueChange(props, e.value)}
        style={{ width: "100%" }}
        placeholder="Select primary_al"
      />
    );
  };

  const dropdownCheckboxTemplate = (rowData, column) => {
    let opt = [
      { label: "Yes", value: true },
      { label: "No", value: false }
    ];

    return (
      <Dropdown
        optionLabel="label"
        optionValue="value"
        value={column.rowData[column.field]}
        options={opt}
        style={{ width: "100%" }}
        placeholder="Select primary_al"
      />
    );
  };

  return (
    <div>
      <div className="content-section implementation">
        <h3>Cell Editing</h3>
        <DataTable value={data} editable={true}>
          <Column
            field="first_name"
            header="first_name"
            editor={textEditor}
            editorValidator={requiredValidator}
            style={{ height: "3.5em" }}
          />
          <Column
            field="last_name"
            header="last_name"
            style={{ height: "3.5em" }}
          />
          <Column
            field="email_address"
            header="email_address"
            style={{ height: "3.5em" }}
          />
          <Column
            field="phone_number"
            header="phone_number"
            style={{ height: "3.5em" }}
          />
          <Column
            field="company_name"
            header="company_name"
            style={{ height: "3.5em" }}
          />
          <Column
            field="effective_date"
            body={dateTemplate}
            header="effective_date"
            style={{ height: "3.5em" }}
          />
          <Column
            field="primary_al"
            editor={checkEditor}
            body={checkboxTemplate}
            header="primary_al"
            style={{ height: "3.5em" }}
          />
          <Column
            field="primary_al"
            body={dropdownCheckboxTemplate}
            header="primary_al"
            editor={dropdownCheckboxEditor}
            style={{ height: "3.5em" }}
          />
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
