webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_requestsHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/requestsHandler */ "./api/requestsHandler.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/datatable */ "./node_modules/primereact/datatable.js");
/* harmony import */ var primereact_datatable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primereact/column */ "./node_modules/primereact/column.js");
/* harmony import */ var primereact_column__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primereact_column__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/inputtext */ "./node_modules/primereact/inputtext.js");
/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/checkbox */ "./node_modules/primereact/checkbox.js");
/* harmony import */ var primereact_checkbox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primereact/dropdown */ "./node_modules/primereact/dropdown.js");
/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\bitingcold\\Documents\\Development\\policy-crud\\frontend\\pages\\dashboard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;









var moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

var baseUrl = 'http://127.0.0.1:3001';

var Dashboard = function Dashboard(_ref) {
  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      cell = _useState[0],
      setCell = _useState[1];

  var requiredValidator = function requiredValidator(props) {
    var value = props.rowData[props.field];
    return value && value.length > 0;
  };

  var onEditorValueChange = function onEditorValueChange(props, value) {
    //for field visually
    var updatedData = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(props.value);

    updatedData[props.rowIndex][props.field] = value; //for server put/post

    var id = props.rowData.id;

    var newData = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.field, value);

    setCell(newData);
    Object(_api_requestsHandler__WEBPACK_IMPORTED_MODULE_4__["updatePolicy"])(id, newData).then(function (data) {
      console.log(data);
    });
  };

  var dateTemplate = function dateTemplate(rowData, column) {
    return moment(rowData['effective_date']).format('MM/DD/YYYY');
  };

  var inputTextEditor = function inputTextEditor(props, field) {
    console.log(props.rowData[field]);
    return __jsx(primereact_inputtext__WEBPACK_IMPORTED_MODULE_7__["InputText"], {
      type: "text",
      value: props.rowData[field],
      onChange: function onChange(e) {
        return onEditorValueChange(props, e.target.value);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 4
      }
    });
  };

  var textEditor = function textEditor(props) {
    return inputTextEditor(props, props.field);
  }; //checkbox


  var checkboxEditor = function checkboxEditor(props, field) {
    return __jsx(primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
      onChange: function onChange(e) {
        return onEditorValueChange(props, e.target.checked);
      },
      checked: props.rowData[field],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 10
      }
    });
  };

  var checkEditor = function checkEditor(props) {
    return checkboxEditor(props, props.field);
  };

  var checkboxTemplate = function checkboxTemplate(rowData, column) {
    return __jsx(primereact_checkbox__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
      checked: column.rowData[column.field],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 10
      }
    });
  }; //dropdown


  var dropdownCheckboxEditor = function dropdownCheckboxEditor(props) {
    var opt = [{
      label: 'Yes',
      value: true
    }, {
      label: 'No',
      value: false
    }];
    return __jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
      value: props.value[props.rowIndex][props.field],
      options: opt,
      onChange: function onChange(e) {
        return onEditorValueChange(props, e.value);
      },
      style: {
        width: '100%'
      },
      placeholder: "Select primary_al",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 4
      }
    });
  };

  var dropdownCheckboxTemplate = function dropdownCheckboxTemplate(rowData, column) {
    var opt = [{
      label: 'Yes',
      value: true
    }, {
      label: 'No',
      value: false
    }];
    return __jsx(primereact_dropdown__WEBPACK_IMPORTED_MODULE_9__["Dropdown"], {
      optionLabel: "label",
      optionValue: "value",
      value: column.rowData[column.field],
      options: opt,
      style: {
        width: '100%'
      },
      placeholder: "Select primary_al",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 4
      }
    });
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 6
    }
  }, "New Policy"))), __jsx("div", {
    className: "content-section implementation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }
  }, __jsx(primereact_datatable__WEBPACK_IMPORTED_MODULE_5__["DataTable"], {
    value: data,
    editable: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "first_name",
    header: "First Name",
    editor: textEditor,
    editorValidator: requiredValidator,
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "last_name",
    header: "Last Name",
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "email_address",
    header: "Email Address",
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "phone_number",
    header: "Phone Number",
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "company_name",
    header: "Company Name",
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "effective_date",
    body: dateTemplate,
    header: "effective_date",
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "primary_al",
    editor: checkEditor,
    body: checkboxTemplate,
    header: "primary_al",
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 6
    }
  }), __jsx(primereact_column__WEBPACK_IMPORTED_MODULE_6__["Column"], {
    field: "primary_al",
    body: dropdownCheckboxTemplate,
    header: "primary_al",
    editor: dropdownCheckboxEditor,
    style: {
      height: '3.5em'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 6
    }
  }))));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

/***/ })

})
//# sourceMappingURL=dashboard.js.703209547bd57d7c65f4.hot-update.js.map