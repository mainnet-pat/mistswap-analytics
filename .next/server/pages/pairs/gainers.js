module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "28u2":
/***/ (function(module, exports) {

module.exports = require("@visx/curve");

/***/ }),

/***/ "2ZpW":
/***/ (function(module, exports) {

module.exports = require("date-fns/formatDistance");

/***/ }),

/***/ "2kat":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GTcf");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
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


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6wFz":
/***/ (function(module, exports) {

module.exports = require("@visx/responsive");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

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

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "Ab6/":
/***/ (function(module, exports) {

module.exports = require("@visx/marker");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "BPv4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Help");

/***/ }),

/***/ "Bjmp":
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "EYt5":
/***/ (function(module, exports) {

module.exports = require("@visx/legend");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GTcf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Kvkj");
/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("x7I7");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("KKbo");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);









function GainersPage() {
  const {
    data
  } = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["useQuery"])(app_core__WEBPACK_IMPORTED_MODULE_2__[/* gainersQuery */ "t"]);
  Object(app_core__WEBPACK_IMPORTED_MODULE_2__[/* useInterval */ "qb"])(() => {
    Object(app_core__WEBPACK_IMPORTED_MODULE_2__[/* getGainers */ "B"])();
  }, 60000);
  const pairs = data.pairs.filter(pair => {
    const positiveFees = Math.sign(pair.feesUSDGained - pair.feesUSDGainedYesterday) > 0;
    const positiveReserve = Math.sign(pair.reserveUSDGained) > 0;
    return positiveReserve && positiveFees;
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(app_components__WEBPACK_IMPORTED_MODULE_1__[/* AppShell */ "a"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("title", {
        children: "Top Gainers | MISTswap Analytics"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(app_components__WEBPACK_IMPORTED_MODULE_1__[/* GainersList */ "f"], {
      pairs: pairs
    })]
  });
}

async function getStaticProps() {
  const client = Object(app_core__WEBPACK_IMPORTED_MODULE_2__[/* getApollo */ "u"])();
  await Object(app_core__WEBPACK_IMPORTED_MODULE_2__[/* getGainers */ "B"])(client);
  return {
    props: {
      initialApolloState: client.cache.extract()
    },
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (GainersPage);

/***/ }),

/***/ "Gfb5":
/***/ (function(module, exports) {

module.exports = require("@visx/event");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "HmHm":
/***/ (function(module, exports) {

module.exports = require("@visx/mock-data/lib/generators/genDateValue");

/***/ }),

/***/ "IbbU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "JjJj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: accentColor, background, background2, default, Chart

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@visx/grid"
var grid_ = __webpack_require__("idLA");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@visx/tooltip"
var tooltip_ = __webpack_require__("g7qJ");

// EXTERNAL MODULE: ./src/core/index.js + 20 modules
var core = __webpack_require__("x7I7");

// EXTERNAL MODULE: external "d3-array"
var external_d3_array_ = __webpack_require__("RjLk");

// EXTERNAL MODULE: external "@visx/scale"
var scale_ = __webpack_require__("LsSt");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@visx/axis"
var axis_ = __webpack_require__("xRgH");

// EXTERNAL MODULE: external "@visx/shape"
var shape_ = __webpack_require__("NxG6");

// EXTERNAL MODULE: external "@visx/gradient"
var gradient_ = __webpack_require__("tcNV");

// EXTERNAL MODULE: external "@visx/group"
var group_ = __webpack_require__("dSNi");

// EXTERNAL MODULE: external "@visx/curve"
var curve_ = __webpack_require__("28u2");

// EXTERNAL MODULE: external "millify"
var external_millify_ = __webpack_require__("i9YK");
var external_millify_default = /*#__PURE__*/__webpack_require__.n(external_millify_);

// CONCATENATED MODULE: ./src/components/Area.js











function AreaChart({
  data,
  width,
  height,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  top,
  left,
  hideBottomAxis = false,
  hideLeftAxis = false,
  children,
  onTouchStart,
  onTouchMove,
  onMouseMove,
  onMouseLeave,
  xScale,
  yScale,
  yMax
}) {
  if (width < 10) return null;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
    left: left || margin.left,
    top: top || margin.top,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["GradientTealBlue"], {
      id: "gradient"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["AreaClosed"], {
      data: data,
      x: d => xScale(Object(core["T" /* getX */])(d)) || 0,
      y: d => yScale(Object(core["U" /* getY */])(d)) || 0,
      yScale: yScale,
      xScale: xScale,
      strokeWidth: 1,
      stroke: "url(#gradient)",
      fill: "url(#gradient)",
      curve: curve_["curveMonotoneX"],
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseLeave
    }), !hideBottomAxis && /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisBottom"], {
      top: yMax,
      scale: xScale,
      numTicks: width > 520 ? 10 : 5,
      stroke: core["b" /* axisColor */],
      tickStroke: core["b" /* axisColor */],
      tickLabelProps: () => core["a" /* axisBottomTickLabelProps */]
    }), !hideLeftAxis && /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisLeft"], {
      scale: yScale,
      numTicks: 5,
      tickFormat: external_millify_default.a,
      stroke: core["b" /* axisColor */],
      tickStroke: core["b" /* axisColor */],
      tickLabelProps: () => core["c" /* axisLeftTickLabelProps */]
    }), children]
  });
}
// CONCATENATED MODULE: ./src/components/Bar.js










function BarChart({
  data,
  width,
  height,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  top,
  left,
  hideBottomAxis = false,
  hideLeftAxis = false,
  children,
  onTouchStart,
  onTouchMove,
  onMouseMove,
  onMouseLeave
}) {
  // Max
  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom; // Scales

  const xScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleBand"])({
    range: [0, xMax],
    domain: data.map(core["T" /* getX */])
  }), [xMax, data]);
  const yScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    domain: [Math.min(...data.map(core["U" /* getY */])), Math.max(...data.map(core["U" /* getY */]))],
    nice: true
  }), [yMax, data]);
  if (width < 10) return null;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
    left: left,
    top: top,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["GradientTealBlue"], {
      id: "gradient"
    }), data.map(d => {
      var _yScale;

      const date = Object(core["T" /* getX */])(d);
      const barWidth = xScale.bandwidth();
      const barHeight = yMax - ((_yScale = yScale(Object(core["U" /* getY */])(d))) !== null && _yScale !== void 0 ? _yScale : 0);
      const barX = xScale(date);
      const barY = yMax - barHeight;
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["Bar"], {
        x: barX,
        y: barY,
        width: barWidth,
        height: barHeight,
        stroke: "url(#gradient)",
        fill: "url(#gradient)",
        onTouchStart: onTouchStart,
        onTouchMove: onTouchMove,
        onMouseMove: onMouseMove,
        onMouseLeave: onMouseLeave
      }, `bar-${date}`);
    }), !hideBottomAxis && /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisBottom"], {
      top: yMax,
      scale: xScale,
      numTicks: width > 520 ? 10 : 5,
      stroke: core["b" /* axisColor */],
      tickStroke: core["b" /* axisColor */],
      tickLabelProps: () => core["a" /* axisBottomTickLabelProps */]
    }), !hideLeftAxis && /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisLeft"], {
      scale: yScale,
      numTicks: 5,
      tickFormat: external_millify_default.a,
      stroke: core["b" /* axisColor */],
      tickStroke: core["b" /* axisColor */],
      tickLabelProps: () => core["c" /* axisLeftTickLabelProps */]
    }), children]
  });
}
// EXTERNAL MODULE: external "@visx/brush"
var brush_ = __webpack_require__("hblE");

// EXTERNAL MODULE: external "@visx/responsive"
var responsive_ = __webpack_require__("6wFz");

// EXTERNAL MODULE: external "@visx/pattern"
var pattern_ = __webpack_require__("cHWC");

// EXTERNAL MODULE: external "@visx/text"
var text_ = __webpack_require__("RZtx");

// EXTERNAL MODULE: external "@visx/event"
var event_ = __webpack_require__("Gfb5");

// CONCATENATED MODULE: ./src/components/Chart.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const tooltipStyles = _objectSpread(_objectSpread({}, tooltip_["defaultStyles"]), {}, {
  // background: "inherit",
  border: "1px solid initial",
  color: "initial",
  zIndex: 1702
});

const brushMargin = {
  top: 10,
  bottom: 15,
  left: 50,
  right: 20
};
const chartSeparation = 30;
const PATTERN_ID = "brush_pattern";
const accentColor = "#B93CF6";
const background = "#584153";
const background2 = "#af8baf";
const selectedBrushStyle = {
  fill: `url(#${PATTERN_ID})`,
  stroke: "currentColor"
};
function ChartContainer(props) {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Paper"], {
    variant: "outlined",
    style: {
      display: "flex",
      position: "relative",
      height: props.height,
      flex: 1
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(responsive_["ParentSize"], {
      children: ({
        width,
        height
      }) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Chart, _objectSpread(_objectSpread({}, props), {}, {
        width: width,
        height: height
      }))
    })
  });
}
function Chart({
  width,
  height,
  data,
  title = "Chart",
  margin = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  tooptip = false,
  brush = false,
  compact = false
}) {
  const {
    tooltipData,
    tooltipLeft,
    tooltipTop,
    tooltipOpen,
    showTooltip,
    hideTooltip
  } = Object(tooltip_["useTooltip"])(); // If you don't want to use a Portal, simply replace `TooltipInPortal` below with
  // `Tooltip` or `TooltipWithBounds` and remove `containerRef`

  const {
    containerRef,
    TooltipInPortal
  } = Object(tooltip_["useTooltipInPortal"])({
    // use TooltipWithBounds
    detectBounds: true,
    // when tooltip containers are scrolled, this will correctly update the Tooltip position
    scroll: true
  });
  const {
    0: filteredData,
    1: setFilteredData
  } = Object(external_react_["useState"])(data.slice(data.length - 30, data.length - 1));

  const onBrushChange = domain => {
    if (!domain) return;
    const {
      x0,
      x1,
      y0,
      y1
    } = domain;
    const dataCopy = data.filter(s => {
      const x = Object(core["T" /* getX */])(s).getTime();
      const y = Object(core["U" /* getY */])(s);
      return x > x0 && x < x1 && y > y0 && y < y1;
    });
    setFilteredData(dataCopy);
  };

  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10;
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation; // Max

  const xMax = Math.max(width - margin.left - margin.right, 0); // const yMax = Math.max(height - margin.top - margin.bottom, 0);

  const yMax = Math.max(topChartHeight, 0); // Scales

  const xScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleTime"])({
    range: [0, xMax],
    // domain: [Math.min(...data.map(getX)), Math.max(...data.map(getX))],
    domain: Object(external_d3_array_["extent"])(filteredData, core["T" /* getX */])
  }), [xMax, filteredData]);
  const yScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    domain: [Math.min(...filteredData.map(d => Object(core["U" /* getY */])(d))), Math.max(...filteredData.map(d => Object(core["U" /* getY */])(d)))],
    nice: true
  }), [yMax, filteredData]); // tooltip handler

  const handleTooltip = Object(external_react_["useCallback"])(event => {
    const {
      x
    } = Object(event_["localPoint"])(event) || {
      x: 0
    };
    const x0 = xScale.invert(x - margin.left);
    const index = Object(core["g" /* bisectDate */])(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;

    if (d1 && Object(core["T" /* getX */])(d1)) {
      d = x0.valueOf() - Object(core["T" /* getX */])(d0).valueOf() > Object(core["T" /* getX */])(d1).valueOf() - x0.valueOf() ? d1 : d0;
    }

    showTooltip({
      tooltipData: d,
      tooltipLeft: x,
      tooltipTop: yScale(Object(core["U" /* getY */])(d)) + margin.top
    });
  }, [showTooltip, yScale, xScale]);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(bottomChartHeight - brushMargin.top - brushMargin.bottom, 0);
  const brushDateScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleTime"])({
    range: [0, xBrushMax],
    domain: Object(external_d3_array_["extent"])(data, core["T" /* getX */])
  }), [xBrushMax]);
  const brushStockScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yBrushMax, 0],
    domain: [0, Object(external_d3_array_["max"])(data, core["U" /* getY */]) || 0],
    nice: true
  }), [yBrushMax]);
  const initialBrushPosition = Object(external_react_["useMemo"])(() => ({
    start: {
      x: brushDateScale(Object(core["T" /* getX */])(data[data.length >= 30 ? data.length - 30 : 0]))
    },
    end: {
      x: brushDateScale(Object(core["T" /* getX */])(data[data.length - 1]))
    }
  }), [brushDateScale]);

  if (width < 10) {
    return null;
  }

  return (
    /*#__PURE__*/
    // Set `ref={containerRef}` on the element corresponding to the coordinate system that
    // `left/top` (passed to `TooltipInPortal`) are relative to.
    Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
        ref: containerRef,
        width: width,
        height: height,
        children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_["Text"], {
          y: 24,
          x: width / 2,
          width: width,
          height: 16,
          verticalAnchor: "start",
          textAnchor: "middle",
          fill: "currentColor",
          children: title
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(grid_["GridRows"], {
          top: margin.top,
          left: margin.left,
          scale: yScale,
          width: xMax,
          height: yMax,
          strokeDasharray: "1,3",
          stroke: "currentColor",
          strokeOpacity: 0.2,
          pointerEvents: "none"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(grid_["GridColumns"], {
          top: margin.top,
          left: margin.left,
          scale: xScale,
          height: yMax,
          strokeDasharray: "1,3",
          stroke: "currentColor",
          strokeOpacity: 0.2,
          pointerEvents: "none"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AreaChart, {
          hideBottomAxis: compact,
          onTouchStart: handleTooltip,
          onTouchMove: handleTooltip,
          onMouseMove: handleTooltip,
          onMouseLeave: hideTooltip,
          data: filteredData,
          width: width,
          margin: _objectSpread(_objectSpread({}, margin), {}, {
            bottom: topChartBottomMargin
          }),
          fill: "url(#teal)",
          yMax: yMax,
          xScale: xScale,
          yScale: yScale
        }), brush && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AreaChart, {
          hideBottomAxis: true,
          hideLeftAxis: true,
          data: data,
          width: width,
          yMax: yBrushMax,
          xScale: brushDateScale,
          yScale: brushStockScale,
          margin: brushMargin,
          top: topChartHeight + topChartBottomMargin + margin.top,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(pattern_["PatternLines"], {
            id: PATTERN_ID,
            height: 8,
            width: 8,
            stroke: accentColor,
            strokeWidth: 1,
            orientation: ["diagonal"]
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(brush_["Brush"], {
            xScale: brushDateScale,
            yScale: brushStockScale,
            width: xBrushMax,
            height: yBrushMax,
            margin: brushMargin,
            handleSize: 8,
            resizeTriggerAreas: ["left", "right"],
            brushDirection: "horizontal",
            initialBrushPosition: initialBrushPosition,
            onChange: onBrushChange,
            onClick: () => setFilteredData(data),
            selectedBoxStyle: selectedBrushStyle
          })]
        }), tooltipData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: tooltipLeft,
            cy: tooltipTop + 1,
            r: 4,
            fill: "black",
            fillOpacity: 0.1,
            stroke: "black",
            strokeOpacity: 0.1,
            strokeWidth: 2,
            pointerEvents: "none"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
            cx: tooltipLeft,
            cy: tooltipTop,
            r: 4,
            fill: "black",
            stroke: "white",
            strokeWidth: 2,
            pointerEvents: "none"
          })]
        })]
      }), tooptip && tooltipOpen && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(TooltipInPortal, {
          top: tooltipTop - 12,
          left: tooltipLeft + 12,
          style: tooltipStyles,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "subtitle2",
            children: external_millify_default()(Object(core["U" /* getY */])(tooltipData))
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "body2",
            children: Object(core["r" /* formatDate */])(Object(core["T" /* getX */])(tooltipData))
          })]
        }, Math.random())
      })]
    })
  );
}

/***/ }),

/***/ "KKV7":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/AvatarGroup");

/***/ }),

/***/ "KKbo":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "Kvkj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ components_AppShell; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ components_AreaChart; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ BarChart; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ BasicTable; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ components_Curves; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ GainersList; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ components_IntoTheBlock; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ components_KPI; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ components_Link; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ LiquidityProviderList; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ LosersList; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ PageHeader; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ PairIcon; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ PairTable; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ Percent; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ PoolTable; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ Search; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ TokenIcon; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ TokenTable; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ Transactions; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ Loading; });

// UNUSED EXPORTS: AddressAvatar, AppBar, AppFooter, AppNavigation, Areas, Chart, ChartOverlay, Difference, Lines, Sushi, SortableTable, SortableTableHead

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__("KKbo");

// EXTERNAL MODULE: external "@material-ui/core/colors"
var colors_ = __webpack_require__("+FwM");

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./src/components/AddressAvatar.js




const useStyles = Object(styles_["makeStyles"])(theme => ({
  avatar: {
    color: theme.palette.getContrastText(colors_["deepPurple"][500]),
    backgroundColor: colors_["deepPurple"][500],
    marginRight: theme.spacing(2)
  }
}));
function AddressAvatar(props) {
  const classes = useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], {
    variant: "rounded",
    className: classes.avatar,
    children: props.address.slice(0, 3)
  });
}
// EXTERNAL MODULE: external "@material-ui/icons"
var icons_ = __webpack_require__("2kat");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/SvgIcon"
var SvgIcon_ = __webpack_require__("MYXB");
var SvgIcon_default = /*#__PURE__*/__webpack_require__.n(SvgIcon_);

// CONCATENATED MODULE: ./src/components/Sushi.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function Sushi(props) {
  const theme = Object(core_["useTheme"])();
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(SvgIcon_default.a, _objectSpread(_objectSpread({}, props), {}, {
    fontSize: "default",
    viewBox: "0 0 121 150",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M60.1445 0.507307L0.271179 33.1313L60.1525 65.79L120.021 33.1313L60.1445 0.507307Z",
      fill: theme.palette.rice.main
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M60.1472 21.7833L39.3005 33.1446L60.1472 44.514L80.9992 33.1446L60.1472 21.7833Z",
      fill: theme.palette.filling.main
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("path", {
      d: "M60.2018 65.7899L0.329834 33.1312V117.249L60.1978 149.907L120.07 117.249V33.1312L60.2018 65.7899Z",
      fill: theme.palette.seaweed.main,
      stroke: theme.palette.rice.main,
      strokeWidth: 1
    })]
  }));
}
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: ./src/core/index.js + 20 modules
var core = __webpack_require__("x7I7");

// CONCATENATED MODULE: ./src/core/hooks/useDetect.js


const getDetect = userAgent => {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));

  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));

  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));

  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));

  const isSSR = () => Boolean(userAgent.match(/SSR/i));

  const isMobile = () => Boolean(isAndroid() || isIos() || isOpera() || isWindows());

  const isDesktop = () => Boolean(!isMobile() && !isSSR());

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR
  };
};

const useDetect = () => {
  Object(external_react_["useEffect"])(() => {}, []);
  const userAgent = typeof navigator === "undefined" ? "SSR" : navigator.userAgent;
  return getDetect(userAgent);
};

/* harmony default export */ var hooks_useDetect = (useDetect);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/components/AppBar.js












