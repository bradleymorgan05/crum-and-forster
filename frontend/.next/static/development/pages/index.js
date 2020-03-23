(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./api/requestsHandler.js":
/*!********************************!*\
  !*** ./api/requestsHandler.js ***!
  \********************************/
/*! exports provided: getPolicies, createPolicy, updatePolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPolicies", function() { return getPolicies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPolicy", function() { return createPolicy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePolicy", function() { return updatePolicy; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);

var baseUrl = 'http://127.0.0.1:3001';

var getPolicies = function getPolicies() {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPolicies$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(baseUrl, "/policies"), {
            method: 'GET',
            // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            // no-cors, *cors, same-origin
            cache: 'no-cache',
            // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

            },
            redirect: 'follow',
            // manual, *follow, error
            referrerPolicy: 'no-referrer' // no-referrer, *client

          }));

        case 2:
          response = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 5:
          return _context.abrupt("return", _context.sent);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};
var createPolicy = function createPolicy(data) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createPolicy$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(baseUrl, "/policies"), {
            method: 'POST',
            // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            // no-cors, *cors, same-origin
            cache: 'no-cache',
            // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

            },
            redirect: 'follow',
            // manual, *follow, error
            referrerPolicy: 'no-referrer',
            // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header

          }));

        case 2:
          response = _context2.sent;
          _context2.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 5:
          return _context2.abrupt("return", _context2.sent);

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};
var updatePolicy = function updatePolicy(id, data) {
  var response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function updatePolicy$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(baseUrl, "/policies/").concat(id), {
            method: 'PUT',
            // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            // no-cors, *cors, same-origin
            cache: 'no-cache',
            // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json' // 'Content-Type': 'application/x-www-form-urlencoded',

            },
            redirect: 'follow',
            // manual, *follow, error
            referrerPolicy: 'no-referrer',
            // no-referrer, *client
            body: JSON.stringify(data) // body data type must match "Content-Type" header

          }));

        case 2:
          response = _context3.sent;
          _context3.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(response.json());

        case 5:
          return _context3.abrupt("return", _context3.sent);

        case 6:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=f(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",h=e.pathname||"",c=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),h&&"/"!==h[0]&&(h="/"+h)):n||(n=""),c&&"#"!==c[0]&&(c="#"+c),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:h=h.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:c}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",h=a+s,c=/^https?|ftp|gopher|file/,p=/^(.*?)([#?].*)/,n=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,l=/^([a-z0-9.+-]*:)?\/\/\/*/i,i=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function u(e){try{return decodeURI(e)}catch(t){return e}}function f(e,r,a){void 0===r&&(r=!1),void 0===a&&(a=!1);var f=(e=e.trim()).match(p);e=f?u(f[1]).replace(/\\/g,"/")+f[2]:u(e).replace(/\\/g,"/"),i.test(e)&&"/"!==e.slice(-1)&&(e+="/");var m=!/(^javascript)/.test(e)&&e.match(n),v=l.test(e),d="";m&&(c.test(m[1])||(d=m[1].toLowerCase(),e=""+m[2]+m[3]),m[2]||(v=!1,c.test(m[1])?(d=m[1],e=""+m[3]):e="//"+m[3]),3!==m[2].length&&1!==m[2].length||(d=m[1],e="/"+m[3]));var g,b=e.match(/(:[0-9]+)/),y="";b&&b[1]&&3===b[1].length&&(e=e.replace(y=b[1],y+"00"));var w={},x="",R="";try{g=new URL(e)}catch(t){x=t,d||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(R="/",e=e.substr(1));try{g=new URL(e,h)}catch(e){return w.protocol=d,w.href=d,w}}w.slashes=v&&!R,w.host=g.host===s?"":g.host,w.hostname=g.hostname===s?"":g.hostname.replace(/(\[|\])/g,""),w.protocol=x?d||null:g.protocol,w.search=g.search.replace(/\\/g,"%5C"),w.hash=g.hash.replace(/\\/g,"%5C");var U=e.split("#");!w.search&&~U[0].indexOf("?")&&(w.search="?"),w.hash||""!==U[1]||(w.hash="#"),w.query=r?t.decode(g.search.substr(1)):w.search.substr(1),w.pathname=R+u(g.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),d&&!c.test(d)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[g.username,g.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=g.port,y&&(w.host=w.host.replace(y+"00",y),w.port=w.port.slice(0,-2)),w.href=R?""+w.pathname+w.search+w.hash:o(w);var j=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~j.indexOf(e)||(w[e]=w[e]||null)}),w}var m=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,v=/https?|ftp|gopher|file/;function d(e,t){var r="string"==typeof e?f(e):e;e="object"==typeof e?o(e):e;var s=f(t),c="";r.protocol&&!r.slashes&&(c=r.protocol,e=e.replace(r.protocol,""),c+="/"===t[0]||"/"===e[0]?"/":""),c&&s.protocol&&(c="",s.slashes||(c=s.protocol,t=t.replace(s.protocol,"")));var p=e.match(m);p&&!s.protocol&&(e=e.substr((c=p[1]+(p[2]||"")).length),/^\/\/[^\/]/.test(t)&&(c=c.slice(0,-1)));var n=new URL(e,h+"/"),l=new URL(t,n).toString().replace(h,""),i=s.protocol||r.protocol;return i+=r.slashes||s.slashes?"//":"",!c&&i?l=l.replace(a,i):c&&(l=l.replace(a,"")),v.test(l)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==l.slice(-1)||(l=l.slice(0,-1)),c&&(l=c+("/"===l[0]?l.substr(1):l)),l}exports.parse=f,exports.format=o,exports.resolve=d,exports.resolveObject=function(e,t){return f(d(e,t))};
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* globals self */exports.Headers=self.Headers;exports.Request=self.Request;exports.Response=self.Response;exports.fetch=self.fetch;

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object.assign/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/dist/build/polyfills/object.assign/index.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var assign=Object.assign.bind(Object);function g(){return assign;}Object.defineProperties(g(),{implementation:{get:g},shim:{value:g},getPolyfill:{value:g}});module.exports=g();

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbitingcold%5CDocuments%5CDevelopment%5Cpolicy-crud%5Cfrontend%5Cpages%5Cindex.js!./":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbitingcold%5CDocuments%5CDevelopment%5Cpolicy-crud%5Cfrontend%5Cpages%5Cindex.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
      if(true) {
        module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = true ? window.IntersectionObserver : undefined;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners["delete"](el);
  };
};

var Link = /*#__PURE__*/function (_react$Component) {
  _inherits(Link, _react$Component);

  var _super = _createSuper(Link);

  function Link(props) {
    var _this;

    _classCallCheck(this, Link);

    _this = _super.call(this, props);
    _this.p = void 0;

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    _this.p = props.prefetch !== false;
    return _this;
  }

  _createClass(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "getPaths",
    value: function getPaths() {
      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href,
          parsedAs = _this$formatUrls2.as;

      var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
      return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.p && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
        '%')];

        if (!isPrefetched) {
          this.cleanUpListeners = listenToIntersections(ref, function () {
            _this2.prefetch();
          });
        }
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch(options) {
      if (!this.p || false) return; // Prefetch the JSON page if asked (only in the client)

      var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
      // loading with priority which can reject but we don't
      // want to force navigation since this is only a prefetch

      _router["default"].prefetch(paths[
      /* href */
      0], paths[
      /* asPath */
      1], options)["catch"](function (err) {
        if (true) {
          // rethrow to show invalid URL errors
          throw err;
        }
      });

      prefetched[paths.join( // Join on an invalid URI character
      '%')] = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          _this3.handleRef(el);

          if (child && typeof child === 'object' && child.ref) {
            if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
              child.ref.current = el;
            }
          }
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch({
            priority: true
          });
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) { var rewriteUrlForNextExport; }

      return _react["default"].cloneElement(child, props);
    }
  }]);

  return Link;
}(_react.Component);

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

