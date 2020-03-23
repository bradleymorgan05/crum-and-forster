webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primereact/calendar */ "./node_modules/primereact/calendar.js");
/* harmony import */ var primereact_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primereact_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_requestsHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api/requestsHandler */ "./api/requestsHandler.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\bitingcold\\Documents\\Development\\policy-crud\\frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    first_name: '',
    last_name: '',
    email_address: '',
    phone_number: '',
    company_name: '',
    effective_date: '',
    primary_al: false,
    primary_el: false,
    primary_gl: false
  }),
      userdata = _useState[0],
      setUserdata = _useState[1];

  var handleChange = function handleChange(event) {
    setUserdata(_objectSpread({}, userdata, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, event.target.name, event.target.value)));
  };

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            Object(_api_requestsHandler__WEBPACK_IMPORTED_MODULE_5__["createPolicy"])(userdata).then(function (data) {
              console.log(data);
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 3
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "dashboard",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 5
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 6
    }
  }, "Dashboard"))), __jsx("input", {
    type: "text",
    placeholder: "First name",
    name: "first_name",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Last name",
    name: "last_name",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Email address",
    name: "email_address",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Phone number",
    name: "phone_number",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 4
    }
  }), __jsx("input", {
    type: "text",
    placeholder: "Company name",
    name: "company_name",
    onChange: handleChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }
  }), __jsx(primereact_calendar__WEBPACK_IMPORTED_MODULE_4__["Calendar"], {
    value: userdata.effective_date,
    onChange: handleChange,
    placeholder: "Effective Date",
    name: "effective_date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }), __jsx("input", {
    value: "al",
    type: "checkbox",
    id: "primary_al",
    name: "al",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }
  }), __jsx("label", {
    "for": "al",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }
  }, "AL"), __jsx("input", {
    value: "gl",
    type: "checkbox",
    id: "primary_gl",
    name: "gl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }
  }), __jsx("label", {
    "for": "gl",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }
  }, "GL"), __jsx("input", {
    value: "el",
    type: "checkbox",
    id: "primary_el",
    name: "el",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }
  }), __jsx("label", {
    "for": "el",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }
  }, "EL"), __jsx("button", {
    onClick: function onClick(event) {
      return handleSubmit(event);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }
  }, "Submit"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.2b12738f2a3b10cf029d.hot-update.js.map