const AppBar_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.up("sm")]: {// width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    borderBottom: theme.palette.type === "light" ? "1px solid rgba(5, 7, 9, 0.12)" : "1px solid rgba(255, 255, 255, 0.12)"
  },
  logo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    // margin: "0 auto",
    justifyContent: "flex-start",
    // textAlign: "center",
    // [theme.breakpoints.up("sm")]: {
    //   justifyContent: "flex-center",
    // },
    [theme.breakpoints.up("sm")]: {
      justifyContent: "start"
    }
  },
  logoCentered: {
    justifyContent: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  }
}));
function AppBar({
  children,
  onToggleSidebar,
  open,
  mobileOpen
}) {
  const classes = AppBar_useStyles();
  const theme = Object(styles_["useTheme"])();
  const router = Object(router_["useRouter"])();
  const darkMode = Object(client_["useReactiveVar"])(core["k" /* darkModeVar */]);
  const matches = Object(core_["useMediaQuery"])(theme.breakpoints.up("sm"));

  function onToggleDarkMode() {
    // console.log("toggleDarkMode");
    const value = !Object(core["k" /* darkModeVar */])();
    Object(core["k" /* darkModeVar */])(value);

    if (!value) {
      document.documentElement.classList.remove(["dark-theme"]); // document.documentElement.style.background = "#fafafa";

      document.documentElement.style.color = "rgba(0, 0, 0, 0.87)"; // document.body.style.background = "#fafafa";
      // document.body.style.color = "rgba(0, 0, 0, 0.87)";
    } else {
      document.documentElement.classList.add(["dark-theme"]); // document.documentElement.style.background = "#303030";

      document.documentElement.style.color = "#FFFFFF"; // document.body.style.background = "#303030";
      // document.body.style.color = "#FFFFFF";
    } // Last


    localStorage.setItem("darkMode", value);
  }

  const page = router.pathname === "/" ? "Dashboard" : router.pathname.split("/")[1];
  const {
    isDesktop
  } = hooks_useDetect();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["AppBar"], {
    position: "fixed",
    color: "transparent",
    color: "inherit",
    elevation: 0,
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Toolbar"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
        color: "default",
        "aria-label": "open drawer",
        edge: "start",
        onClick: onToggleSidebar,
        className: classes.menuButton,
        children: open && isDesktop || mobileOpen && !matches ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["CloseOutlined"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Menu"], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: external_clsx_default()(classes.logo, {
          [classes.logoCentered]: !open && matches
        }),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Hidden"], {
          xsDown: true,
          implementation: "css",
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
              edge: false,
              onClick: () => router.push("/"),
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sushi, {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
              variant: "subtitle1",
              color: "textPrimary",
              noWrap: true,
              children: "MISTswap Analytics"
            })]
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "h6",
          color: "textPrimary",
          noWrap: true,
          style: {
            marginLeft: 8,
            marginRight: 8
          },
          children: "/"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "subtitle1",
          color: "textPrimary",
          noWrap: true,
          children: page.charAt(0).toUpperCase() + page.slice(1)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Tooltip"], {
        title: "Toggle theme",
        enterDelay: 300,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
          edge: "end",
          onClick: onToggleDarkMode,
          color: "default",
          "aria-label": "theme toggle",
          children: !darkMode ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Brightness4Outlined"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["Brightness7Outlined"], {})
        })
      })]
    })
  });
}
// EXTERNAL MODULE: external "@material-ui/core/Box"
var Box_ = __webpack_require__("ZkBw");
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);

// EXTERNAL MODULE: external "@material-ui/core/Link"
var Link_ = __webpack_require__("MCme");
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./src/components/AppFooter.js







const AppFooter_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    margin: theme.spacing(4, 0)
  }
}));
function AppFooter() {
  const classes = AppFooter_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Box_default.a, {
      component: "footer",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Box_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Typography_default.a, {
          variant: "body2",
          color: "textSecondary",
          align: "center",
          children: ["Copyright © ", /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, {
            color: "inherit",
            href: "/",
            children: "MISTswap Analytics"
          }), " ", new Date().getFullYear(), "."]
        })
      })
    })
  });
}
// CONCATENATED MODULE: ./src/components/AppNavigation.js








const drawerWidth = 240;
const AppNavigation_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  list: {// "& > *": {
    //   paddingLeft: theme.spacing(3),
    // },
  },
  nested: {
    paddingLeft: theme.spacing(3)
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar
}));
function AppNavigation() {
  const classes = AppNavigation_useStyles();
  const theme = Object(styles_["useTheme"])();
  const router = Object(router_["useRouter"])();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(true);
  const [dialogOpen, setDialogOpen] = external_react_default.a.useState(false);
  const [address, setAddress] = external_react_default.a.useState("");

  const handleClickOpen = () => {
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    classes: classes.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: classes.toolbar,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Hidden"], {
        smUp: true,
        implementation: "css",
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          display: "flex",
          alignItems: "center",
          py: 0.5,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["IconButton"], {
            edge: false,
            onClick: () => router.push("/"),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sushi, {})
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
            variant: "subtitle1",
            color: "textPrimary",
            noWrap: true,
            children: "MIST Analytics"
          })]
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["List"], {
      className: classes.list // aria-labelledby="nested-list-subheader"
      // subheader={
      //   <ListSubheader component="div" id="nested-list-subheader">
      //     Overview
      //   </ListSubheader>
      // }
      ,
      direction: "horizontal",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
        button: true,
        selected: router.pathname === "/",
        onClick: () => router.push("/"),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DashboardOutlined"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
          primary: "Dashboard"
        })]
      }, "/"), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
        button: true,
        selected: router.pathname === "/bar",
        onClick: () => router.push("/bar"),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["FastfoodOutlined"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
          primary: "Bar"
        })]
      }, "/bar"), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["WavesOutlined"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
          primary: "Pools"
        }), open ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["ExpandLess"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["ExpandMore"], {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Collapse"], {
        in: open,
        timeout: "auto",
        unmountOnExit: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["List"], {
          component: "div",
          disablePadding: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
            button: true,
            selected: router.pathname === "/pools/recent",
            onClick: () => router.push("/pools/recent"),
            className: classes.nested,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["FiberNewOutlined"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
              primary: "Recent"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
            button: true,
            selected: router.pathname === "/pools",
            onClick: () => router.push("/pools"),
            className: classes.nested,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DetailsOutlined"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
              primary: "All"
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["LinkOutlined"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
          primary: "Pairs"
        }), open ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["ExpandLess"], {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["ExpandMore"], {})]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Collapse"], {
        in: open,
        timeout: "auto",
        unmountOnExit: true,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["List"], {
          component: "div",
          disablePadding: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs/recent",
            onClick: () => router.push("/pairs/recent"),
            className: classes.nested,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["FiberNewOutlined"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
              primary: "Recent"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs",
            onClick: () => router.push("/pairs"),
            className: classes.nested,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["DetailsOutlined"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
              primary: "All"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs/gainers",
            onClick: () => router.push("/pairs/gainers"),
            className: classes.nested,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["TrendingUpOutlined"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
              primary: "Gainers"
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
            button: true,
            selected: router.pathname === "/pairs/losers",
            onClick: () => router.push("/pairs/losers"),
            className: classes.nested,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["TrendingDownOutlined"], {})
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
              primary: "Losers"
            })]
          })]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
        button: true,
        selected: router.pathname.includes("tokens"),
        onClick: () => router.push("/tokens"),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["MoneyOutlined"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
          primary: "Tokens"
        })]
      }, "/tokens"), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["ListItem"], {
        button: true,
        selected: router.pathname.includes("/portfolio"),
        onClick: () => {
          const defaultAddress = localStorage.getItem("defaultAddress");

          if (defaultAddress) {
            router.push("/users/" + defaultAddress);
          } else {
            handleClickOpen();
          }
        },
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemIcon"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(icons_["AccountTreeOutlined"], {})
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["ListItemText"], {
          primary: "Portfolio"
        })]
      }, "/portfolio")]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Dialog"], {
      maxWidth: "sm",
      open: dialogOpen,
      onClose: handleClose,
      "aria-labelledby": "form-dialog-title",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["DialogTitle"], {
        id: "form-dialog-title",
        children: "Portfolio"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["DialogContent"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["DialogContentText"], {
          children: "Enter an address and click load."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TextField"], {
          autoFocus: true,
          margin: "dense",
          id: "address",
          label: "Address",
          type: "text",
          onChange: event => {
            setAddress(event.target.value);
          },
          fullWidth: true
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["DialogActions"], {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          onClick: handleClose,
          color: "primary",
          children: "Cancel"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          onClick: () => {
            localStorage.setItem("defaultAddress", address);
            router.push("/users/" + address);
            handleClose();
          },
          color: "primary",
          children: "Load"
        })]
      })]
    })]
  });
}
// CONCATENATED MODULE: ./src/components/AppShell.js









const AppShell_drawerWidth = 240;
const AppShell_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    display: "flex"
  },
  // drawer: {
  //   [theme.breakpoints.up("sm")]: {
  //     width: drawerWidth,
  //     flexShrink: 0,
  //   },
  // },
  // drawerPaper: {
  //   background: "transparent",
  //   width: drawerWidth,
  //   border: 0,
  // },
  hide: {
    display: "none"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: AppShell_drawerWidth,
      flexShrink: 0
    }
  },
  drawerPaper: {
    width: AppShell_drawerWidth
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaperMobile: {
    width: AppShell_drawerWidth,
    border: 0
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.leavingScreen,
    // }),
    // marginLeft: -drawerWidth,
    padding: theme.spacing(3, 0),
    flexGrow: 1,
    width: "100%",
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: -AppShell_drawerWidth
  },
  contentShift: {
    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
    marginLeft: 0,
    width: `calc(100% - ${AppShell_drawerWidth}px)`
  }
}));

function AppShell(props) {
  const {
    window,
    children
  } = props;
  const classes = AppShell_useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    0: mobileOpen,
    1: setMobileOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(true);
  const matches = Object(core_["useMediaQuery"])(theme.breakpoints.up("sm"));
  const container = window !== undefined ? () => window().document.body : undefined;

  const onToggleSidebar = () => {
    if (!matches) {
      setMobileOpen(!mobileOpen);
    } else {
      setOpen(!open);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AppBar, {
      onToggleSidebar: onToggleSidebar,
      open: open,
      mobileOpen: mobileOpen
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("nav", {
      className: classes.drawer,
      "aria-label": "navigation",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Hidden"], {
        smUp: true,
        implementation: "js",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Drawer"], {
          container: container,
          variant: "temporary",
          anchor: "left",
          open: mobileOpen,
          onClose: onToggleSidebar,
          classes: {
            paper: classes.drawerPaperMobile
          },
          ModalProps: {
            keepMounted: true // Better open performance on mobile.

          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppNavigation, {})
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Hidden"], {
        xsDown: true,
        implementation: "css",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Drawer"], {
          className: classes.drawer,
          variant: "persistent",
          anchor: "left",
          open: open,
          transitionDuration: 0,
          classes: {
            paper: classes.drawerPaper
          },
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AppNavigation, {})
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      className: external_clsx_default()(classes.content, {
        [classes.contentShift]: open || !matches
      }),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: classes.toolbar
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Container"], {
        maxWidth: "xl",
        children: children
      })]
    })]
  });
}

/* harmony default export */ var components_AppShell = (AppShell);
// EXTERNAL MODULE: external "@visx/shape"
var shape_ = __webpack_require__("NxG6");

// EXTERNAL MODULE: external "@visx/axis"
var axis_ = __webpack_require__("xRgH");

// EXTERNAL MODULE: external "@visx/gradient"
var gradient_ = __webpack_require__("tcNV");

// EXTERNAL MODULE: external "@visx/marker"
var marker_ = __webpack_require__("Ab6/");

// EXTERNAL MODULE: external "d3-array"
var external_d3_array_ = __webpack_require__("RjLk");

// EXTERNAL MODULE: external "@visx/scale"
var scale_ = __webpack_require__("LsSt");

// EXTERNAL MODULE: external "d3-time-format"
var external_d3_time_format_ = __webpack_require__("mBQT");

// EXTERNAL MODULE: external "@visx/group"
var group_ = __webpack_require__("dSNi");

// EXTERNAL MODULE: external "@visx/text"
var text_ = __webpack_require__("RZtx");

// EXTERNAL MODULE: external "@visx/curve"
var curve_ = __webpack_require__("28u2");

// EXTERNAL MODULE: external "millify"
var external_millify_ = __webpack_require__("i9YK");
var external_millify_default = /*#__PURE__*/__webpack_require__.n(external_millify_);

// EXTERNAL MODULE: external "@visx/responsive"
var responsive_ = __webpack_require__("6wFz");

// CONCATENATED MODULE: ./src/components/Areas.js



















const parseDate = Object(external_d3_time_format_["timeParse"])("%Y-%m-%d");
const Areas_format = Object(external_d3_time_format_["timeFormat"])("%b %d");

const formatDate = date => Areas_format(parseDate(date)); // data accessors
// const getX = (d) => new Date(d.time);


const getX = d => new Date(d.time);

const getY = d => d.value;

const ordinalColorScale = Object(scale_["scaleOrdinal"])({
  domain: ["xSushi Age", "xSushi Age Destroyed"],
  range: [colors_["green"][500], colors_["red"][500]]
});
const Areas = Object(responsive_["withParentSize"])(({
  parentWidth,
  parentHeight,
  margin,
  data
}) => {
  const allData = data.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
  const xMax = parentWidth - margin.left - margin.right;
  const yMax = parentHeight - margin.top - margin.bottom; // scales

  const xScale = Object(scale_["scaleUtc"])({
    range: [0, xMax],
    // domain: extent(allData, getX),
    // domain: extent(data, getDate),
    domain: [Math.min(...allData.map(getX)), Math.max(...allData.map(getX))]
  });
  const yScale = Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    // domain: [0, max(allData, getY)],
    domain: [Math.min(...allData.map(d => getY(d))), Math.max(...allData.map(d => getY(d)))],
    nice: true
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: {
      position: "relative"
    },
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      width: parentWidth,
      height: parentHeight,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["GradientTealBlue"], {
        id: "gradient"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["LinearGradient"], {
        id: "positive",
        from: "#43e97b",
        to: "#43e97b",
        rotate: "0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["LinearGradient"], {
        id: "negative",
        from: "#ff0844",
        to: "#ffb199",
        rotate: "0"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
        left: margin.left,
        right: margin.right,
        children: [parentWidth > 8 && data.map((areaData, i) => {
          const even = i % 2 === 0;
          let markerStart = even ? "url(#marker-cross)" : "url(#marker-x)";
          if (i === 1) markerStart = "url(#marker-line)";
          const markerEnd = even ? "url(#marker-arrow)" : "url(#marker-arrow-odd)";
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(group_["Group"], {
            top: margin.top // left={margin.left}
            // right={margin.right}
            ,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["AreaClosed"], {
              data: areaData,
              x: d => xScale(getX(d)) || 0,
              y: d => yScale(getY(d)) || 0,
              yScale: yScale,
              strokeWidth: 2,
              stroke: `url(#${i % 2 === 0 ? "positive" : "negative"})`,
              fill: `url(#${i % 2 === 0 ? "positive" : "negative"})`,
              curve: curve_["curveMonotoneX"]
            })
          }, `chart-${i}`);
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisBottom"], {
          top: yMax + margin.top,
          scale: xScale,
          stroke: "currentColor",
          tickStroke: "currentColor",
          tickFormat: (v, i) => parentWidth > 800 || i % 2 === 0 ? Object(external_d3_time_format_["timeFormat"])("%b %d")(v) : "",
          tickLabelProps: () => ({
            fill: "currentColor",
            fontSize: 11,
            textAnchor: "middle"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisLeft"], {
          scale: yScale,
          top: margin.top // left={margin.left}
          ,
          tickFormat: external_millify_default.a,
          stroke: "currentColor",
          tickStroke: "currentColor",
          tickLabelProps: () => ({
            fill: "currentColor",
            fontSize: 11,
            textAnchor: "end",
            verticalAnchor: "middle"
          })
        })]
      })]
    })
  });
});
/* harmony default export */ var components_Areas = (Areas);
// EXTERNAL MODULE: external "@visx/grid"
var grid_ = __webpack_require__("idLA");

// EXTERNAL MODULE: external "@visx/tooltip"
var tooltip_ = __webpack_require__("g7qJ");

// CONCATENATED MODULE: ./src/components/ChartOverlay.js






const ChartOverlay_formatDate = Object(external_d3_time_format_["timeFormat"])("%b %d, '%y");
const ChartOverlay_useStyles = Object(core_["makeStyles"])(theme => ({
  filter: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row"
    }
  }
}));
function ChartOverlay({
  overlay,
  onTimespanChange
}) {
  const {
    title,
    value,
    date
  } = overlay;
  const theme = Object(styles_["useTheme"])();
  const classes = ChartOverlay_useStyles();
  const matches = Object(core_["useMediaQuery"])(theme.breakpoints.up("sm"));
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: "absolute",
        top: 24,
        left: 24
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        variant: "subtitle2",
        color: "textSecondary",
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        variant: "h5",
        color: "textPrimary",
        children: value
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        variant: "subtitle1",
        color: "textSecondary",
        children: ChartOverlay_formatDate(date * 1e3)
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "absolute",
        top: 20,
        right: 12
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.filter,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          type: "button",
          value: "1W",
          "aria-label": "1 week timespan",
          variant: "text",
          size: "small",
          color: "primary",
          onClick: onTimespanChange,
          children: "1W"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          type: "button",
          value: "1M",
          "aria-label": "1 month timespan",
          variant: "text",
          size: "small",
          color: "primary",
          onClick: onTimespanChange,
          children: "1M"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Button"], {
          type: "button",
          value: "ALL",
          "aria-label": "ALL timespan",
          variant: "text",
          size: "small",
          color: "primary",
          onClick: onTimespanChange,
          children: "ALL"
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: external "@visx/event"
var event_ = __webpack_require__("Gfb5");

// CONCATENATED MODULE: ./src/components/AreaChart.js



function AreaChart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AreaChart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AreaChart_ownKeys(Object(source), true).forEach(function (key) { AreaChart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AreaChart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AreaChart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const tooltipStyles = AreaChart_objectSpread(AreaChart_objectSpread({}, tooltip_["defaultStyles"]), {}, {
  background: "#fff",
  border: "1px solid white",
  color: "inherit",
  zIndex: 1702
});

const getDate = d => new Date(d === null || d === void 0 ? void 0 : d.date);

const bisectDate = Object(external_d3_array_["bisector"])(d => new Date(d === null || d === void 0 ? void 0 : d.date)).left;

const getValue = d => d === null || d === void 0 ? void 0 : d.value;

const AreaChart_formatDate = Object(external_d3_time_format_["timeFormat"])("%b %d, '%y");

function AreaChart({
  data,
  tooltipDisabled = false,
  overlayEnabled = false,
  title = "",
  width,
  height,
  showTooltip,
  hideTooltip,
  tooltipData,
  tooltipTop = 0,
  tooltipLeft = 0,
  onTimespanChange,
  margin = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
}) {
  var _data, _data2;

  const {
    0: timespan,
    1: setTimespan
  } = Object(external_react_["useState"])(Object(core["Y" /* oneMonth */])());

  function onTimespanChange(e) {
    if (e.currentTarget.value === "ALL") {
      setTimespan(62802180);
    } else if (e.currentTarget.value === "1W") {
      setTimespan(Object(core["Z" /* oneWeek */])());
    } else if (e.currentTarget.value === "1M") {
      setTimespan(Object(core["Y" /* oneMonth */])());
    }
  } // console.log('area', { data, length: data.length, timespan })


  data = data.filter(d => timespan <= d.date); // console.log({ data: data[data.length - 1]})

  const {
    0: overlay,
    1: setOverlay
  } = Object(external_react_["useState"])({
    title,
    value: core["j" /* currencyFormatter */].format((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.value),
    date: (_data2 = data[data.length - 1]) === null || _data2 === void 0 ? void 0 : _data2.date
  }); // Max

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom; // Scales

  const xScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleTime"])({
    range: [0, xMax],
    domain: [Math.min(...data.map(getDate)), Math.max(...data.map(getDate))]
  }), [xMax, data]);
  const yScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    domain: [Math.min(...data.map(d => getValue(d))), Math.max(...data.map(d => getValue(d)))],
    nice: true
  }), [yMax, data]); // tooltip handler

  const handleTooltip = Object(external_react_["useCallback"])(event => {
    var _d, _d2;

    const {
      x
    } = Object(event_["localPoint"])(event) || {
      x: 0
    };
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;

    if (d1 && getDate(d1)) {
      d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0;
    } // console.log("show ", d);


    setOverlay(AreaChart_objectSpread(AreaChart_objectSpread({}, overlay), {}, {
      value: core["j" /* currencyFormatter */].format((_d = d) === null || _d === void 0 ? void 0 : _d.value),
      date: (_d2 = d) === null || _d2 === void 0 ? void 0 : _d2.date
    }));
    showTooltip({
      tooltipData: d,
      tooltipLeft: x,
      tooltipTop: yScale(getValue(d))
    });
  }, [showTooltip, yScale, xScale]);
  if (width < 10) return null;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      position: "relative"
    },
    children: [overlayEnabled && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChartOverlay, {
      overlay: overlay,
      onTimespanChange: onTimespanChange
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      width: width,
      height: height,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["GradientTealBlue"], {
        id: "teal",
        fromOffset: 0.5
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(group_["Group"], {
        top: margin.top,
        left: margin.left,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["AreaClosed"], {
          data: data,
          x: d => xScale(getDate(d)),
          y: d => yScale(getValue(d)),
          yScale: yScale,
          fill: "url(#teal)"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["Bar"], {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent",
        rx: 14,
        onTouchStart: handleTooltip,
        onTouchMove: handleTooltip,
        onMouseMove: handleTooltip,
        onMouseLeave: () => {
          var _data3, _data4;

          hideTooltip();
          setOverlay(AreaChart_objectSpread(AreaChart_objectSpread({}, overlay), {}, {
            value: core["j" /* currencyFormatter */].format((_data3 = data[data.length - 1]) === null || _data3 === void 0 ? void 0 : _data3.value),
            date: (_data4 = data[data.length - 1]) === null || _data4 === void 0 ? void 0 : _data4.date
          }));
        }
      }), tooltipData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
        top: margin.top,
        left: margin.left,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
          cx: tooltipLeft,
          cy: tooltipTop + 1,
          r: 4,
          fill: "black",
          fillOpacity: 0.1,
          stroke: "black",
          strokeOpacity: 0.1,
          strokeWidth: 2,
          pointerEvents: "none"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
          cx: tooltipLeft,
          cy: tooltipTop,
          r: 4,
          fill: colors_["deepPurple"][400],
          stroke: "white",
          strokeWidth: 2,
          pointerEvents: "none"
        })]
      })]
    }), !tooltipDisabled && tooltipData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(tooltip_["Tooltip"], {
        top: margin.top + tooltipTop - 12,
        left: tooltipLeft + 12,
        style: tooltipStyles,
        children: `$${external_millify_default()(getValue(tooltipData))}`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(tooltip_["Tooltip"], {
        top: yMax + margin.top - 14,
        left: tooltipLeft,
        style: AreaChart_objectSpread(AreaChart_objectSpread({}, tooltip_["defaultStyles"]), {}, {
          minWidth: 90,
          textAlign: "center",
          transform: "translateX(-50%)"
        }),
        children: AreaChart_formatDate(getDate(tooltipData))
      })]
    })]
  });
}

