/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + chunkId + ".index.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nvar PORT = process.env.PORT || 3006;\nvar app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.get('/', function (req, res) {\n  var app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null));\n  var indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', function (err, data) {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(app, \"</div>\")));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.listen(PORT, function () {\n  console.log(\"Server is listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> .App {\\n|   padding-top: 100px;\\n|   width: 100%;\");\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _code_split_spin_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code-split/spin/spinner */ \"./src/code-split/spin/spinner.js\");\n/* harmony import */ var _code_split_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./code-split/img/logo.png */ \"./src/code-split/img/logo.png\");\n/* harmony import */ var _code_split_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_code_split_img_logo_png__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar Intro = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./code-split/Intro */ \"./src/code-split/Intro.js\"));\n});\nvar Last = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./code-split/Last */ \"./src/code-split/Last.js\"));\n});\nvar Middle = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./code-split/Middle */ \"./src/code-split/Middle.js\"));\n});\n\nfunction App() {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"App\",\n    align: \"center\"\n  }, /*#__PURE__*/React.createElement(\"header\", {\n    className: \"App-header\"\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: _code_split_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,\n    alt: \"\"\n  })), /*#__PURE__*/React.createElement(\"main\", {\n    className: \"tbody\"\n  }, /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(_code_split_spin_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }, /*#__PURE__*/React.createElement(Intro, null)), /*#__PURE__*/React.createElement(\"p\", null, \"Star Wars is an American epic space opera media franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop-culture phenomenon. The franchise has been expanded into various films and other media, including television series, video games, novels, comic books, theme park attractions, and themed areas, comprising an all-encompassing fictional universe. In 2020, its total value was estimated at US$70 billion, and it is currently the fifth-highest-grossing media franchise of all time. The original film (Star Wars), retroactively subtitled Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars trilogy. Lucas later returned to filmmaking to direct a prequel trilogy, consisting of Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to Disney, relinquishing his ownership of the franchise. The subsequently produced sequel trilogy consists of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi (2017), and Episode IX: The Rise of Skywalker (2019). All nine films of the 'Skywalker saga' were nominated for Academy Awards (with wins going to the first two released) and were commercially successful. Together with the theatrical live action spin-off films Rogue One (2016) and Solo (2018), the combined box office revenue of the films equates to over US$10 billion, and it is currently the second-highest-grossing film franchise of all time.\"), /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(_code_split_spin_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }, /*#__PURE__*/React.createElement(Middle, null)), /*#__PURE__*/React.createElement(\"p\", null, \"The Jedi Path: A Manual for Students of the Force is a reference book on the Jedi Order and its history by Daniel Wallace. It was released on September 28, 2010. Although the book has 160 pages, at Celebration V it was revealed that pages 13-16 discuss the prophecy of the Chosen One and are missing, with the in-universe reason being that Darth Sidious tore them out. It contains multiple inserts placed there by different Jedi, such as Qui-Gon Jinn's Padawan braid and Thame Cerulian's Jedi credit. The book's in-universe history is that it is the third edition of a Jedi training guide, printed in 115 BBY, and survived the Great Jedi Purge in the possession of Darth Sidious. It was recovered by Squib salvagers near the remains of Byss, and given to Luke Skywalker. In September 2011, a trade edition of the book was released without the Vault or extra items. This version retained tattered edges, but the section on the Chosen One was marked through rather than torn out. On January 15, 2012 the book was re-released with additional content and illustrations in an enhanced e-book edition. The book was released again in August 2014 as part of a Deluxe Box Set with Book of Sith that included two art prints depicting figures from Sith and Jedi history, and again in September 2016 as Star Wars: Secrets of the Galaxy Deluxe Boxed Set with the Imperial Handbook and Bounty Hunter Code.\"), /*#__PURE__*/React.createElement(react__WEBPACK_IMPORTED_MODULE_1__[\"Suspense\"], {\n    fallback: /*#__PURE__*/React.createElement(_code_split_spin_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)\n  }, /*#__PURE__*/React.createElement(Last, null)), /*#__PURE__*/React.createElement(\"p\", null, \"\\\"On arrival at the temple, Initiates are sorted in clans. An arbiting grouping in many ways but one that is foster an atmosphere of trust and kinship.\\\" \\u2015Count Dooku on the Initiate clans During their time at the Jedi Temple on Coruscant, Jedi Initiates were placed into Clans. Such Clans were the Bear Clan, the Hawkbat Clan, the Heliost Clan, the Thranta Clan, and a clan that consisted of the Younglings Petro, Ganodi, Katooni, Byph, Zatt and Gungi. When its members reached a certain age, a clan embarked on a journey known as \\\"the Gathering\\\", in which the Initiates would be guided by the Force to their lightsaber crystal on the planet Ilum.\"), /*#__PURE__*/React.createElement(\"p\", null, /*#__PURE__*/React.createElement(\"i\", null, \"\\\"If you are of the Dragon Clan, you are tenacious. Nothing can make you back away if you do not will it.\\\"\")), /*#__PURE__*/React.createElement(\"p\", null, \"The Dragon Clan was one of the many clans that prospective young Initiates were placed in when they first began to learn the ways of the Jedi Order. Members of this clan were selected based on their perceived tenacity. Once a member of the clan, the students would travel together through the academy at the Jedi Temple until the time they graduated. Named after the many species of dragon throughout the galaxy, this clan was stationed at the Jedi Temple following the Ruusan Reformation of the Galactic Republic. Producing many students over the centuries, the clan was dissolved along with the rest of the Order in 19 BBY during the Great Jedi Purge.\")));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/code-split/img/logo.png":
/*!*************************************!*\
  !*** ./src/code-split/img/logo.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/code-split/img/logo.png?");

/***/ }),

/***/ "./src/code-split/spin/loading.png":
/*!*****************************************!*\
  !*** ./src/code-split/spin/loading.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./src/code-split/spin/loading.png?");

/***/ }),

/***/ "./src/code-split/spin/spinner.css":
/*!*****************************************!*\
  !*** ./src/code-split/spin/spinner.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '@' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n> @media (prefers-reduced-motion: no-preference) {\\n|     .Rotate {\\n|       animation:spin-load infinite 2s linear;\");\n\n//# sourceURL=webpack:///./src/code-split/spin/spinner.css?");

/***/ }),

/***/ "./src/code-split/spin/spinner.js":
/*!****************************************!*\
  !*** ./src/code-split/spin/spinner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spinner.css */ \"./src/code-split/spin/spinner.css\");\n/* harmony import */ var _spinner_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_spinner_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loading_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.png */ \"./src/code-split/spin/loading.png\");\n/* harmony import */ var _loading_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_png__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Spinner() {\n  return /*#__PURE__*/React.createElement(\"img\", {\n    src: _loading_png__WEBPACK_IMPORTED_MODULE_1___default.a,\n    className: \"Rotate\",\n    alt: \"\"\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);\n\n//# sourceURL=webpack:///./src/code-split/spin/spinner.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });