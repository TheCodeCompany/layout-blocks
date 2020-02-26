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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_block__ = __webpack_require__(/*! ./column/block */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_1_column_block__ = __webpack_require__(/*! ./layout-1-column/block */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_2_column_block__ = __webpack_require__(/*! ./layout-2-column/block */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layout_3_column_block__ = __webpack_require__(/*! ./layout-3-column/block */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__layout_4_column_block__ = __webpack_require__(/*! ./layout-4-column/block */ 9);\n/** @file blocks.js - Include all of the plugin blocks. */\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZpbGUgYmxvY2tzLmpzIC0gSW5jbHVkZSBhbGwgb2YgdGhlIHBsdWdpbiBibG9ja3MuICovXG5cbmltcG9ydCAnLi9jb2x1bW4vYmxvY2snO1xuaW1wb3J0ICcuL2xheW91dC0xLWNvbHVtbi9ibG9jayc7XG5pbXBvcnQgJy4vbGF5b3V0LTItY29sdW1uL2Jsb2NrJztcbmltcG9ydCAnLi9sYXlvdXQtMy1jb2x1bW4vYmxvY2snO1xuaW1wb3J0ICcuL2xheW91dC00LWNvbHVtbi9ibG9jayc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************!*\
  !*** ./src/column/block.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/**\n * BLOCK: tcc/column\n *\n * Single column block, intended to be used as a sub component in layout blocks.\n * E.g. a 2 column layout would have 2 of these as InnerBlocks.\n */\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('tcc/column', {\n\n\ttitle: 'Single Column',\n\ticon: 'layout',\n\tcategory: 'layout',\n\n\tkeywords: ['column'],\n\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\ttemplateLock: false,\n\t\t\t\tallowedBlocks: '*',\n\t\t\t\tdisallowedBlocks: // NOTE this isn't actually supported yet ...\n\t\t\t\t['tcc/layout-1-column', 'tcc/layout-2-column', 'tcc/layout-3-column', 'tcc/layout-4-column'] })\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb2x1bW4vYmxvY2suanM/YzRlNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiB0Y2MvY29sdW1uXG4gKlxuICogU2luZ2xlIGNvbHVtbiBibG9jaywgaW50ZW5kZWQgdG8gYmUgdXNlZCBhcyBhIHN1YiBjb21wb25lbnQgaW4gbGF5b3V0IGJsb2Nrcy5cbiAqIEUuZy4gYSAyIGNvbHVtbiBsYXlvdXQgd291bGQgaGF2ZSAyIG9mIHRoZXNlIGFzIElubmVyQmxvY2tzLlxuICovXG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBJbm5lckJsb2NrcyA9IHdwLmVkaXRvci5Jbm5lckJsb2NrcztcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndGNjL2NvbHVtbicsIHtcblxuXHR0aXRsZTogJ1NpbmdsZSBDb2x1bW4nLFxuXHRpY29uOiAnbGF5b3V0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGtleXdvcmRzOiBbJ2NvbHVtbiddLFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0dGVtcGxhdGVMb2NrOiBmYWxzZSxcblx0XHRcdFx0YWxsb3dlZEJsb2NrczogJyonLFxuXHRcdFx0XHRkaXNhbGxvd2VkQmxvY2tzOiAvLyBOT1RFIHRoaXMgaXNuJ3QgYWN0dWFsbHkgc3VwcG9ydGVkIHlldCAuLi5cblx0XHRcdFx0Wyd0Y2MvbGF5b3V0LTEtY29sdW1uJywgJ3RjYy9sYXlvdXQtMi1jb2x1bW4nLCAndGNjL2xheW91dC0zLWNvbHVtbicsICd0Y2MvbGF5b3V0LTQtY29sdW1uJ10gfSlcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb2x1bW4vYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************!*\
  !*** ./src/column/editor.scss ***!
  \********************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb2x1bW4vZWRpdG9yLnNjc3M/M2FiNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbHVtbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!**************************************!*\
  !*** ./src/layout-1-column/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/**\n * BLOCK: tcc/layout-1-column\n *\n * One column layout block.\n */\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('tcc/layout-1-column', {\n\n\ttitle: 'Layout - 1 Column',\n\ticon: 'layout',\n\tcategory: 'layout',\n\n\tkeywords: ['1', 'one', '1 column', 'column', 'layout', 'tcc'],\n\n\tsupports: {\n\t\talign: ['full']\n\t},\n\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\tallowedBlocks: ['tcc/column'],\n\t\t\t\ttemplateLock: 'insert',\n\t\t\t\ttemplate: [['tcc/column']]\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtMS1jb2x1bW4vYmxvY2suanM/MzE2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiB0Y2MvbGF5b3V0LTEtY29sdW1uXG4gKlxuICogT25lIGNvbHVtbiBsYXlvdXQgYmxvY2suXG4gKi9cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIElubmVyQmxvY2tzID0gd3AuZWRpdG9yLklubmVyQmxvY2tzO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd0Y2MvbGF5b3V0LTEtY29sdW1uJywge1xuXG5cdHRpdGxlOiAnTGF5b3V0IC0gMSBDb2x1bW4nLFxuXHRpY29uOiAnbGF5b3V0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGtleXdvcmRzOiBbJzEnLCAnb25lJywgJzEgY29sdW1uJywgJ2NvbHVtbicsICdsYXlvdXQnLCAndGNjJ10sXG5cblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogWydmdWxsJ11cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7XG5cdFx0XHRcdGFsbG93ZWRCbG9ja3M6IFsndGNjL2NvbHVtbiddLFxuXHRcdFx0XHR0ZW1wbGF0ZUxvY2s6ICdpbnNlcnQnLFxuXHRcdFx0XHR0ZW1wbGF0ZTogW1sndGNjL2NvbHVtbiddXVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sYXlvdXQtMS1jb2x1bW4vYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./src/layout-1-column/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtMS1jb2x1bW4vZWRpdG9yLnNjc3M/NzIwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xheW91dC0xLWNvbHVtbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************************!*\
  !*** ./src/layout-2-column/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/**\n * BLOCK: tcc/layout-2-column\n *\n * Two column layout block.\n */\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('tcc/layout-2-column', {\n\n\ttitle: 'Layout - 2 Column',\n\ticon: 'layout',\n\tcategory: 'layout',\n\n\tkeywords: ['2', 'two', '2 column', 'column', 'layout', 'tcc'],\n\n\tsupports: {\n\t\talign: ['full']\n\t},\n\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\tallowedBlocks: ['tcc/column'],\n\t\t\t\ttemplateLock: 'insert',\n\t\t\t\ttemplate: [['tcc/column'], ['tcc/column']]\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtMi1jb2x1bW4vYmxvY2suanM/YWE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiB0Y2MvbGF5b3V0LTItY29sdW1uXG4gKlxuICogVHdvIGNvbHVtbiBsYXlvdXQgYmxvY2suXG4gKi9cblxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIElubmVyQmxvY2tzID0gd3AuZWRpdG9yLklubmVyQmxvY2tzO1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCd0Y2MvbGF5b3V0LTItY29sdW1uJywge1xuXG5cdHRpdGxlOiAnTGF5b3V0IC0gMiBDb2x1bW4nLFxuXHRpY29uOiAnbGF5b3V0Jyxcblx0Y2F0ZWdvcnk6ICdsYXlvdXQnLFxuXG5cdGtleXdvcmRzOiBbJzInLCAndHdvJywgJzIgY29sdW1uJywgJ2NvbHVtbicsICdsYXlvdXQnLCAndGNjJ10sXG5cblx0c3VwcG9ydHM6IHtcblx0XHRhbGlnbjogWydmdWxsJ11cblx0fSxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLCB7XG5cdFx0XHRcdGFsbG93ZWRCbG9ja3M6IFsndGNjL2NvbHVtbiddLFxuXHRcdFx0XHR0ZW1wbGF0ZUxvY2s6ICdpbnNlcnQnLFxuXHRcdFx0XHR0ZW1wbGF0ZTogW1sndGNjL2NvbHVtbiddLCBbJ3RjYy9jb2x1bW4nXV1cblx0XHRcdH0pXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKHByb3BzKSB7XG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdCdkaXYnLFxuXHRcdFx0eyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbGF5b3V0LTItY29sdW1uL2Jsb2NrLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./src/layout-2-column/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtMi1jb2x1bW4vZWRpdG9yLnNjc3M/OTZjNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xheW91dC0yLWNvbHVtbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**************************************!*\
  !*** ./src/layout-3-column/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/**\n * BLOCK: tcc/layout-3-column\n *\n * Three column layout block.\n */\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('tcc/layout-3-column', {\n\n\ttitle: 'Layout - 3 Column',\n\ticon: 'layout',\n\tcategory: 'layout',\n\n\tkeywords: ['3', 'three', '3 column', 'column', 'layout', 'tcc'],\n\n\tsupports: {\n\t\talign: ['full']\n\t},\n\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\tallowedBlocks: ['tcc/column'],\n\t\t\t\ttemplateLock: 'insert',\n\t\t\t\ttemplate: [['tcc/column'], ['tcc/column'], ['tcc/column']]\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtMy1jb2x1bW4vYmxvY2suanM/ZTM1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiB0Y2MvbGF5b3V0LTMtY29sdW1uXG4gKlxuICogVGhyZWUgY29sdW1uIGxheW91dCBibG9jay5cbiAqL1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgSW5uZXJCbG9ja3MgPSB3cC5lZGl0b3IuSW5uZXJCbG9ja3M7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ3RjYy9sYXlvdXQtMy1jb2x1bW4nLCB7XG5cblx0dGl0bGU6ICdMYXlvdXQgLSAzIENvbHVtbicsXG5cdGljb246ICdsYXlvdXQnLFxuXHRjYXRlZ29yeTogJ2xheW91dCcsXG5cblx0a2V5d29yZHM6IFsnMycsICd0aHJlZScsICczIGNvbHVtbicsICdjb2x1bW4nLCAnbGF5b3V0JywgJ3RjYyddLFxuXG5cdHN1cHBvcnRzOiB7XG5cdFx0YWxpZ246IFsnZnVsbCddXG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcywge1xuXHRcdFx0XHRhbGxvd2VkQmxvY2tzOiBbJ3RjYy9jb2x1bW4nXSxcblx0XHRcdFx0dGVtcGxhdGVMb2NrOiAnaW5zZXJ0Jyxcblx0XHRcdFx0dGVtcGxhdGU6IFtbJ3RjYy9jb2x1bW4nXSwgWyd0Y2MvY29sdW1uJ10sIFsndGNjL2NvbHVtbiddXVxuXHRcdFx0fSlcblx0XHQpO1xuXHR9LFxuXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MuQ29udGVudCwgbnVsbClcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sYXlvdXQtMy1jb2x1bW4vYmxvY2suanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*****************************************!*\
  !*** ./src/layout-3-column/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtMy1jb2x1bW4vZWRpdG9yLnNjc3M/ZGM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xheW91dC0zLWNvbHVtbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./src/layout-4-column/block.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/**\n * BLOCK: tcc/layout-4-column\n *\n * Four column layout block.\n */\n\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar InnerBlocks = wp.editor.InnerBlocks;\n\n\nregisterBlockType('tcc/layout-4-column', {\n\n\ttitle: 'Layout - 4 Column',\n\ticon: 'layout',\n\tcategory: 'layout',\n\n\tkeywords: ['4', 'four', 'column', 'layout', 'tcc'],\n\n\tsupports: {\n\t\talign: ['full']\n\t},\n\n\tedit: function edit(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\tallowedBlocks: ['tcc/column'],\n\t\t\t\ttemplateLock: 'insert',\n\t\t\t\ttemplate: [['tcc/column'], ['tcc/column'], ['tcc/column'], ['tcc/column']]\n\t\t\t})\n\t\t);\n\t},\n\n\tsave: function save(props) {\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: props.className },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9sYXlvdXQtNC1jb2x1bW4vYmxvY2suanM/OTA4MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiB0Y2MvbGF5b3V0LTQtY29sdW1uXG4gKlxuICogRm91ciBjb2x1bW4gbGF5b3V0IGJsb2NrLlxuICovXG5cbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBJbm5lckJsb2NrcyA9IHdwLmVkaXRvci5Jbm5lckJsb2NrcztcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgndGNjL2xheW91dC00LWNvbHVtbicsIHtcblxuXHR0aXRsZTogJ0xheW91dCAtIDQgQ29sdW1uJyxcblx0aWNvbjogJ2xheW91dCcsXG5cdGNhdGVnb3J5OiAnbGF5b3V0JyxcblxuXHRrZXl3b3JkczogWyc0JywgJ2ZvdXInLCAnY29sdW1uJywgJ2xheW91dCcsICd0Y2MnXSxcblxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbJ2Z1bGwnXVxuXHR9LFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lIH0sXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0YWxsb3dlZEJsb2NrczogWyd0Y2MvY29sdW1uJ10sXG5cdFx0XHRcdHRlbXBsYXRlTG9jazogJ2luc2VydCcsXG5cdFx0XHRcdHRlbXBsYXRlOiBbWyd0Y2MvY29sdW1uJ10sIFsndGNjL2NvbHVtbiddLCBbJ3RjYy9jb2x1bW4nXSwgWyd0Y2MvY29sdW1uJ11dXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHQnZGl2Jyxcblx0XHRcdHsgY2xhc3NOYW1lOiBwcm9wcy5jbGFzc05hbWUgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChJbm5lckJsb2Nrcy5Db250ZW50LCBudWxsKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2xheW91dC00LWNvbHVtbi9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*****************************************!*\
  !*** ./src/layout-4-column/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LTQtY29sdW1uL2VkaXRvci5zY3NzPzI1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9sYXlvdXQtNC1jb2x1bW4vZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ })
/******/ ]);