/* harmony default export */ var components_AreaChart = (Object(tooltip_["withTooltip"])(AreaChart));
// EXTERNAL MODULE: external "@visx/mock-data/lib/mocks/letterFrequency"
var letterFrequency_ = __webpack_require__("hyhg");

// CONCATENATED MODULE: ./src/components/BarChart.js



function BarChart_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BarChart_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BarChart_ownKeys(Object(source), true).forEach(function (key) { BarChart_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BarChart_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BarChart_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const accentColor = "#a18cd1";
const accentColor2 = "#fbc2eb"; // const data = letterFrequency.slice(5);

const verticalMargin = 120; // accessors

const BarChart_getDate = d => new Date(d.date);

const BarChart_getValue = d => Number(d.value);

const BarChart_formatDate = Object(external_d3_time_format_["timeFormat"])("%b %d, '%y");
let tooltipTimeout;

const BarChart_tooltipStyles = BarChart_objectSpread(BarChart_objectSpread({}, tooltip_["defaultStyles"]), {}, {
  minWidth: 60,
  background: "white",
  border: "1px solid white",
  color: "inherit",
  zIndex: 1702
});

function BarChart({
  width,
  height,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  data,
  events = false,
  tooltipDisabled = false,
  overlayEnabled = false,
  title = ""
}) {
  var _data, _data2;

  const {
    tooltipOpen,
    tooltipTop,
    tooltipLeft,
    tooltipData,
    hideTooltip,
    showTooltip
  } = Object(tooltip_["useTooltip"])();
  const {
    containerRef,
    TooltipInPortal
  } = Object(tooltip_["useTooltipInPortal"])();
  const {
    0: timespan,
    1: setTimespan
  } = Object(external_react_["useState"])(Object(core["Y" /* oneMonth */])());

  function onTimespanChange(e) {
    if (e.currentTarget.value === "ALL") {
      setTimespan(62802180);
    } else if (e.currentTarget.value === "1W") {
      setTimespan(Object(core["Z" /* oneWeek */])());
    } else if (e.currentTarget.value === "1M") {
      setTimespan(Object(core["Y" /* oneMonth */])());
    }
  } // console.log('bar', { data, length: data.length, timespan })


  data = data.filter(d => timespan <= d.date);
  const {
    0: overlay,
    1: setOverlay
  } = Object(external_react_["useState"])({
    title,
    value: core["j" /* currencyFormatter */].format((_data = data[data.length - 1]) === null || _data === void 0 ? void 0 : _data.value),
    date: (_data2 = data[data.length - 1]) === null || _data2 === void 0 ? void 0 : _data2.date
  }); // bounds

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom; // scales, memoize for performance

  const xScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleBand"])({
    range: [0, xMax],
    domain: data.map(BarChart_getDate)
  }), [xMax, data]);
  const yScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    domain: [Math.min(...data.map(d => BarChart_getValue(d))), Math.max(...data.map(d => BarChart_getValue(d)))],
    nice: true
  }), [yMax, data]);

  if (width < 10) {
    return null;
  } // console.log("tooltip data", tooltipData);


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      position: "relative"
    },
    children: [overlayEnabled && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ChartOverlay, {
      overlay: overlay,
      onTimespanChange: onTimespanChange
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      ref: containerRef,
      width: width,
      height: height,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(gradient_["GradientTealBlue"], {
        id: "bar-gradient"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        width: width,
        height: height,
        fill: "transparent" // fill="url(#teal)"
        // rx={14}

      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(group_["Group"], {
        top: margin.top,
        children: data.map(d => {
          var _yScale;

          const date = BarChart_getDate(d);
          const barWidth = xScale.bandwidth();
          const barHeight = yMax - ((_yScale = yScale(BarChart_getValue(d))) !== null && _yScale !== void 0 ? _yScale : 0);
          const barX = xScale(date);
          const barY = yMax - barHeight;
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["Bar"], {
            x: barX,
            y: barY,
            width: barWidth,
            height: barHeight // fill="#7c4dff"
            ,
            fill: "url(#bar-gradient)",
            onClick: () => {
              if (events) alert(`clicked: ${JSON.stringify(Object.values(d))}`);
            } // onClick={() => {
            //   if (events) alert(`clicked: ${JSON.stringify(bar)}`);
            // }}
            ,
            onMouseLeave: () => {
              tooltipTimeout = window.setTimeout(() => {
                hideTooltip();
                setOverlay(BarChart_objectSpread(BarChart_objectSpread({}, overlay), {}, {
                  value: core["j" /* currencyFormatter */].format(data[data.length - 1].value),
                  date: data[data.length - 1].date
                }));
              }, 300);
            },
            onMouseMove: event => {
              if (tooltipTimeout) clearTimeout(tooltipTimeout);
              const top = event.clientY - margin.top - barHeight;
              const left = barX + barWidth / 2;
              setOverlay(BarChart_objectSpread(BarChart_objectSpread({}, overlay), {}, {
                value: core["j" /* currencyFormatter */].format(d.value),
                date: d.date
              }));
              showTooltip({
                tooltipData: d,
                tooltipTop: yScale(BarChart_getValue(d)),
                tooltipLeft: left
              });
            }
          }, `bar-${date}`);
        })
      }), tooltipData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
        top: margin.top,
        left: margin.left,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
          cx: tooltipLeft,
          cy: tooltipTop + 1,
          r: 4,
          fill: "black",
          fillOpacity: 0.1,
          stroke: "black",
          strokeOpacity: 0.1,
          strokeWidth: 2,
          pointerEvents: "none"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("circle", {
          cx: tooltipLeft,
          cy: tooltipTop,
          r: 4,
          fill: colors_["deepPurple"][400],
          stroke: "white",
          strokeWidth: 2,
          pointerEvents: "none"
        })]
      })]
    }), !tooltipDisabled && tooltipData && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(tooltip_["Tooltip"], {
        top: margin.top + tooltipTop - 12,
        left: tooltipLeft + 12,
        style: BarChart_tooltipStyles,
        children: `$${external_millify_default()(BarChart_getValue(tooltipData))}`
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(tooltip_["Tooltip"], {
        top: yMax + margin.top - 14,
        left: tooltipLeft,
        style: BarChart_objectSpread(BarChart_objectSpread({}, tooltip_["defaultStyles"]), {}, {
          minWidth: 90,
          textAlign: "center",
          transform: "translateX(-50%)"
        }),
        children: BarChart_formatDate(BarChart_getDate(tooltipData))
      })]
    })]
  });
}
// CONCATENATED MODULE: ./src/components/BasicTable.js



function BasicTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BasicTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BasicTable_ownKeys(Object(source), true).forEach(function (key) { BasicTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BasicTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BasicTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function BasicTable({
  title,
  headCells,
  bodyCells,
  style
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
      variant: "h6",
      component: "h2",
      gutterBottom: true,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableContainer"], {
      variant: "outlined",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Table"], {
        "aria-label": "information",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableHead"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableRow"], {
            children: headCells.map(cell => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableCell"], {
              align: cell.align || "left",
              style: {
                maxWidth: cell.maxWidth || "initial"
              },
              children: cell.label
            }, cell.key))
          }, Date.now())
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableBody"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableRow"], {
            children: bodyCells.map((cell, index) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableCell"], BasicTable_objectSpread(BasicTable_objectSpread({}, index === 0 ? {
              component: "th",
              scope: "row"
            } : {}), {}, {
              align: headCells[index].align || "left",
              style: {
                maxWidth: headCells[index].maxWidth || "initial"
              },
              children: cell
            }), index))
          }, Date.now())
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/Chart.js + 2 modules
var Chart = __webpack_require__("JjJj");

// EXTERNAL MODULE: external "@visx/brush"
var brush_ = __webpack_require__("hblE");

// CONCATENATED MODULE: ./src/components/Curve.js








 // Initialize some variables

const axisColor = "currentColor";
const axisBottomTickLabelProps = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: axisColor
};
const axisLeftTickLabelProps = {
  dx: "-0.25em",
  dy: "0.25em",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end",
  fill: axisColor
}; // accessors

const Curve_getX = d => new Date(d.date);

const Curve_getY = d => Number(d.value);

function CurveChart({
  data,
  gradientColor,
  index,
  even,
  height,
  width,
  yMax,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  xScale,
  yScale,
  hideBottomAxis = false,
  hideLeftAxis = false,
  top,
  left,
  children,
  stroke,
  strokeWidth,
  strokeOpacity,
  markerMid,
  markerStart,
  markerEnd
}) {
  if (width < 10) return null;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
    left: left || margin.left,
    top: top || margin.top,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["LinePath"], {
      curve: curve_["curveNatural"],
      data: data,
      yMax: yMax,
      x: d => {
        var _xScale;

        return (_xScale = xScale(Curve_getX(d))) !== null && _xScale !== void 0 ? _xScale : 0;
      },
      y: d => {
        var _yScale;

        return (_yScale = yScale(Curve_getY(d))) !== null && _yScale !== void 0 ? _yScale : 0;
      },
      stroke: stroke,
      strokeWidth: strokeWidth,
      strokeOpacity: strokeOpacity,
      shapeRendering: "geometricPrecision",
      markerMid: markerMid,
      markerStart: markerStart,
      markerEnd: markerEnd,
      margin: margin
    }), !hideBottomAxis && /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisBottom"], {
      top: yMax,
      scale: xScale,
      numTicks: width > 520 ? 10 : 5,
      stroke: axisColor,
      tickStroke: axisColor,
      tickLabelProps: () => axisBottomTickLabelProps
    }), !hideLeftAxis && /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisLeft"], {
      scale: yScale,
      numTicks: 5,
      tickFormat: external_millify_default.a,
      stroke: axisColor,
      tickStroke: axisColor,
      tickLabelProps: () => axisLeftTickLabelProps
    }), children]
  });
}
// EXTERNAL MODULE: external "@visx/legend"
var legend_ = __webpack_require__("EYt5");

// EXTERNAL MODULE: external "@visx/pattern"
var pattern_ = __webpack_require__("cHWC");

// CONCATENATED MODULE: ./src/components/Curves.js





















const brushMargin = {
  top: 10,
  bottom: 15,
  left: 50,
  right: 20
};
const chartSeparation = 30;
const PATTERN_ID = "brush_pattern";
const Curves_accentColor = colors_["deepPurple"][400];
const selectedBrushStyle = {
  fill: `url(#${PATTERN_ID})`,
  stroke: "currentColor"
};
const Curves_parseDate = Object(external_d3_time_format_["timeParse"])("%Y-%m-%d");
const Curves_format = Object(external_d3_time_format_["timeFormat"])("%b %d");

const Curves_formatDate = date => Curves_format(Curves_parseDate(date));

const Curves_axisColor = "currentColor";
const Curves_axisBottomTickLabelProps = {
  textAnchor: "middle",
  fontFamily: "Arial",
  fontSize: 10,
  fill: Curves_axisColor
};
const Curves_axisLeftTickLabelProps = {
  dx: "-0.25em",
  dy: "0.25em",
  fontFamily: "Arial",
  fontSize: 10,
  textAnchor: "end",
  fill: Curves_axisColor
};
const purple1 = "#6c5efb";
const purple2 = "#c998ff";
const purple3 = "#a44afe";

const Curves = ({
  compact = false,
  width,
  height,
  margin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  data,
  title,
  labels,
  colors = [purple1, purple2, purple3]
}) => {
  const allData = data.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
  const {
    0: filteredData,
    1: setFilteredData
  } = Object(external_react_["useState"])(data.map(curve => curve.slice(curve.length - 30, curve.length - 1)));

  const onBrushChange = domain => {
    if (!domain) return;
    const {
      x0,
      x1,
      y0,
      y1
    } = domain;
    const stockCopy = data.map(d => d.filter(s => {
      const x = Object(core["T" /* getX */])(s).getTime();
      const y = Object(core["U" /* getY */])(s);
      return x > x0 && x < x1 && y > y0 && y < y1;
    }));
    setFilteredData(stockCopy);
  };

  const innerHeight = height - margin.top - margin.bottom;
  const topChartBottomMargin = compact ? chartSeparation / 2 : chartSeparation + 10;
  const topChartHeight = 0.8 * innerHeight - topChartBottomMargin;
  const bottomChartHeight = innerHeight - topChartHeight - chartSeparation; // Max

  const xMax = Math.max(width - margin.left - margin.right, 0);
  const yMax = Math.max(topChartHeight, 0); // scales

  const xScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleTime"])({
    range: [0, xMax],
    domain: Object(external_d3_array_["extent"])(filteredData.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []), core["T" /* getX */])
  }), [xMax, filteredData]);
  const yScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    domain: [Math.min(...filteredData.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).map(d => Object(core["U" /* getY */])(d))), Math.max(...filteredData.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []).map(d => Object(core["U" /* getY */])(d)))],
    nice: true
  }), [yMax, filteredData]);
  const xBrushMax = Math.max(width - brushMargin.left - brushMargin.right, 0);
  const yBrushMax = Math.max(bottomChartHeight - brushMargin.top - brushMargin.bottom, 0);
  const brushXScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleTime"])({
    range: [0, xBrushMax],
    domain: Object(external_d3_array_["extent"])(allData, core["T" /* getX */])
  }), [xBrushMax]);
  const brushYScale = Object(external_react_["useMemo"])(() => Object(scale_["scaleLinear"])({
    range: [yBrushMax, 0],
    domain: [Math.min(...allData.map(d => Object(core["U" /* getY */])(d))), Math.max(...allData.map(d => Object(core["U" /* getY */])(d)))],
    nice: true
  }), [yBrushMax]);
  const initialBrushPosition = Object(external_react_["useMemo"])(() => ({
    start: {
      x: brushXScale(Object(core["T" /* getX */])(data[0][data[0].length >= 30 ? data[0].length - 30 : 0]))
    },
    end: {
      x: brushXScale(Object(core["T" /* getX */])(data[0][data[0].length - 1]))
    }
  }), [brushXScale]);
  const colorScale = Object(scale_["scaleOrdinal"])({
    domain: labels,
    range: colors
  });

  if (width < 10) {
    return null;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      position: "relative"
    },
    children: [labels && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      style: {
        position: "absolute",
        top: margin.top / 2 - 10,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        fontSize: "14px"
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(legend_["LegendOrdinal"], {
        scale: colorScale,
        direction: "row",
        labelMargin: "0 15px 0 0"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      width: width,
      height: height,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("rect", {
        x: 0,
        y: 0,
        width: width,
        height: height,
        fill: "transparent"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(grid_["GridRows"], {
        top: margin.top,
        left: margin.left,
        scale: yScale,
        width: xMax,
        height: yMax,
        strokeDasharray: "1,3",
        stroke: "currentColor",
        strokeOpacity: 0.2,
        pointerEvents: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(grid_["GridColumns"], {
        top: margin.top,
        left: margin.left,
        scale: xScale,
        height: yMax,
        strokeDasharray: "1,3",
        stroke: "currentColor",
        strokeOpacity: 0.2,
        pointerEvents: "none"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
        top: margin.top,
        left: margin.left,
        bottom: topChartBottomMargin,
        children: [width > 8 && filteredData.map((curve, i) => {
          const even = i % 2 === 0;
          let markerStart = even ? "url(#marker-cross)" : "url(#marker-x)";
          if (i === 1) markerStart = "url(#marker-line)";
          const markerEnd = even ? "url(#marker-arrow)" : "url(#marker-arrow-odd)";
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(marker_["MarkerX"], {
              id: "marker-x",
              stroke: colors[i],
              size: 22,
              strokeWidth: 4,
              markerUnits: "userSpaceOnUse"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(marker_["MarkerCross"], {
              id: "marker-cross",
              stroke: colors[i],
              size: 22,
              strokeWidth: 4,
              strokeOpacity: 0.6,
              markerUnits: "userSpaceOnUse"
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(marker_["MarkerArrow"], {
              id: "marker-arrow-odd",
              stroke: colors[i],
              size: 8,
              strokeWidth: 1
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(marker_["MarkerLine"], {
              id: "marker-line",
              fill: colors[i],
              size: 16,
              strokeWidth: 1
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(marker_["MarkerArrow"], {
              id: "marker-arrow",
              fill: colors[i],
              refX: 2,
              size: 6
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurveChart, {
              hideBottomAxis: true,
              hideLeftAxis: true,
              curve: curve_["curveNatural"],
              data: curve,
              width: width,
              xScale: xScale,
              yScale: yScale,
              stroke: colors[i],
              strokeWidth: 2,
              strokeOpacity: 1,
              shapeRendering: "geometricPrecision",
              markerMid: "url(#marker-circle)",
              markerStart: markerStart,
              markerEnd: markerEnd
            })]
          }, `chart-${i}`);
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisBottom"], {
          top: yMax,
          scale: xScale,
          numTicks: width > 520 ? 10 : 5,
          stroke: Curves_axisColor,
          tickStroke: Curves_axisColor,
          tickLabelProps: () => Curves_axisBottomTickLabelProps
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisLeft"], {
          scale: yScale,
          numTicks: 5,
          tickFormat: external_millify_default.a,
          stroke: Curves_axisColor,
          tickStroke: Curves_axisColor,
          tickLabelProps: () => Curves_axisLeftTickLabelProps
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
        top: topChartHeight + topChartBottomMargin + margin.top,
        left: brushMargin.left,
        children: [data.map((brushData, i) => {
          const even = i % 2 === 0;
          let markerStart = even ? "url(#marker-cross)" : "url(#marker-x)";
          if (i === 1) markerStart = "url(#marker-line)";
          const markerEnd = even ? "url(#marker-arrow)" : "url(#marker-arrow-odd)";
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])(CurveChart, {
            curve: curve_["curveNatural"],
            stroke: colors[i],
            strokeWidth: 2,
            strokeOpacity: 1,
            shapeRendering: "geometricPrecision",
            hideBottomAxis: true,
            hideLeftAxis: true,
            data: brushData,
            width: width,
            yMax: yBrushMax,
            xScale: brushXScale,
            yScale: brushYScale
          });
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(pattern_["PatternLines"], {
          id: PATTERN_ID,
          height: 8,
          width: 8,
          stroke: Curves_accentColor,
          strokeWidth: 1,
          orientation: ["diagonal"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(brush_["Brush"], {
          xScale: brushXScale,
          yScale: brushYScale,
          width: xBrushMax,
          height: yBrushMax,
          margin: brushMargin,
          handleSize: 8,
          resizeTriggerAreas: ["left", "right"],
          brushDirection: "horizontal",
          initialBrushPosition: initialBrushPosition,
          onChange: onBrushChange,
          onClick: () => setFilteredData(data),
          selectedBoxStyle: selectedBrushStyle
        })]
      }), title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_["Text"], {
        y: margin.top / 2,
        x: width / 2,
        width: width,
        verticalAnchor: "start",
        textAnchor: "middle",
        fill: "currentColor",
        children: title
      })]
    })]
  });
};

/* harmony default export */ var components_Curves = (Curves);
// CONCATENATED MODULE: ./src/components/Percent.js


function Percent_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Percent_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Percent_ownKeys(Object(source), true).forEach(function (key) { Percent_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Percent_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Percent_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




function Percent(_ref) {
  let {
    percent
  } = _ref,
      props = _objectWithoutProperties(_ref, ["percent"]);

  const theme = Object(styles_["useTheme"])();
  const value = !Number.isNaN(percent) && isFinite(percent) ? Number(percent).toFixed(2) : 0;
  let color = "inherit";

  if (value > 0) {
    color = theme.palette.positive.main;
  } else if (value < 0) {
    color = theme.palette.negative.main;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Box_default.a, Percent_objectSpread(Percent_objectSpread({
    style: {
      color
    }
  }, props), {}, {
    children: [value, "%"]
  }));
}
// CONCATENATED MODULE: ./src/components/Difference.js


function Difference(previousValue, currentValue) {
  const value = (currentValue - previousValue) / previousValue * 100;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Percent, {
    value: value
  });
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/Link.js


function Link_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Link_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Link_ownKeys(Object(source), true).forEach(function (key) { Link_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Link_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Link_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Link_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Link_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Link_NextComposed = /*#__PURE__*/Object(external_react_["forwardRef"])(function NextComposed(props, ref) {
  const {
    as,
    href
  } = props,
        other = Link_objectWithoutProperties(props, ["as", "href"]);

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
    href: href,
    as: as,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", Link_objectSpread({
      ref: ref
    }, other))
  });
}); // A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link

function Link(props) {
  const {
    href,
    activeClassName = "MuiLink-underlineAlways",
    className: classNameProps,
    innerRef,
    naked
  } = props,
        other = Link_objectWithoutProperties(props, ["href", "activeClassName", "className", "innerRef", "naked"]);

  const router = Object(router_["useRouter"])();
  const pathname = typeof href === "string" ? href : href.pathname;
  const className = external_clsx_default()(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName
  });

  if (naked) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_NextComposed, Link_objectSpread({
      className: className,
      ref: innerRef,
      href: href
    }, other));
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link_default.a, Link_objectSpread({
    component: Link_NextComposed,
    className: className,
    ref: innerRef,
    href: href
  }, other));
}

/* harmony default export */ var components_Link = (/*#__PURE__*/Object(external_react_["forwardRef"])((props, ref) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Link, Link_objectSpread(Link_objectSpread({}, props), {}, {
  innerRef: ref
}))));
// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");

// EXTERNAL MODULE: external "@material-ui/lab/AvatarGroup"
var AvatarGroup_ = __webpack_require__("KKV7");
var AvatarGroup_default = /*#__PURE__*/__webpack_require__.n(AvatarGroup_);

// EXTERNAL MODULE: external "@material-ui/icons/Help"
var Help_ = __webpack_require__("BPv4");

// EXTERNAL MODULE: external "web3-utils"
var external_web3_utils_ = __webpack_require__("l6o+");

// CONCATENATED MODULE: ./src/components/TokenIcon.js


function TokenIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TokenIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TokenIcon_ownKeys(Object(source), true).forEach(function (key) { TokenIcon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TokenIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TokenIcon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TokenIcon_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = TokenIcon_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function TokenIcon_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const TokenIcon_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    marginRight: theme.spacing(2),
    // background: "transparent",
    color: theme.palette.text.secondary
  }
}));
function TokenIcon(_ref) {
  let {
    id
  } = _ref,
      rest = TokenIcon_objectWithoutProperties(_ref, ["id"]);

  const classes = TokenIcon_useStyles();
  const src = Object(external_react_["useMemo"])(() => `https://raw.githubusercontent.com/mistswapdex/assets/master/blockchains/smartbch/assets/${Object(external_web3_utils_["toChecksumAddress"])(id)}/logo.png`, [id]);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Avatar"], TokenIcon_objectSpread({
    classes: {
      root: classes.root
    },
    src: src
  }, rest));
}
// CONCATENATED MODULE: ./src/components/PairIcon.js







const PairIcon_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  token: {
    marginRight: 0
  },
  tokens: {
    marginRight: theme.spacing(2)
  }
}));
function PairIcon({
  base,
  quote
}) {
  const classes = PairIcon_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(AvatarGroup_default.a, {
    className: classes.tokens,
    children: [base, quote].map(id => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TokenIcon, {
      id: id,
      className: classes.token
    }, id))
  });
}
// CONCATENATED MODULE: ./src/components/SortableTableHead.js




function SortableTableHead({
  classes,
  onSelectAllClick,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
  columns
}) {
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableHead"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableRow"], {
      children: columns.map(column => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableCell"], {
        align: column.align || "left",
        padding: column.disablePadding ? "none" : "default" // variant="head"
        ,
        sortDirection: orderBy === column.key ? order : false,
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["TableSortLabel"], {
          active: orderBy === column.key,
          direction: orderBy === column.key ? order : "asc",
          onClick: createSortHandler(column.key),
          children: [column.label, orderBy === column.key ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: classes.visuallyHidden,
            children: order === "desc" ? "sorted descending" : "sorted ascending"
          }) : null]
        })
      }, column.key))
    })
  });
}
// CONCATENATED MODULE: ./src/components/SortableTable.js



function SortableTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SortableTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SortableTable_ownKeys(Object(source), true).forEach(function (key) { SortableTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SortableTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SortableTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function SortableTable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SortableTable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SortableTable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SortableTable_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  // table: {
  //   minWidth: 750,
  // },
  avatar: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

function descendingComparator(a, b, orderBy) {
  a = Number.isNaN(parseFloat(a[orderBy])) ? a[orderBy] : parseFloat(a[orderBy]);
  b = Number.isNaN(parseFloat(b[orderBy])) ? b[orderBy] : parseFloat(b[orderBy]);

  if (b < a) {
    return -1;
  }

  if (b > a) {
    return 1;
  }

  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function SortableTable(_ref) {
  let {
    // order = "desc",
    // orderBy = "totalLiquidityUSD",
    columns,
    rows,
    title
  } = _ref,
      props = SortableTable_objectWithoutProperties(_ref, ["columns", "rows", "title"]);

  const classes = SortableTable_useStyles();
  const [order, setOrder] = external_react_default.a.useState(props.order || "desc");
  const [orderBy, setOrderBy] = external_react_default.a.useState(props.orderBy);
  const [page, setPage] = external_react_default.a.useState(0);
  const [rowsPerPage, setRowsPerPage] = external_react_default.a.useState(props.rowsPerPage || 10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }; // const emptyRows =
  //   rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: classes.root,
    children: [title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
      variant: "h6",
      component: "h2",
      gutterBottom: true,
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableContainer"], {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Table"], {
        className: classes.table,
        "aria-label": `${title} table`,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTableHead, {
          columns: columns,
          classes: classes,
          order: order,
          orderBy: orderBy,
          onRequestSort: handleRequestSort,
          rowCount: rows.length
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableBody"], {
          children: stableSort(rows, getComparator(order, orderBy)) // .filter((row) => {
          //   return !TOKEN_DENY.includes(row.id);
          // })
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
            return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableRow"], {
              children: columns.map((column, i) => {
                return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TableCell"], SortableTable_objectSpread(SortableTable_objectSpread({}, i === 0 ? {
                  component: "th",
                  scope: "row"
                } : {}), {}, {
                  align: column.align || "left" // variant="body"
                  ,
                  children: typeof column.render === "function" ? column.render(row, index) : row[column.key]
                }), i);
              })
            }, row.id);
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["TablePagination"], {
      rowsPerPageOptions: [5, 10, 25,, {
        label: "All",
        value: -1
      }],
      component: "div",
      count: rows.length,
      rowsPerPage: rowsPerPage,
      page: page,
      onChangePage: handleChangePage,
      onChangeRowsPerPage: handleChangeRowsPerPage
    })]
  });
}
// CONCATENATED MODULE: ./src/components/GainersList.js










const GainersList_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  gained: {
    color: theme.palette.positive.main
  }
}));
function GainersList({
  pairs
}) {
  const classes = GainersList_useStyles();
  const rows = pairs;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, {
      title: "Gainers (24h)",
      orderBy: "feesUSDGained",
      order: "desc",
      columns: [{
        key: "name",
        label: "Name",
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PairIcon, {
            base: row.token0.id,
            quote: row.token1.id
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
            href: `/pairs/${row.id}`,
            variant: "body2",
            noWrap: true,
            children: `${row.token0.symbol.replace("WETH", "ETH")}-${row.token1.symbol.replace("WETH", "ETH")}`
          })]
        })
      }, {
        key: "feesUSDGained",
        label: "Fees USD Gained",
        align: "right",
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.gained,
          children: ["+", Object(core["q" /* formatCurrency */])(row.feesUSDGained - row.feesUSDGainedYesterday)]
        })
      }, {
        key: "volumeUSDGained",
        label: "Volume USD Gained",
        align: "right",
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.gained,
          children: ["+", Object(core["q" /* formatCurrency */])(row.volumeUSDGained)]
        })
      }, {
        key: "reserveUSDGained",
        label: "Liquidity USD Gained",
        align: "right",
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: classes.gained,
          children: ["+", Object(core["q" /* formatCurrency */])(row.reserveUSDGained)]
        })
      }],
      rows: rows
    })
  });
}
// CONCATENATED MODULE: ./src/components/IntoTheBlock.js





function IntoTheBlock({
  pairAddress
}) {
  const {
    0: notSupported,
    1: setNotSupported
  } = Object(external_react_["useState"])(false);
  Object(external_react_["useEffect"])(() => {
    if (window.itbWidgetInit) {
      window.itbWidgetInit({
        apiKey: "IXlsoP7uCH5tjojovmac53V8xlOh8Qa31yOgozMG",
        options: {
          colors: {
            series: ["#FF1744"]
          },
          protocol: "sushiswap",
          pairAddress,
          granularity: "hourly",
          loader: true,
          hideNavigator: true,
          events: {
            onPairNotSupported: () => {
              setNotSupported(true);
            }
          }
        }
      });
    }
  }, [pairAddress]);
  return !notSupported ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
      variant: "h6",
      component: "h2",
      gutterBottom: true,
      children: "IntoTheBlock"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "widget-container",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "charts-container",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "protocol-roi-calculator",
          className: "full-width"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "protocol-fees-per-liquidity"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "protocol-transactions-breakdown"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "protocol-liquidity-variation",
          "data-options": "{ \"pairTokenIndex\": 0 }"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "protocol-liquidity-variation",
          "data-options": "{ \"pairTokenIndex\": 1 }"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "footer",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "call-to-action"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          "data-target": "itb-widget",
          "data-type": "powered-by"
        })]
      })]
    })]
  }) : null;
}

/* harmony default export */ var components_IntoTheBlock = (IntoTheBlock);
// EXTERNAL MODULE: external "@material-ui/styles"
var external_material_ui_styles_ = __webpack_require__("Bjmp");

// CONCATENATED MODULE: ./src/components/KPI.js



function KPI_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function KPI_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { KPI_ownKeys(Object(source), true).forEach(function (key) { KPI_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { KPI_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function KPI_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function KPI_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = KPI_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function KPI_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const KPI_useStyles = Object(external_material_ui_styles_["makeStyles"])(theme => ({
  root: {
    height: "100%"
  },
  cardContent: {
    // textAlign: "center",
    "&:last-child": {
      paddingBottom: 16
    }
  },
  title: {
    fontWeight: 500
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  }
}));
const formatters = {
  none: value => value,
  percent: value => !Number.isNaN(value) ? `${value.toFixed(2)}%` : `0%`,
  integer: value => !Number.isNaN(value) ? parseInt(value) : 0,
  currency: value => !Number.isNaN(value) ? Object(core["q" /* formatCurrency */])(value) : `$0`
};

function KPI(_ref) {
  let {
    className,
    title = "",
    difference = "",
    value = "",
    valueUSD = "",
    format = "none"
  } = _ref,
      rest = KPI_objectWithoutProperties(_ref, ["className", "title", "difference", "value", "valueUSD", "format"]);

  const classes = KPI_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Card"], KPI_objectSpread(KPI_objectSpread({}, rest), {}, {
    className: external_clsx_default()(classes.root, className),
    variant: "outlined",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["CardContent"], {
      className: classes.cardContent,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
        variant: "subtitle2",
        color: "textSecondary",
        gutterBottom: true,
        noWrap: true,
        className: classes.title,
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: classes.content,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "h6",
          color: "textPrimary",
          noWrap: true,
          children: formatters[format](value)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          variant: "subtitle2",
          color: "textSecondary",
          noWrap: true,
          children: difference && !Number.isNaN(difference) ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(Percent, {
            marginLeft: 1,
            percent: difference
          }) : null
        })]
      })]
    })
  }));
}

/* harmony default export */ var components_KPI = (KPI);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "@visx/mock-data/lib/generators/genDateValue"
var genDateValue_ = __webpack_require__("HmHm");

// CONCATENATED MODULE: ./src/components/Lines.js

















const Lines_purple3 = "#a44afe";
const Lines_parseDate = Object(external_d3_time_format_["timeParse"])("%Y-%m-%d");
const Lines_format = Object(external_d3_time_format_["timeFormat"])("%b %d");

const Lines_formatDate = date => Lines_format(Lines_parseDate(date));

const legendGlyphSize = 15; // data accessors
// const getX = (d) => new Date(d.time);

const Lines_getX = d => new Date(d.time);

const Lines_getY = d => d.value;

const Lines_ordinalColorScale = Object(scale_["scaleOrdinal"])({
  domain: ["xSushi Age", "xSushi Age Destroyed"],
  range: [colors_["green"][500], colors_["red"][500]]
});
const Lines = Object(responsive_["withParentSize"])(({
  parentWidth,
  parentHeight,
  lines,
  strokes,
  margin,
  title
}) => {
  const lineCount = 2;
  const allData = lines.reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
  const xMax = parentWidth - margin.left - margin.right;
  const yMax = parentHeight - margin.top - margin.bottom; // scales

  const xScale = Object(scale_["scaleUtc"])({
    range: [0, xMax],
    // domain: extent(allData, getX),
    // domain: extent(data, getDate),
    domain: [Math.min(...allData.map(Lines_getX)), Math.max(...allData.map(Lines_getX))]
  });
  const yScale = Object(scale_["scaleLinear"])({
    range: [yMax, 0],
    // domain: [0, max(allData, getY)],
    domain: [Math.min(...allData.map(d => Lines_getY(d))), Math.max(...allData.map(d => Lines_getY(d)))],
    nice: true
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    style: {
      position: "relative"
    },
    className: "jsx-1410149372",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("svg", {
      width: parentWidth,
      height: parentHeight,
      className: "jsx-1410149372",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(group_["Group"], {
        left: margin.left,
        right: margin.right,
        children: [parentWidth > 8 && lines.map((lineData, i) => /*#__PURE__*/Object(jsx_runtime_["jsx"])(group_["Group"], {
          top: margin.top // left={margin.left}
          // right={margin.right}
          ,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(shape_["LinePath"], {
            data: lineData,
            x: d => {
              var _xScale;

              return (_xScale = xScale(Lines_getX(d))) !== null && _xScale !== void 0 ? _xScale : 0;
            },
            y: d => {
              var _yScale;

              return (_yScale = yScale(Lines_getY(d))) !== null && _yScale !== void 0 ? _yScale : 0;
            },
            stroke: strokes[i],
            strokeWidth: 2,
            shapeRendering: "geometricPrecision"
          })
        }, `lines-${i}`)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisBottom"], {
          top: yMax + margin.top,
          scale: xScale,
          stroke: "currentColor",
          tickStroke: "currentColor",
          tickFormat: (v, i) => parentWidth > 800 || i % 2 === 0 ? Object(external_d3_time_format_["timeFormat"])("%b %d")(v) : "",
          tickLabelProps: () => ({
            fill: "currentColor",
            fontSize: 11,
            textAnchor: "middle"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(axis_["AxisLeft"], {
          scale: yScale,
          top: margin.top // left={margin.left}
          ,
          tickFormat: external_millify_default.a,
          stroke: "currentColor",
          tickStroke: "currentColor",
          tickLabelProps: () => ({
            fill: "currentColor",
            fontSize: 11,
            textAnchor: "end",
            verticalAnchor: "middle"
          })
        })]
      }), title && /*#__PURE__*/Object(jsx_runtime_["jsx"])(text_["Text"], {
        y: margin.top / 2,
        x: parentWidth / 2,
        width: parentWidth,
        verticalAnchor: "start",
        textAnchor: "middle",
        fill: "currentColor",
        children: title
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "1410149372",
      children: [".legends.jsx-1410149372{font-family:arial;font-weight:900;background-color:black;border-radius:14px;padding:24px 24px 24px 32px;overflow-y:auto;-webkit-box-flex:1;-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;}", ".chart.jsx-1410149372 h2.jsx-1410149372{margin-left:10px;}"]
    })]
  });
});
/* harmony default export */ var components_Lines = (Lines);
// CONCATENATED MODULE: ./src/components/LiquidityProviderList.js










const LiquidityProviderList_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: "100%",
    margin: theme.spacing(3, 0)
  },
  avatar: {
    color: theme.palette.getContrastText(colors_["deepPurple"][500]),
    backgroundColor: colors_["deepPurple"][500],
    marginRight: theme.spacing(2)
  }
}));
function LiquidityProviderList({
  pool,
  title = "Liquidity Providers"
}) {
  const classes = LiquidityProviderList_useStyles();
  const theme = Object(styles_["useTheme"])();
  const pair = pool.liquidityPair;
  const shareValueUSD = pair.reserveUSD / pair.totalSupply;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, {
      title: title,
      orderBy: "amount",
      columns: [{
        key: "address",
        label: "Liquidity Provider",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AddressAvatar, {
            address: row.address
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
            href: `https://etherscan.io/address/${row.address}`,
            target: "_blank",
            children: row.address
          })]
        })
      }, {
        key: "share",
        label: "Pool Share",
        align: "right",
        render: row => `${(row.amount / pool.balance * 100).toFixed(4)}%`
      }, {
        key: "amount",
        label: "Liquidity Tokens Staked",
        align: "right",
        render: row => `${core["m" /* decimalFormatter */].format(row.amount / 1e18)} SLP`
      }, {
        key: "value",
        label: "Liquidity Tokens Staked USD",
        align: "right",
        render: row => core["j" /* currencyFormatter */].format(row.amount / 1e18 * shareValueUSD)
      }],
      rows: pool.users
    })
  });
}
// CONCATENATED MODULE: ./src/components/LosersList.js









const LosersList_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  lost: {
    color: theme.palette.negative.main
  }
}));
function LosersList({
  pairs
}) {
  const classes = LosersList_useStyles();
  const rows = pairs;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, {
      title: "Losers (24h)",
      orderBy: "feesUSDLost",
      order: "desc",
      columns: [{
        key: "name",
        label: "Name",
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PairIcon, {
            base: row.token0.id,
            quote: row.token1.id
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
            href: `/pairs/${row.id}`,
            variant: "body2",
            noWrap: true,
            children: `${row.token0.symbol.replace("WETH", "ETH")}-${row.token1.symbol.replace("WETH", "ETH")}`
          })]
        })
      }, {
        key: "feesUSDLost",
        label: "Fees USD Lost",
        align: "right",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          className: classes.lost,
          noWrap: true,
          children: Object(core["q" /* formatCurrency */])(row.feesUSDLost - row.feesUSDLostYesterday)
        })
      }, {
        key: "volumeUSDLost",
        label: "Volume USD Lost",
        align: "right",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
          className: classes.lost,
          noWrap: true,
          children: ["-", Object(core["q" /* formatCurrency */])(row.volumeUSDLost)]
        })
      }, {
        key: "reserveUSDLost",
        label: "Liquidity USD Lost",
        align: "right",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
          className: classes.lost,
          noWrap: true,
          children: Object(core["q" /* formatCurrency */])(row.reserveUSDLost)
        })
      }],
      rows: rows
    })
  });
}
// CONCATENATED MODULE: ./src/components/PageHeader.js


const PageHeader_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(4)
  }
}));
function PageHeader({
  children
}) {
  const classes = PageHeader_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: children
  });
}
// EXTERNAL MODULE: ./src/core/constants.js
var constants = __webpack_require__("YRlH");

// CONCATENATED MODULE: ./src/components/PairTable.js



function PairTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PairTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PairTable_ownKeys(Object(source), true).forEach(function (key) { PairTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PairTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PairTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PairTable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PairTable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PairTable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const PairTable_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {}
}));
function PairTable(_ref) {
  let {
    pairs,
    title
  } = _ref,
      rest = PairTable_objectWithoutProperties(_ref, ["pairs", "title"]);

  const classes = PairTable_useStyles();
  const rows = pairs.filter(row => {
    return !constants["a" /* PAIR_DENY */].includes(row.id);
  }).map(pair => {
    var _pair$oneDay, _pair$oneDay2, _pair$oneDay3, _pair$sevenDay, _pair$sevenDay2, _pair$sevenDay3;

    // const volumeUSD = pair?.volumeUSD === "0" ? pair?.untrackedVolumeUSD : pair?.volumeUSD
    // const oneDayVolumeUSD = pair?.oneDay?.volumeUSD === "0" ? pair?.oneDay?.untrackedVolumeUSD : pair?.oneDay?.volumeUSD
    // const twoDayVolumeUSD = pair?.twoDay?.volumeUSD === "0" ? pair?.twoDay?.untrackedVolumeUSD : pair?.twoDay?.volumeUSD
    const volumeUSD = (pair === null || pair === void 0 ? void 0 : pair.volumeUSD) === "0" ? pair === null || pair === void 0 ? void 0 : pair.untrackedVolumeUSD : pair === null || pair === void 0 ? void 0 : pair.volumeUSD;
    const oneDayVolumeUSD = (pair === null || pair === void 0 ? void 0 : (_pair$oneDay = pair.oneDay) === null || _pair$oneDay === void 0 ? void 0 : _pair$oneDay.volumeUSD) === "0" ? pair === null || pair === void 0 ? void 0 : (_pair$oneDay2 = pair.oneDay) === null || _pair$oneDay2 === void 0 ? void 0 : _pair$oneDay2.untrackedVolumeUSD : pair === null || pair === void 0 ? void 0 : (_pair$oneDay3 = pair.oneDay) === null || _pair$oneDay3 === void 0 ? void 0 : _pair$oneDay3.volumeUSD;
    const sevenDayVolumeUSD = (pair === null || pair === void 0 ? void 0 : (_pair$sevenDay = pair.sevenDay) === null || _pair$sevenDay === void 0 ? void 0 : _pair$sevenDay.volumeUSD) === "0" ? pair === null || pair === void 0 ? void 0 : (_pair$sevenDay2 = pair.sevenDay) === null || _pair$sevenDay2 === void 0 ? void 0 : _pair$sevenDay2.untrackedVolumeUSD : pair === null || pair === void 0 ? void 0 : (_pair$sevenDay3 = pair.sevenDay) === null || _pair$sevenDay3 === void 0 ? void 0 : _pair$sevenDay3.volumeUSD;
    const oneDayVolume = volumeUSD - oneDayVolumeUSD;
    const oneDayFees = oneDayVolume * 0.003;
    const oneYearFees = oneDayVolume * 0.003 * 365 * 100 / pair.reserveUSD;
    const sevenDayVolume = volumeUSD - sevenDayVolumeUSD;
    return PairTable_objectSpread(PairTable_objectSpread({}, pair), {}, {
      displayName: `${pair.token0.symbol.replace("WETH", "ETH")}-${pair.token1.symbol.replace("WETH", "ETH")}`,
      oneDayVolume: !Number.isNaN(oneDayVolume) ? oneDayVolume : 0,
      sevenDayVolume: !Number.isNaN(sevenDayVolume) ? sevenDayVolume : 0,
      oneDayFees: !Number.isNaN(oneDayFees) ? oneDayFees : 0,
      oneYearFees
    });
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, PairTable_objectSpread(PairTable_objectSpread({
      orderBy: "reserveUSD",
      title: title
    }, rest), {}, {
      columns: [{
        key: "displayName",
        numeric: false,
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PairIcon, {
            base: row.token0.id,
            quote: row.token1.id
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
            href: `/pairs/${row.id}`,
            variant: "body2",
            noWrap: true,
            children: row.displayName
          })]
        }),
        label: "Name"
      }, {
        key: "reserveUSD",
        render: row => core["j" /* currencyFormatter */].format(row.reserveUSD),
        align: "right",
        label: "Liquidity"
      }, {
        key: "oneDayVolume",
        render: row => core["j" /* currencyFormatter */].format(row.oneDayVolume),
        align: "right",
        label: "Volume (24h)"
      }, {
        key: "sevenDayVolume",
        render: row => core["j" /* currencyFormatter */].format(row.sevenDayVolume),
        align: "right",
        label: "Volume (7d)"
      }, {
        key: "oneDayFees",
        render: row => core["j" /* currencyFormatter */].format(row.oneDayFees),
        align: "right",
        label: "Fees (24h)"
      }, {
        key: "sevenDayFees",
        render: row => core["j" /* currencyFormatter */].format(row.sevenDayVolume * 0.003),
        align: "right",
        label: "Fees (7d)"
      }, {
        key: "oneYearFees",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Percent, {
          percent: row.oneYearFees
        }),
        align: "right",
        label: "Fees (Yearly)"
      }],
      rows: rows
    }))
  });
}
// CONCATENATED MODULE: ./src/components/PoolTable.js



function PoolTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function PoolTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { PoolTable_ownKeys(Object(source), true).forEach(function (key) { PoolTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { PoolTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function PoolTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PoolTable_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PoolTable_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PoolTable_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const PoolTable_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3)
  }
}));
function PoolTable(_ref) {
  let {
    pools
  } = _ref,
      rest = PoolTable_objectWithoutProperties(_ref, ["pools"]);

  const classes = PoolTable_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, PoolTable_objectSpread({
      title: "Pools" // orderBy={orderBy}
      // order={order}
      ,
      columns: [// {
      //   key: "id",
      //   label: "#",
      // },
      {
        key: "name",
        label: "Name",
        render: (row, index) => {
          var _row$liquidityPair, _row$liquidityPair$to, _row$liquidityPair2, _row$liquidityPair2$t, _row$liquidityPair3, _row$liquidityPair3$t, _row$liquidityPair4, _row$liquidityPair4$t;

          const name = `${(_row$liquidityPair = row.liquidityPair) === null || _row$liquidityPair === void 0 ? void 0 : (_row$liquidityPair$to = _row$liquidityPair.token0) === null || _row$liquidityPair$to === void 0 ? void 0 : _row$liquidityPair$to.symbol}-${(_row$liquidityPair2 = row.liquidityPair) === null || _row$liquidityPair2 === void 0 ? void 0 : (_row$liquidityPair2$t = _row$liquidityPair2.token1) === null || _row$liquidityPair2$t === void 0 ? void 0 : _row$liquidityPair2$t.symbol}`;
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
            display: "flex",
            alignItems: "center",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(PairIcon, {
              base: (_row$liquidityPair3 = row.liquidityPair) === null || _row$liquidityPair3 === void 0 ? void 0 : (_row$liquidityPair3$t = _row$liquidityPair3.token0) === null || _row$liquidityPair3$t === void 0 ? void 0 : _row$liquidityPair3$t.id,
              quote: (_row$liquidityPair4 = row.liquidityPair) === null || _row$liquidityPair4 === void 0 ? void 0 : (_row$liquidityPair4$t = _row$liquidityPair4.token1) === null || _row$liquidityPair4$t === void 0 ? void 0 : _row$liquidityPair4$t.id
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
              href: `/pools/${row.id}`,
              variant: "body2",
              noWrap: true,
              children: name
            })]
          });
        }
      }, // {
      //   key: "balance",
      //   label: "Staked",
      //   align: "right",
      //   render: (row) => Number(row.staked/1e18).toFixed(2),
      // },
      // {
      //   key: "roiPerHour",
      //   label: "ROI (Hour)",
      //   align: "right",
      //   render: (row) => Number(row.roiPerHour) * 1000,
      // },
      {
        key: "rewardPerThousand",
        label: "Reward per $1000",
        render: row => `${Number(row.rewardPerThousand).toFixed(2)} SUSHI per day`
      }, {
        key: "roi",
        label: "Yearly / Monthly / Daily ROI",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
          variant: "subtitle2",
          noWrap: true,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Percent, {
            percent: Number(row.roiPerYear * 100).toFixed(2),
            display: "inline"
          }), " ", "/ ", Number(row.roiPerMonth * 100).toFixed(2), "% /", " ", Number(row.roiPerDay * 100).toFixed(2), "%"]
        })
      }, {
        key: "reserve0",
        label: "Base Reserve",
        render: row => {
          var _row$liquidityPair5, _row$liquidityPair5$t, _row$liquidityPair6, _row$liquidityPair7, _row$liquidityPair7$t;

          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
            display: "flex",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TokenIcon, {
              id: (_row$liquidityPair5 = row.liquidityPair) === null || _row$liquidityPair5 === void 0 ? void 0 : (_row$liquidityPair5$t = _row$liquidityPair5.token0) === null || _row$liquidityPair5$t === void 0 ? void 0 : _row$liquidityPair5$t.id,
              className: classes.small
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
              variant: "subtitle2",
              noWrap: true,
              children: [Object(core["s" /* formatDecimal */])((_row$liquidityPair6 = row.liquidityPair) === null || _row$liquidityPair6 === void 0 ? void 0 : _row$liquidityPair6.reserve0), " ", (_row$liquidityPair7 = row.liquidityPair) === null || _row$liquidityPair7 === void 0 ? void 0 : (_row$liquidityPair7$t = _row$liquidityPair7.token0) === null || _row$liquidityPair7$t === void 0 ? void 0 : _row$liquidityPair7$t.symbol]
            })]
          });
        }
      }, {
        key: "reserve1",
        label: "Quote Reserve",
        render: row => {
          var _row$liquidityPair8, _row$liquidityPair8$t, _row$liquidityPair9, _row$liquidityPair10, _row$liquidityPair10$;

          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
            display: "flex",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TokenIcon, {
              id: (_row$liquidityPair8 = row.liquidityPair) === null || _row$liquidityPair8 === void 0 ? void 0 : (_row$liquidityPair8$t = _row$liquidityPair8.token1) === null || _row$liquidityPair8$t === void 0 ? void 0 : _row$liquidityPair8$t.id,
              className: classes.small
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
              variant: "subtitle2",
              noWrap: true,
              children: [Object(core["s" /* formatDecimal */])((_row$liquidityPair9 = row.liquidityPair) === null || _row$liquidityPair9 === void 0 ? void 0 : _row$liquidityPair9.reserve1), " ", (_row$liquidityPair10 = row.liquidityPair) === null || _row$liquidityPair10 === void 0 ? void 0 : (_row$liquidityPair10$ = _row$liquidityPair10.token1) === null || _row$liquidityPair10$ === void 0 ? void 0 : _row$liquidityPair10$.symbol]
            })]
          });
        }
      }, {
        key: "tvl",
        label: "TVL",
        align: "right",
        render: row => Object(core["q" /* formatCurrency */])(row.tvl)
      }],
      rows: pools
    }, rest))
  });
}
// EXTERNAL MODULE: external "@material-ui/core/TextField"
var TextField_ = __webpack_require__("IbbU");
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);

// EXTERNAL MODULE: external "@material-ui/lab/Autocomplete"
var Autocomplete_ = __webpack_require__("YCa+");
var Autocomplete_default = /*#__PURE__*/__webpack_require__.n(Autocomplete_);

// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__("XfbO");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: external "react-window"
var external_react_window_ = __webpack_require__("oI26");

// EXTERNAL MODULE: external "autosuggest-highlight/match"
var match_ = __webpack_require__("VygO");
var match_default = /*#__PURE__*/__webpack_require__.n(match_);

// EXTERNAL MODULE: external "autosuggest-highlight/parse"
var parse_ = __webpack_require__("dchI");
var parse_default = /*#__PURE__*/__webpack_require__.n(parse_);

// CONCATENATED MODULE: ./src/components/Search.js



function Search_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Search_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Search_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Search_ownKeys(Object(source), true).forEach(function (key) { Search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const LISTBOX_PADDING = 8; // px

function renderRow(props) {
  const {
    data,
    index,
    style
  } = props;
  return /*#__PURE__*/external_react_default.a.cloneElement(data[index], {
    style: Search_objectSpread(Search_objectSpread({}, style), {}, {
      top: style.top + LISTBOX_PADDING
    })
  });
}

const OuterElementContext = /*#__PURE__*/external_react_default.a.createContext({});
const OuterElementType = /*#__PURE__*/external_react_default.a.forwardRef((props, ref) => {
  const outerProps = external_react_default.a.useContext(OuterElementContext);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", Search_objectSpread(Search_objectSpread({
    ref: ref
  }, props), outerProps));
}); // Adapter for react-window

const Search_ListboxComponent = /*#__PURE__*/external_react_default.a.forwardRef(function ListboxComponent(props, ref) {
  const {
    children
  } = props,
        other = Search_objectWithoutProperties(props, ["children"]);

  const itemData = external_react_default.a.Children.toArray(children);
  const itemCount = itemData.length;
  const itemSize = 55;

  const getChildSize = child => {
    if ( /*#__PURE__*/external_react_default.a.isValidElement(child) && child.type === ListSubheader_default.a) {
      return 60;
    }

    return itemSize;
  };

  const getHeight = () => {
    if (itemCount > 8) {
      return 8 * itemSize;
    }

    return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    ref: ref,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(OuterElementContext.Provider, {
      value: other,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_window_["FixedSizeList"], {
        itemData: itemData,
        height: getHeight() + 2 * LISTBOX_PADDING,
        width: "100%",
        outerElementType: OuterElementType,
        innerElementType: "ul",
        itemSize: itemSize,
        overscanCount: 5,
        itemCount: itemCount,
        children: renderRow
      })
    })
  });
});

const renderGroup = params => [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ListSubheader_default.a, {
  component: "div",
  children: params.group
}, params.key), params.children];

function Search({
  pairs,
  tokens
}) {
  const router = Object(router_["useRouter"])();
  const options = [// ...pairs.slice(offset, limit),
  // ...tokens.slice(offset, limit),
  ...pairs, ...tokens].map(option => {
    var _option$token, _option$token2;

    return {
      __typename: option.__typename,
      id: option.id,
      token0: option.token0 ? option.token0.id : "",
      token1: option.token1 ? option.token1.id : "",
      text: option.name ? ` ${option.symbol} ${option.name}` : `${(_option$token = option.token0) === null || _option$token === void 0 ? void 0 : _option$token.symbol}-${(_option$token2 = option.token1) === null || _option$token2 === void 0 ? void 0 : _option$token2.symbol}`
    };
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Autocomplete_default.a, {
    id: "search",
    style: {
      width: "100%"
    },
    disableListWrap: true,
    ListboxComponent: Search_ListboxComponent,
    renderGroup: renderGroup,
    onChange: (e, v) => {
      router.push(`/${v.__typename.toLowerCase()}s/${v.id}`);
    },
    options: options.sort((a, b) => {
      if (a.__typename === "Token" && b.__typename === "Pair") {
        return -1;
      }
    }),
    groupBy: option => option.__typename,
    renderInput: params => /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextField_default.a, Search_objectSpread(Search_objectSpread({}, params), {}, {
      label: "Looking for something?",
      variant: "outlined",
      size: "small"
    })),
    getOptionLabel: option => option.text,
    renderOption: (option, {
      inputValue
    }) => {
      const matches = match_default()(option.text, inputValue);
      const parts = parse_default()(option.text, matches);
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
        display: "flex",
        alignItems: "center",
        children: [option.__typename === "Token" ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(TokenIcon, {
          id: option.id
        }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(PairIcon, {
          base: option.token0,
          quote: option.token1
        }), parts.map((part, index) => {
          return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            style: {
              fontWeight: part.highlight ? 700 : 400,
              whiteSpace: "pre-wrap"
            },
            children: part.text
          }, index);
        })]
      });
    }
  });
}
// EXTERNAL MODULE: external "react-sparklines"
var external_react_sparklines_ = __webpack_require__("Kyld");

// CONCATENATED MODULE: ./src/components/TokenTable.js



function TokenTable_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function TokenTable_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { TokenTable_ownKeys(Object(source), true).forEach(function (key) { TokenTable_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { TokenTable_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function TokenTable_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const TokenTable_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {}
}));
function TokenTable({
  tokens,
  title
}) {
  const classes = TokenTable_useStyles();
  const theme = Object(styles_["useTheme"])();
  const {
    data: {
      bundles
    }
  } = Object(client_["useQuery"])(core["n" /* ethPriceQuery */], {
    pollInterval: 60000
  });
  const {
    data: oneDayEthPriceData
  } = Object(client_["useQuery"])(core["X" /* oneDayEthPriceQuery */]);
  const {
    data: sevenDayEthPriceData
  } = Object(client_["useQuery"])(core["jb" /* sevenDayEthPriceQuery */]);
  const rows = tokens.filter(({
    id
  }) => {
    return !constants["c" /* TOKEN_DENY */].includes(id);
  }).map(token => {
    var _bundles$, _token$oneDay, _token$sevenDay, _bundles$2, _token$oneDay2;

    const price = parseFloat(token.derivedETH) * parseFloat((_bundles$ = bundles[0]) === null || _bundles$ === void 0 ? void 0 : _bundles$.ethPrice);
    const priceYesterday = parseFloat((_token$oneDay = token.oneDay) === null || _token$oneDay === void 0 ? void 0 : _token$oneDay.derivedETH) * parseFloat(oneDayEthPriceData === null || oneDayEthPriceData === void 0 ? void 0 : oneDayEthPriceData.ethPrice);
    const priceChange = (price - priceYesterday) / priceYesterday * 100;
    const priceLastWeek = parseFloat((_token$sevenDay = token.sevenDay) === null || _token$sevenDay === void 0 ? void 0 : _token$sevenDay.derivedETH) * parseFloat(sevenDayEthPriceData === null || sevenDayEthPriceData === void 0 ? void 0 : sevenDayEthPriceData.ethPrice);
    const sevenDayPriceChange = (price - priceLastWeek) / priceLastWeek * 100;
    const liquidityUSD = parseFloat(token === null || token === void 0 ? void 0 : token.liquidity) * parseFloat(token === null || token === void 0 ? void 0 : token.derivedETH) * parseFloat((_bundles$2 = bundles[0]) === null || _bundles$2 === void 0 ? void 0 : _bundles$2.ethPrice);
    const volumeYesterday = token.volumeUSD - ((_token$oneDay2 = token.oneDay) === null || _token$oneDay2 === void 0 ? void 0 : _token$oneDay2.volumeUSD);
    return TokenTable_objectSpread(TokenTable_objectSpread({}, token), {}, {
      price,
      priceYesterday: !Number.isNaN(priceYesterday) ? priceYesterday : 0,
      priceChange,
      liquidityUSD: liquidityUSD || 0,
      volumeYesterday: !Number.isNaN(volumeYesterday) ? volumeYesterday : 0,
      sevenDayPriceChange
    });
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, {
      title: title,
      orderBy: "liquidityUSD",
      columns: [{
        key: "name",
        label: "Name",
        render: (row, index) => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Box"], {
          display: "flex",
          alignItems: "center",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(TokenIcon, {
            id: row.id
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
            href: `/tokens/${row.id}`,
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Typography"], {
              variant: "body2",
              noWrap: true,
              children: row.name
            })
          })]
        })
      }, {
        key: "liquidityUSD",
        align: "right",
        label: "Liquidity",
        render: row => core["j" /* currencyFormatter */].format(row.liquidityUSD)
      }, {
        key: "volumeYesterday",
        align: "right",
        label: "Volume (24h)",
        render: row => core["j" /* currencyFormatter */].format(row.volumeYesterday)
      }, {
        key: "price",
        align: "right",
        label: "Price",
        render: row => core["j" /* currencyFormatter */].format(row.price)
      }, {
        key: "priceChange",
        align: "right",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Percent, {
          percent: row.priceChange
        }),
        label: "24h"
      }, {
        key: "sevenDayPriceChange",
        align: "right",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Percent, {
          percent: row.sevenDayPriceChange
        }),
        label: "7d"
      }, // {
      //   key: "symbol",
      //   label: "Symbol",
      // },
      {
        key: "lastSevenDays",
        align: "right",
        label: "Last 7 Days",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_sparklines_["Sparklines"], {
          data: row.dayData.map(d => d.priceUSD),
          limit: 7,
          svgWidth: 160,
          svgHeight: 30,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_sparklines_["SparklinesLine"], {
            style: {
              strokeWidth: 3,
              stroke: row.sevenDayPriceChange > 0 ? theme.palette.positive.main : row.sevenDayPriceChange < 0 ? theme.palette.negative.main : "currentColor",
              fill: "none"
            }
          })
        })
      }],
      rows: rows
    })
  });
}
// EXTERNAL MODULE: external "date-fns/formatDistance"
var formatDistance_ = __webpack_require__("2ZpW");
var formatDistance_default = /*#__PURE__*/__webpack_require__.n(formatDistance_);

