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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateAbout)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\nfunction generateAbout() {\r\n    let content = document.querySelector(\"#content\");\r\n    content.innerHTML = '';\r\n    let about = document.createElement('div');\r\n    about.classList.add('about');\r\n    let aboutTitle = document.createElement('div');\r\n    aboutTitle.textContent = \"About Us\";\r\n    aboutTitle.classList.add('aboutTitle');\r\n\r\n    let aboutHeadings = ['Our Story: ', 'Our Downfall: ', 'Our Warning: '];\r\n    let aboutTexts = [\r\n        'The Broken Bistro opened its doors in 1990s, serving many happy customers before falling into disrepair. Today, it stands as a grim reminder of what once was – a place best avoided by those seeking a meal.',\r\n        'The rise and fall of The Broken Bistro is a story of neglect and decay. Once a popular spot, now it’s just a forgotten corner, left to the elements and time.',\r\n        'The Broken Bistro is not for the faint of heart. Visit if you must, but beware – there’s nothing appetizing left to find here.'\r\n    ]\r\n\r\n    for (let i = 0; i < aboutHeadings.length; i++) {\r\n        let aboutHeading = document.createElement('span');\r\n        aboutHeading.classList.add('aboutHeading');\r\n        aboutHeading.textContent = aboutHeadings[i];\r\n\r\n        let aboutText = document.createElement('p');\r\n        aboutText.classList.add('aboutText');\r\n        aboutText.textContent = aboutTexts[i];\r\n\r\n        about.appendChild(aboutHeading);\r\n        about.appendChild(aboutText);\r\n    }\r\n    content.appendChild(about);\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateFooter)\n/* harmony export */ });\nfunction generateFooter() {\r\n    let content = document.querySelector('#content');\r\n    let footer = document.createElement('footer');\r\n    footer.classList.add('footer');\r\n\r\n    let left = document.createElement('div');\r\n    left.classList.add('left');\r\n    left.textContent = \"Curious about our downfall? Get in touch – though we can’t guarantee a response from the beyond.\";\r\n\r\n    let addressBox = document.createElement('div');\r\n    let addressText = document.createElement('div');\r\n    let address = document.createElement('div');\r\n    \r\n    addressBox.classList.add('address');\r\n    addressText.classList.add('text');\r\n    \r\n    addressText.textContent = \"Visit us:\";\r\n    address.textContent = \"Nowhere road, nowhere city, nowhere.\";\r\n    \r\n    addressBox.appendChild(addressText);\r\n    addressBox.appendChild(address);\r\n    \r\n    let phoneBox = document.createElement('div');\r\n    let phoneText = document.createElement('div');\r\n    let phone  = document.createElement('div');\r\n\r\n    phoneBox.classList.add('phone');\r\n    phoneText.classList.add('text');\r\n    \r\n    phoneText.textContent = \"Call us: \";\r\n    phone.textContent = \"+11234567890\";\r\n    \r\n    phoneBox.appendChild(phoneText);\r\n    phoneBox.appendChild(phone);\r\n\r\n    let emailBox = document.createElement('div');\r\n    let emailText = document.createElement('div');\r\n    let email = document.createElement('div');\r\n    \r\n    emailBox.classList.add('email');\r\n    emailText.classList.add('text');\r\n    \r\n    emailText.textContent = \"Email us:\";\r\n    email.textContent = \"broken@bistro.com\";\r\n    \r\n    emailBox.appendChild(emailText);\r\n    emailBox.appendChild(email);\r\n\r\n    footer.appendChild(left);\r\n    footer.appendChild(addressBox);\r\n    footer.appendChild(phoneBox);\r\n    footer.appendChild(emailBox);\r\n\r\n    content.append(footer);\r\n    }\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateHome)\n/* harmony export */ });\n/* harmony import */ var _images_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/interior.jpg */ \"./src/images/interior.jpg\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n   \r\n\r\n\r\nfunction generateHome() {\r\n    \r\n    let content = document.querySelector('#content');\r\n    content.innerHTML = '';\r\n\r\n    let head1 = document.createElement('div');\r\n    let restaurantName = document.createElement('span');\r\n    let head2 = document.createElement('div');\r\n    let head3 = document.createElement('div');\r\n    let interior = new Image();\r\n\r\n\r\n    head1.textContent = \"Welcome to \";\r\n    head1.classList.add('heading');\r\n\r\n    restaurantName.textContent = \"the Broken Bistro\";\r\n    restaurantName.classList.add('restaurantName');\r\n\r\n    head1.appendChild(restaurantName);\r\n    \r\n    head2.textContent = \"-Where the time stays still\";\r\n    head2.classList.add('subheading');\r\n    \r\n    \r\n    head3.textContent = \"Experience the remnants of what was once a restaurant.\";\r\n    head3.classList.add('heading', 'catchphrase')\r\n    \r\n    interior.src = _images_interior_jpg__WEBPACK_IMPORTED_MODULE_0__;\r\n    interior.alt = \"interior\";\r\n    interior.classList.add('interior');\r\n\r\n    content.appendChild(head1);\r\n    content.appendChild(head2);\r\n    content.appendChild(head3);\r\n    content.appendChild(interior);\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n__webpack_require__.e(/*! import() */ \"src_css_style_css\").then(__webpack_require__.bind(__webpack_require__, /*! ./css/style.css */ \"./src/css/style.css\"));\r\n\r\n\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\nlet homeBtn = document.querySelector(\"#home\")\r\nhomeBtn.addEventListener('click', () => (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n\r\nlet menuBtn = document.querySelector(\"#menu\");\r\nmenuBtn.addEventListener('click', () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\r\n\r\nlet aboutBtn = document.querySelector('#about');\r\naboutBtn.addEventListener('click', () => (0,_about_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ generateMenu)\n/* harmony export */ });\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\nfunction generateMenu() {\r\n    let content = document.querySelector('#content');\r\n    content.innerHTML = '';\r\n\r\n    let itemNames =[\r\n        'Appetizer', 'Moldy Mozzarella Sticks', 'Rusty Ranch Dip',\r\n        'Main Course', 'Soggy Spaghetti', 'Battered Burger',\r\n        'Desserts', 'Spoiled Sundae', 'Crumbling Cheesecake',\r\n    ]\r\n\r\n    let itemDescs = [\r\n        'Starters that have long since been forgotten.',\r\n        'Once crispy, now just a distant memory.',\r\n        'A dip that no one should dare to try.',\r\n        'Mains that have seen better days.',\r\n        `Pasta that’s past its prime.`,\r\n        'Once a favorite, now left to rot.',\r\n        'Sweets that are anything but sweet now.',\r\n        'Ice cream that’s seen better days.',\r\n        'A dessert that’s falling apart.'\r\n    ]\r\n\r\n    let itemPrices = [\r\n        0, 'Priceless', 'Vanished', 0, 'Forgotten', 'Eclipsed', 0, 'Timeless', 'Erased'\r\n    ]\r\n\r\n    for (let i = 0; i < itemNames.length; i++) {\r\n        let isDish = itemPrices[i]\r\n\r\n        let item = document.createElement('div');\r\n        item.classList.add(isDish === 0 ? 'cuisine' : 'menuItem');\r\n\r\n        let itemName = document.createElement('div');\r\n        itemName.classList.add(isDish === 0 ? 'cuisineName' : 'dishName');\r\n        itemName.textContent = itemNames[i];\r\n        item.appendChild(itemName);\r\n\r\n        if (isDish !== 0) {\r\n            let dishPrice = document.createElement('div');\r\n            dishPrice.classList.add('dishPrice');\r\n            dishPrice.textContent = itemPrices[i];\r\n            item.appendChild(dishPrice);\r\n        }\r\n\r\n        let itemDesc = document.createElement('div');\r\n        itemDesc.classList.add(isDish === 0 ? 'cuisineDesc' : 'dishDesc')\r\n        itemDesc.textContent = itemDescs[i];\r\n        item.appendChild(itemDesc);\r\n        \r\n        content.appendChild(item);\r\n    }\r\n    (0,_footer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/images/interior.jpg":
/*!*********************************!*\
  !*** ./src/images/interior.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8ec39c2a4f0644a8fdff.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/interior.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".main.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "restaurant-page:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;