exports["default"] = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  var p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: "/_next/data/".concat(__NEXT_DATA__.buildId).concat(pathname, ".json"),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  function Router(pathname, query, as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    // Static Data Cache
    this.sdc = {};

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname = _this.pathname,
            _query = _this.query;

        _this.changeState('replaceState', utils_1.formatWithValidation({
          pathname: _pathname,
          query: _query
        }), utils_1.getURL());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && url_1.parse(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _url_1$parse = url_1.parse(asPath, true),
          pathname = _url_1$parse.pathname,
          query = _url_1$parse.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // in order for `e.state` to work on the `onpopstate` event
      // we have to register the initial route upon initialization
      this.changeState('replaceState', utils_1.formatWithValidation({
        pathname: pathname,
        query: query
      }), as);
      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign(Object.assign({}, data), {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
     * Go back in history
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
     * Performs a `pushState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
     * Performs a `replaceState` with arguments
     * @param url of the route
     * @param as masks `url` for the browser
     * @param options object you can define `shallow` and other options
     */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (utils_1.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
        var as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, addBasePath(as), options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _url_1$parse2 = url_1.parse(url, true),
            pathname = _url_1$parse2.pathname,
            query = _url_1$parse2.query,
            protocol = _url_1$parse2.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if (is_dynamic_1.isDynamicRoute(route)) {
          var _url_1$parse3 = url_1.parse(as),
              asPathname = _url_1$parse3.pathname;

          var routeRegex = route_regex_1.getRouteRegex(route);
          var routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/zeit/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, addBasePath(as), options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo);

          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || utils_1.getURL() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      this.notify(data);
    }
    /**
     * Callback to execute before replacing router state
     * @param cb callback to be executed
     */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
     * Prefetch page code, you may wait for the data during page rendering.
     * This feature only works in production!
     * @param url the href of prefetched page
     * @param asPath the as path of the prefetched page
     */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _url_1$parse4 = url_1.parse(url),
            pathname = _url_1$parse4.pathname,
            protocol = _url_1$parse4.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/zeit/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        Promise.all([_this4.pageLoader.prefetchData(url, asPath), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function fetchComponent(route) {
      var cancelled, cancel, componentResult, error;
      return _regeneratorRuntime.async(function fetchComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              cancelled = false;

              cancel = this.clc = function () {
                cancelled = true;
              };

              _context.next = 4;
              return _regeneratorRuntime.awrap(this.pageLoader.loadPage(route));

            case 4:
              componentResult = _context.sent;

              if (!cancelled) {
                _context.next = 9;
                break;
              }

              error = new Error("Abort fetching component for route: \"".concat(route, "\""));
              error.cancelled = true;
              throw error;

            case 9:
              if (cancel === this.clc) {
                this.clc = null;
              }

              return _context.abrupt("return", componentResult);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return utils_1.loadGetInitialProps(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = mitt_1["default"]();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = decodeURIComponent;
    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
 * Utils
 */


function execOnce(fn) {
  var _this = this;

  var used = false;
  var result = null;
  return function () {
    if (!used) {
      used = true;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      result = fn.apply(_this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

function loadGetInitialProps(App, ctx) {
  var _a, message, res, props, _message;

  return _regeneratorRuntime.async(function loadGetInitialProps$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          if (!((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps)) {
            _context.next = 4;
            break;
          }

          message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.");
          throw new Error(message);

        case 4:
          // when called from _app `ctx` is nested in `ctx`
          res = ctx.res || ctx.ctx && ctx.ctx.res;

          if (App.getInitialProps) {
            _context.next = 12;
            break;
          }

          if (!(ctx.ctx && ctx.Component)) {
            _context.next = 11;
            break;
          }

          _context.next = 9;
          return _regeneratorRuntime.awrap(loadGetInitialProps(ctx.Component, ctx.ctx));

        case 9:
          _context.t0 = _context.sent;
          return _context.abrupt("return", {
            pageProps: _context.t0
          });

        case 11:
          return _context.abrupt("return", {});

        case 12:
          _context.next = 14;
          return _regeneratorRuntime.awrap(App.getInitialProps(ctx));

        case 14:
          props = _context.sent;

          if (!(res && isResSent(res))) {
            _context.next = 17;
            break;
          }

          return _context.abrupt("return", props);

        case 17:
          if (props) {
            _context.next = 20;
            break;
          }

          _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
          throw new Error(_message);

        case 20:
          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps"));
            }
          }

          return _context.abrupt("return", props);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/primereact/calendar.js":
/*!*********************************************!*\
  !*** ./node_modules/primereact/calendar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(/*! ./components/calendar/Calendar.js */ "./node_modules/primereact/components/calendar/Calendar.js");

/***/ }),

/***/ "./node_modules/primereact/components/button/Button.js":
/*!*************************************************************!*\
  !*** ./node_modules/primereact/components/button/Button.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip/Tooltip */ "./node_modules/primereact/components/tooltip/Tooltip.js"));

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      if (this.props.icon) {
        var className = (0, _classnames.default)(this.props.icon, 'p-c', {
          'p-button-icon-left': this.props.iconPos !== 'right',
          'p-button-icon-right': this.props.iconPos === 'right'
        });
        return _react.default.createElement("span", {
          className: className
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var buttonLabel = this.props.label || 'p-btn';
      return _react.default.createElement("span", {
        className: "p-button-text p-c"
      }, buttonLabel);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var className = (0, _classnames.default)('p-button p-component', this.props.className, {
        'p-button-icon-only': this.props.icon && !this.props.label,
        'p-button-text-icon-left': this.props.icon && this.props.label && this.props.iconPos === 'left',
        'p-button-text-icon-right': this.props.icon && this.props.label && this.props.iconPos === 'right',
        'p-button-text-only': !this.props.icon && this.props.label,
        'p-disabled': this.props.disabled
      });
      var icon = this.renderIcon();
      var label = this.renderLabel();

      var buttonProps = _ObjectUtils.default.findDiffKeys(this.props, Button.defaultProps);

      return _react.default.createElement("button", _extends({
        ref: function ref(el) {
          return _this.element = el;
        }
      }, buttonProps, {
        className: className
      }), this.props.iconPos === 'left' && icon, label, this.props.iconPos === 'right' && icon, this.props.children);
    }
  }]);

  return Button;
}(_react.Component);

exports.Button = Button;

_defineProperty(Button, "defaultProps", {
  label: null,
  icon: null,
  iconPos: 'left',
  tooltip: null,
  tooltipOptions: null
});

_defineProperty(Button, "propTypes", {
  label: _propTypes.default.string,
  icon: _propTypes.default.string,
  iconPos: _propTypes.default.string,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object
});

/***/ }),

/***/ "./node_modules/primereact/components/calendar/Calendar.js":
/*!*****************************************************************!*\
  !*** ./node_modules/primereact/components/calendar/Calendar.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _InputText = __webpack_require__(/*! ../inputtext/InputText */ "./node_modules/primereact/components/inputtext/InputText.js");

var _Button = __webpack_require__(/*! ../button/Button */ "./node_modules/primereact/components/button/Button.js");

var _CalendarPanel = __webpack_require__(/*! ./CalendarPanel */ "./node_modules/primereact/components/calendar/CalendarPanel.js");

var _DomHandler = _interopRequireDefault(__webpack_require__(/*! ../utils/DomHandler */ "./node_modules/primereact/components/utils/DomHandler.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _Tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip/Tooltip */ "./node_modules/primereact/components/tooltip/Tooltip.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Calendar =
/*#__PURE__*/
function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    var _this;

    _classCallCheck(this, Calendar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Calendar).call(this, props));

    if (!_this.props.onViewDateChange) {
      var propValue = _this.props.value;

      if (Array.isArray(propValue)) {
        propValue = propValue[0];
      }

      var viewDate = _this.props.viewDate && _this.isValidDate(_this.props.viewDate) ? _this.props.viewDate : propValue && _this.isValidDate(propValue) ? propValue : new Date();
      _this.state = {
        viewDate: viewDate
      };
    }

    _this.navigation = null;
    _this.onUserInput = _this.onUserInput.bind(_assertThisInitialized(_this));
    _this.onInputFocus = _this.onInputFocus.bind(_assertThisInitialized(_this));
    _this.onInputBlur = _this.onInputBlur.bind(_assertThisInitialized(_this));
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_assertThisInitialized(_this));
    _this.onButtonClick = _this.onButtonClick.bind(_assertThisInitialized(_this));
    _this.onPrevButtonClick = _this.onPrevButtonClick.bind(_assertThisInitialized(_this));
    _this.onNextButtonClick = _this.onNextButtonClick.bind(_assertThisInitialized(_this));
    _this.onMonthDropdownChange = _this.onMonthDropdownChange.bind(_assertThisInitialized(_this));
    _this.onYearDropdownChange = _this.onYearDropdownChange.bind(_assertThisInitialized(_this));
    _this.onTodayButtonClick = _this.onTodayButtonClick.bind(_assertThisInitialized(_this));
    _this.onClearButtonClick = _this.onClearButtonClick.bind(_assertThisInitialized(_this));
    _this.incrementHour = _this.incrementHour.bind(_assertThisInitialized(_this));
    _this.decrementHour = _this.decrementHour.bind(_assertThisInitialized(_this));
    _this.incrementMinute = _this.incrementMinute.bind(_assertThisInitialized(_this));
    _this.decrementMinute = _this.decrementMinute.bind(_assertThisInitialized(_this));
    _this.incrementSecond = _this.incrementSecond.bind(_assertThisInitialized(_this));
    _this.decrementSecond = _this.decrementSecond.bind(_assertThisInitialized(_this));
    _this.toggleAmPm = _this.toggleAmPm.bind(_assertThisInitialized(_this));
    _this.onTimePickerElementMouseDown = _this.onTimePickerElementMouseDown.bind(_assertThisInitialized(_this));
    _this.onTimePickerElementMouseUp = _this.onTimePickerElementMouseUp.bind(_assertThisInitialized(_this));
    _this.onTimePickerElementMouseLeave = _this.onTimePickerElementMouseLeave.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Calendar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }

      if (this.props.inline) {
        this.initFocusableCell();
      }

      if (this.props.value) {
        this.updateInputfield(this.props.value);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }

      if (!this.props.onViewDateChange && !this.viewStateChanged) {
        var propValue = this.props.value;

        if (Array.isArray(propValue)) {
          propValue = propValue[0];
        }

        var prevPropValue = prevProps.value;

        if (Array.isArray(prevPropValue)) {
          prevPropValue = prevPropValue[0];
        }

        if (!prevPropValue && propValue || propValue && propValue instanceof Date && propValue.getTime() !== prevPropValue.getTime()) {
          var viewDate = this.props.viewDate && this.isValidDate(this.props.viewDate) ? this.props.viewDate : propValue && this.isValidDate(propValue) ? propValue : new Date();
          this.setState({
            viewDate: viewDate
          }, function () {
            _this2.viewStateChanged = true;
          });
        }
      }

      if (this.panel) {
        this.updateFocus();
      }

      if (prevProps.value !== this.props.value && (!this.viewStateChanged || !this.panel.offsetParent)) {
        this.updateInputfield(this.props.value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
      }

      if (this.mask) {
        this.disableModality();
        this.mask = null;
      }

      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }

      this.unbindDocumentClickListener();
      this.unbindDocumentResizeListener();
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.inputElement,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "onInputFocus",
    value: function onInputFocus(event) {
      if (this.props.showOnFocus && !this.panel.offsetParent) {
        this.showOverlay();
      }

      if (this.props.onFocus) {
        this.props.onFocus(event);
      }

      _DomHandler.default.addClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputBlur",
    value: function onInputBlur(event) {
      if (this.props.onBlur) {
        this.props.onBlur(event);
      }

      if (!this.props.keepInvalid) {
        this.updateInputfield(this.props.value);
      }

      _DomHandler.default.removeClass(this.container, 'p-inputwrapper-focus');
    }
  }, {
    key: "onInputKeyDown",
    value: function onInputKeyDown(event) {
      this.isKeydown = true;

      switch (event.which) {
        //escape
        case 27:
          {
            this.hideOverlay();
            break;
          }
        //tab

        case 9:
          {
            if (this.props.touchUI) {
              this.disableModality();
            }

            if (event.shiftKey) {
              this.hideOverlay();
            }

            break;
          }

        default:
          //no op
          break;
      }
    }
  }, {
    key: "onUserInput",
    value: function onUserInput(event) {
      // IE 11 Workaround for input placeholder
      if (!this.isKeydown) {
        return;
      }

      this.isKeydown = false;
      var rawValue = event.target.value;

      try {
        var value = this.parseValueFromString(rawValue);

        if (this.isValidSelection(value)) {
          this.updateModel(event, value);
          this.updateViewDate(event, value.length ? value[0] : value);
        }
      } catch (err) {
        //this.updateModel(event, rawValue);
        //invalid date
        this.updateModel(event, null);
      }

      if (this.props.onInput) {
        this.props.onInput(event);
      }
    }
  }, {
    key: "isValidSelection",
    value: function isValidSelection(value) {
      var _this3 = this;

      var isValid = true;

      if (this.isSingleSelection()) {
        if (!(this.isSelectable(value.getDate(), value.getMonth(), value.getFullYear(), false) && this.isSelectableTime(value))) {
          isValid = false;
        }
      } else if (value.every(function (v) {
        return _this3.isSelectable(v.getDate(), v.getMonth(), v.getFullYear(), false) && _this3.isSelectableTime(value);
      })) {
        if (this.isRangeSelection()) {
          isValid = value.length > 1 && value[1] > value[0] ? true : false;
        }
      }

      return isValid;
    }
  }, {
    key: "onButtonClick",
    value: function onButtonClick(event) {
      if (!this.panel.offsetParent) {
        this.showOverlay();
      } else {
        this.hideOverlay();
      }
    }
  }, {
    key: "onPrevButtonClick",
    value: function onPrevButtonClick(event) {
      this.navigation = {
        backward: true,
        button: true
      };
      this.navBackward(event);
    }
  }, {
    key: "onNextButtonClick",
    value: function onNextButtonClick(event) {
      this.navigation = {
        backward: false,
        button: true
      };
      this.navForward(event);
    }
  }, {
    key: "onContainerButtonKeydown",
    value: function onContainerButtonKeydown(event) {
      switch (event.which) {
        //tab
        case 9:
          this.trapFocus(event);
          break;
        //escape

        case 27:
          this.hideOverlay();
          event.preventDefault();
          break;

        default:
          //Noop
          break;
      }
    }
  }, {
    key: "trapFocus",
    value: function trapFocus(event) {
      event.preventDefault();

      var focusableElements = _DomHandler.default.getFocusableElements(this.panel);

      if (focusableElements && focusableElements.length > 0) {
        if (!document.activeElement) {
          focusableElements[0].focus();
        } else {
          var focusedIndex = focusableElements.indexOf(document.activeElement);

          if (event.shiftKey) {
            if (focusedIndex === -1 || focusedIndex === 0) focusableElements[focusableElements.length - 1].focus();else focusableElements[focusedIndex - 1].focus();
          } else {
            if (focusedIndex === -1 || focusedIndex === focusableElements.length - 1) focusableElements[0].focus();else focusableElements[focusedIndex + 1].focus();
          }
        }
      }
    }
  }, {
    key: "updateFocus",
    value: function updateFocus() {
      var cell;

      if (this.navigation) {
        if (this.navigation.button) {
          this.initFocusableCell();
          if (this.navigation.backward) _DomHandler.default.findSingle(this.panel, '.p-datepicker-prev').focus();else _DomHandler.default.findSingle(this.panel, '.p-datepicker-next').focus();
        } else {
          if (this.navigation.backward) {
            var cells = _DomHandler.default.find(this.panel, '.p-datepicker-calendar td span:not(.p-disabled)');

            cell = cells[cells.length - 1];
          } else {
            cell = _DomHandler.default.findSingle(this.panel, '.p-datepicker-calendar td span:not(.p-disabled)');
          }

          if (cell) {
            cell.tabIndex = '0';
            cell.focus();
          }
        }

        this.navigation = null;
      } else {
        this.initFocusableCell();
      }
    }
  }, {
    key: "initFocusableCell",
    value: function initFocusableCell() {
      var cell;

      if (this.view === 'month') {
        var cells = _DomHandler.default.find(this.panel, '.p-monthpicker .p-monthpicker-month');

        var selectedCell = _DomHandler.default.findSingle(this.panel, '.p-monthpicker .p-monthpicker-month.p-highlight');

        cells.forEach(function (cell) {
          return cell.tabIndex = -1;
        });
        cell = selectedCell || cells[0];
      } else {
        cell = _DomHandler.default.findSingle(this.panel, 'span.p-highlight');

        if (!cell) {
          var todayCell = _DomHandler.default.findSingle(this.panel, 'td.p-datepicker-today span:not(.p-disabled)');

          if (todayCell) cell = todayCell;else cell = _DomHandler.default.findSingle(this.panel, '.p-datepicker-calendar td span:not(.p-disabled)');
        }
      }

      if (cell) {
        cell.tabIndex = '0';
      }
    }
  }, {
    key: "navBackward",
    value: function navBackward(event) {
      if (this.props.disabled) {
        event.preventDefault();
        return;
      }

      var newViewDate = new Date(this.getViewDate().getTime());

      if (this.props.view === 'date') {
        if (newViewDate.getMonth() === 0) {
          newViewDate.setMonth(11);
          newViewDate.setFullYear(newViewDate.getFullYear() - 1);
        } else {
          newViewDate.setMonth(newViewDate.getMonth() - 1);
        }
      } else if (this.props.view === 'month') {
        var currentYear = newViewDate.getFullYear();
        var newYear = currentYear - 1;

        if (this.props.yearNavigator) {
          var minYear = parseInt(this.props.yearRange.split(':')[0], 10);

          if (newYear < minYear) {
            newYear = minYear;
          }
        }

        newViewDate.setFullYear(newYear);
      }

      this.updateViewDate(event, newViewDate);
      event.preventDefault();
    }
  }, {
    key: "navForward",
    value: function navForward(event) {
      if (this.props.disabled) {
        event.preventDefault();
        return;
      }

      var newViewDate = new Date(this.getViewDate().getTime());

      if (this.props.view === 'date') {
        if (newViewDate.getMonth() === 11) {
          newViewDate.setMonth(0);
          newViewDate.setFullYear(newViewDate.getFullYear() + 1);
        } else {
          newViewDate.setMonth(newViewDate.getMonth() + 1);
        }
      } else if (this.props.view === 'month') {
        var currentYear = newViewDate.getFullYear();
        var newYear = currentYear + 1;

        if (this.props.yearNavigator) {
          var maxYear = parseInt(this.props.yearRange.split(':')[1], 10);

          if (newYear > maxYear) {
            newYear = maxYear;
          }
        }

        newViewDate.setFullYear(newYear);
      }

      this.updateViewDate(event, newViewDate);
      event.preventDefault();
    }
  }, {
    key: "onMonthDropdownChange",
    value: function onMonthDropdownChange(event) {
      var currentViewDate = this.getViewDate();
      var newViewDate = new Date(currentViewDate.getTime());
      newViewDate.setMonth(parseInt(event.target.value, 10));
      this.updateViewDate(event, newViewDate);
    }
  }, {
    key: "onYearDropdownChange",
    value: function onYearDropdownChange(event) {
      var currentViewDate = this.getViewDate();
      var newViewDate = new Date(currentViewDate.getTime());
      newViewDate.setFullYear(parseInt(event.target.value, 10));
      this.updateViewDate(event, newViewDate);
    }
  }, {
    key: "onTodayButtonClick",
    value: function onTodayButtonClick(event) {
      var today = new Date();
      var dateMeta = {
        day: today.getDate(),
        month: today.getMonth(),
        year: today.getFullYear(),
        today: true,
        selectable: true
      };
      this.updateViewDate(event, today);
      this.onDateSelect(event, dateMeta);

      if (this.props.onTodayButtonClick) {
        this.props.onTodayButtonClick(event);
      }
    }
  }, {
    key: "onClearButtonClick",
    value: function onClearButtonClick(event) {
      this.updateModel(event, null);
      this.updateInputfield(null);

      if (this.props.onClearButtonClick) {
        this.props.onClearButtonClick(event);
      }
    }
  }, {
    key: "onTimePickerElementMouseDown",
    value: function onTimePickerElementMouseDown(event, type, direction) {
      if (!this.props.disabled) {
        this.repeat(event, null, type, direction);
        event.preventDefault();
      }
    }
  }, {
    key: "onTimePickerElementMouseUp",
    value: function onTimePickerElementMouseUp() {
      if (!this.props.disabled) {
        this.clearTimePickerTimer();
      }
    }
  }, {
    key: "onTimePickerElementMouseLeave",
    value: function onTimePickerElementMouseLeave() {
      if (!this.props.disabled) {
        this.clearTimePickerTimer();
      }
    }
  }, {
    key: "repeat",
    value: function repeat(event, interval, type, direction) {
      var _this4 = this;

      event.persist();
      var i = interval || 500;
      this.clearTimePickerTimer();
      this.timePickerTimer = setTimeout(function () {
        _this4.repeat(event, 100, type, direction);
      }, i);

      switch (type) {
        case 0:
          if (direction === 1) this.incrementHour(event);else this.decrementHour(event);
          break;

        case 1:
          if (direction === 1) this.incrementMinute(event);else this.decrementMinute(event);
          break;

        case 2:
          if (direction === 1) this.incrementSecond(event);else this.decrementSecond(event);
          break;

        default:
          break;
      }
    }
  }, {
    key: "clearTimePickerTimer",
    value: function clearTimePickerTimer() {
      if (this.timePickerTimer) {
        clearTimeout(this.timePickerTimer);
      }
    }
  }, {
    key: "incrementHour",
    value: function incrementHour(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentHour = currentTime.getHours();
      var newHour = currentHour + this.props.stepHour;
      newHour = newHour >= 24 ? newHour - 24 : newHour;

      if (this.validateHour(newHour, currentTime)) {
        if (this.props.maxDate && this.props.maxDate.toDateString() === currentTime.toDateString() && this.props.maxDate.getHours() === newHour) {
          if (this.props.maxDate.getMinutes() < currentTime.getMinutes()) {
            if (this.props.maxDate.getSeconds() < currentTime.getSeconds()) {
              this.updateTime(event, newHour, this.props.maxDate.getMinutes(), this.props.maxDate.getSeconds());
            } else {
              this.updateTime(event, newHour, this.props.maxDate.getMinutes(), currentTime.getSeconds());
            }
          } else if (this.props.maxDate.getMinutes() === currentTime.getMinutes()) {
            if (this.props.maxDate.getSeconds() < currentTime.getSeconds()) {
              this.updateTime(event, newHour, this.props.maxDate.getMinutes(), this.props.maxDate.getSeconds());
            } else {
              this.updateTime(event, newHour, this.props.maxDate.getMinutes(), currentTime.getSeconds());
            }
          } else {
            this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
          }
        } else {
          this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
        }
      }

      event.preventDefault();
    }
  }, {
    key: "decrementHour",
    value: function decrementHour(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentHour = currentTime.getHours();
      var newHour = currentHour - this.props.stepHour;
      newHour = newHour < 0 ? newHour + 24 : newHour;

      if (this.validateHour(newHour, currentTime)) {
        if (this.props.minDate && this.props.minDate.toDateString() === currentTime.toDateString() && this.props.minDate.getHours() === newHour) {
          if (this.props.minDate.getMinutes() > currentTime.getMinutes()) {
            if (this.props.minDate.getSeconds() > currentTime.getSeconds()) {
              this.updateTime(event, newHour, this.props.minDate.getMinutes(), this.props.minDate.getSeconds());
            } else {
              this.updateTime(event, newHour, this.props.minDate.getMinutes(), currentTime.getSeconds());
            }
          } else if (this.props.minDate.getMinutes() === currentTime.getMinutes()) {
            if (this.props.minDate.getSeconds() > currentTime.getSeconds()) {
              this.updateTime(event, newHour, this.props.minDate.getMinutes(), this.props.minDate.getSeconds());
            } else {
              this.updateTime(event, newHour, this.props.minDate.getMinutes(), currentTime.getSeconds());
            }
          } else {
            this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
          }
        } else {
          this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
        }
      }

      event.preventDefault();
    }
  }, {
    key: "incrementMinute",
    value: function incrementMinute(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentMinute = currentTime.getMinutes();
      var newMinute = currentMinute + this.props.stepMinute;
      newMinute = newMinute > 59 ? newMinute - 60 : newMinute;

      if (this.validateMinute(newMinute, currentTime)) {
        if (this.props.maxDate && this.props.maxDate.toDateString() === currentTime.toDateString() && this.props.maxDate.getMinutes() === newMinute) {
          if (this.props.maxDate.getSeconds() < currentTime.getSeconds()) {
            this.updateTime(event, currentTime.getHours(), newMinute, this.props.maxDate.getSeconds());
          } else {
            this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds());
          }
        } else {
          this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds());
        }
      }

      event.preventDefault();
    }
  }, {
    key: "decrementMinute",
    value: function decrementMinute(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentMinute = currentTime.getMinutes();
      var newMinute = currentMinute - this.props.stepMinute;
      newMinute = newMinute < 0 ? newMinute + 60 : newMinute;

      if (this.validateMinute(newMinute, currentTime)) {
        if (this.props.minDate && this.props.minDate.toDateString() === currentTime.toDateString() && this.props.minDate.getMinutes() === newMinute) {
          if (this.props.minDate.getSeconds() > currentTime.getSeconds()) {
            this.updateTime(event, currentTime.getHours(), newMinute, this.props.minDate.getSeconds());
          } else {
            this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds());
          }
        } else {
          this.updateTime(event, currentTime.getHours(), newMinute, currentTime.getSeconds());
        }
      }

      event.preventDefault();
    }
  }, {
    key: "incrementSecond",
    value: function incrementSecond(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentSecond = currentTime.getSeconds();
      var newSecond = currentSecond + this.props.stepSecond;
      newSecond = newSecond > 59 ? newSecond - 60 : newSecond;

      if (this.validateSecond(newSecond, currentTime)) {
        this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond);
      }

      event.preventDefault();
    }
  }, {
    key: "decrementSecond",
    value: function decrementSecond(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentSecond = currentTime.getSeconds();
      var newSecond = currentSecond - this.props.stepSecond;
      newSecond = newSecond < 0 ? newSecond + 60 : newSecond;

      if (this.validateSecond(newSecond, currentTime)) {
        this.updateTime(event, currentTime.getHours(), currentTime.getMinutes(), newSecond);
      }

      event.preventDefault();
    }
  }, {
    key: "toggleAmPm",
    value: function toggleAmPm(event) {
      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var currentHour = currentTime.getHours();
      var newHour = currentHour >= 12 ? currentHour - 12 : currentHour + 12;
      this.updateTime(event, newHour, currentTime.getMinutes(), currentTime.getSeconds());
      event.preventDefault();
    }
  }, {
    key: "getViewDate",
    value: function getViewDate() {
      return this.props.onViewDateChange ? this.props.viewDate : this.state.viewDate;
    }
  }, {
    key: "isValidDate",
    value: function isValidDate(date) {
      return date instanceof Date && !isNaN(date);
    }
  }, {
    key: "validateHour",
    value: function validateHour(hour, value) {
      var valid = true;
      var valueDateString = value ? value.toDateString() : null;

      if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
        if (this.props.minDate.getHours() > hour) {
          valid = false;
        }
      }

      if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
        if (this.props.maxDate.getHours() < hour) {
          valid = false;
        }
      }

      return valid;
    }
  }, {
    key: "validateMinute",
    value: function validateMinute(minute, value) {
      var valid = true;
      var valueDateString = value ? value.toDateString() : null;

      if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
        if (value.getHours() === this.props.minDate.getHours()) {
          if (this.props.minDate.getMinutes() > minute) {
            valid = false;
          }
        }
      }

      if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
        if (value.getHours() === this.props.maxDate.getHours()) {
          if (this.props.maxDate.getMinutes() < minute) {
            valid = false;
          }
        }
      }

      return valid;
    }
  }, {
    key: "validateSecond",
    value: function validateSecond(second, value) {
      var valid = true;
      var valueDateString = value ? value.toDateString() : null;

      if (this.props.minDate && valueDateString && this.props.minDate.toDateString() === valueDateString) {
        if (value.getHours() === this.props.minDate.getHours() && value.getMinutes() === this.props.minDate.getMinutes()) {
          if (this.props.minDate.getSeconds() > second) {
            valid = false;
          }
        }
      }

      if (this.props.maxDate && valueDateString && this.props.maxDate.toDateString() === valueDateString) {
        if (value.getHours() === this.props.maxDate.getHours() && value.getMinutes() === this.props.maxDate.getMinutes()) {
          if (this.props.maxDate.getSeconds() < second) {
            valid = false;
          }
        }
      }

      return valid;
    }
  }, {
    key: "updateTime",
    value: function updateTime(event, hour, minute, second) {
      var newDateTime = this.props.value && this.props.value instanceof Date ? new Date(this.props.value) : new Date();
      newDateTime.setHours(hour);
      newDateTime.setMinutes(minute);
      newDateTime.setSeconds(second);
      this.updateModel(event, newDateTime);

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          value: newDateTime
        });
      }

      this.updateInputfield(newDateTime);
    }
  }, {
    key: "updateViewDate",
    value: function updateViewDate(event, value) {
      if (this.props.yearNavigator) {
        var viewYear = value.getFullYear();

        if (this.props.minDate && this.props.minDate.getFullYear() > viewYear) {
          viewYear = this.props.minDate.getFullYear();
        }

        if (this.props.maxDate && this.props.maxDate.getFullYear() < viewYear) {
          viewYear = this.props.maxDate.getFullYear();
        }

        value.setFullYear(viewYear);
      }

      if (this.props.monthNavigator && this.props.view !== 'month') {
        var viewMonth = value.getMonth();
        var viewMonthWithMinMax = parseInt(this.isInMinYear(value) && Math.max(this.props.minDate.getMonth(), viewMonth).toString() || this.isInMaxYear(value) && Math.min(this.props.maxDate.getMonth(), viewMonth).toString() || viewMonth);
        value.setMonth(viewMonthWithMinMax);
      }

      if (this.props.onViewDateChange) {
        this.props.onViewDateChange({
          originalEvent: event,
          value: value
        });
      } else {
        this.viewStateChanged = true;
        this.setState({
          viewDate: value
        });
      }
    }
  }, {
    key: "onDateCellKeydown",
    value: function onDateCellKeydown(event, date, groupIndex) {
      var cellContent = event.currentTarget;
      var cell = cellContent.parentElement;

      switch (event.which) {
        //down arrow
        case 40:
          {
            cellContent.tabIndex = '-1';

            var cellIndex = _DomHandler.default.index(cell);

            var nextRow = cell.parentElement.nextElementSibling;

            if (nextRow) {
              var focusCell = nextRow.children[cellIndex].children[0];

              if (_DomHandler.default.hasClass(focusCell, 'p-disabled')) {
                this.navigation = {
                  backward: false
                };
                this.navForward(event);
              } else {
                nextRow.children[cellIndex].children[0].tabIndex = '0';
                nextRow.children[cellIndex].children[0].focus();
              }
            } else {
              this.navigation = {
                backward: false
              };
              this.navForward(event);
            }

            event.preventDefault();
            break;
          }
        //up arrow

        case 38:
          {
            cellContent.tabIndex = '-1';

            var _cellIndex = _DomHandler.default.index(cell);

            var prevRow = cell.parentElement.previousElementSibling;

            if (prevRow) {
              var _focusCell = prevRow.children[_cellIndex].children[0];

              if (_DomHandler.default.hasClass(_focusCell, 'p-disabled')) {
                this.navigation = {
                  backward: true
                };
                this.navBackward(event);
              } else {
                _focusCell.tabIndex = '0';

                _focusCell.focus();
              }
            } else {
              this.navigation = {
                backward: true
              };
              this.navBackward(event);
            }

            event.preventDefault();
            break;
          }
        //left arrow

        case 37:
          {
            cellContent.tabIndex = '-1';
            var prevCell = cell.previousElementSibling;

            if (prevCell) {
              var _focusCell2 = prevCell.children[0];

              if (_DomHandler.default.hasClass(_focusCell2, 'p-disabled')) {
                this.navigateToMonth(true, groupIndex, event);
              } else {
                _focusCell2.tabIndex = '0';

                _focusCell2.focus();
              }
            } else {
              this.navigateToMonth(true, groupIndex, event);
            }

            event.preventDefault();
            break;
          }
        //right arrow

        case 39:
          {
            cellContent.tabIndex = '-1';
            var nextCell = cell.nextElementSibling;

            if (nextCell) {
              var _focusCell3 = nextCell.children[0];

              if (_DomHandler.default.hasClass(_focusCell3, 'p-disabled')) {
                this.navigateToMonth(false, groupIndex, event);
              } else {
                _focusCell3.tabIndex = '0';

                _focusCell3.focus();
              }
            } else {
              this.navigateToMonth(false, groupIndex, event);
            }

            event.preventDefault();
            break;
          }
        //enter

        case 13:
          {
            this.onDateSelect(event, date);
            event.preventDefault();
            break;
          }
        //escape

        case 27:
          {
            this.hideOverlay();
            event.preventDefault();
            break;
          }
        //tab

        case 9:
          {
            this.trapFocus(event);
            break;
          }

        default:
          //no op
          break;
      }
    }
  }, {
    key: "navigateToMonth",
    value: function navigateToMonth(prev, groupIndex, event) {
      if (prev) {
        if (this.props.numberOfMonths === 1 || groupIndex === 0) {
          this.navigation = {
            backward: true
          };
          this.navBackward(event);
        } else {
          var prevMonthContainer = this.panel.children[groupIndex - 1];

          var cells = _DomHandler.default.find(prevMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');

          var focusCell = cells[cells.length - 1];
          focusCell.tabIndex = '0';
          focusCell.focus();
        }
      } else {
        if (this.props.numberOfMonths === 1 || groupIndex === this.props.numberOfMonths - 1) {
          this.navigation = {
            backward: false
          };
          this.navForward(event);
        } else {
          var nextMonthContainer = this.panel.children[groupIndex + 1];

          var _focusCell4 = _DomHandler.default.findSingle(nextMonthContainer, '.p-datepicker-calendar td span:not(.p-disabled)');

          _focusCell4.tabIndex = '0';

          _focusCell4.focus();
        }
      }
    }
  }, {
    key: "onMonthCellKeydown",
    value: function onMonthCellKeydown(event, index) {
      var cell = event.currentTarget;

      switch (event.which) {
        //arrows
        case 38:
        case 40:
          {
            cell.tabIndex = '-1';
            var cells = cell.parentElement.children;

            var cellIndex = _DomHandler.default.index(cell);

            var nextCell = cells[event.which === 40 ? cellIndex + 3 : cellIndex - 3];

            if (nextCell) {
              nextCell.tabIndex = '0';
              nextCell.focus();
            }

            event.preventDefault();
            break;
          }
        //left arrow

        case 37:
          {
            cell.tabIndex = '-1';
            var prevCell = cell.previousElementSibling;

            if (prevCell) {
              prevCell.tabIndex = '0';
              prevCell.focus();
            }

            event.preventDefault();
            break;
          }
        //right arrow

        case 39:
          {
            cell.tabIndex = '-1';
            var _nextCell = cell.nextElementSibling;

            if (_nextCell) {
              _nextCell.tabIndex = '0';

              _nextCell.focus();
            }

            event.preventDefault();
            break;
          }
        //enter

        case 13:
          {
            this.onMonthSelect(event, index);
            event.preventDefault();
            break;
          }
        //escape

        case 27:
          {
            this.hideOverlay();
            event.preventDefault();
            break;
          }
        //tab

        case 9:
          {
            this.trapFocus(event);
            break;
          }

        default:
          //no op
          break;
      }
    }
  }, {
    key: "onDateSelect",
    value: function onDateSelect(event, dateMeta) {
      var _this5 = this;

      if (this.props.disabled || !dateMeta.selectable) {
        event.preventDefault();
        return;
      }

      _DomHandler.default.find(this.panel, '.p-datepicker-calendar td span:not(.p-disabled)').forEach(function (cell) {
        return cell.tabIndex = -1;
      });

      event.currentTarget.focus();

      if (this.isMultipleSelection()) {
        if (this.isSelected(dateMeta)) {
          var value = this.props.value.filter(function (date, i) {
            return !_this5.isDateEquals(date, dateMeta);
          });
          this.updateModel(event, value);
        } else if (!this.props.maxDateCount || !this.props.value || this.props.maxDateCount > this.props.value.length) {
          this.selectDate(event, dateMeta);
        }
      } else {
        this.selectDate(event, dateMeta);
      }

      if (!this.props.inline && this.isSingleSelection() && (!this.props.showTime || this.props.hideOnDateTimeSelect)) {
        setTimeout(function () {
          _this5.hideOverlay();
        }, 100);

        if (this.mask) {
          this.disableModality();
        }
      }

      event.preventDefault();
    }
  }, {
    key: "selectDate",
    value: function selectDate(event, dateMeta) {
      var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);

      if (this.props.showTime) {
        var time = this.props.value && this.props.value instanceof Date ? this.props.value : new Date();
        date.setHours(time.getHours());
        date.setMinutes(time.getMinutes());
        date.setSeconds(time.getSeconds());
      }

      if (this.props.minDate && this.props.minDate > date) {
        date = this.props.minDate;
      }

      if (this.props.maxDate && this.props.maxDate < date) {
        date = this.props.maxDate;
      }

      var selectedValues = date;

      if (this.isSingleSelection()) {
        this.updateModel(event, date);
      } else if (this.isMultipleSelection()) {
        selectedValues = this.props.value ? [].concat(_toConsumableArray(this.props.value), [date]) : [date];
        this.updateModel(event, selectedValues);
      } else if (this.isRangeSelection()) {
        if (this.props.value && this.props.value.length) {
          var startDate = this.props.value[0];
          var endDate = this.props.value[1];

          if (!endDate && date.getTime() >= startDate.getTime()) {
            endDate = date;
          } else {
            startDate = date;
            endDate = null;
          }

          selectedValues = [startDate, endDate];
          this.updateModel(event, selectedValues);
        } else {
          selectedValues = [date, null];
          this.updateModel(event, selectedValues);
        }
      }

      if (this.props.onSelect) {
        this.props.onSelect({
          originalEvent: event,
          value: date
        });
      }

      this.updateInputfield(selectedValues);
    }
  }, {
    key: "onMonthSelect",
    value: function onMonthSelect(event, month) {
      this.onDateSelect(event, {
        year: this.getViewDate().getFullYear(),
        month: month,
        day: 1,
        selectable: true
      });
      event.preventDefault();
    }
  }, {
    key: "updateModel",
    value: function updateModel(event, value) {
      if (this.props.onChange) {
        this.props.onChange({
          originalEvent: event,
          value: value,
          stopPropagation: function stopPropagation() {},
          preventDefault: function preventDefault() {},
          target: {
            name: this.props.name,
            id: this.props.id,
            value: value
          }
        });
        this.viewStateChanged = true;
      }
    }
  }, {
    key: "showOverlay",
    value: function showOverlay() {
      var _this6 = this;

      if (this.props.autoZIndex) {
        this.panel.style.zIndex = String(this.props.baseZIndex + _DomHandler.default.generateZIndex());
      }

      this.panel.style.display = 'block';
      setTimeout(function () {
        _DomHandler.default.addClass(_this6.panel, 'p-input-overlay-visible');

        _DomHandler.default.removeClass(_this6.panel, 'p-input-overlay-hidden');
      }, 1);
      this.alignPanel();
      this.bindDocumentClickListener();
      this.bindDocumentResizeListener();
    }
  }, {
    key: "hideOverlay",
    value: function hideOverlay() {
      var _this7 = this;

      if (this.panel) {
        _DomHandler.default.addClass(this.panel, 'p-input-overlay-hidden');

        _DomHandler.default.removeClass(this.panel, 'p-input-overlay-visible');

        this.unbindDocumentClickListener();
        this.unbindDocumentResizeListener();
        this.hideTimeout = setTimeout(function () {
          _this7.panel.style.display = 'none';

          _DomHandler.default.removeClass(_this7.panel, 'p-input-overlay-hidden');
        }, 150);
      }
    }
  }, {
    key: "bindDocumentClickListener",
    value: function bindDocumentClickListener() {
      var _this8 = this;

      if (!this.documentClickListener) {
        this.documentClickListener = function (event) {
          if (_this8.isOutsideClicked(event)) {
            _this8.hideOverlay();
          }
        };

        document.addEventListener('mousedown', this.documentClickListener);
      }
    }
  }, {
    key: "unbindDocumentClickListener",
    value: function unbindDocumentClickListener() {
      if (this.documentClickListener) {
        document.removeEventListener('mousedown', this.documentClickListener);
        this.documentClickListener = null;
      }
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      if (!this.documentResizeListener && !this.props.touchUI) {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
      }
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.documentResizeListener) {
        window.removeEventListener('resize', this.documentResizeListener);
        this.documentResizeListener = null;
      }
    }
  }, {
    key: "isOutsideClicked",
    value: function isOutsideClicked(event) {
      return this.container && !(this.container.isSameNode(event.target) || this.isNavIconClicked(event) || this.container.contains(event.target) || this.panel && this.panel.contains(event.target));
    }
  }, {
    key: "isNavIconClicked",
    value: function isNavIconClicked(event) {
      return _DomHandler.default.hasClass(event.target, 'p-datepicker-prev') || _DomHandler.default.hasClass(event.target, 'p-datepicker-prev-icon') || _DomHandler.default.hasClass(event.target, 'p-datepicker-next') || _DomHandler.default.hasClass(event.target, 'p-datepicker-next-icon');
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      if (this.panel.offsetParent && !_DomHandler.default.isAndroid()) {
        this.hideOverlay();
      }
    }
  }, {
    key: "alignPanel",
    value: function alignPanel() {
      if (this.props.touchUI) {
        this.enableModality();
      } else {
        if (this.props.appendTo) {
          _DomHandler.default.absolutePosition(this.panel, this.inputElement);

          this.panel.style.minWidth = _DomHandler.default.getWidth(this.container) + 'px';
        } else {
          _DomHandler.default.relativePosition(this.panel, this.inputElement);
        }
      }
    }
  }, {
    key: "enableModality",
    value: function enableModality() {
      var _this9 = this;

      if (!this.mask) {
        this.mask = document.createElement('div');
        this.mask.style.zIndex = String(parseInt(this.panel.style.zIndex, 10) - 1);

        _DomHandler.default.addMultipleClasses(this.mask, 'p-component-overlay p-datepicker-mask p-datepicker-mask-scrollblocker');

        this.maskClickListener = function () {
          _this9.disableModality();
        };

        this.mask.addEventListener('click', this.maskClickListener);
        document.body.appendChild(this.mask);

        _DomHandler.default.addClass(document.body, 'p-overflow-hidden');
      }
    }
  }, {
    key: "disableModality",
    value: function disableModality() {
      if (this.mask) {
        this.mask.removeEventListener('click', this.maskClickListener);
        this.maskClickListener = null;
        document.body.removeChild(this.mask);
        this.mask = null;
        var bodyChildren = document.body.children;
        var hasBlockerMasks;

        for (var i = 0; i < bodyChildren.length; i++) {
          var bodyChild = bodyChildren[i];

          if (_DomHandler.default.hasClass(bodyChild, 'p-datepicker-mask-scrollblocker')) {
            hasBlockerMasks = true;
            break;
          }
        }

        if (!hasBlockerMasks) {
          _DomHandler.default.removeClass(document.body, 'p-overflow-hidden');
        }

        this.hideOverlay();
      }
    }
  }, {
    key: "getFirstDayOfMonthIndex",
    value: function getFirstDayOfMonthIndex(month, year) {
      var day = new Date();
      day.setDate(1);
      day.setMonth(month);
      day.setFullYear(year);
      var dayIndex = day.getDay() + this.getSundayIndex();
      return dayIndex >= 7 ? dayIndex - 7 : dayIndex;
    }
  }, {
    key: "getDaysCountInMonth",
    value: function getDaysCountInMonth(month, year) {
      return 32 - this.daylightSavingAdjust(new Date(year, month, 32)).getDate();
    }
  }, {
    key: "getDaysCountInPrevMonth",
    value: function getDaysCountInPrevMonth(month, year) {
      var prev = this.getPreviousMonthAndYear(month, year);
      return this.getDaysCountInMonth(prev.month, prev.year);
    }
  }, {
    key: "daylightSavingAdjust",
    value: function daylightSavingAdjust(date) {
      if (!date) {
        return null;
      }

      date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
      return date;
    }
  }, {
    key: "getPreviousMonthAndYear",
    value: function getPreviousMonthAndYear(month, year) {
      var m, y;

      if (month === 0) {
        m = 11;
        y = year - 1;
      } else {
        m = month - 1;
        y = year;
      }

      return {
        'month': m,
        'year': y
      };
    }
  }, {
    key: "getNextMonthAndYear",
    value: function getNextMonthAndYear(month, year) {
      var m, y;

      if (month === 11) {
        m = 0;
        y = year + 1;
      } else {
        m = month + 1;
        y = year;
      }

      return {
        'month': m,
        'year': y
      };
    }
  }, {
    key: "getSundayIndex",
    value: function getSundayIndex() {
      return this.props.locale.firstDayOfWeek > 0 ? 7 - this.props.locale.firstDayOfWeek : 0;
    }
  }, {
    key: "createWeekDays",
    value: function createWeekDays() {
      var weekDays = [];
      var dayIndex = this.props.locale.firstDayOfWeek;

      for (var i = 0; i < 7; i++) {
        weekDays.push(this.props.locale.dayNamesMin[dayIndex]);
        dayIndex = dayIndex === 6 ? 0 : ++dayIndex;
      }

      return weekDays;
    }
  }, {
    key: "createMonths",
    value: function createMonths(month, year) {
      var months = [];

      for (var i = 0; i < this.props.numberOfMonths; i++) {
        var m = month + i;
        var y = year;

        if (m > 11) {
          m = m % 11 - 1;
          y = year + 1;
        }

        months.push(this.createMonth(m, y));
      }

      return months;
    }
  }, {
    key: "createMonth",
    value: function createMonth(month, year) {
      var dates = [];
      var firstDay = this.getFirstDayOfMonthIndex(month, year);
      var daysLength = this.getDaysCountInMonth(month, year);
      var prevMonthDaysLength = this.getDaysCountInPrevMonth(month, year);
      var dayNo = 1;
      var today = new Date();
      var weekNumbers = [];
      var monthRows = Math.ceil((daysLength + firstDay) / 7);

      for (var i = 0; i < monthRows; i++) {
        var week = [];

        if (i === 0) {
          for (var j = prevMonthDaysLength - firstDay + 1; j <= prevMonthDaysLength; j++) {
            var prev = this.getPreviousMonthAndYear(month, year);
            week.push({
              day: j,
              month: prev.month,
              year: prev.year,
              otherMonth: true,
              today: this.isToday(today, j, prev.month, prev.year),
              selectable: this.isSelectable(j, prev.month, prev.year, true)
            });
          }

          var remainingDaysLength = 7 - week.length;

          for (var _j = 0; _j < remainingDaysLength; _j++) {
            week.push({
              day: dayNo,
              month: month,
              year: year,
              today: this.isToday(today, dayNo, month, year),
              selectable: this.isSelectable(dayNo, month, year, false)
            });
            dayNo++;
          }
        } else {
          for (var _j2 = 0; _j2 < 7; _j2++) {
            if (dayNo > daysLength) {
              var next = this.getNextMonthAndYear(month, year);
              week.push({
                day: dayNo - daysLength,
                month: next.month,
                year: next.year,
                otherMonth: true,
                today: this.isToday(today, dayNo - daysLength, next.month, next.year),
                selectable: this.isSelectable(dayNo - daysLength, next.month, next.year, true)
              });
            } else {
              week.push({
                day: dayNo,
                month: month,
                year: year,
                today: this.isToday(today, dayNo, month, year),
                selectable: this.isSelectable(dayNo, month, year, false)
              });
            }

            dayNo++;
          }
        }

        if (this.props.showWeek) {
          weekNumbers.push(this.getWeekNumber(new Date(week[0].year, week[0].month, week[0].day)));
        }

        dates.push(week);
      }

      return {
        month: month,
        year: year,
        dates: dates,
        weekNumbers: weekNumbers
      };
    }
  }, {
    key: "getWeekNumber",
    value: function getWeekNumber(date) {
      var checkDate = new Date(date.getTime());
      checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
      var time = checkDate.getTime();
      checkDate.setMonth(0);
      checkDate.setDate(1);
      return Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1;
    }
  }, {
    key: "isSelectable",
    value: function isSelectable(day, month, year, otherMonth) {
      var validMin = true;
      var validMax = true;
      var validDate = true;
      var validDay = true;
      var validMonth = true;

      if (this.props.minDate) {
        if (this.props.minDate.getFullYear() > year) {
          validMin = false;
        } else if (this.props.minDate.getFullYear() === year) {
          if (this.props.minDate.getMonth() > month) {
            validMin = false;
          } else if (this.props.minDate.getMonth() === month) {
            if (this.props.minDate.getDate() > day) {
              validMin = false;
            }
          }
        }
      }

      if (this.props.maxDate) {
        if (this.props.maxDate.getFullYear() < year) {
          validMax = false;
        } else if (this.props.maxDate.getFullYear() === year) {
          if (this.props.maxDate.getMonth() < month) {
            validMax = false;
          } else if (this.props.maxDate.getMonth() === month) {
            if (this.props.maxDate.getDate() < day) {
              validMax = false;
            }
          }
        }
      }

      if (this.props.disabledDates) {
        validDate = !this.isDateDisabled(day, month, year);
      }

      if (this.props.disabledDays) {
        validDay = !this.isDayDisabled(day, month, year);
      }

      if (this.props.selectOtherMonths === false && otherMonth) {
        validMonth = false;
      }

      return validMin && validMax && validDate && validDay && validMonth;
    }
  }, {
    key: "isSelectableTime",
    value: function isSelectableTime(value) {
      var validMin = true;
      var validMax = true;

      if (this.props.minDate && this.props.minDate.toDateString() === value.toDateString()) {
        if (this.props.minDate.getHours() > value.getHours()) {
          validMin = false;
        } else if (this.props.minDate.getHours() === value.getHours()) {
          if (this.props.minDate.getMinutes() > value.getMinutes()) {
            validMin = false;
          } else if (this.props.minDate.getMinutes() === value.getMinutes()) {
            if (this.props.minDate.getSeconds() > value.getSeconds()) {
              validMin = false;
            }
          }
        }
      }

      if (this.props.maxDate && this.props.maxDate.toDateString() === value.toDateString()) {
        if (this.props.maxDate.getHours() < value.getHours()) {
          validMax = false;
        } else if (this.props.maxDate.getHours() === value.getHours()) {
          if (this.props.maxDate.getMinutes() < value.getMinutes()) {
            validMax = false;
          } else if (this.props.maxDate.getMinutes() === value.getMinutes()) {
            if (this.props.maxDate.getSeconds() < value.getSeconds()) {
              validMax = false;
            }
          }
        }
      }

      return validMin && validMax;
    }
  }, {
    key: "isSelected",
    value: function isSelected(dateMeta) {
      if (this.props.value) {
        if (this.isSingleSelection()) {
          return this.isDateEquals(this.props.value, dateMeta);
        } else if (this.isMultipleSelection()) {
          var selected = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.props.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var date = _step.value;
              selected = this.isDateEquals(date, dateMeta);

              if (selected) {
                break;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          return selected;
        } else if (this.isRangeSelection()) {
          if (this.props.value[1]) return this.isDateEquals(this.props.value[0], dateMeta) || this.isDateEquals(this.props.value[1], dateMeta) || this.isDateBetween(this.props.value[0], this.props.value[1], dateMeta);else {
            return this.isDateEquals(this.props.value[0], dateMeta);
          }
        }
      } else {
        return false;
      }
    }
  }, {
    key: "isMonthSelected",
    value: function isMonthSelected(month) {
      var viewDate = this.getViewDate();
      if (this.props.value && this.props.value instanceof Date) return this.props.value.getDate() === 1 && this.props.value.getMonth() === month && this.props.value.getFullYear() === viewDate.getFullYear();else return false;
    }
  }, {
    key: "isDateEquals",
    value: function isDateEquals(value, dateMeta) {
      if (value && value instanceof Date) return value.getDate() === dateMeta.day && value.getMonth() === dateMeta.month && value.getFullYear() === dateMeta.year;else return false;
    }
  }, {
    key: "isDateBetween",
    value: function isDateBetween(start, end, dateMeta) {
      var between = false;

      if (start && end) {
        var date = new Date(dateMeta.year, dateMeta.month, dateMeta.day);
        return start.getTime() <= date.getTime() && end.getTime() >= date.getTime();
      }

      return between;
    }
  }, {
    key: "isSingleSelection",
    value: function isSingleSelection() {
      return this.props.selectionMode === 'single';
    }
  }, {
    key: "isRangeSelection",
    value: function isRangeSelection() {
      return this.props.selectionMode === 'range';
    }
  }, {
    key: "isMultipleSelection",
    value: function isMultipleSelection() {
      return this.props.selectionMode === 'multiple';
    }
  }, {
    key: "isToday",
    value: function isToday(today, day, month, year) {
      return today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;
    }
  }, {
    key: "isDateDisabled",
    value: function isDateDisabled(day, month, year) {
      if (this.props.disabledDates) {
        for (var i = 0; i < this.props.disabledDates.length; i++) {
          var disabledDate = this.props.disabledDates[i];

          if (disabledDate.getFullYear() === year && disabledDate.getMonth() === month && disabledDate.getDate() === day) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "isDayDisabled",
    value: function isDayDisabled(day, month, year) {
      if (this.props.disabledDays) {
        var weekday = new Date(year, month, day);
        var weekdayNumber = weekday.getDay();
        return this.props.disabledDays.indexOf(weekdayNumber) !== -1;
      }

      return false;
    }
  }, {
    key: "updateInputfield",
    value: function updateInputfield(value) {
      if (!this.inputElement) {
        return;
      }

      var formattedValue = '';

      if (value) {
        try {
          if (this.isSingleSelection()) {
            formattedValue = this.isValidDate(value) ? this.formatDateTime(value) : '';
          } else if (this.isMultipleSelection()) {
            for (var i = 0; i < value.length; i++) {
              var selectedValue = value[i];
              var dateAsString = this.isValidDate(selectedValue) ? this.formatDateTime(selectedValue) : '';
              formattedValue += dateAsString;

              if (i !== value.length - 1) {
                formattedValue += ', ';
              }
            }
          } else if (this.isRangeSelection()) {
            if (value && value.length) {
              var startDate = value[0];
              var endDate = value[1];
              formattedValue = this.isValidDate(startDate) ? this.formatDateTime(startDate) : '';

              if (endDate) {
                formattedValue += this.isValidDate(endDate) ? ' - ' + this.formatDateTime(endDate) : '';
              }
            }
          }
        } catch (err) {
          formattedValue = value;
        }
      }

      this.inputElement.value = formattedValue;
    }
  }, {
    key: "formatDateTime",
    value: function formatDateTime(date) {
      var formattedValue = null;

      if (date) {
        if (this.props.timeOnly) {
          formattedValue = this.formatTime(date);
        } else {
          formattedValue = this.formatDate(date, this.props.dateFormat);

          if (this.props.showTime) {
            formattedValue += ' ' + this.formatTime(date);
          }
        }
      }

      return formattedValue;
    }
  }, {
    key: "formatDate",
    value: function formatDate(date, format) {
      if (!date) {
        return '';
      }

      var iFormat;

      var lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

        if (matches) {
          iFormat++;
        }

        return matches;
      },
          formatNumber = function formatNumber(match, value, len) {
        var num = '' + value;

        if (lookAhead(match)) {
          while (num.length < len) {
            num = '0' + num;
          }
        }

        return num;
      },
          formatName = function formatName(match, value, shortNames, longNames) {
        return lookAhead(match) ? longNames[value] : shortNames[value];
      };

      var output = '';
      var literal = false;

      if (date) {
        for (iFormat = 0; iFormat < format.length; iFormat++) {
          if (literal) {
            if (format.charAt(iFormat) === '\'' && !lookAhead('\'')) {
              literal = false;
            } else {
              output += format.charAt(iFormat);
            }
          } else {
            switch (format.charAt(iFormat)) {
              case 'd':
                output += formatNumber('d', date.getDate(), 2);
                break;

              case 'D':
                output += formatName('D', date.getDay(), this.props.locale.dayNamesShort, this.props.locale.dayNames);
                break;

              case 'o':
                output += formatNumber('o', Math.round((new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
                break;

              case 'm':
                output += formatNumber('m', date.getMonth() + 1, 2);
                break;

              case 'M':
                output += formatName('M', date.getMonth(), this.props.locale.monthNamesShort, this.props.locale.monthNames);
                break;

              case 'y':
                output += lookAhead('y') ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
                break;

              case '@':
                output += date.getTime();
                break;

              case '!':
                output += date.getTime() * 10000 + this.ticksTo1970;
                break;

              case '\'':
                if (lookAhead('\'')) {
                  output += '\'';
                } else {
                  literal = true;
                }

                break;

              default:
                output += format.charAt(iFormat);
            }
          }
        }
      }

      return output;
    }
  }, {
    key: "formatTime",
    value: function formatTime(date) {
      if (!date) {
        return '';
      }

      var output = '';
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();

      if (this.props.hourFormat === '12' && hours > 11 && hours !== 12) {
        hours -= 12;
      }

      if (this.props.hourFormat === '12') {
        output += hours === 0 ? 12 : hours < 10 ? '0' + hours : hours;
      } else {
        output += hours < 10 ? '0' + hours : hours;
      }

      output += ':';
      output += minutes < 10 ? '0' + minutes : minutes;

      if (this.props.showSeconds) {
        output += ':';
        output += seconds < 10 ? '0' + seconds : seconds;
      }

      if (this.props.hourFormat === '12') {
        output += date.getHours() > 11 ? ' PM' : ' AM';
      }

      return output;
    }
  }, {
    key: "parseValueFromString",
    value: function parseValueFromString(text) {
      if (!text || text.trim().length === 0) {
        return null;
      }

      var value;

      if (this.isSingleSelection()) {
        value = this.parseDateTime(text);
      } else if (this.isMultipleSelection()) {
        var tokens = text.split(',');
        value = [];
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = tokens[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var token = _step2.value;
            value.push(this.parseDateTime(token.trim()));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (this.isRangeSelection()) {
        var _tokens = text.split(' - ');

        value = [];

        for (var i = 0; i < _tokens.length; i++) {
          value[i] = this.parseDateTime(_tokens[i].trim());
        }
      }

      return value;
    }
  }, {
    key: "parseDateTime",
    value: function parseDateTime(text) {
      var date;
      var parts = text.split(' ');

      if (this.props.timeOnly) {
        date = new Date();
        this.populateTime(date, parts[0], parts[1]);
      } else {
        if (this.props.showTime) {
          date = this.parseDate(parts[0], this.props.dateFormat);
          this.populateTime(date, parts[1], parts[2]);
        } else {
          date = this.parseDate(text, this.props.dateFormat);
        }
      }

      return date;
    }
  }, {
    key: "populateTime",
    value: function populateTime(value, timeString, ampm) {
      if (this.props.hourFormat === '12' && ampm !== 'PM' && ampm !== 'AM') {
        throw new Error('Invalid Time');
      }

      var time = this.parseTime(timeString, ampm);
      value.setHours(time.hour);
      value.setMinutes(time.minute);
      value.setSeconds(time.second);
    }
  }, {
    key: "parseTime",
    value: function parseTime(value, ampm) {
      var tokens = value.split(':');
      var validTokenLength = this.props.showSeconds ? 3 : 2;

      if (tokens.length !== validTokenLength || tokens[0].length !== 2 || tokens[1].length !== 2 || this.props.showSeconds && tokens[2].length !== 2) {
        throw new Error('Invalid time');
      }

      var h = parseInt(tokens[0], 10);
      var m = parseInt(tokens[1], 10);
      var s = this.props.showSeconds ? parseInt(tokens[2], 10) : null;

      if (isNaN(h) || isNaN(m) || h > 23 || m > 59 || this.props.hourFormat === '12' && h > 12 || this.props.showSeconds && (isNaN(s) || s > 59)) {
        throw new Error('Invalid time');
      } else {
        if (this.props.hourFormat === '12' && h !== 12 && ampm === 'PM') {
          h += 12;
        }

        return {
          hour: h,
          minute: m,
          second: s
        };
      }
    } // Ported from jquery-ui datepicker parseDate

  }, {
    key: "parseDate",
    value: function parseDate(value, format) {
      if (format == null || value == null) {
        throw new Error('Invalid arguments');
      }

      value = _typeof(value) === "object" ? value.toString() : value + "";

      if (value === "") {
        return null;
      }

      var iFormat,
          dim,
          extra,
          iValue = 0,
          shortYearCutoff = typeof this.props.shortYearCutoff !== "string" ? this.props.shortYearCutoff : new Date().getFullYear() % 100 + parseInt(this.props.shortYearCutoff, 10),
          year = -1,
          month = -1,
          day = -1,
          doy = -1,
          literal = false,
          date,
          lookAhead = function lookAhead(match) {
        var matches = iFormat + 1 < format.length && format.charAt(iFormat + 1) === match;

        if (matches) {
          iFormat++;
        }

        return matches;
      },
          getNumber = function getNumber(match) {
        var isDoubled = lookAhead(match),
            size = match === "@" ? 14 : match === "!" ? 20 : match === "y" && isDoubled ? 4 : match === "o" ? 3 : 2,
            minSize = match === "y" ? size : 1,
            digits = new RegExp("^\\d{" + minSize + "," + size + "}"),
            num = value.substring(iValue).match(digits);

        if (!num) {
          throw new Error('Missing number at position ' + iValue);
        }

        iValue += num[0].length;
        return parseInt(num[0], 10);
      },
          getName = function getName(match, shortNames, longNames) {
        var index = -1;
        var arr = lookAhead(match) ? longNames : shortNames;
        var names = [];

        for (var i = 0; i < arr.length; i++) {
          names.push([i, arr[i]]);
        }

        names.sort(function (a, b) {
          return -(a[1].length - b[1].length);
        });

        for (var _i = 0; _i < names.length; _i++) {
          var name = names[_i][1];

          if (value.substr(iValue, name.length).toLowerCase() === name.toLowerCase()) {
            index = names[_i][0];
            iValue += name.length;
            break;
          }
        }

        if (index !== -1) {
          return index + 1;
        } else {
          throw new Error('Unknown name at position ' + iValue);
        }
      },
          checkLiteral = function checkLiteral() {
        if (value.charAt(iValue) !== format.charAt(iFormat)) {
          throw new Error('Unexpected literal at position ' + iValue);
        }

        iValue++;
      };

      if (this.props.view === 'month') {
        day = 1;
      }

      for (iFormat = 0; iFormat < format.length; iFormat++) {
        if (literal) {
          if (format.charAt(iFormat) === "'" && !lookAhead("'")) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch (format.charAt(iFormat)) {
            case "d":
              day = getNumber("d");
              break;

            case "D":
              getName("D", this.props.locale.dayNamesShort, this.props.locale.dayNames);
              break;

            case "o":
              doy = getNumber("o");
              break;

            case "m":
              month = getNumber("m");
              break;

            case "M":
              month = getName("M", this.props.locale.monthNamesShort, this.props.locale.monthNames);
              break;

            case "y":
              year = getNumber("y");
              break;

            case "@":
              date = new Date(getNumber("@"));
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;

            case "!":
              date = new Date((getNumber("!") - this.ticksTo1970) / 10000);
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;

            case "'":
              if (lookAhead("'")) {
                checkLiteral();
              } else {
                literal = true;
              }

              break;

            default:
              checkLiteral();
          }
        }
      }

      if (iValue < value.length) {
        extra = value.substr(iValue);

        if (!/^\s+/.test(extra)) {
          throw new Error('Extra/unparsed characters found in date: ' + extra);
        }
      }

      if (year === -1) {
        year = new Date().getFullYear();
      } else if (year < 100) {
        year += new Date().getFullYear() - new Date().getFullYear() % 100 + (year <= shortYearCutoff ? 0 : -100);
      }

      if (doy > -1) {
        month = 1;
        day = doy;

        do {
          dim = this.getDaysCountInMonth(year, month - 1);

          if (day <= dim) {
            break;
          }

          month++;
          day -= dim;
        } while (true);
      }

      date = this.daylightSavingAdjust(new Date(year, month - 1, day));

      if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
        throw new Error('Invalid date'); // E.g. 31/02/00
      }

      return date;
    }
  }, {
    key: "renderBackwardNavigator",
    value: function renderBackwardNavigator() {
      var _this10 = this;

      return _react.default.createElement("button", {
        type: "button",
        className: "p-datepicker-prev p-link",
        onClick: this.onPrevButtonClick,
        onKeyDown: function onKeyDown(e) {
          return _this10.onContainerButtonKeydown(e);
        }
      }, _react.default.createElement("span", {
        className: "p-datepicker-prev-icon pi pi-chevron-left"
      }));
    }
  }, {
    key: "renderForwardNavigator",
    value: function renderForwardNavigator() {
      var _this11 = this;

      return _react.default.createElement("button", {
        type: "button",
        className: "p-datepicker-next p-link",
        onClick: this.onNextButtonClick,
        onKeyDown: function onKeyDown(e) {
          return _this11.onContainerButtonKeydown(e);
        }
      }, _react.default.createElement("span", {
        className: "p-datepicker-next-icon pi pi-chevron-right"
      }));
    }
  }, {
    key: "isInMinYear",
    value: function isInMinYear(viewDate) {
      return this.props.minDate && this.props.minDate.getFullYear() === viewDate.getFullYear();
    }
  }, {
    key: "isInMaxYear",
    value: function isInMaxYear(viewDate) {
      return this.props.maxDate && this.props.maxDate.getFullYear() === viewDate.getFullYear();
    }
  }, {
    key: "renderTitleMonthElement",
    value: function renderTitleMonthElement(month) {
      var _this12 = this;

      if (this.props.monthNavigator && this.props.view !== 'month') {
        var viewDate = this.getViewDate();
        var viewMonth = viewDate.getMonth();
        return _react.default.createElement("select", {
          className: "p-datepicker-month",
          onChange: this.onMonthDropdownChange,
          value: viewMonth
        }, this.props.locale.monthNames.map(function (month, index) {
          if ((!_this12.isInMinYear(viewDate) || index >= _this12.props.minDate.getMonth()) && (!_this12.isInMaxYear(viewDate) || index <= _this12.props.maxDate.getMonth())) {
            return _react.default.createElement("option", {
              key: month,
              value: index
            }, month);
          }

          return null;
        }));
      } else {
        return _react.default.createElement("span", {
          className: "p-datepicker-month"
        }, this.props.locale.monthNames[month]);
      }
    }
  }, {
    key: "renderTitleYearElement",
    value: function renderTitleYearElement(year) {
      var _this13 = this;

      if (this.props.yearNavigator) {
        var yearOptions = [];
        var years = this.props.yearRange.split(':');
        var yearStart = parseInt(years[0], 10);
        var yearEnd = parseInt(years[1], 10);

        for (var i = yearStart; i <= yearEnd; i++) {
          yearOptions.push(i);
        }

        var viewDate = this.getViewDate();
        var viewYear = viewDate.getFullYear();
        return _react.default.createElement("select", {
          className: "p-datepicker-year",
          onChange: this.onYearDropdownChange,
          value: viewYear
        }, yearOptions.map(function (year) {
          if (!(_this13.props.minDate && _this13.props.minDate.getFullYear() > year) && !(_this13.props.maxDate && _this13.props.maxDate.getFullYear() < year)) {
            return _react.default.createElement("option", {
              key: year,
              value: year
            }, year);
          }

          return null;
        }));
      } else {
        return _react.default.createElement("span", {
          className: "p-datepicker-year"
        }, year);
      }
    }
  }, {
    key: "renderTitle",
    value: function renderTitle(monthMetaData) {
      var month = this.renderTitleMonthElement(monthMetaData.month);
      var year = this.renderTitleYearElement(monthMetaData.year);
      return _react.default.createElement("div", {
        className: "p-datepicker-title"
      }, month, year);
    }
  }, {
    key: "renderDayNames",
    value: function renderDayNames(weekDays) {
      var dayNames = weekDays.map(function (weekDay) {
        return _react.default.createElement("th", {
          key: weekDay,
          scope: "col"
        }, _react.default.createElement("span", null, weekDay));
      });

      if (this.props.showWeek) {
        var weekHeader = _react.default.createElement("th", {
          scope: "col",
          key: 'wn',
          className: "p-datepicker-weekheader p-disabled"
        }, _react.default.createElement("span", null, this.props.locale['weekHeader']));

        return [weekHeader].concat(_toConsumableArray(dayNames));
      } else {
        return dayNames;
      }
    }
  }, {
    key: "renderDateCellContent",
    value: function renderDateCellContent(date, className, groupIndex) {
      var _this14 = this;

      var content = this.props.dateTemplate ? this.props.dateTemplate(date) : date.day;
      return _react.default.createElement("span", {
        className: className,
        onClick: function onClick(e) {
          return _this14.onDateSelect(e, date);
        },
        onKeyDown: function onKeyDown(e) {
          return _this14.onDateCellKeydown(e, date, groupIndex);
        }
      }, content);
    }
  }, {
    key: "renderWeek",
    value: function renderWeek(weekDates, weekNumber, groupIndex) {
      var _this15 = this;

      var week = weekDates.map(function (date) {
        var selected = _this15.isSelected(date);

        var cellClassName = (0, _classnames.default)({
          'p-datepicker-other-month': date.otherMonth,
          'p-datepicker-today': date.today
        });
        var dateClassName = (0, _classnames.default)({
          'p-highlight': selected,
          'p-disabled': !date.selectable
        });

        var content = _this15.renderDateCellContent(date, dateClassName, groupIndex);

        return _react.default.createElement("td", {
          key: date.day,
          className: cellClassName
        }, content);
      });

      if (this.props.showWeek) {
        var weekNumberCell = _react.default.createElement("td", {
          key: 'wn' + weekNumber,
          className: "p-datepicker-weeknumber"
        }, _react.default.createElement("span", {
          className: "p-disabled"
        }, weekNumber));

        return [weekNumberCell].concat(_toConsumableArray(week));
      } else {
        return week;
      }
    }
  }, {
    key: "renderDates",
    value: function renderDates(monthMetaData, groupIndex) {
      var _this16 = this;

      return monthMetaData.dates.map(function (weekDates, index) {
        return _react.default.createElement("tr", {
          key: index
        }, _this16.renderWeek(weekDates, monthMetaData.weekNumbers[index], groupIndex));
      });
    }
  }, {
    key: "renderDateViewGrid",
    value: function renderDateViewGrid(monthMetaData, weekDays, groupIndex) {
      var dayNames = this.renderDayNames(weekDays);
      var dates = this.renderDates(monthMetaData, groupIndex);
      return _react.default.createElement("div", {
        className: "p-datepicker-calendar-container"
      }, _react.default.createElement("table", {
        className: "p-datepicker-calendar"
      }, _react.default.createElement("thead", null, _react.default.createElement("tr", null, dayNames)), _react.default.createElement("tbody", null, dates)));
    }
  }, {
    key: "renderMonth",
    value: function renderMonth(monthMetaData, index) {
      var weekDays = this.createWeekDays();
      var backwardNavigator = index === 0 ? this.renderBackwardNavigator() : null;
      var forwardNavigator = this.props.numberOfMonths === 1 || index === this.props.numberOfMonths - 1 ? this.renderForwardNavigator() : null;
      var title = this.renderTitle(monthMetaData);
      var dateViewGrid = this.renderDateViewGrid(monthMetaData, weekDays, index);
      var header = this.props.headerTemplate ? this.props.headerTemplate() : null;
      return _react.default.createElement("div", {
        key: monthMetaData.month,
        className: "p-datepicker-group"
      }, _react.default.createElement("div", {
        className: "p-datepicker-header"
      }, header, backwardNavigator, forwardNavigator, title), dateViewGrid);
    }
  }, {
    key: "renderMonths",
    value: function renderMonths(monthsMetaData) {
      var _this17 = this;

      return monthsMetaData.map(function (monthMetaData, index) {
        return _this17.renderMonth(monthMetaData, index);
      });
    }
  }, {
    key: "renderDateView",
    value: function renderDateView() {
      var viewDate = this.getViewDate();
      var monthsMetaData = this.createMonths(viewDate.getMonth(), viewDate.getFullYear());
      var months = this.renderMonths(monthsMetaData);
      return _react.default.createElement(_react.default.Fragment, null, months);
    }
  }, {
    key: "renderMonthViewMonth",
    value: function renderMonthViewMonth(index) {
      var _this18 = this;

      var className = (0, _classnames.default)('p-monthpicker-month', {
        'p-highlight': this.isMonthSelected(index)
      });
      var monthName = this.props.locale.monthNamesShort[index];
      return _react.default.createElement("span", {
        key: monthName,
        className: className,
        onClick: function onClick(event) {
          return _this18.onMonthSelect(event, index);
        },
        onKeyDown: function onKeyDown(event) {
          return _this18.onMonthCellKeydown(event, index);
        }
      }, monthName);
    }
  }, {
    key: "renderMonthViewMonths",
    value: function renderMonthViewMonths() {
      var months = [];

      for (var i = 0; i <= 11; i++) {
        months.push(this.renderMonthViewMonth(i));
      }

      return months;
    }
  }, {
    key: "renderMonthView",
    value: function renderMonthView() {
      var backwardNavigator = this.renderBackwardNavigator();
      var forwardNavigator = this.renderForwardNavigator();
      var yearElement = this.renderTitleYearElement(this.getViewDate().getFullYear());
      var months = this.renderMonthViewMonths();
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "p-datepicker-header"
      }, backwardNavigator, forwardNavigator, _react.default.createElement("div", {
        className: "p-datepicker-title"
      }, yearElement)), _react.default.createElement("div", {
        className: "p-monthpicker"
      }, months));
    }
  }, {
    key: "renderDatePicker",
    value: function renderDatePicker() {
      if (!this.props.timeOnly) {
        if (this.props.view === 'date') {
          return this.renderDateView();
        } else if (this.props.view === 'month') {
          return this.renderMonthView();
        } else {
          return null;
        }
      }
    }
  }, {
    key: "renderHourPicker",
    value: function renderHourPicker() {
      var _this19 = this;

      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var hour = currentTime.getHours();

      if (this.props.hourFormat === '12') {
        if (hour === 0) hour = 12;else if (hour > 11 && hour !== 12) hour = hour - 12;
      }

      var hourDisplay = hour < 10 ? '0' + hour : hour;
      return _react.default.createElement("div", {
        className: "p-hour-picker"
      }, _react.default.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return _this19.onTimePickerElementMouseDown(e, 0, 1);
        },
        onMouseUp: this.onTimePickerElementMouseUp,
        onMouseLeave: this.onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return _this19.onContainerButtonKeydown(e);
        }
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-up"
      })), _react.default.createElement("span", null, hourDisplay), _react.default.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return _this19.onTimePickerElementMouseDown(e, 0, -1);
        },
        onMouseUp: this.onTimePickerElementMouseUp,
        onMouseLeave: this.onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return _this19.onContainerButtonKeydown(e);
        }
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-down"
      })));
    }
  }, {
    key: "renderMinutePicker",
    value: function renderMinutePicker() {
      var _this20 = this;

      var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
      var minute = currentTime.getMinutes();
      var minuteDisplay = minute < 10 ? '0' + minute : minute;
      return _react.default.createElement("div", {
        className: "p-minute-picker"
      }, _react.default.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return _this20.onTimePickerElementMouseDown(e, 1, 1);
        },
        onMouseUp: this.onTimePickerElementMouseUp,
        onMouseLeave: this.onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return _this20.onContainerButtonKeydown(e);
        }
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-up"
      })), _react.default.createElement("span", null, minuteDisplay), _react.default.createElement("button", {
        type: "button",
        className: "p-link",
        onMouseDown: function onMouseDown(e) {
          return _this20.onTimePickerElementMouseDown(e, 1, -1);
        },
        onMouseUp: this.onTimePickerElementMouseUp,
        onMouseLeave: this.onTimePickerElementMouseLeave,
        onKeyDown: function onKeyDown(e) {
          return _this20.onContainerButtonKeydown(e);
        }
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-down"
      })));
    }
  }, {
    key: "renderSecondPicker",
    value: function renderSecondPicker() {
      var _this21 = this;

      if (this.props.showSeconds) {
        var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
        var second = currentTime.getSeconds();
        var secondDisplay = second < 10 ? '0' + second : second;
        return _react.default.createElement("div", {
          className: "p-second-picker"
        }, _react.default.createElement("button", {
          type: "button",
          className: "p-link",
          onMouseDown: function onMouseDown(e) {
            return _this21.onTimePickerElementMouseDown(e, 2, 1);
          },
          onMouseUp: this.onTimePickerElementMouseUp,
          onMouseLeave: this.onTimePickerElementMouseLeave,
          onKeyDown: function onKeyDown(e) {
            return _this21.onContainerButtonKeydown(e);
          }
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-up"
        })), _react.default.createElement("span", null, secondDisplay), _react.default.createElement("button", {
          type: "button",
          className: "p-link",
          onMouseDown: function onMouseDown(e) {
            return _this21.onTimePickerElementMouseDown(e, 2, -1);
          },
          onMouseUp: this.onTimePickerElementMouseUp,
          onMouseLeave: this.onTimePickerElementMouseLeave,
          onKeyDown: function onKeyDown(e) {
            return _this21.onContainerButtonKeydown(e);
          }
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-down"
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderAmPmPicker",
    value: function renderAmPmPicker() {
      if (this.props.hourFormat === '12') {
        var currentTime = this.props.value && this.props.value instanceof Date ? this.props.value : this.getViewDate();
        var hour = currentTime.getHours();
        var display = hour > 11 ? 'PM' : 'AM';
        return _react.default.createElement("div", {
          className: "p-ampm-picker"
        }, _react.default.createElement("button", {
          type: "button",
          className: "p-link",
          onClick: this.toggleAmPm
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-up"
        })), _react.default.createElement("span", null, display), _react.default.createElement("button", {
          type: "button",
          className: "p-link",
          onClick: this.toggleAmPm
        }, _react.default.createElement("span", {
          className: "pi pi-chevron-down"
        })));
      } else {
        return null;
      }
    }
  }, {
    key: "renderSeparator",
    value: function renderSeparator() {
      return _react.default.createElement("div", {
        className: "p-separator"
      }, _react.default.createElement("span", {
        className: "p-separator-spacer"
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-up"
      })), _react.default.createElement("span", null, ":"), _react.default.createElement("span", {
        className: "p-separator-spacer"
      }, _react.default.createElement("span", {
        className: "pi pi-chevron-down"
      })));
    }
  }, {
    key: "renderTimePicker",
    value: function renderTimePicker() {
      if (this.props.showTime || this.props.timeOnly) {
        return _react.default.createElement("div", {
          className: "p-timepicker"
        }, this.renderHourPicker(), this.renderSeparator(), this.renderMinutePicker(), this.props.showSeconds && this.renderSeparator(), this.renderSecondPicker(), this.props.hourFormat === '12' && this.renderSeparator(), this.renderAmPmPicker());
      } else {
        return null;
      }
    }
  }, {
    key: "renderInputElement",
    value: function renderInputElement() {
      var _this22 = this;

      if (!this.props.inline) {
        var className = (0, _classnames.default)('p-inputtext p-component', this.props.inputClassName);
        return _react.default.createElement(_InputText.InputText, {
          ref: function ref(el) {
            return _this22.inputElement = _reactDom.default.findDOMNode(el);
          },
          id: this.props.inputId,
          name: this.props.name,
          type: "text",
          className: className,
          style: this.props.inputStyle,
          readOnly: this.props.readOnlyInput,
          disabled: this.props.disabled,
          required: this.props.required,
          autoComplete: "off",
          placeholder: this.props.placeholder,
          onInput: this.onUserInput,
          onFocus: this.onInputFocus,
          onBlur: this.onInputBlur,
          onKeyDown: this.onInputKeyDown,
          "aria-labelledby": this.props.ariaLabelledBy
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderButton",
    value: function renderButton() {
      if (this.props.showIcon) {
        return _react.default.createElement(_Button.Button, {
          type: "button",
          icon: this.props.icon,
          onClick: this.onButtonClick,
          tabIndex: "-1",
          disabled: this.props.disabled,
          className: "p-datepicker-trigger p-calendar-button"
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderButtonBar",
    value: function renderButtonBar() {
      var _this23 = this;

      if (this.props.showButtonBar) {
        return _react.default.createElement("div", {
          className: "p-datepicker-buttonbar"
        }, _react.default.createElement(_Button.Button, {
          type: "button",
          label: this.props.locale.today,
          onClick: this.onTodayButtonClick,
          onKeyDown: function onKeyDown(e) {
            return _this23.onContainerButtonKeydown(e);
          },
          className: this.props.todayButtonClassName
        }), _react.default.createElement(_Button.Button, {
          type: "button",
          label: this.props.locale.clear,
          onClick: this.onClearButtonClick,
          onKeyDown: function onKeyDown(e) {
            return _this23.onContainerButtonKeydown(e);
          },
          className: this.props.clearButtonStyleClass
        }));
      } else {
        return null;
      }
    }
  }, {
    key: "renderFooter",
    value: function renderFooter() {
      if (this.props.footerTemplate) {
        var content = this.props.footerTemplate();
        return _react.default.createElement("div", {
          className: "p-datepicker-footer"
        }, content);
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this24 = this;

      var className = (0, _classnames.default)('p-calendar', this.props.className, {
        'p-calendar-w-btn': this.props.showIcon,
        'p-calendar-timeonly': this.props.timeOnly,
        'p-inputwrapper-filled': this.props.value
      });
      var panelClassName = (0, _classnames.default)('p-datepicker p-component', this.props.panelClassName, {
        'p-datepicker-inline': this.props.inline,
        'p-input-overlay': !this.props.inline,
        'p-shadow': !this.props.inline,
        'p-disabled': this.props.disabled,
        'p-datepicker-timeonly': this.props.timeOnly,
        'p-datepicker-multiple-month': this.props.numberOfMonths > 1,
        'p-datepicker-monthpicker': this.props.view === 'month',
        'p-datepicker-touch-ui': this.props.touchUI
      });
      var input = this.renderInputElement();
      var button = this.renderButton();
      var datePicker = this.renderDatePicker();
      var timePicker = this.renderTimePicker();
      var buttonBar = this.renderButtonBar();
      var footer = this.renderFooter();
      return _react.default.createElement("span", {
        ref: function ref(el) {
          return _this24.container = el;
        },
        id: this.props.id,
        className: className,
        style: this.props.style
      }, input, button, _react.default.createElement(_CalendarPanel.CalendarPanel, {
        ref: function ref(el) {
          return _this24.panel = _reactDom.default.findDOMNode(el);
        },
        className: panelClassName,
        style: this.props.panelStyle,
        appendTo: this.props.appendTo
      }, datePicker, timePicker, buttonBar, footer));
    }
  }]);

  return Calendar;
}(_react.Component);

exports.Calendar = Calendar;

_defineProperty(Calendar, "defaultProps", {
  id: null,
  name: null,
  value: null,
  viewDate: null,
  style: null,
  className: null,
  inline: false,
  selectionMode: 'single',
  inputId: null,
  inputStyle: null,
  inputClassName: null,
  required: false,
  readOnlyInput: false,
  keepInvalid: false,
  disabled: false,
  tabIndex: null,
  placeholder: null,
  showIcon: false,
  icon: 'pi pi-calendar',
  showOnFocus: true,
  numberOfMonths: 1,
  view: 'date',
  touchUI: false,
  showTime: false,
  timeOnly: false,
  showSeconds: false,
  hourFormat: '24',
  stepHour: 1,
  stepMinute: 1,
  stepSecond: 1,
  shortYearCutoff: '+10',
  hideOnDateTimeSelect: false,
  showWeek: false,
  locale: {
    firstDayOfWeek: 0,
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    today: 'Today',
    clear: 'Clear',
    weekHeader: 'Wk'
  },
  dateFormat: 'mm/dd/yy',
  panelStyle: null,
  panelClassName: null,
  monthNavigator: false,
  yearNavigator: false,
  disabledDates: null,
  disabledDays: null,
  minDate: null,
  maxDate: null,
  maxDateCount: null,
  showOtherMonths: true,
  selectOtherMonths: false,
  showButtonBar: false,
  todayButtonClassName: 'p-button-secondary',
  clearButtonStyleClass: 'p-button-secondary',
  autoZIndex: true,
  baseZIndex: 0,
  appendTo: null,
  tooltip: null,
  tooltipOptions: null,
  ariaLabelledBy: null,
  dateTemplate: null,
  headerTemplate: null,
  footerTemplate: null,
  onFocus: null,
  onBlur: null,
  onInput: null,
  onSelect: null,
  onChange: null,
  onViewDateChange: null,
  onTodayButtonClick: null,
  onClearButtonClick: null
});

_defineProperty(Calendar, "propTypes", {
  id: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.any,
  viewDate: _propTypes.default.any,
  style: _propTypes.default.object,
  className: _propTypes.default.string,
  inline: _propTypes.default.bool,
  selectionMode: _propTypes.default.string,
  inputId: _propTypes.default.string,
  inputStyle: _propTypes.default.object,
  inputClassName: _propTypes.default.string,
  required: _propTypes.default.bool,
  readOnlyInput: _propTypes.default.bool,
  keepInvalid: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  tabIndex: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  showIcon: _propTypes.default.bool,
  icon: _propTypes.default.string,
  showOnFocus: _propTypes.default.bool,
  numberOfMonths: _propTypes.default.number,
  view: _propTypes.default.string,
  touchUI: _propTypes.default.bool,
  showTime: _propTypes.default.bool,
  timeOnly: _propTypes.default.bool,
  showSeconds: _propTypes.default.bool,
  hourFormat: _propTypes.default.string,
  stepHour: _propTypes.default.number,
  stepMinute: _propTypes.default.number,
  stepSecond: _propTypes.default.number,
  shortYearCutoff: _propTypes.default.string,
  hideOnDateTimeSelect: _propTypes.default.bool,
  showWeek: _propTypes.default.bool,
  locale: _propTypes.default.object,
  dateFormat: _propTypes.default.string,
  panelStyle: _propTypes.default.object,
  panelClassName: _propTypes.default.string,
  monthNavigator: _propTypes.default.bool,
  yearNavigator: _propTypes.default.bool,
  disabledDates: _propTypes.default.array,
  disabledDays: _propTypes.default.array,
  minDate: _propTypes.default.any,
  maxDate: _propTypes.default.any,
  maxDateCount: _propTypes.default.number,
  showOtherMonths: _propTypes.default.bool,
  selectOtherMonths: _propTypes.default.bool,
  showButtonBar: _propTypes.default.bool,
  todayButtonClassName: _propTypes.default.string,
  clearButtonStyleClass: _propTypes.default.string,
  autoZIndex: _propTypes.default.bool,
  baseZIndex: _propTypes.default.number,
  appendTo: _propTypes.default.any,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object,
  ariaLabelledBy: _propTypes.default.string,
  dateTemplate: _propTypes.default.func,
  headerTemplate: _propTypes.default.func,
  footerTemplate: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onInput: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onViewDateChange: _propTypes.default.func,
  onTodayButtonClick: _propTypes.default.func,
  onClearButtonClick: _propTypes.default.func
});

/***/ }),

/***/ "./node_modules/primereact/components/calendar/CalendarPanel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/primereact/components/calendar/CalendarPanel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarPanel = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CalendarPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(CalendarPanel, _Component);

  function CalendarPanel() {
    _classCallCheck(this, CalendarPanel);

    return _possibleConstructorReturn(this, _getPrototypeOf(CalendarPanel).apply(this, arguments));
  }

  _createClass(CalendarPanel, [{
    key: "renderElement",
    value: function renderElement() {
      var _this = this;

      return _react.default.createElement("div", {
        ref: function ref(el) {
          return _this.element = el;
        },
        className: this.props.className,
        style: this.props.style
      }, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var element = this.renderElement();
      if (this.props.appendTo) return _reactDom.default.createPortal(element, this.props.appendTo);else return element;
    }
  }]);

  return CalendarPanel;
}(_react.Component);

exports.CalendarPanel = CalendarPanel;

_defineProperty(CalendarPanel, "defaultProps", {
  appendTo: null,
  style: null,
  className: null
});

_defineProperty(CalendarPanel, "propTypes", {
  appendTo: _propTypes.default.object,
  style: _propTypes.default.object,
  className: _propTypes.default.string
});

/***/ }),

/***/ "./node_modules/primereact/components/inputtext/InputText.js":
/*!*******************************************************************!*\
  !*** ./node_modules/primereact/components/inputtext/InputText.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputText = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _KeyFilter = _interopRequireDefault(__webpack_require__(/*! ../keyfilter/KeyFilter */ "./node_modules/primereact/components/keyfilter/KeyFilter.js"));

var _Tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip/Tooltip */ "./node_modules/primereact/components/tooltip/Tooltip.js"));

var _DomHandler = _interopRequireDefault(__webpack_require__(/*! ../utils/DomHandler */ "./node_modules/primereact/components/utils/DomHandler.js"));

var _ObjectUtils = _interopRequireDefault(__webpack_require__(/*! ../utils/ObjectUtils */ "./node_modules/primereact/components/utils/ObjectUtils.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var InputText =
/*#__PURE__*/
function (_Component) {
  _inherits(InputText, _Component);

  function InputText(props) {
    var _this;

    _classCallCheck(this, InputText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputText).call(this, props));
    _this.onInput = _this.onInput.bind(_assertThisInitialized(_this));
    _this.onKeyPress = _this.onKeyPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputText, [{
    key: "onKeyPress",
    value: function onKeyPress(event) {
      if (this.props.onKeyPress) {
        this.props.onKeyPress(event);
      }

      if (this.props.keyfilter) {
        _KeyFilter.default.onKeyPress(event, this.props.keyfilter, this.props.validateOnly);
      }
    }
  }, {
    key: "onInput",
    value: function onInput(event) {
      var validatePattern = true;

      if (this.props.keyfilter && this.props.validateOnly) {
        validatePattern = _KeyFilter.default.validate(event, this.props.keyfilter);
      }

      if (this.props.onInput) {
        this.props.onInput(event, validatePattern);
      }

      if (!this.props.onChange) {
        if (event.target.value.length > 0) _DomHandler.default.addClass(event.target, 'p-filled');else _DomHandler.default.removeClass(event.target, 'p-filled');
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.tooltip) {
        this.renderTooltip();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.tooltip !== this.props.tooltip) {
        if (this.tooltip) this.tooltip.updateContent(this.props.tooltip);else this.renderTooltip();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.tooltip) {
        this.tooltip.destroy();
        this.tooltip = null;
      }
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      this.tooltip = new _Tooltip.default({
        target: this.element,
        content: this.props.tooltip,
        options: this.props.tooltipOptions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var className = (0, _classnames.default)('p-inputtext p-component', this.props.className, {
        'p-disabled': this.props.disabled,
        'p-filled': this.props.value != null && this.props.value.toString().length > 0 || this.props.defaultValue != null && this.props.defaultValue.toString().length > 0
      });

      var inputProps = _ObjectUtils.default.findDiffKeys(this.props, InputText.defaultProps);

      return _react.default.createElement("input", _extends({
        ref: function ref(el) {
          return _this2.element = el;
        }
      }, inputProps, {
        className: className,
        onInput: this.onInput,
        onKeyPress: this.onKeyPress
      }));
    }
  }]);

  return InputText;
}(_react.Component);

exports.InputText = InputText;

_defineProperty(InputText, "defaultProps", {
  onInput: null,
  onKeyPress: null,
  keyfilter: null,
  validateOnly: false,
  tooltip: null,
  tooltipOptions: null
});

_defineProperty(InputText, "propTypes", {
  onInput: _propTypes.default.func,
  onKeyPress: _propTypes.default.func,
  keyfilter: _propTypes.default.any,
  validateOnly: _propTypes.default.bool,
  tooltip: _propTypes.default.string,
  tooltipOptions: _propTypes.default.object
});

/***/ }),

/***/ "./node_modules/primereact/components/keyfilter/KeyFilter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/primereact/components/keyfilter/KeyFilter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DomHandler = _interopRequireDefault(__webpack_require__(/*! ../utils/DomHandler */ "./node_modules/primereact/components/utils/DomHandler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KeyFilter =
/*#__PURE__*/
function () {
  function KeyFilter() {
    _classCallCheck(this, KeyFilter);
  }

  _createClass(KeyFilter, null, [{
    key: "isNavKeyPress",

    /* eslint-disable */

    /* eslint-enable */
    value: function isNavKeyPress(e) {
      var k = e.keyCode;
      k = _DomHandler.default.getBrowser().safari ? KeyFilter.SAFARI_KEYS[k] || k : k;
      return k >= 33 && k <= 40 || k === KeyFilter.KEYS.RETURN || k === KeyFilter.KEYS.TAB || k === KeyFilter.KEYS.ESC;
    }
  }, {
    key: "isSpecialKey",
    value: function isSpecialKey(e) {
      var k = e.keyCode;
      return k === 9 || k === 13 || k === 27 || k === 16 || k === 17 || k >= 18 && k <= 20 || _DomHandler.default.getBrowser().opera && !e.shiftKey && (k === 8 || k >= 33 && k <= 35 || k >= 36 && k <= 39 || k >= 44 && k <= 45);
    }
  }, {
    key: "getKey",
    value: function getKey(e) {
      var k = e.keyCode || e.charCode;
      return _DomHandler.default.getBrowser().safari ? KeyFilter.SAFARI_KEYS[k] || k : k;
    }
  }, {
    key: "getCharCode",
    value: function getCharCode(e) {
      return e.charCode || e.keyCode || e.which;
    }
  }, {
    key: "onKeyPress",
    value: function onKeyPress(e, keyfilter, validateOnly) {
      if (validateOnly) {
        return;
      }

      var regex = KeyFilter.DEFAULT_MASKS[keyfilter] ? KeyFilter.DEFAULT_MASKS[keyfilter] : keyfilter;

      var browser = _DomHandler.default.getBrowser();

      if (e.ctrlKey || e.altKey) {
        return;
      }

      var k = this.getKey(e);

      if (browser.mozilla && (this.isNavKeyPress(e) || k === KeyFilter.KEYS.BACKSPACE || k === KeyFilter.KEYS.DELETE && e.charCode === 0)) {
        return;
      }

      var c = this.getCharCode(e);
      var cc = String.fromCharCode(c);

      if (browser.mozilla && (this.isSpecialKey(e) || !cc)) {
        return;
      }

      if (!regex.test(cc)) {
        e.preventDefault();
      }
    }
  }, {
    key: "validate",
    value: function validate(e, keyfilter) {
      var value = e.target.value,
          validatePattern = true;

      if (value && !keyfilter.test(value)) {
        validatePattern = false;
      }

      return validatePattern;
    }
  }]);

  return KeyFilter;
}();

exports.default = KeyFilter;

_defineProperty(KeyFilter, "DEFAULT_MASKS", {
  pint: /[\d]/,
  int: /[\d\-]/,
  pnum: /[\d\.]/,
  money: /[\d\.\s,]/,
  num: /[\d\-\.]/,
  hex: /[0-9a-f]/i,
  email: /[a-z0-9_\.\-@]/i,
  alpha: /[a-z_]/i,
  alphanum: /[a-z0-9_]/i
});

_defineProperty(KeyFilter, "KEYS", {
  TAB: 9,
  RETURN: 13,
  ESC: 27,
  BACKSPACE: 8,
  DELETE: 46
});

_defineProperty(KeyFilter, "SAFARI_KEYS", {
  63234: 37,
  // left
  63235: 39,
  // right
  63232: 38,
  // up
  63233: 40,
  // down
  63276: 33,
  // page up
  63277: 34,
  // page down
  63272: 46,
  // delete
  63273: 36,
  // home
  63275: 35 // end

});

/***/ }),

/***/ "./node_modules/primereact/components/tooltip/Tooltip.js":
/*!***************************************************************!*\
  !*** ./node_modules/primereact/components/tooltip/Tooltip.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DomHandler = _interopRequireDefault(__webpack_require__(/*! ../utils/DomHandler */ "./node_modules/primereact/components/utils/DomHandler.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tooltip =
/*#__PURE__*/
function () {
  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    this.target = props.target;
    this.targetContainer = props.targetContainer;
    this.content = props.content;
    this.options = props.options || {};
    this.options.event = this.options.event || 'hover';
    this.options.position = this.options.position || 'right';
    this.bindEvents();
  }

  _createClass(Tooltip, [{
    key: "bindEvents",
    value: function bindEvents() {
      if (this.options.event === 'hover') {
        this.mouseEnterListener = this.onMouseEnter.bind(this);
        this.mouseLeaveListener = this.onMouseLeave.bind(this);
        this.clickListener = this.onClick.bind(this);
        this.target.addEventListener('mouseenter', this.mouseEnterListener);
        this.target.addEventListener('mouseleave', this.mouseLeaveListener);
        this.target.addEventListener('click', this.clickListener);
      } else if (this.options.event === 'focus') {
        this.focusListener = this.onFocus.bind(this);
        this.blurListener = this.onBlur.bind(this);
        this.target.addEventListener('focus', this.focusListener);
        this.target.addEventListener('blur', this.blurListener);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      if (this.options.event === 'hover') {
        this.target.removeEventListener('mouseenter', this.mouseEnterListener);
        this.target.removeEventListener('mouseleave', this.mouseLeaveListener);
        this.target.removeEventListener('click', this.clickListener);
      } else if (this.options.event === 'focus') {
        this.target.removeEventListener('focus', this.focusListener);
        this.target.removeEventListener('blur', this.blurListener);
      }

      this.unbindDocumentResizeListener();
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter() {
      if (!this.container && !this.showTimeout) {
        this.activate();
      }
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.deactivate();
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.activate();
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      this.deactivate();
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.deactivate();
    }
  }, {
    key: "activate",
    value: function activate() {
      var _this = this;

      this.clearHideTimeout();
      if (this.options.showDelay) this.showTimeout = setTimeout(function () {
        _this.show();
      }, this.options.showDelay);else this.show();
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      var _this2 = this;

      this.clearShowTimeout();
      if (this.options.hideDelay) this.hideTimeout = setTimeout(function () {
        _this2.hide();
      }, this.options.hideDelay);else this.hide();
    }
  }, {
    key: "clearShowTimeout",
    value: function clearShowTimeout() {
      if (this.showTimeout) {
        clearTimeout(this.showTimeout);
        this.showTimeout = null;
      }
    }
  }, {
    key: "clearHideTimeout",
    value: function clearHideTimeout() {
      if (this.hideTimeout) {
        clearTimeout(this.hideTimeout);
        this.hideTimeout = null;
      }
    }
  }, {
    key: "clearTimeouts",
    value: function clearTimeouts() {
      this.clearShowTimeout();
      this.clearHideTimeout();
    }
  }, {
    key: "updateContent",
    value: function updateContent(content) {
      this.content = content;
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.content) {
        return;
      }

      this.create();
      this.align();

      _DomHandler.default.fadeIn(this.container, 250);

      this.container.style.zIndex = ++_DomHandler.default.zindex;
      this.bindDocumentResizeListener();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.remove();
    }
  }, {
    key: "create",
    value: function create() {
      this.container = document.createElement('div');
      var tooltipArrow = document.createElement('div');
      tooltipArrow.className = 'p-tooltip-arrow';
      this.container.appendChild(tooltipArrow);
      this.tooltipText = document.createElement('div');
      this.tooltipText.className = 'p-tooltip-text'; //todo: JSX support

      this.tooltipText.innerHTML = this.content;
      this.container.appendChild(this.tooltipText);
      document.body.appendChild(this.container);
      this.container.style.display = 'inline-block';
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.container && this.container.parentElement) {
        document.body.removeChild(this.container);
      }

      this.unbindDocumentResizeListener();
      this.clearTimeouts();
      this.container = null;
    }
  }, {
    key: "align",
    value: function align() {
      switch (this.options.position) {
        case 'top':
          this.alignTop();

          if (this.isOutOfBounds()) {
            this.alignBottom();
          }

          break;

        case 'bottom':
          this.alignBottom();

          if (this.isOutOfBounds()) {
            this.alignTop();
          }

          break;

        case 'left':
          this.alignLeft();

          if (this.isOutOfBounds()) {
            this.alignRight();

            if (this.isOutOfBounds()) {
              this.alignTop();

              if (this.isOutOfBounds()) {
                this.alignBottom();
              }
            }
          }

          break;

        case 'right':
          this.alignRight();

          if (this.isOutOfBounds()) {
            this.alignLeft();

            if (this.isOutOfBounds()) {
              this.alignTop();

              if (this.isOutOfBounds()) {
                this.alignBottom();
              }
            }
          }

          break;

        default:
          throw new Error('Invalid position:' + this.options.position);
      }
    }
  }, {
    key: "getHostOffset",
    value: function getHostOffset() {
      var target = this.targetContainer || this.target;
      var offset = target.getBoundingClientRect();

      var targetLeft = offset.left + _DomHandler.default.getWindowScrollLeft();

      var targetTop = offset.top + _DomHandler.default.getWindowScrollTop();

      return {
        left: targetLeft,
        top: targetTop
      };
    }
  }, {
    key: "alignRight",
    value: function alignRight() {
      this.preAlign('right');
      var target = this.targetContainer || this.target;
      var hostOffset = this.getHostOffset();

      var left = hostOffset.left + _DomHandler.default.getOuterWidth(target);

      var top = hostOffset.top + (_DomHandler.default.getOuterHeight(target) - _DomHandler.default.getOuterHeight(this.container)) / 2;
      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "alignLeft",
    value: function alignLeft() {
      this.preAlign('left');
      var target = this.targetContainer || this.target;
      var hostOffset = this.getHostOffset();

      var left = hostOffset.left - _DomHandler.default.getOuterWidth(this.container);

      var top = hostOffset.top + (_DomHandler.default.getOuterHeight(target) - _DomHandler.default.getOuterHeight(this.container)) / 2;
      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "alignTop",
    value: function alignTop() {
      this.preAlign('top');
      var target = this.targetContainer || this.target;
      var hostOffset = this.getHostOffset();
      var left = hostOffset.left + (_DomHandler.default.getOuterWidth(target) - _DomHandler.default.getOuterWidth(this.container)) / 2;

      var top = hostOffset.top - _DomHandler.default.getOuterHeight(this.container);

      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "alignBottom",
    value: function alignBottom() {
      this.preAlign('bottom');
      var target = this.targetContainer || this.target;
      var hostOffset = this.getHostOffset();
      var left = hostOffset.left + (_DomHandler.default.getOuterWidth(target) - _DomHandler.default.getOuterWidth(this.container)) / 2;

      var top = hostOffset.top + _DomHandler.default.getOuterHeight(target);

      this.container.style.left = left + 'px';
      this.container.style.top = top + 'px';
    }
  }, {
    key: "preAlign",
    value: function preAlign(position) {
      this.container.style.left = -999 + 'px';
      this.container.style.top = -999 + 'px';
      var defaultClassName = 'p-tooltip p-component p-tooltip-' + position;
      this.container.className = this.options.className ? defaultClassName + ' ' + this.options.className : defaultClassName;
    }
  }, {
    key: "isOutOfBounds",
    value: function isOutOfBounds() {
      var offset = this.container.getBoundingClientRect();
      var targetTop = offset.top;
      var targetLeft = offset.left;

      var width = _DomHandler.default.getOuterWidth(this.container);

      var height = _DomHandler.default.getOuterHeight(this.container);

      var viewport = _DomHandler.default.getViewport();

      return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
    }
  }, {
    key: "bindDocumentResizeListener",
    value: function bindDocumentResizeListener() {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener('resize', this.resizeListener);
    }
  }, {
    key: "unbindDocumentResizeListener",
    value: function unbindDocumentResizeListener() {
      if (this.resizeListener) {
        window.removeEventListener('resize', this.resizeListener);
        this.resizeListener = null;
      }
    }
  }, {
    key: "onWindowResize",
    value: function onWindowResize() {
      this.hide();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindEvents();
      this.remove();
      this.target = null;
      this.targetContainer = null;
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;

/***/ }),

/***/ "./node_modules/primereact/components/utils/DomHandler.js":
/*!****************************************************************!*\
  !*** ./node_modules/primereact/components/utils/DomHandler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DomHandler =
/*#__PURE__*/
function () {
  function DomHandler() {
    _classCallCheck(this, DomHandler);
  }

  _createClass(DomHandler, null, [{
    key: "innerWidth",
    value: function innerWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }

      return 0;
    }
  }, {
    key: "width",
    value: function width(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
        return width;
      }

      return 0;
    }
  }, {
    key: "getWindowScrollTop",
    value: function getWindowScrollTop() {
      var doc = document.documentElement;
      return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    }
  }, {
    key: "getWindowScrollLeft",
    value: function getWindowScrollLeft() {
      var doc = document.documentElement;
      return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    }
  }, {
    key: "getOuterWidth",
    value: function getOuterWidth(el, margin) {
      if (el) {
        var width = el.offsetWidth;

        if (margin) {
          var style = getComputedStyle(el);
          width += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }

        return width;
      }

      return 0;
    }
  }, {
    key: "getOuterHeight",
    value: function getOuterHeight(el, margin) {
      if (el) {
        var height = el.offsetHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      }

      return 0;
    }
  }, {
    key: "getClientHeight",
    value: function getClientHeight(el, margin) {
      if (el) {
        var height = el.clientHeight;

        if (margin) {
          var style = getComputedStyle(el);
          height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }

        return height;
      }

      return 0;
    }
  }, {
    key: "getViewport",
    value: function getViewport() {
      var win = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          w = win.innerWidth || e.clientWidth || g.clientWidth,
          h = win.innerHeight || e.clientHeight || g.clientHeight;
      return {
        width: w,
        height: h
      };
    }
  }, {
    key: "getOffset",
    value: function getOffset(el) {
      if (el) {
        var rect = el.getBoundingClientRect();
        return {
          top: rect.top + document.body.scrollTop,
          left: rect.left + document.body.scrollLeft
        };
      }

      return {
        top: 'auto',
        left: 'auto'
      };
    }
  }, {
    key: "generateZIndex",
    value: function generateZIndex() {
      this.zindex = this.zindex || 999;
      return ++this.zindex;
    }
  }, {
    key: "getCurrentZIndex",
    value: function getCurrentZIndex() {
      return this.zindex;
    }
  }, {
    key: "index",
    value: function index(element) {
      if (element) {
        var children = element.parentNode.childNodes;
        var num = 0;

        for (var i = 0; i < children.length; i++) {
          if (children[i] === element) return num;
          if (children[i].nodeType === 1) num++;
        }
      }

      return -1;
    }
  }, {
    key: "addMultipleClasses",
    value: function addMultipleClasses(element, className) {
      if (element) {
        if (element.classList) {
          var styles = className.split(' ');

          for (var i = 0; i < styles.length; i++) {
            element.classList.add(styles[i]);
          }
        } else {
          var _styles = className.split(' ');

          for (var _i = 0; _i < _styles.length; _i++) {
            element.className += ' ' + _styles[_i];
          }
        }
      }
    }
  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if (element) {
        if (element.classList) element.classList.add(className);else element.className += ' ' + className;
      }
    }
  }, {
    key: "removeClass",
    value: function removeClass(element, className) {
      if (element) {
        if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }, {
    key: "hasClass",
    value: function hasClass(element, className) {
      if (element) {
        if (element.classList) return element.classList.contains(className);else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
      }
    }
  }, {
    key: "find",
    value: function find(element, selector) {
      return element ? Array.from(element.querySelectorAll(selector)) : [];
    }
  }, {
    key: "findSingle",
    value: function findSingle(element, selector) {
      if (element) {
        return element.querySelector(selector);
      }

      return null;
    }
  }, {
    key: "getHeight",
    value: function getHeight(el) {
      if (el) {
        var height = el.offsetHeight;
        var style = getComputedStyle(el);
        height -= parseFloat(style.paddingTop) + parseFloat(style.paddingBottom) + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
        return height;
      }

      return 0;
    }
  }, {
    key: "getWidth",
    value: function getWidth(el) {
      if (el) {
        var width = el.offsetWidth;
        var style = getComputedStyle(el);
        width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
        return width;
      }

      return 0;
    }
  }, {
    key: "absolutePosition",
    value: function absolutePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var elementOuterHeight = elementDimensions.height;
        var elementOuterWidth = elementDimensions.width;
        var targetOuterHeight = target.offsetHeight;
        var targetOuterWidth = target.offsetWidth;
        var targetOffset = target.getBoundingClientRect();
        var windowScrollTop = this.getWindowScrollTop();
        var windowScrollLeft = this.getWindowScrollLeft();
        var viewport = this.getViewport();
        var top, left;

        if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
          top = targetOffset.top + windowScrollTop - elementOuterHeight;

          if (top < 0) {
            top = windowScrollTop;
          }
        } else {
          top = targetOuterHeight + targetOffset.top + windowScrollTop;
        }

        if (targetOffset.left + targetOuterWidth + elementOuterWidth > viewport.width) left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);else left = targetOffset.left + windowScrollLeft;
        element.style.top = top + 'px';
        element.style.left = left + 'px';
      }
    }
  }, {
    key: "relativePosition",
    value: function relativePosition(element, target) {
      if (element) {
        var elementDimensions = element.offsetParent ? {
          width: element.offsetWidth,
          height: element.offsetHeight
        } : this.getHiddenElementDimensions(element);
        var targetHeight = target.offsetHeight;
        var targetOffset = target.getBoundingClientRect();
        var viewport = this.getViewport();
        var top, left;

        if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
          top = -1 * elementDimensions.height;

          if (targetOffset.top + top < 0) {
            top = -1 * targetOffset.top;
          }
        } else {
          top = targetHeight;
        }

        if (elementDimensions.width > viewport.width) {
          // element wider then viewport and cannot fit on screen (align at left side of viewport)
          left = targetOffset.left * -1;
        } else if (targetOffset.left + elementDimensions.width > viewport.width) {
          // element wider then viewport but can be fit on screen (align at right side of viewport)
          left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
        } else {
          // element fits on screen (align with target)
          left = 0;
        }

        element.style.top = top + 'px';
        element.style.left = left + 'px';
      }
    }
  }, {
    key: "getHiddenElementOuterHeight",
    value: function getHiddenElementOuterHeight(element) {
      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementHeight = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementHeight;
      }

      return 0;
    }
  }, {
    key: "getHiddenElementOuterWidth",
    value: function getHiddenElementOuterWidth(element) {
      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        var elementWidth = element.offsetWidth;
        element.style.display = 'none';
        element.style.visibility = 'visible';
        return elementWidth;
      }

      return 0;
    }
  }, {
    key: "getHiddenElementDimensions",
    value: function getHiddenElementDimensions(element) {
      var dimensions = {};

      if (element) {
        element.style.visibility = 'hidden';
        element.style.display = 'block';
        dimensions.width = element.offsetWidth;
        dimensions.height = element.offsetHeight;
        element.style.display = 'none';
        element.style.visibility = 'visible';
      }

      return dimensions;
    }
  }, {
    key: "fadeIn",
    value: function fadeIn(element, duration) {
      if (element) {
        element.style.opacity = 0;
        var last = +new Date();
        var opacity = 0;

        var tick = function tick() {
          opacity = +element.style.opacity + (new Date().getTime() - last) / duration;
          element.style.opacity = opacity;
          last = +new Date();

          if (+opacity < 1) {
            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
          }
        };

        tick();
      }
    }
  }, {
    key: "fadeOut",
    value: function fadeOut(element, ms) {
      if (element) {
        var opacity = 1,
            interval = 50,
            duration = ms,
            gap = interval / duration;
        var fading = setInterval(function () {
          opacity -= gap;

          if (opacity <= 0) {
            opacity = 0;
            clearInterval(fading);
          }

          element.style.opacity = opacity;
        }, interval);
      }
    }
  }, {
    key: "getUserAgent",
    value: function getUserAgent() {
      return navigator.userAgent;
    }
  }, {
    key: "isIOS",
    value: function isIOS() {
      return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window['MSStream'];
    }
  }, {
    key: "isAndroid",
    value: function isAndroid() {
      return /(android)/i.test(navigator.userAgent);
    }
  }, {
    key: "appendChild",
    value: function appendChild(element, target) {
      if (this.isElement(target)) target.appendChild(element);else if (target.el && target.el.nativeElement) target.el.nativeElement.appendChild(element);else throw new Error('Cannot append ' + target + ' to ' + element);
    }
  }, {
    key: "scrollInView",
    value: function scrollInView(container, item) {
      var borderTopValue = getComputedStyle(container).getPropertyValue('borderTopWidth');
      var borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
      var paddingTopValue = getComputedStyle(container).getPropertyValue('paddingTop');
      var paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
      var containerRect = container.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      var offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
      var scroll = container.scrollTop;
      var elementHeight = container.clientHeight;
      var itemHeight = this.getOuterHeight(item);

      if (offset < 0) {
        container.scrollTop = scroll + offset;
      } else if (offset + itemHeight > elementHeight) {
        container.scrollTop = scroll + offset - elementHeight + itemHeight;
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      if (window.getSelection) {
        if (window.getSelection().empty) {
          window.getSelection().empty();
        } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
          window.getSelection().removeAllRanges();
        }
      } else if (document['selection'] && document['selection'].empty) {
        try {
          document['selection'].empty();
        } catch (error) {//ignore IE bug
        }
      }
    }
  }, {
    key: "calculateScrollbarWidth",
    value: function calculateScrollbarWidth(el) {
      if (el) {
        var style = getComputedStyle(el);
        return el.offsetWidth - el.clientWidth - parseFloat(style.borderLeftWidth) - parseFloat(style.borderRightWidth);
      } else {
        if (this.calculatedScrollbarWidth != null) return this.calculatedScrollbarWidth;
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "p-scrollbar-measure";
        document.body.appendChild(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        this.calculatedScrollbarWidth = scrollbarWidth;
        return scrollbarWidth;
      }
    }
  }, {
    key: "getBrowser",
    value: function getBrowser() {
      if (!this.browser) {
        var matched = this.resolveUserAgent();
        this.browser = {};

        if (matched.browser) {
          this.browser[matched.browser] = true;
          this.browser['version'] = matched.version;
        }

        if (this.browser['chrome']) {
          this.browser['webkit'] = true;
        } else if (this.browser['webkit']) {
          this.browser['safari'] = true;
        }
      }

      return this.browser;
    }
  }, {
    key: "resolveUserAgent",
    value: function resolveUserAgent() {
      var ua = navigator.userAgent.toLowerCase();
      var match = /(chrome)[ ]([\w.]+)/.exec(ua) || /(webkit)[ ]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ ]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
      return {
        browser: match[1] || "",
        version: match[2] || "0"
      };
    }
  }, {
    key: "isVisible",
    value: function isVisible(element) {
      return element && element.offsetParent != null;
    }
  }, {
    key: "getFocusableElements",
    value: function getFocusableElements(element) {
      var focusableElements = DomHandler.find(element, "button:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                [href][clientHeight][clientWidth]:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                input:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), select:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                textarea:not([tabindex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), [tabIndex]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden]), \n                [contenteditable]:not([tabIndex = \"-1\"]):not([disabled]):not([style*=\"display:none\"]):not([hidden])");
      var visibleFocusableElements = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = focusableElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var focusableElement = _step.value;
          if (getComputedStyle(focusableElement).display !== "none" && getComputedStyle(focusableElement).visibility !== "hidden") visibleFocusableElements.push(focusableElement);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return visibleFocusableElements;
    }
  }]);

  return DomHandler;
}();

exports.default = DomHandler;

/***/ }),

/***/ "./node_modules/primereact/components/utils/ObjectUtils.js":
/*!*****************************************************************!*\
  !*** ./node_modules/primereact/components/utils/ObjectUtils.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ObjectUtils =
/*#__PURE__*/
function () {
  function ObjectUtils() {
    _classCallCheck(this, ObjectUtils);
  }

  _createClass(ObjectUtils, null, [{
    key: "equals",
    value: function equals(obj1, obj2, field) {
      if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);else return this.deepEquals(obj1, obj2);
    }
  }, {
    key: "deepEquals",
    value: function deepEquals(a, b) {
      if (a === b) return true;

      if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
        var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i,
            length,
            key;

        if (arrA && arrB) {
          length = a.length;
          if (length !== b.length) return false;

          for (i = length; i-- !== 0;) {
            if (!this.deepEquals(a[i], b[i])) return false;
          }

          return true;
        }

        if (arrA !== arrB) return false;
        var dateA = a instanceof Date,
            dateB = b instanceof Date;
        if (dateA !== dateB) return false;
        if (dateA && dateB) return a.getTime() === b.getTime();
        var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp;
        if (regexpA !== regexpB) return false;
        if (regexpA && regexpB) return a.toString() === b.toString();
        var keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0;) {
          if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        }

        for (i = length; i-- !== 0;) {
          key = keys[i];
          if (!this.deepEquals(a[key], b[key])) return false;
        }

        return true;
      }
      /*eslint no-self-compare: "off"*/


      return a !== a && b !== b;
    }
  }, {
    key: "resolveFieldData",
    value: function resolveFieldData(data, field) {
      if (data && field) {
        if (this.isFunction(field)) {
          return field(data);
        } else if (field.indexOf('.') === -1) {
          return data[field];
        } else {
          var fields = field.split('.');
          var value = data;

          for (var i = 0, len = fields.length; i < len; ++i) {
            if (value == null) {
              return null;
            }

            value = value[fields[i]];
          }

          return value;
        }
      } else {
        return null;
      }
    }
  }, {
    key: "isFunction",
    value: function isFunction(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    }
  }, {
    key: "findDiffKeys",
    value: function findDiffKeys(obj1, obj2) {
      if (!obj1 || !obj2) {
        return {};
      }

      return Object.keys(obj1).filter(function (key) {
        return !obj2.hasOwnProperty(key);
      }).reduce(function (result, current) {
        result[current] = obj1[current];
        return result;
      }, {});
    }
  }, {
    key: "filter",
    value: function filter(value, fields, filterValue) {
      var filteredItems = [];

      if (value) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var item = _step.value;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = fields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var field = _step2.value;

                if (String(this.resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                  filteredItems.push(item);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return filteredItems;
    }
  }, {
    key: "reorderArray",
    value: function reorderArray(value, from, to) {
      var target;

      if (value && from !== to) {
        if (to >= value.length) {
          target = to - value.length;

          while (target-- + 1) {
            value.push(undefined);
          }
        }

        value.splice(to, 0, value.splice(from, 1)[0]);
      }
    }
  }, {
    key: "findIndexInList",
    value: function findIndexInList(value, list) {
      var index = -1;

      if (list) {
        for (var i = 0; i < list.length; i++) {
          if (list[i] === value) {
            index = i;
            break;
          }
        }
      }

      return index;
    }
  }, {
    key: "removeAccents",
    value: function removeAccents(str) {
      if (str && str.search(/[\xC0-\xFF]/g) > -1) {
        str = str.replace(/[\xC0-\xC5]/g, "A").replace(/[\xC6]/g, "AE").replace(/[\xC7]/g, "C").replace(/[\xC8-\xCB]/g, "E").replace(/[\xCC-\xCF]/g, "I").replace(/[\xD0]/g, "D").replace(/[\xD1]/g, "N").replace(/[\xD2-\xD6\xD8]/g, "O").replace(/[\xD9-\xDC]/g, "U").replace(/[\xDD]/g, "Y").replace(/[\xDE]/g, "P").replace(/[\xE0-\xE5]/g, "a").replace(/[\xE6]/g, "ae").replace(/[\xE7]/g, "c").replace(/[\xE8-\xEB]/g, "e").replace(/[\xEC-\xEF]/g, "i").replace(/[\xF1]/g, "n").replace(/[\xF2-\xF6\xF8]/g, "o").replace(/[\xF9-\xFC]/g, "u").replace(/[\xFE]/g, "p").replace(/[\xFD\xFF]/g, "y");
      }

      return str;
    }
  }]);

  return ObjectUtils;
}();

exports.default = ObjectUtils;

/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/next/dist/build/polyfills/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

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

/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbitingcold%5CDocuments%5CDevelopment%5Cpolicy-crud%5Cfrontend%5Cpages%5Cindex.js ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbitingcold%5CDocuments%5CDevelopment%5Cpolicy-crud%5Cfrontend%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Cbitingcold%5CDocuments%5CDevelopment%5Cpolicy-crud%5Cfrontend%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map