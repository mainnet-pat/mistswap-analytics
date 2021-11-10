module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+FwM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "+jMH":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "93uH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GA_TRACKING_ID */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pageview; });
/* unused harmony export event */
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID; // https://developers.google.com/analytics/devguides/collection/gtagjs/pages

const pageview = url => {
  /*
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
  */
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  /*
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
  */
};

/***/ }),

/***/ "9BML":
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "C+fU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return palette; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lightTheme; });
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("+FwM");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const palette = {
  primary: {
    main: "#B93CF6"
  },
  positive: {
    main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["green"][500]
  },
  negative: {
    main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["red"][500]
  },
  seaweed: {
    main: "#050709"
  },
  rice: {
    main: "white"
  },
  filling: {
    main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_0__["red"].A400
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2 // // Used by `getContrastText()` to maximize the contrast between
  // // the background and the text.
  // contrastThreshold: 3,
  // // Used by the functions below to shift a color's luminance by approximately
  // // two indexes within its tonal palette.
  // // E.g., shift from Red 500 to Red 300 or Red 700.
  // tonalOffset: 0.2,

};
const fontFamily = ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"];
const overrides = {
  MuiTable: {
    root: {// "& > tbody > tr:last-child > *": { border: 0 },
      // "& > thead > tr > *": { border: 0 },
    }
  },
  MuiInputBase: {
    root: {
      backgroundColor: "#fff"
    }
  },
  MuiTableCell: {
    head: {
      fontWeight: 400,
      whiteSpace: "nowrap"
    }
  },
  MuiAvatarGroup: {
    avatar: {
      border: 0
    }
  },
  MuiAvatar: {
    fallback: {}
  }
};
const darkTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: _objectSpread({
    type: "dark",
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)"
    },
    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.08)",
      selected: "rgba(255, 255, 255, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)"
    },
    background: {
      default: "#050709",
      paper: "#050709"
    },
    divider: "rgba(255, 255, 255, 0.12)"
  }, palette),
  typography: {
    fontFamily
  },
  overrides
}));
const lightTheme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["responsiveFontSizes"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
  palette: _objectSpread({
    type: "light",
    background: {
      default: "#FEFEFE",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#050709",
      secondary: "rgba(5, 7, 9, 0.7)",
      disabled: "rgba(5, 7, 9, 0.5)"
    }
  }, palette),
  typography: {
    fontFamily
  },
  overrides
}));

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: ./src/styles/index.css
var styles = __webpack_require__("VxdY");

// EXTERNAL MODULE: ./src/styles/itb.css
var itb = __webpack_require__("+jMH");

// EXTERNAL MODULE: ./src/core/analytics.js
var analytics = __webpack_require__("93uH");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: ./src/core/index.js + 20 modules
var core = __webpack_require__("x7I7");

// EXTERNAL MODULE: ./src/theme/index.js
var src_theme = __webpack_require__("C+fU");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/styles/font.js
const _defaultExport = ["@font-face{font-family:\"Inter\";font-style:normal;font-weight:100;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:200;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:300;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:500;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:600;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:700;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:800;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:900;font-display:block;src:url(/fonts/inter-var-latin.woff2) format(\"woff2\");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA, U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212, U+2215,U+FEFF,U+FFFD;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:200;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:300;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:700;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:800;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:900;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:100;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:200;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:300;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:700;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:800;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:900;font-display:swap;src:url(/fonts/inter-var-cyrillic.woff2) format(\"woff2\");unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:100;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:200;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:300;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:400;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:500;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:600;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:700;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:800;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:swap;font-weight:900;font-display:block;src:url(/fonts/inter-var-cyrillic-ext.woff2) format(\"woff2\");unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F, U+FE2E-FE2F;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:100;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:200;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:300;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:700;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:800;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:900;font-display:swap;src:url(/fonts/inter-var-greek.woff2) format(\"woff2\");unicode-range:U+0370-03FF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:100;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:200;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:300;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:700;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:800;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:900;font-display:swap;src:url(/fonts/inter-var-greek-ext.woff2) format(\"woff2\");unicode-range:U+1F00-1FFF;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:100;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:200;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:300;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:400;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:500;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:600;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:700;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:800;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:900;font-display:swap;src:url(/fonts/inter-var-vietnamese.woff2) format(\"woff2\");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169, U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB;}", "@font-face{font-family:\"Inter\";font-style:normal;font-weight:100;font-display:swap;src:url(/fonts/inter-var-latin-ext.woff2) format(\"woff2\");unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB, U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF;}"];
_defaultExport.__hash = "910672296";
// Use styled-jsx instead of global CSS because global CSS
// does not work for AMP pages: https://github.com/vercel/next.js/issues/10549
/* harmony default export */ var font = (_defaultExport);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/pages/_app.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function MyApp({
  Component,
  pageProps
}) {
  const client = Object(core["pb" /* useApollo */])(pageProps.initialApolloState);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    const handleRouteChange = url => {
      analytics["a" /* pageview */](url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  Object(external_react_["useEffect"])(() => {
    var _document$body$classN;

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    } // Add JS


    document.body.className = ((_document$body$classN = document.body.className) !== null && _document$body$classN !== void 0 ? _document$body$classN : "").replace("no-js", "js");
  }, []);
  const darkMode = Object(client_["useReactiveVar"])(core["k" /* darkModeVar */]);
  const theme = external_react_default.a.useMemo(() => darkMode ? src_theme["a" /* darkTheme */] : src_theme["b" /* lightTheme */], [darkMode]);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "MISTswap Analytics"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(client_["ApolloProvider"], {
      client: client,
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_["ThemeProvider"], {
        theme: _objectSpread({}, theme),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CssBaseline_default.a, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread({}, pageProps))]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: font.__hash,
      children: font
    })]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "RjLk":
/***/ (function(module, exports) {

module.exports = require("d3-array");

/***/ }),

/***/ "VxdY":
/***/ (function(module, exports) {



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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "mBQT":
/***/ (function(module, exports) {

module.exports = require("d3-time-format");

/***/ }),

/***/ "s9Ed":
/***/ (function(module, exports) {

module.exports = require("lodash.merge");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "w5nF":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/retry");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });