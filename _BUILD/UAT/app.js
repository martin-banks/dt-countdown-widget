/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sass__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_index__ = __webpack_require__(3);



// Template content
function layout() {
	var template = '<section class="' + __WEBPACK_IMPORTED_MODULE_0__app_sass___default.a.wrapper + '">\n\t\t<h1>' + __WEBPACK_IMPORTED_MODULE_1__content_index__["a" /* default */].header.title + '</h1>\n\t\t<h3>' + __WEBPACK_IMPORTED_MODULE_1__content_index__["a" /* default */].header.intro + '</h3>\n\t</section>';

	return template;
}

/* harmony default export */ __webpack_exports__["a"] = (layout);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_json__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_isMobileDevice__ = __webpack_require__(4);
/* eslint no-console: ['warn', {allow: ['error', 'warn', 'info']}] */





// This factory function runs basic set up functionswhen instantiated
// It also returns an object with a render method to add templated content to DOM

function start() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref$inner = _ref.inner,
	    inner = _ref$inner === undefined ? '' : _ref$inner;

	var longform = document.querySelector('.longform-group');
	var standardMetro = document.querySelector('.content .story');
	var standardNews = document.querySelector('#page #story');
	// we store the project name in the config json file so it can be
	// referenced by other functions in particular the webpack config scripts
	// here we store the selector for the main app container

	var isTestEnv = function isTestEnv() {
		return ['localhost', '127.0.0.1'].indexOf(window.location.hostname) !== -1;
	};

	// Store key variables in single STATE oject for later use
	// This element is part of the embed code used in Methodé publishing
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer = document.querySelector('#' + __WEBPACK_IMPORTED_MODULE_0__config_json___default.a.projectName);
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].window = {
		width: window.innerWidth,
		height: window.innerHeight
	};
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isMobile = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__functions_isMobileDevice__["a" /* default */])();
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isLongform = !!longform;
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isStandard = !!standardMetro || !!standardNews;
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isTest = isTestEnv();

	// if a mobile device is detected a boolean is stored on
	// the main container as a flag for device specific styling
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer.setAttribute('data-mobile', __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isMobile);
	var pageTemplate = function pageTemplate() {
		if (__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isLongform) return 'longform';
		if (__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isStandard) return 'standard';
		return 'test';
	};
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer.setAttribute('data-pagetemplate', pageTemplate());

	// the STATE object is logged to the console for reference / debugging throuhgh development
	console.info({ STATE: __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */] });

	var render = function render() {
		// Render content into the main container
		__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer.innerHTML = inner;
	};

	return { render: render };
}

/* harmony default export */ __webpack_exports__["a"] = (start);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startApp__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__(0);
// import Config from './config.json'
// import Styles from './app.sass'
// import Content from './content/index'



// Start and Render app
var APP = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startApp__["a" /* default */])({ inner: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__layout__["a" /* default */])() });
APP.render();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// All content is stored and used from this file
// Recomend multiple parts are created as separate files
// and imported to keep this file streamlined

var Content = {
	header: {
		title: 'Hello world',
		intro: 'The app has rendered!!'
	},

	parts: []
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isMobileDevice() {
	var isMobile = /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream;
	// console.info({ isMobile })
	return isMobile;
}

/* harmony default export */ __webpack_exports__["a"] = (isMobileDevice);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var STATE = {};

/* harmony default export */ __webpack_exports__["a"] = (STATE);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"project_name__app__wrapper___Mw7Ym"};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"projectName":"project_name","section":"network","path":{"UAT":".","PROD":"https://news-networkeditorial.s3.amazonaws.com/T3Interactives"},"localstyle":false,"cssModules":true,"images":{"children":false,"jsPrefix":"Img","sizes":{"thumb":50,"min":200,"max":1000,"inc":200},"quality":{"image":40,"thumb":80},"thumbBlurLarge":2,"thumbBlurSmall":1,"location":"./src/content/images"}}

/***/ })
/******/ ]);