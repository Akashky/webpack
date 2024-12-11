/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/add.js":
/*!**************************!*\
  !*** ./functions/add.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   addAndMultiply: () => (/* binding */ addAndMultiply)\n/* harmony export */ });\nfunction add(a, b) {\r\n    return a + b;\r\n}\r\n\r\nfunction addAndMultiply(a, b, c){\r\n    return add(a, b) * c;\r\n}\r\n\r\n// module.exports = {\r\n//     add,\r\n//     addAndMultiply,\r\n// };\r\n\r\n\n\n//# sourceURL=webpack://2.modules/./functions/add.js?");

/***/ }),

/***/ "./functions/index.js":
/*!****************************!*\
  !*** ./functions/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_0__.add),\n/* harmony export */   addAndMultiply: () => (/* reexport safe */ _add__WEBPACK_IMPORTED_MODULE_0__.addAndMultiply),\n/* harmony export */   subtract: () => (/* reexport safe */ _subtract__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _add__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add */ \"./functions/add.js\");\n/* harmony import */ var _subtract__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subtract */ \"./functions/subtract.js\");\n// const {add, addAndMultiply} = require('./add');\r\n// const subtract = require('./subtract');\r\n\r\n// module.exports = {\r\n//     add,\r\n//     addAndMultiply,\r\n//     subtract\r\n// }\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://2.modules/./functions/index.js?");

/***/ }),

/***/ "./functions/subtract.js":
/*!*******************************!*\
  !*** ./functions/subtract.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction subtract(a, b) {\r\n    return a - b;\r\n}\r\n\r\n// module.exports = subtract\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subtract);\n\n//# sourceURL=webpack://2.modules/./functions/subtract.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./functions/index.js\");\n// const { add: addNumber, subtract, addAndMultiply } = require(\"./functions\");\r\n\r\n\r\n\r\nconst output = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.add)(4, 5);\r\n\r\n// function add(){\r\n//     console.log(\"Hello, world!\");\r\n// }\r\n\r\n// add();  // This will print \"Hello, world!\"\r\n\r\nconst output2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.addAndMultiply)(5, 6, 7);\r\n\r\nconst output3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.subtract)(9, 6);\r\n\r\nconsole.log(output); \r\nconsole.log(output2);\r\nconsole.log(output3);\n\n//# sourceURL=webpack://2.modules/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;