// CONCATENATED MODULE: ./src/components/Transactions.js



function Transactions_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Transactions_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Transactions_ownKeys(Object(source), true).forEach(function (key) { Transactions_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Transactions_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Transactions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const Transactions_useStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    width: "100%"
  }
}));
function Transactions({
  transactions,
  txCount
}) {
  const classes = Transactions_useStyles();
  const rows = [...transactions.swaps, ...transactions.mints, ...transactions.burns].map(transaction => {
    if (transaction.__typename === "Swap") {
      return Transactions_objectSpread(Transactions_objectSpread({}, transaction), {}, {
        amount0: transaction.amount0In === "0" ? transaction.amount1In : transaction.amount0In,
        amount1: transaction.amount1Out === "0" ? transaction.amount0Out : transaction.amount1Out
      });
    }

    return transaction;
  });
  const now = new Date();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(SortableTable, {
      title: "Transactions",
      orderBy: "timestamp",
      columns: [{
        key: "__typename",
        label: "Type",
        render: row => {
          console.log(row);
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
            variant: "body2",
            noWrap: true,
            children: [row.__typename, " ", row.amount0In === "0" || row.__typename === 'Mint' && !row.amount0In ? row.pair.token1.symbol : row.pair.token0.symbol, " ", "for", " ", row.amount1Out === "0" || row.__typename === 'Mint' && !row.amount1Out ? row.pair.token0.symbol : row.pair.token1.symbol]
          });
        }
      }, {
        key: "amountUSD",
        align: "right",
        label: "Value",
        render: row => core["j" /* currencyFormatter */].format(row.amountUSD)
      }, {
        key: "amount0",
        align: "right",
        label: "In",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
          variant: "body2",
          noWrap: true,
          children: [core["m" /* decimalFormatter */].format(row.amount0), " ", row.amount1In === "0" || !row.amount1In ? row.pair.token0.symbol : row.pair.token1.symbol]
        })
      }, {
        key: "amount1",
        align: "right",
        label: "Out",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
          variant: "body2",
          noWrap: true,
          children: [core["m" /* decimalFormatter */].format(row.amount1), " ", row.amount0Out === "0" || !row.amount0Out ? row.pair.token1.symbol : row.pair.token0.symbol]
        })
      }, {
        key: "to",
        label: "To",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Link, {
          href: `https://etherscan.io/address/${row.to}`,
          children: row.to
        })
      }, {
        key: "timestamp",
        align: "right",
        label: "Time",
        render: row => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Typography"], {
          variant: "body2",
          noWrap: true,
          children: [formatDistance_default()(now, new Date(row.timestamp * 1000)), " ago"]
        })
      }],
      rows: rows
    })
  });
}
// CONCATENATED MODULE: ./src/components/Loading.js





const Loading_useStyles = Object(core_["makeStyles"])(theme => ({
  container: {
    height: '500px',
    fontWeight: 'bold'
  },
  progress: {
    textAlign: 'center',
    minHeight: '50px'
  }
}));
function Loading() {
  const classes = Loading_useStyles();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_AppShell, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(core_["Grid"], {
      container: true,
      justify: "center",
      alignContent: "center",
      direction: "column",
      className: classes.container,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        className: classes.progress,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["CircularProgress"], {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(core_["Grid"], {
        item: true,
        children: "Loading..."
      })]
    })
  });
}
// CONCATENATED MODULE: ./src/components/index.js


































/***/ }),

/***/ "Kyld":
/***/ (function(module, exports) {

module.exports = require("react-sparklines");

/***/ }),

/***/ "LsSt":
/***/ (function(module, exports) {

module.exports = require("@visx/scale");

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "MYXB":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "NxG6":
/***/ (function(module, exports) {

module.exports = require("@visx/shape");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RZtx":
/***/ (function(module, exports) {

module.exports = require("@visx/text");

/***/ }),

/***/ "RjLk":
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "VygO":
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/match");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XfbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "YCa+":
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YRlH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOKEN_DENY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAIR_DENY; });
/* unused harmony export EXCHANGE_CREATED_TIMESTAMP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return POOL_DENY; });
/* unused harmony export SUSHI_TOKEN */
const TOKEN_DENY = [// "0x495c7f3a713870f68f8b418b355c085dfdc412c3",
  // "0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea",
  // "0xe31debd7abff90b06bca21010dd860d8701fd901",
  // "0xfc989fbb6b3024de5ca0144dc23c18a063942ac1",
];
const PAIR_DENY = [// "0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5"
];
const EXCHANGE_CREATED_TIMESTAMP = 1633039200;
const POOL_DENY = [// "14", "29", "45", "30"
];
const SUSHI_TOKEN = "0x5fa664f69c2a4a3ec94fac3cbf7049bd9ca73129";

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZkBw":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHWC":
/***/ (function(module, exports) {

module.exports = require("@visx/pattern");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dSNi":
/***/ (function(module, exports) {

module.exports = require("@visx/group");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dchI":
/***/ (function(module, exports) {

module.exports = require("autosuggest-highlight/parse");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
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
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

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

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g7qJ":
/***/ (function(module, exports) {

module.exports = require("@visx/tooltip");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hblE":
/***/ (function(module, exports) {

module.exports = require("@visx/brush");

/***/ }),

/***/ "hyhg":
/***/ (function(module, exports) {

module.exports = require("@visx/mock-data/lib/mocks/letterFrequency");

/***/ }),

/***/ "i9YK":
/***/ (function(module, exports) {

module.exports = require("millify");

/***/ }),

/***/ "idLA":
/***/ (function(module, exports) {

module.exports = require("@visx/grid");

/***/ }),

/***/ "l6o+":
/***/ (function(module, exports) {

module.exports = require("web3-utils");

/***/ }),

/***/ "mBQT":
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oI26":
/***/ (function(module, exports) {

module.exports = require("react-window");

/***/ }),

/***/ "s9Ed":
/***/ (function(module, exports) {

module.exports = require("lodash.merge");

/***/ }),

/***/ "tcNV":
/***/ (function(module, exports) {

module.exports = require("@visx/gradient");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "w5nF":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/retry");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x7I7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ getBar; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ getBarHistories; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ getBarUser; });
__webpack_require__.d(__webpack_exports__, "C", function() { return /* reexport */ getLatestBlock; });
__webpack_require__.d(__webpack_exports__, "E", function() { return /* reexport */ getOneDayBlock; });
__webpack_require__.d(__webpack_exports__, "S", function() { return /* reexport */ getTwoDayBlock; });
__webpack_require__.d(__webpack_exports__, "M", function() { return /* reexport */ getSevenDayBlock; });
__webpack_require__.d(__webpack_exports__, "A", function() { return /* reexport */ getFactory; });
__webpack_require__.d(__webpack_exports__, "O", function() { return /* reexport */ getSushiToken; });
__webpack_require__.d(__webpack_exports__, "y", function() { return /* reexport */ getDayData; });
__webpack_require__.d(__webpack_exports__, "P", function() { return /* reexport */ getToken; });
__webpack_require__.d(__webpack_exports__, "R", function() { return /* reexport */ exchange_getTokens; });
__webpack_require__.d(__webpack_exports__, "K", function() { return /* reexport */ getPoolUser; });
__webpack_require__.d(__webpack_exports__, "J", function() { return /* reexport */ getPoolHistories; });
__webpack_require__.d(__webpack_exports__, "I", function() { return /* reexport */ getPool; });
__webpack_require__.d(__webpack_exports__, "L", function() { return /* reexport */ getPools; });
__webpack_require__.d(__webpack_exports__, "B", function() { return /* reexport */ getGainers; });
__webpack_require__.d(__webpack_exports__, "D", function() { return /* reexport */ getLosers; });
__webpack_require__.d(__webpack_exports__, "z", function() { return /* reexport */ getEthPrice; });
__webpack_require__.d(__webpack_exports__, "F", function() { return /* reexport */ getOneDayEthPrice; });
__webpack_require__.d(__webpack_exports__, "N", function() { return /* reexport */ getSevenDayEthPrice; });
__webpack_require__.d(__webpack_exports__, "G", function() { return /* reexport */ getPair; });
__webpack_require__.d(__webpack_exports__, "H", function() { return /* reexport */ getPairs; });
__webpack_require__.d(__webpack_exports__, "Q", function() { return /* reexport */ getTokenPairs; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ getApollo; });
__webpack_require__.d(__webpack_exports__, "pb", function() { return /* reexport */ useApollo; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ darkModeVar; });
__webpack_require__.d(__webpack_exports__, "T", function() { return /* reexport */ getX; });
__webpack_require__.d(__webpack_exports__, "U", function() { return /* reexport */ getY; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ bisectDate; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ axisColor; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ axisBottomTickLabelProps; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ axisLeftTickLabelProps; });
__webpack_require__.d(__webpack_exports__, "qb", function() { return /* reexport */ useInterval; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ currencyFormatter; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ decimalFormatter; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ formatDate; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ formatCurrency; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ formatDecimal; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ barQuery; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ barHistoriesQuery; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ barUserQuery; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ blockQuery; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ blocksQuery; });
__webpack_require__.d(__webpack_exports__, "V", function() { return /* reexport */ latestBlockQuery; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ factoryQuery; });
__webpack_require__.d(__webpack_exports__, "X", function() { return /* reexport */ oneDayEthPriceQuery; });
__webpack_require__.d(__webpack_exports__, "jb", function() { return /* reexport */ sevenDayEthPriceQuery; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ ethPriceQuery; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ ethPriceTimeTravelQuery; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ dayDatasQuery; });
__webpack_require__.d(__webpack_exports__, "bb", function() { return /* reexport */ pairQuery; });
__webpack_require__.d(__webpack_exports__, "cb", function() { return /* reexport */ pairTimeTravelQuery; });
__webpack_require__.d(__webpack_exports__, "ab", function() { return /* reexport */ pairDayDatasQuery; });
__webpack_require__.d(__webpack_exports__, "db", function() { return /* reexport */ pairsQuery; });
__webpack_require__.d(__webpack_exports__, "eb", function() { return /* reexport */ pairsTimeTravelQuery; });
__webpack_require__.d(__webpack_exports__, "mb", function() { return /* reexport */ tokenQuery; });
__webpack_require__.d(__webpack_exports__, "kb", function() { return /* reexport */ tokenDayDatasQuery; });
__webpack_require__.d(__webpack_exports__, "lb", function() { return /* reexport */ tokenPairsQuery; });
__webpack_require__.d(__webpack_exports__, "nb", function() { return /* reexport */ tokensQuery; });
__webpack_require__.d(__webpack_exports__, "ob", function() { return /* reexport */ transactionsQuery; });
__webpack_require__.d(__webpack_exports__, "hb", function() { return /* reexport */ poolUserQuery; });
__webpack_require__.d(__webpack_exports__, "fb", function() { return /* reexport */ poolHistoryQuery; });
__webpack_require__.d(__webpack_exports__, "gb", function() { return /* reexport */ poolQuery; });
__webpack_require__.d(__webpack_exports__, "ib", function() { return /* reexport */ poolsQuery; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ gainersQuery; });
__webpack_require__.d(__webpack_exports__, "W", function() { return /* reexport */ losersQuery; });
__webpack_require__.d(__webpack_exports__, "Y", function() { return /* reexport */ oneMonth; });
__webpack_require__.d(__webpack_exports__, "Z", function() { return /* reexport */ oneWeek; });

// UNUSED EXPORTS: getAverageBlockTime, getPoolIds, preload, getLiquidityPositionSnapshots, usePrevious, formatAddress, factoryTimeTravelQuery, userIdsQuery, uniswapUserQuery, bundleFields, dayDataFieldsQuery, pairTokenFieldsQuery, pairFieldsQuery, pairIdsQuery, pairCountQuery, liquidityPositionSubsetQuery, pairSubsetQuery, tokenFieldsQuery, tokenTimeTravelQuery, tokenIdsQuery, tokensTimeTravelQuery, lockupUserQuery, poolIdsQuery

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./src/core/queries/bar.js

const barQuery = external_graphql_tag_default.a`
  query barQuery($id: String! = "0xc41c680c60309d4646379ed62020c534eb67b6f4") {
    bar(id: $id) {
      id
      totalSupply
      ratio
      xSushiMinted
      xSushiBurned
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xSushiAge
      xSushiAgeDestroyed
      # histories(first: 1000) {
      #   id
      #   date
      #   timeframe
      #   sushiStaked
      #   sushiStakedUSD
      #   sushiHarvested
      #   sushiHarvestedUSD
      #   xSushiAge
      #   xSushiAgeDestroyed
      #   xSushiMinted
      #   xSushiBurned
      #   xSushiSupply
      #   ratio
      # }
    }
  }
`;
const barHistoriesQuery = external_graphql_tag_default.a`
  query barHistoriesQuery {
    histories(first: 1000) {
      id
      date
      timeframe
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xSushiAge
      xSushiAgeDestroyed
      xSushiMinted
      xSushiBurned
      xSushiSupply
      ratio
    }
  }
`;
const barUserQuery = external_graphql_tag_default.a`
  query barUserQuery($id: String!) {
    user(id: $id) {
      id
      bar {
        totalSupply
        sushiStaked
      }
      xSushi
      sushiStaked
      sushiStakedUSD
      sushiHarvested
      sushiHarvestedUSD
      xSushiIn
      xSushiOut
      xSushiOffset
      xSushiMinted
      xSushiBurned
      sushiIn
      sushiOut
      usdIn
      usdOut
      createdAt
      createdAtBlock
    }
  }
`;
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./src/core/apollo/variables.js


const getDarkModeVar = () => {
  if (typeof localStorage !== "undefined") {
    const isDarkMode = localStorage.getItem("darkMode"); // Set dark mode by default

    if (isDarkMode === null) {
      document.documentElement.classList.add(["dark-theme"]);
      document.documentElement.style.color = "#FFFFFF";
      localStorage.setItem("darkMode", "true");
      return true;
    }

    return isDarkMode === "true";
  }

  return false;
};

const darkModeVar = Object(client_["makeVar"])(getDarkModeVar());
// CONCATENATED MODULE: ./src/core/apollo/cache.js


/* harmony default export */ var cache = (new client_["InMemoryCache"]({
  typePolicies: {
    // Pool: {
    //   // Singleton types that have no identifying field can use an empty
    //   // array for their keyFields.
    //   keyFields: ["pair"],
    // },
    Query: {
      fields: {
        darkMode() {
          return darkModeVar();
        }

      }
    }
  }
}));
// EXTERNAL MODULE: external "@apollo/client/link/retry"
var retry_ = __webpack_require__("w5nF");

// CONCATENATED MODULE: ./src/core/apollo/link.js

 // export const uniswap = from([
//   new RetryLink(),
//   new HttpLink({
//     uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
//     shouldBatch: true,
//   }),
// ]);

const bar = Object(client_["from"])([new retry_["RetryLink"](), new client_["HttpLink"]({
  uri: "http://78.47.81.198:8000/subgraphs/name/mistswap/bar",
  shouldBatch: true
})]);
const masterchef = Object(client_["from"])([new retry_["RetryLink"](), new client_["HttpLink"]({
  uri: "http://78.47.81.198:8000/subgraphs/name/mistswap/master-chef",
  shouldBatch: true
})]);
const exchange = Object(client_["from"])([new retry_["RetryLink"](), new client_["HttpLink"]({
  uri: "http://78.47.81.198:8000/subgraphs/name/mistswap/exchange",
  shouldBatch: true
})]);
const blocklytics = Object(client_["from"])([new retry_["RetryLink"](), new client_["HttpLink"]({
  uri: "http://78.47.81.198:8000/subgraphs/name/blocklytics/ethereum-blocks",
  shouldBatch: true
})]);
const lockup = Object(client_["from"])([new retry_["RetryLink"](), new client_["HttpLink"]({
  uri: "http://78.47.81.198:8000/subgraphs/name/mistswap/lockup",
  shouldBatch: true
})]);
/* harmony default export */ var apollo_link = (Object(client_["split"])(operation => {
  return operation.getContext().clientName === "blocklytics";
}, blocklytics, Object(client_["split"])(operation => {
  return operation.getContext().clientName === "masterchef";
}, masterchef, Object(client_["split"])(operation => {
  return operation.getContext().clientName === "bar";
}, bar, Object(client_["split"])(operation => {
  return operation.getContext().clientName === "lockup";
}, lockup, exchange)))));
// EXTERNAL MODULE: external "lodash.merge"
var external_lodash_merge_ = __webpack_require__("s9Ed");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// CONCATENATED MODULE: ./src/core/apollo/index.js






function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}

let apolloClient;

function createApolloClient() {
  return new client_["ApolloClient"]({
    ssrMode: true,
    connectToDevTools:  false && false,
    link: apollo_link,
    cache: cache
  });
}

function getApollo(initialState = null) {
  var _apolloClient2;

  const _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Combine


    const data = external_lodash_merge_default()(initialState, existingCache);

    _apolloClient.cache.restore(data);
  } // For SSG and SSR always create a new Apollo Client


  if (true) {
    return _apolloClient;
  } // Create the Apollo Client once in the client


  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(external_react_["useMemo"])(() => getApollo(initialState), [initialState]);
  return store;
}

// CONCATENATED MODULE: ./src/core/api/bar.js


async function getBar(client = getApollo()) {
  const {
    data
  } = await client.query({
    query: barQuery,
    context: {
      clientName: "bar"
    }
  });
  await client.cache.writeQuery({
    query: barQuery,
    data
  });
  return await client.cache.readQuery({
    query: barQuery
  });
}
async function getBarHistories(client = getApollo()) {
  const {
    data
  } = await client.query({
    query: barHistoriesQuery,
    context: {
      clientName: "bar"
    }
  });
  await client.cache.writeQuery({
    query: barHistoriesQuery,
    data
  });
  return await client.cache.readQuery({
    query: barHistoriesQuery
  });
}
async function getBarUser(id, client = getApollo()) {
  const {
    data
  } = await client.query({
    query: barUserQuery,
    variables: {
      id
    },
    context: {
      clientName: "bar"
    }
  });
  await client.cache.writeQuery({
    query: barUserQuery,
    data
  });
  return await client.cache.readQuery({
    query: barUserQuery
  });
}
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__("9BML");

// CONCATENATED MODULE: ./src/core/api/blocks.js


async function getLatestBlock(client = getApollo()) {
  const {
    data
  } = await client.query({
    query: latestBlockQuery,
    context: {
      clientName: "blocklytics"
    }
  });
  return data;
}
async function getOneDayBlock(client = getApollo()) {
  const date = Object(external_date_fns_["startOfMinute"])(Object(external_date_fns_["subDays"])(Date.now(), 1));
  const start = Math.floor(date / 1000);
  const end = Math.floor(date / 1000) + 600;
  const {
    data: blocksData
  } = await client.query({
    query: blockQuery,
    variables: {
      start,
      end
    },
    context: {
      clientName: "blocklytics"
    },
    fetchPolicy: "network-only"
  });
  return {
    number: Number(blocksData === null || blocksData === void 0 ? void 0 : blocksData.blocks[0].number)
  };
}
async function getTwoDayBlock(client = getApollo()) {
  const date = Object(external_date_fns_["startOfMinute"])(Object(external_date_fns_["subDays"])(Date.now(), 2));
  const start = Math.floor(date / 1000);
  const end = Math.floor(date / 1000) + 600;
  const {
    data: blocksData
  } = await client.query({
    query: blockQuery,
    variables: {
      start,
      end
    },
    context: {
      clientName: "blocklytics"
    },
    fetchPolicy: "network-only"
  });
  return {
    number: Number(blocksData === null || blocksData === void 0 ? void 0 : blocksData.blocks[0].number)
  };
}
async function getSevenDayBlock(client = getApollo()) {
  const date = Object(external_date_fns_["startOfMinute"])(Object(external_date_fns_["subWeeks"])(Date.now(), 1));
  const start = Math.floor(date / 1000);
  const end = Math.floor(date / 1000) + 600;
  const {
    data: blocksData
  } = await client.query({
    query: blockQuery,
    variables: {
      start,
      end
    },
    context: {
      clientName: "blocklytics"
    },
    fetchPolicy: "network-only"
  });
  return {
    number: Number(blocksData === null || blocksData === void 0 ? void 0 : blocksData.blocks[0].number)
  };
}
async function getAverageBlockTime(client = getApollo()) {
  // Course timestamps used to make better use of the cache (startOfHour + startOfMinuite + startOfSecond)
  const now = Object(external_date_fns_["startOfSecond"])(Object(external_date_fns_["startOfMinute"])(Object(external_date_fns_["startOfHour"])(Date.now())));
  const start = Object(external_date_fns_["getUnixTime"])(Object(external_date_fns_["subHours"])(now, 6));
  const end = Object(external_date_fns_["getUnixTime"])(now);
  const {
    data: {
      blocks
    }
  } = await client.query({
    query: blocksQuery,
    variables: {
      start,
      end
    },
    context: {
      clientName: "blocklytics"
    }
  });
  const averageBlockTime = blocks.reduce((previousValue, currentValue, currentIndex) => {
    if (previousValue.timestamp) {
      const difference = previousValue.timestamp - currentValue.timestamp;
      previousValue.difference = previousValue.difference + difference;
    }

    previousValue.timestamp = currentValue.timestamp;

    if (currentIndex === blocks.length - 1) {
      return previousValue.difference / blocks.length;
    }

    return previousValue;
  }, {
    timestamp: null,
    difference: 0
  });
  return averageBlockTime;
}
// CONCATENATED MODULE: ./src/core/queries/exchange.js

const factoryQuery = external_graphql_tag_default.a`
  query factoryQuery(
    $id: String! = "0x6008247f53395e7be698249770aa1d2bfe265ca0"
  ) {
    factory(id: $id) {
      id
      volumeUSD
      oneDay @client
      twoDay @client
    }
  }
`;
const factoryTimeTravelQuery = external_graphql_tag_default.a`
  query factoryTimeTravelQuery(
    $id: String! = "0x6008247f53395e7be698249770aa1d2bfe265ca0"
    $block: Block_height!
  ) {
    factory(id: $id, block: $block) {
      id
      volumeUSD
    }
  }
`;
const userIdsQuery = external_graphql_tag_default.a`
  query userIdsQuery($first: Int! = 1000, $skip: Int! = 0) {
    users(first: $first, skip: $skip) {
      id
    }
  }
`;
const uniswapUserQuery = external_graphql_tag_default.a`
  query uniswapUserQuery($id: String!) {
    uniswapUser: user(id: $id) {
      id
      liquidityPositions {
        id
        liquidityTokenBalance
        # historicalSnapshots {
        #   id
        #   reserve0
        #   reserve1
        #   block
        #   timestamp
        #   liquidityTokenBalance
        #   liquidityTokenTotalSupply
        # }
      }
    }
  }
`;
const oneDayEthPriceQuery = external_graphql_tag_default.a`
  query OneDayEthPrice {
    ethPrice @client
  }
`;
const sevenDayEthPriceQuery = external_graphql_tag_default.a`
  query sevenDayEthPrice {
    ethPrice @client
  }
`;
const bundleFields = external_graphql_tag_default.a`
  fragment bundleFields on Bundle {
    id
    ethPrice
  }
`;
const ethPriceQuery = external_graphql_tag_default.a`
  query ethPriceQuery($id: Int! = 1) {
    bundles(id: $id) {
      ...bundleFields
    }
  }
  ${bundleFields}
`;
const ethPriceTimeTravelQuery = external_graphql_tag_default.a`
  query ethPriceTimeTravelQuery($id: Int! = 1, $block: Block_height!) {
    bundles(id: $id, block: $block) {
      ...bundleFields
    }
  }
  ${bundleFields}
`;
const dayDataFieldsQuery = external_graphql_tag_default.a`
  fragment dayDataFields on DayData {
    id
    date
    volumeETH
    volumeUSD
    untrackedVolume
    liquidityETH
    liquidityUSD
    txCount
  }
`; // Dashboard...

const dayDatasQuery = external_graphql_tag_default.a`
  query dayDatasQuery($first: Int! = 1000, $date: Int! = 0) {
    dayDatas(first: $first, orderBy: date, orderDirection: desc) {
      ...dayDataFields
    }
  }
  ${dayDataFieldsQuery}
`; // Pairs...

const pairTokenFieldsQuery = external_graphql_tag_default.a`
  fragment pairTokenFields on Token {
    id
    name
    symbol
    totalSupply
    derivedETH
  }
`;
const pairFieldsQuery = external_graphql_tag_default.a`
  fragment pairFields on Pair {
    id
    reserveUSD
    reserveETH
    volumeUSD
    untrackedVolumeUSD
    trackedReserveETH
    token0 {
      ...pairTokenFields
    }
    token1 {
      ...pairTokenFields
    }
    reserve0
    reserve1
    token0Price
    token1Price
    totalSupply
    txCount
    timestamp
  }
  ${pairTokenFieldsQuery}
`;
const pairQuery = external_graphql_tag_default.a`
  query pairQuery($id: String!) {
    pair(id: $id) {
      ...pairFields
      oneDay @client
      twoDay @client
    }
  }
  ${pairFieldsQuery}
`;
const pairTimeTravelQuery = external_graphql_tag_default.a`
  query pairTimeTravelQuery($id: String!, $block: Block_height!) {
    pair(id: $id, block: $block) {
      ...pairFields
    }
  }
  ${pairFieldsQuery}
`;
const pairIdsQuery = external_graphql_tag_default.a`
  query pairIdsQuery {
    pairs(first: 1000) {
      id
    }
  }
`;
const pairCountQuery = external_graphql_tag_default.a`
  query pairCountQuery {
    uniswapFactories {
      pairCount
    }
  }
`;
const pairDayDatasQuery = external_graphql_tag_default.a`
  query pairDayDatasQuery(
    $first: Int = 1000
    $date: Int = 0
    $pairs: [Bytes]!
  ) {
    pairDayDatas(
      first: $first
      orderBy: date
      orderDirection: desc
      where: { pair_in: $pairs, date_gt: $date }
    ) {
      date
      pair {
        id
      }
      token0 {
        derivedETH
      }
      token1 {
        derivedETH
      }
      reserveUSD
      volumeToken0
      volumeToken1
      volumeUSD
      txCount
    }
  }
`;
const liquidityPositionSubsetQuery = external_graphql_tag_default.a`
  query liquidityPositionSubsetQuery($first: Int! = 1000, $user: Bytes!) {
    liquidityPositions(first: $first, where: { user: $user }) {
      id
      liquidityTokenBalance
      user {
        id
      }
      pair {
        id
      }
    }
  }
`;
const pairSubsetQuery = external_graphql_tag_default.a`
  query pairSubsetQuery(
    $first: Int! = 1000
    $pairAddresses: [Bytes]!
    $orderBy: String! = "trackedReserveETH"
    $orderDirection: String! = "desc"
  ) {
    pairs(
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { id_in: $pairAddresses }
    ) {
      ...pairFields
      oneDay @client
      sevenDay @client
    }
  }
  ${pairFieldsQuery}
`;
const pairsQuery = external_graphql_tag_default.a`
  query pairsQuery(
    $first: Int! = 1000
    $orderBy: String! = "reserveUSD"
    $orderDirection: String! = "desc"
  ) {
    pairs(first: $first, orderBy: $orderBy, orderDirection: $orderDirection) {
      ...pairFields
      oneDay @client
      sevenDay @client
    }
  }
  ${pairFieldsQuery}
`;
const pairsTimeTravelQuery = external_graphql_tag_default.a`
  query pairsTimeTravelQuery(
    $first: Int! = 1000
    $pairAddresses: [Bytes]!
    $block: Block_height!
  ) {
    pairs(
      first: $first
      block: $block
      orderBy: trackedReserveETH
      orderDirection: desc
      where: { id_in: $pairAddresses }
    ) {
      id
      reserveUSD
      trackedReserveETH
      volumeUSD
      untrackedVolumeUSD
      txCount
    }
  }
`; // Tokens...

const tokenFieldsQuery = external_graphql_tag_default.a`
  fragment tokenFields on Token {
    id
    symbol
    name
    decimals
    totalSupply
    volume
    volumeUSD
    untrackedVolumeUSD
    txCount
    liquidity
    derivedETH
  }
`;
const tokenQuery = external_graphql_tag_default.a`
  query tokenQuery($id: String!) {
    token(id: $id) {
      ...tokenFields
      oneDay @client
      twoDay @client
    }
  }
  ${tokenFieldsQuery}
`;
const tokenTimeTravelQuery = external_graphql_tag_default.a`
  query tokenTimeTravelQuery($id: String!, $block: Block_height!) {
    token(id: $id, block: $block) {
      ...tokenFields
    }
  }
  ${tokenFieldsQuery}
`;
const tokenIdsQuery = external_graphql_tag_default.a`
  query tokenIdsQuery {
    tokens(first: 1000) {
      id
    }
  }
`;
const tokenDayDatasQuery = external_graphql_tag_default.a`
  query tokenDayDatasQuery(
    $first: Int! = 1000
    $tokens: [Bytes]!
    $date: Int! = 0
  ) {
    tokenDayDatas(
      first: $first
      orderBy: date
      orderDirection: desc
      where: { token_in: $tokens, date_gt: $date }
    ) {
      id
      date
      token {
        id
      }
      volumeUSD
      liquidityUSD
      priceUSD
      txCount
    }
  }
`;
const tokenPairsQuery = external_graphql_tag_default.a`
  query tokenPairsQuery($id: String!) {
    pairs0: pairs(
      first: 1000
      orderBy: reserveUSD
      orderDirection: desc
      where: { token0: $id }
    ) {
      ...pairFields
      oneDay @client
      sevenDay @client
    }
    pairs1: pairs(
      first: 1000
      orderBy: reserveUSD
      orderDirection: desc
      where: { token1: $id }
    ) {
      ...pairFields
      oneDay @client
      sevenDay @client
    }
  }
  ${pairFieldsQuery}
`;
const tokensQuery = external_graphql_tag_default.a`
  query tokensQuery($first: Int! = 1000) {
    tokens(first: $first, orderBy: volumeUSD, orderDirection: desc) {
      ...tokenFields
      dayData(first: 7, skip: 0, orderBy: date, order: asc) {
        id
        priceUSD
      }
      # hourData(first: 168, skip: 0, orderBy: date, order: asc) {
      #   priceUSD
      # }
      oneDay @client
      sevenDay @client
    }
  }
  ${tokenFieldsQuery}
`; // block @client @export(as: "block")

const tokensTimeTravelQuery = external_graphql_tag_default.a`
  query tokensTimeTravelQuery($first: Int! = 1000, $block: Block_height!) {
    tokens(first: $first, block: $block) {
      ...tokenFields
    }
  }
  ${tokenFieldsQuery}
`; // Transactions...

const transactionsQuery = external_graphql_tag_default.a`
  query transactionsQuery($pairAddresses: [Bytes]!) {
    swaps(
      orderBy: timestamp
      orderDirection: desc
      where: { pair_in: $pairAddresses }
    ) {
      id
      timestamp
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      sender
      amount0In
      amount0Out
      amount1In
      amount1Out
      amountUSD
      to
    }
    mints(
      orderBy: timestamp
      orderDirection: desc
      where: { pair_in: $pairAddresses }
    ) {
      id
      timestamp
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
      to
    }
    burns(
      orderBy: timestamp
      orderDirection: desc
      where: { pair_in: $pairAddresses }
    ) {
      id
      timestamp
      pair {
        token0 {
          symbol
        }
        token1 {
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
      to
    }
  }
`;
// CONCATENATED MODULE: ./src/core/api/exchange.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




async function getFactory(client = getApollo()) {
  const {
    data: {
      factory
    }
  } = await client.query({
    query: factoryQuery
  });
  const {
    data: {
      factory: oneDay
    }
  } = await client.query({
    query: factoryTimeTravelQuery,
    variables: {
      block: await getOneDayBlock()
    }
  });
  const {
    data: {
      factory: twoDay
    }
  } = await client.query({
    query: factoryTimeTravelQuery,
    variables: {
      block: await getTwoDayBlock()
    }
  });
  await client.cache.writeQuery({
    query: factoryQuery,
    data: {
      factory: _objectSpread(_objectSpread({}, factory), {}, {
        oneDay,
        twoDay
      })
    }
  });
  return await client.cache.readQuery({
    query: factoryQuery
  });
}
async function getSushiToken(client = getApollo()) {
  return await getToken("0x5fa664f69c2a4a3ec94fac3cbf7049bd9ca73129", client);
}
async function getDayData(client = getApollo()) {
  const {
    data
  } = await client.query({
    query: dayDatasQuery
  });
  await client.cache.writeQuery({
    query: dayDatasQuery,
    data
  });
  return await client.cache.readQuery({
    query: dayDatasQuery
  });
} // Tokens

async function getToken(id, client = getApollo()) {
  const {
    data: {
      token
    }
  } = await client.query({
    query: tokenQuery,
    variables: {
      id
    }
  });
  const oneDayBlock = await getOneDayBlock();
  const twoDayBlock = await getTwoDayBlock();
  const {
    data: {
      token: oneDayToken
    }
  } = await client.query({
    query: tokenTimeTravelQuery,
    variables: {
      id,
      block: oneDayBlock
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      token: twoDayToken
    }
  } = await client.query({
    query: tokenTimeTravelQuery,
    variables: {
      id,
      block: twoDayBlock
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: tokenQuery,
    variables: {
      id
    },
    data: {
      token: _objectSpread(_objectSpread({}, token), {}, {
        oneDay: {
          volumeUSD: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.volumeUSD),
          derivedETH: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.derivedETH),
          liquidity: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.liquidity),
          txCount: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.txCount)
        },
        twoDay: {
          volumeUSD: String(twoDayToken === null || twoDayToken === void 0 ? void 0 : twoDayToken.volumeUSD),
          derivedETH: String(twoDayToken === null || twoDayToken === void 0 ? void 0 : twoDayToken.derivedETH),
          liquidity: String(twoDayToken === null || twoDayToken === void 0 ? void 0 : twoDayToken.liquidity),
          txCount: String(twoDayToken === null || twoDayToken === void 0 ? void 0 : twoDayToken.txCount)
        }
      })
    }
  });
  return await client.cache.readQuery({
    query: tokenQuery,
    variables: {
      id
    }
  });
}
async function exchange_getTokens(client = getApollo()) {
  const {
    data: {
      tokens
    }
  } = await client.query({
    query: tokensQuery
  });
  const block = await getOneDayBlock();
  const {
    data: {
      tokens: oneDayTokens
    }
  } = await client.query({
    query: tokensTimeTravelQuery,
    variables: {
      block
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      tokens: sevenDayTokens
    }
  } = await client.query({
    query: tokensTimeTravelQuery,
    variables: {
      block: await getSevenDayBlock()
    },
    fetchPolicy: "no-cache"
  });
  await client.writeQuery({
    query: tokensQuery,
    data: {
      tokens: tokens.map(token => {
        const oneDayToken = oneDayTokens.find(({
          id
        }) => token.id === id);
        const sevenDayToken = sevenDayTokens.find(({
          id
        }) => token.id === id);
        return _objectSpread(_objectSpread({}, token), {}, {
          oneDay: {
            volumeUSD: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.volumeUSD),
            derivedETH: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.derivedETH),
            liquidity: String(oneDayToken === null || oneDayToken === void 0 ? void 0 : oneDayToken.liquidity)
          },
          sevenDay: {
            volumeUSD: String(sevenDayToken === null || sevenDayToken === void 0 ? void 0 : sevenDayToken.volumeUSD),
            derivedETH: String(sevenDayToken === null || sevenDayToken === void 0 ? void 0 : sevenDayToken.derivedETH),
            liquidity: String(sevenDayToken === null || sevenDayToken === void 0 ? void 0 : sevenDayToken.liquidity)
          }
        });
      })
    }
  });
  return await client.cache.readQuery({
    query: tokensQuery
  });
}
// CONCATENATED MODULE: ./src/core/queries/masterchef.js

const lockupUserQuery = external_graphql_tag_default.a`
  query lockupUserQuery($address: String!) {
    users(first: 1000, where: { amount_gt: 0, address: $address }) {
      id
      amount
      address
      rewardDebt
      pool {
        id
        lockup {
          totalAllocPoint
        }
        balance
        accSushiPerShare
      }
    }
  }
`;
const poolUserFragment = external_graphql_tag_default.a`
  fragment PoolUser on User {
    id
    address
    pool {
      id
      pair
      balance
      accSushiPerShare
      lastRewardBlock
    }
    amount
    rewardDebt
    entryUSD
    exitUSD
    sushiHarvested
    sushiHarvestedUSD
  }
`;
const poolUserQuery = external_graphql_tag_default.a`
  query poolUserQuery($address: String!, $amount_gt: Int! = 0) {
    users(where: { address: $address, amount_gt: $amount_gt }) {
      ...PoolUser
    }
  }
  ${poolUserFragment}
`;
const poolHistoryQuery = external_graphql_tag_default.a`
  query poolHistoryQuery($id: String!) {
    poolHistories(first: 1000, where: { pool: $id }, orderBy: timestamp) {
      id
      pool {
        id
        accSushiPerShare
      }
      slpBalance
      slpAge
      slpAgeRemoved
      slpDeposited
      slpWithdrawn
      entryUSD
      exitUSD
      sushiHarvestedUSD
      userCount
      timestamp
      block
    }
  }
`;
const poolQuery = external_graphql_tag_default.a`
  query poolQuery($id: ID!) {
    pool(id: $id) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSushiPerShare
      balance
      userCount
      owner {
        id
        sushiPerBlock
        totalAllocPoint
      }
      users(orderBy: amount, orderDirection: desc) {
        id
        address
        amount
        rewardDebt
      }
      slpAge
      liquidityPair @client
      timestamp
      entryUSD
      exitUSD
    }
  }
`;
const poolIdsQuery = external_graphql_tag_default.a`
  query poolIdsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "timestamp"
    $orderDirection: String! = "desc"
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
    }
  }
`;
const poolsQuery = external_graphql_tag_default.a`
  query poolsQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $orderBy: String! = "timestamp"
    $orderDirection: String! = "desc"
  ) {
    pools(
      first: $first
      skip: $skip
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      id
      pair
      allocPoint
      lastRewardBlock
      accSushiPerShare
      balance
      userCount
      owner {
        id
        sushiPerBlock
        totalAllocPoint
      }
      # users {
      #   id
      #   address
      #   amount
      #   rewardDebt
      # }
      liquidityPair @client
      roiPerBlock @client
      roiPerHour @client
      roiPerDay @client
      roiPerMonth @client
      roiPerYear @client
      rewardPerThousand @client
      tvl @client
      timestamp
    }
  }
`;
// EXTERNAL MODULE: ./src/core/constants.js
var constants = __webpack_require__("YRlH");

// CONCATENATED MODULE: ./src/core/api/masterchef.js
function masterchef_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function masterchef_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { masterchef_ownKeys(Object(source), true).forEach(function (key) { masterchef_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { masterchef_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function masterchef_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







async function getPoolIds(client = getApollo()) {
  const {
    data: {
      pools
    }
  } = await client.query({
    query: poolIdsQuery,
    context: {
      clientName: "masterchef"
    }
  });
  await client.cache.writeQuery({
    query: poolIdsQuery,
    data: {
      pools: pools.filter(pool => !constants["b" /* POOL_DENY */].includes(pool.id) && pool.allocPoint !== "0")
    }
  });
  return await client.cache.readQuery({
    query: poolIdsQuery
  });
}
async function getPoolUser(id, client = getApollo()) {
  const {
    data
  } = await client.query({
    query: poolUserQuery,
    fetchPolicy: "network-only",
    variables: {
      address: id
    },
    context: {
      clientName: "masterchef"
    }
  });
  await client.cache.writeQuery({
    query: poolUserQuery,
    data
  });
  return await client.cache.readQuery({
    query: poolUserQuery
  });
}
async function getPoolHistories(id, client = getApollo()) {
  const {
    data: {
      poolHistories
    }
  } = await client.query({
    query: poolHistoryQuery,
    fetchPolicy: "network-only",
    variables: {
      id
    },
    context: {
      clientName: "masterchef"
    }
  });
  await client.cache.writeQuery({
    query: poolHistoryQuery,
    data: {
      poolHistories
    }
  });
  return await client.cache.readQuery({
    query: poolHistoryQuery
  });
}
async function getPool(id, client = getApollo()) {
  const {
    data: {
      pool
    }
  } = await client.query({
    query: poolQuery,
    fetchPolicy: "network-only",
    variables: {
      id
    },
    context: {
      clientName: "masterchef"
    }
  });
  const {
    data: {
      pair: liquidityPair
    }
  } = await client.query({
    query: pairQuery,
    variables: {
      id: pool.pair
    },
    fetchPolicy: "network-only"
  });
  await client.cache.writeQuery({
    query: poolQuery,
    data: {
      pool: masterchef_objectSpread(masterchef_objectSpread({}, pool), {}, {
        liquidityPair
      })
    }
  });
  return await client.cache.readQuery({
    query: poolQuery
  });
}
async function getPools(client = getApollo()) {
  const {
    data: {
      pools
    }
  } = await client.query({
    query: poolsQuery,
    context: {
      clientName: "masterchef"
    }
  });
  const pairAddresses = pools.map(pool => {
    return pool.pair;
  }).sort();
  const pool45 = pools.find(p => p.id === "45");
  const {
    data: {
      pairs
    }
  } = await client.query({
    query: pairSubsetQuery,
    variables: {
      pairAddresses
    },
    fetchPolicy: "network-only"
  }); // const averageBlockTime = (await getAverageBlockTime()) / 100;

  const averageBlockTime = await getAverageBlockTime(); // const averageBlockTime = 13;

  const {
    bundles
  } = await getEthPrice();
  const ethPrice = bundles[0].ethPrice;
  const {
    token
  } = await getToken("0x5fa664f69c2a4a3ec94fac3cbf7049bd9ca73129");
  const sushiPrice = ethPrice * token.derivedETH; // MASTERCHEF

  const {
    data: {
      liquidityPositions
    }
  } = await client.query({
    query: liquidityPositionSubsetQuery,
    variables: {
      user: "0x3a7b9d0ed49a90712da4e087b17ee4ac1375a5d4"
    }
  });
  await client.cache.writeQuery({
    query: poolsQuery,
    data: {
      pools: pools.filter(pool => !constants["b" /* POOL_DENY */].includes(pool.id) && pool.allocPoint !== "0" && pool.accSushiPerShare !== "0" && pairs.find(pair => (pair === null || pair === void 0 ? void 0 : pair.id) === pool.pair)).map(pool => {
        const pair = pairs.find(pair => pair.id === pool.pair);
        const liquidityPosition = liquidityPositions.find(liquidityPosition => liquidityPosition.pair.id === pair.id);
        const balance = Number(pool.balance / 1e18);
        const blocksPerHour = 3600 / averageBlockTime; // const rewardPerBlock =
        //   100 - 100 * (pool45.allocPoint / pool45.owner.totalAllocPoint);
        // const roiPerBlock =
        //   (Number(token.derivedETH) *
        //     rewardPerBlock *
        //     3 *
        //     (Number(pool.allocPoint) / Number(pool.owner.totalAllocPoint))) /
        //   (Number(pair.reserveETH) * (balance / Number(pair.totalSupply)));

        const balanceUSD = balance / Number(pair.totalSupply) * Number(pair.reserveUSD);
        const rewardPerBlock = pool.allocPoint / pool.owner.totalAllocPoint * pool.owner.sushiPerBlock / 1e18;
        const roiPerBlock = rewardPerBlock * sushiPrice / balanceUSD;
        const roiPerHour = roiPerBlock * blocksPerHour;
        const roiPerDay = roiPerHour * 24;
        const roiPerMonth = roiPerDay * 30;
        const roiPerYear = roiPerMonth * 12;
        return masterchef_objectSpread(masterchef_objectSpread({}, pool), {}, {
          liquidityPair: pair,
          roiPerBlock,
          roiPerHour,
          roiPerDay,
          roiPerMonth,
          roiPerYear,
          rewardPerThousand: 1 * roiPerDay * (1000 / sushiPrice),
          tvl: pair.reserveUSD / pair.totalSupply * liquidityPosition.liquidityTokenBalance
        });
      })
    }
  });
  return await client.cache.readQuery({
    query: poolsQuery
  });
}
// CONCATENATED MODULE: ./src/core/api/pages.js
function pages_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function pages_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { pages_ownKeys(Object(source), true).forEach(function (key) { pages_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { pages_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function pages_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


async function getGainers(client = getApollo()) {
  const {
    data: {
      pairs
    }
  } = await client.query({
    query: gainersQuery
  });
  const pairAddresses = pairs.map(pair => pair.id).sort();
  const oneDayBlock = await getOneDayBlock();
  const twoDayBlock = await getTwoDayBlock();
  const {
    data: {
      pairs: oneDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: oneDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      pairs: twoDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: twoDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: gainersQuery,
    data: {
      pairs: pairs.map(pair => {
        const oneDayPair = oneDayPairs.find(({
          id
        }) => pair.id === id);
        const twoDayPair = twoDayPairs.find(({
          id
        }) => pair.id === id);
        const volumeUSDGained = pair.volumeUSD - (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD);
        const volumeUSDGainedYesterday = (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD) - (twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.volumeUSD);
        const feesUSDGained = volumeUSDGained * 0.003;
        const feesUSDGainedYesterday = volumeUSDGainedYesterday * 0.003;
        const reserveUSDGained = pair.reserveUSD - (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD);
        const reserveUSDGainedYesterday = (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD) - (twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.reserveUSD);
        return pages_objectSpread(pages_objectSpread({}, pair), {}, {
          feesUSDGained,
          feesUSDGainedYesterday,
          reserveUSDGained,
          reserveUSDGainedYesterday,
          volumeUSDGained,
          volumeUSDGainedYesterday
        });
      })
    }
  });
  return await client.cache.readQuery({
    query: gainersQuery
  });
}
async function getLosers(client = getApollo()) {
  const {
    data: {
      pairs
    }
  } = await client.query({
    query: losersQuery
  });
  const pairAddresses = pairs.map(pair => pair.id).sort();
  const oneDayBlock = await getOneDayBlock();
  const twoDayBlock = await getTwoDayBlock();
  const {
    data: {
      pairs: oneDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: oneDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      pairs: twoDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: twoDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: losersQuery,
    data: {
      pairs: pairs.map(pair => {
        const oneDayPair = oneDayPairs.find(({
          id
        }) => pair.id === id);
        const twoDayPair = twoDayPairs.find(({
          id
        }) => pair.id === id);
        const volumeUSDLost = pair.volumeUSD - (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD);
        const volumeUSDLostYesterday = (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD) - (twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.volumeUSD);
        const feesUSDLost = volumeUSDLost * 0.003;
        const feesUSDLostYesterday = volumeUSDLostYesterday * 0.003;
        const reserveUSDLost = pair.reserveUSD - (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD);
        const reserveUSDLostYesterday = (oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD) - (twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.reserveUSD);
        return pages_objectSpread(pages_objectSpread({}, pair), {}, {
          feesUSDLost,
          feesUSDLostYesterday,
          volumeUSDLost,
          volumeUSDLostYesterday,
          reserveUSDLost,
          reserveUSDLostYesterday
        });
      })
    }
  });
  return await client.cache.readQuery({
    query: losersQuery
  });
}
// CONCATENATED MODULE: ./src/core/api/index.js
function api_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function api_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { api_ownKeys(Object(source), true).forEach(function (key) { api_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { api_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function api_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







async function preload() {
  // Pre-load anything that might be needed globally (stuff for search bar etc...)
  await getTokens();
  await getPairs();
}
async function getLiquidityPositionSnapshots(user, client = getApollo()) {
  const {
    data: {
      liquidityPositionSnapshots
    }
  } = await client.query({
    query: liquidityPositionSnapshotsQuery,
    variables: {
      user
    }
  });
} // Eth Price

async function getEthPrice(client = getApollo()) {
  const {
    data
  } = await client.query({
    query: ethPriceQuery
  });
  await client.cache.writeQuery({
    query: ethPriceQuery,
    data
  });
  return await client.cache.readQuery({
    query: ethPriceQuery
  });
}
async function getOneDayEthPrice(client = getApollo()) {
  var _bundles$;

  const block = await getOneDayBlock();
  const {
    data: {
      bundles
    }
  } = await client.query({
    query: ethPriceTimeTravelQuery,
    variables: {
      block
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: oneDayEthPriceQuery,
    data: {
      ethPrice: (_bundles$ = bundles[0]) === null || _bundles$ === void 0 ? void 0 : _bundles$.ethPrice
    }
  });
}
async function getSevenDayEthPrice(client = getApollo()) {
  var _bundles$2;

  const block = await getSevenDayBlock();
  const {
    data: {
      bundles
    }
  } = await client.query({
    query: ethPriceTimeTravelQuery,
    variables: {
      block
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: sevenDayEthPriceQuery,
    data: {
      ethPrice: (_bundles$2 = bundles[0]) === null || _bundles$2 === void 0 ? void 0 : _bundles$2.ethPrice
    }
  });
} // Pairs

async function getPair(id, client = getApollo()) {
  const {
    data: {
      pair
    }
  } = await client.query({
    query: pairQuery,
    variables: {
      id
    }
  });
  const oneDayBlock = await getOneDayBlock();
  const twoDayBlock = await getTwoDayBlock();
  const {
    data: {
      pair: oneDayPair
    }
  } = await client.query({
    query: pairTimeTravelQuery,
    variables: {
      block: oneDayBlock,
      id
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      pair: twoDayPair
    }
  } = await client.query({
    query: pairTimeTravelQuery,
    variables: {
      block: twoDayBlock,
      id
    },
    fetchPolicy: "no-cache"
  }); // console.log({ oneDayPair, twoDayPair });

  await client.cache.writeQuery({
    query: pairQuery,
    variables: {
      id
    },
    data: {
      pair: api_objectSpread(api_objectSpread({}, pair), {}, {
        oneDay: {
          untrackedVolumeUSD: Number(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.untrackedVolumeUSD),
          volumeUSD: Number(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD),
          reserveUSD: Number(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD),
          txCount: Number(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.txCount)
        },
        twoDay: {
          untrackedVolumeUSD: Number(twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.untrackedVolumeUSD),
          volumeUSD: Number(twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.volumeUSD),
          reserveUSD: Number(twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.reserveUSD),
          txCount: Number(twoDayPair === null || twoDayPair === void 0 ? void 0 : twoDayPair.txCount)
        }
      })
    }
  });
  return await client.cache.readQuery({
    query: pairQuery,
    variables: {
      id
    }
  });
}
async function getPairs(client = getApollo()) {
  const {
    data: {
      pairs
    }
  } = await client.query({
    query: pairsQuery
  });
  const pairAddresses = pairs.map(pair => pair.id).sort();
  const oneDayBlock = await getOneDayBlock();
  const sevenDayBlock = await getSevenDayBlock();
  const {
    data: {
      pairs: oneDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: oneDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      pairs: sevenDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: sevenDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: pairsQuery,
    data: {
      pairs: pairs.map(pair => {
        const oneDayPair = oneDayPairs.find(({
          id
        }) => pair.id === id);
        const sevenDayPair = sevenDayPairs.find(({
          id
        }) => pair.id === id);
        return api_objectSpread(api_objectSpread({}, pair), {}, {
          oneDay: {
            untrackedVolumeUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.untrackedVolumeUSD),
            volumeUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD),
            reserveUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD),
            txCount: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.txCount)
          },
          sevenDay: {
            untrackedVolumeUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.untrackedVolumeUSD),
            volumeUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.volumeUSD),
            reserveUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.reserveUSD),
            txCount: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.txCount)
          }
        });
      })
    }
  });
  return await client.cache.readQuery({
    query: pairsQuery
  });
}
async function getTokenPairs(id, client = getApollo()) {
  const {
    data: {
      pairs0,
      pairs1
    }
  } = await client.query({
    query: tokenPairsQuery,
    variables: {
      id
    }
  });
  const pairAddresses = [...pairs0.map(pair => pair.id), ...pairs1.map(pair => pair.id)].sort();
  const oneDayBlock = await getOneDayBlock();
  const sevenDayBlock = await getSevenDayBlock();
  const {
    data: {
      pairs: oneDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: oneDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  const {
    data: {
      pairs: sevenDayPairs
    }
  } = await client.query({
    query: pairsTimeTravelQuery,
    variables: {
      block: sevenDayBlock,
      pairAddresses
    },
    fetchPolicy: "no-cache"
  });
  await client.cache.writeQuery({
    query: tokenPairsQuery,
    variables: {
      id
    },
    data: {
      pairs0: pairs0.map(pair => {
        const oneDayPair = oneDayPairs.find(({
          id
        }) => pair.id === id);
        const sevenDayPair = sevenDayPairs.find(({
          id
        }) => pair.id === id);
        return api_objectSpread(api_objectSpread({}, pair), {}, {
          oneDay: {
            volumeUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD),
            reserveUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD)
          },
          sevenDay: {
            volumeUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.volumeUSD),
            reserveUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.reserveUSD)
          }
        });
      }),
      pairs1: pairs1.map(pair => {
        const oneDayPair = oneDayPairs.find(({
          id
        }) => pair.id === id);
        const sevenDayPair = sevenDayPairs.find(({
          id
        }) => pair.id === id);
        return api_objectSpread(api_objectSpread({}, pair), {}, {
          oneDay: {
            volumeUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.volumeUSD),
            reserveUSD: String(oneDayPair === null || oneDayPair === void 0 ? void 0 : oneDayPair.reserveUSD)
          },
          sevenDay: {
            volumeUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.volumeUSD),
            reserveUSD: String(sevenDayPair === null || sevenDayPair === void 0 ? void 0 : sevenDayPair.reserveUSD)
          }
        });
      })
    }
  });
  return await client.cache.readQuery({
    query: tokenPairsQuery,
    variables: {
      id
    }
  });
}
// EXTERNAL MODULE: external "d3-array"
var external_d3_array_ = __webpack_require__("RjLk");

// CONCATENATED MODULE: ./src/core/chart.js
 // accessors

const getX = data => new Date(data.date);
const getY = data => data.value; // bisector

const bisectDate = Object(external_d3_array_["bisector"])(d => new Date(d.date)).left; // Initialize some variables

const axisColor = "currentColor";
const axisBottomTickLabelProps = {
  textAnchor: "middle",
  fontFamily: "inherit",
  fontSize: 10,
  fill: axisColor
};
const axisLeftTickLabelProps = {
  dx: "-0.25em",
  dy: "0.25em",
  fontFamily: "inherit",
  fontSize: 10,
  textAnchor: "end",
  fill: axisColor
};
// CONCATENATED MODULE: ./src/core/hooks/index.js

function useInterval(callback, delay) {
  const ref = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    ref.current = callback;
  }, [callback]);
  Object(external_react_["useEffect"])(() => {
    function tick() {
      ref.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
function usePrevious(value) {
  const ref = Object(external_react_["useRef"])();
  Object(external_react_["useEffect"])(() => {
    ref.current = value;
  });
  return ref.current;
}
// EXTERNAL MODULE: external "d3-time-format"
var external_d3_time_format_ = __webpack_require__("mBQT");

// CONCATENATED MODULE: ./src/core/format.js

const locales = ["en-US"];
const currencyFormatter = new Intl.NumberFormat(locales, {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});
const decimalFormatter = new Intl.NumberFormat(locales, {
  style: "decimal",
  minimumSignificantDigits: 1,
  maximumSignificantDigits: 4
});
const formatDate = Object(external_d3_time_format_["timeFormat"])("%b %d, '%y");
function formatCurrency(value) {
  return currencyFormatter.format(value);
}
function formatDecimal(value) {
  return decimalFormatter.format(value);
}
function formatAddress(value) {
  return value;
}
// CONCATENATED MODULE: ./src/core/queries/blocks.js
 // Tokens...

const blockFieldsQuery = external_graphql_tag_default.a`
  fragment blockFields on Block {
    id
    number
    timestamp
  }
`;
const blockQuery = external_graphql_tag_default.a`
  query blockQuery($start: Int!, $end: Int!) {
    blocks(
      first: 1
      orderBy: timestamp
      orderDirection: asc
      where: { timestamp_gt: $start, timestamp_lt: $end }
    ) {
      ...blockFields
    }
  }
  ${blockFieldsQuery}
`;
const blocksQuery = external_graphql_tag_default.a`
  query blocksQuery(
    $first: Int! = 1000
    $skip: Int! = 0
    $start: Int!
    $end: Int!
  ) {
    blocks(
      first: $first
      skip: $skip
      orderBy: number
      orderDirection: desc
      where: { timestamp_gt: $start, timestamp_lt: $end, number_gt: 989200 }
    ) {
      ...blockFields
    }
  }
  ${blockFieldsQuery}
`;
const latestBlockQuery = external_graphql_tag_default.a`
  query latestBlockQuery {
    blocks(
      first: 1
      skip: 0
      orderBy: number
      orderDirection: desc
      where: { number_gt: 9300000 }
    ) {
      ...blockFields
    }
  }
  ${blockFieldsQuery}
`;
// CONCATENATED MODULE: ./src/core/queries/pages.js

 // TODO: Dashboard
// TODO: Pools
// TODO: Pairs
// TODO: Tokens
// Gainers

const gainersQuery = external_graphql_tag_default.a`
  query gainersQuery($first: Int! = 1000) {
    pairs(first: $first, orderBy: trackedReserveETH, orderDirection: desc) {
      ...pairFields
      reserveUSDGained @client
      reserveUSDGainedYesterday @client
      volumeUSDGained @client
      volumeUSDGainedYesterday @client
      feesUSDGained @client
      feesUSDGainedYesterday @client
    }
  }
  ${pairFieldsQuery}
`; // Losers

const losersQuery = external_graphql_tag_default.a`
  query losersQuery($first: Int! = 1000) {
    pairs(first: $first, orderBy: trackedReserveETH, orderDirection: desc) {
      ...pairFields
      reserveUSDLost @client
      reserveUSDLostYesterday @client
      volumeUSDLost @client
      volumeUSDLostYesterday @client
      feesUSDLost @client
      feesUSDLostYesterday @client
    }
  }
  ${pairFieldsQuery}
`;
// CONCATENATED MODULE: ./src/core/queries/index.js





// CONCATENATED MODULE: ./src/core/timestamps.js

function oneMonth() {
  return Object(external_date_fns_["getUnixTime"])(Object(external_date_fns_["startOfDay"])(Object(external_date_fns_["subMonths"])(Date.now(), 1)));
}
function oneWeek() {
  return Object(external_date_fns_["getUnixTime"])(Object(external_date_fns_["startOfDay"])(Object(external_date_fns_["subWeeks"])(Date.now(), 1)));
}
// CONCATENATED MODULE: ./src/core/index.js








/***/ }),

/***/ "xRgH":
/***/ (function(module, exports) {

module.exports = require("@visx/axis");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });