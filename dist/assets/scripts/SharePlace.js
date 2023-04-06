/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SharePlace.js":
/*!***************************!*\
  !*** ./src/SharePlace.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n  selectPlace(coordinates) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);\n    }\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not avaible in your browser');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(successResult => {\n      modal.hide();\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      this.selectPlace(coordinates);\n    }, error => {\n      modal.hide();\n      alert(' Could not locate you unfortunatly.PLease enter an address manually!');\n    });\n  }\n  findAddressHandler() {}\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcGxhY2UvLi9zcmMvU2hhcmVQbGFjZS5qcz9kNWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZGFsIH0gZnJvbSBcIi4vVUkvTW9kYWxcIlxyXG5pbXBvcnQgeyBNYXAgfSBmcm9tIFwiLi9VSS9NYXBcIlxyXG5cclxuY2xhc3MgUGxhY2VGaW5kZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgYWRkcmVzc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XHJcbiAgICBjb25zdCBsb2NhdGVVc2VyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvY2F0ZS1idG4nKTtcclxuXHJcbiAgICBsb2NhdGVVc2VyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5sb2NhdGVVc2VySGFuZGxlci5iaW5kKHRoaXMpKVxyXG4gICAgYWRkcmVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5maW5kQWRkcmVzc0hhbmRsZXIuYmluZCh0aGlzKSlcclxuICB9XHJcblxyXG4gIHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzKSB7XHJcbiAgICBpZih0aGlzLm1hcCkge1xyXG4gICAgICB0aGlzLm1hcC5yZW5kZXIoY29vcmRpbmF0ZXMpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNvb3JkaW5hdGVzKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgYWxlcnQoJ0xvY2F0aW9uIGZlYXR1cmUgaXMgbm90IGF2YWlibGUgaW4geW91ciBicm93c2VyJyk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJ2xvYWRpbmctbW9kYWwtY29udGVudCcsICdMb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQnKVxyXG4gICAgbW9kYWwuc2hvdygpXHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICBzdWNjZXNzUmVzdWx0ID0+IHtcclxuICAgICAgICBtb2RhbC5oaWRlKClcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsbmc6IHN1Y2Nlc3NSZXN1bHQuY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zZWxlY3RQbGFjZShjb29yZGluYXRlcylcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIG1vZGFsLmhpZGUoKVxyXG4gICAgICAgIGFsZXJ0KCcgQ291bGQgbm90IGxvY2F0ZSB5b3UgdW5mb3J0dW5hdGx5LlBMZWFzZSBlbnRlciBhbiBhZGRyZXNzIG1hbnVhbGx5IScpXHJcbiAgICAgIH1cclxuXHJcbiAgICApXHJcbiAgfVxyXG5cclxuICBmaW5kQWRkcmVzc0hhbmRsZXIoKSB7XHJcblxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGxhY2VGaW5kZXIgPSBuZXcgUGxhY2VGaW5kZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

/***/ }),

/***/ "./src/UI/Map.js":
/*!***********************!*\
  !*** ./src/UI/Map.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Map\": function() { return /* binding */ Map; }\n/* harmony export */ });\nclass Map {\n  constructor(coords) {\n    this.render(coords);\n  }\n  render(coordinates) {\n    if (!google) {\n      alert('Could not load maps library - please try again later!');\n    }\n    const map = new google.maps.Map(document.getElementById('map'), {\n      center: coordinates,\n      zoom: 16\n    });\n    new google.maps.Marker({\n      position: coordinates,\n      map: map\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTWFwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VSS9NYXAuanM/YjU3OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWFwIHtcclxuICBjb25zdHJ1Y3Rvcihjb29yZHMpIHtcclxuICAgIHRoaXMucmVuZGVyKGNvb3Jkcyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIgKGNvb3JkaW5hdGVzKSB7XHJcbiAgICBpZighZ29vZ2xlKSB7XHJcbiAgICAgIGFsZXJ0KCdDb3VsZCBub3QgbG9hZCBtYXBzIGxpYnJhcnkgLSBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgIGNlbnRlcjogY29vcmRpbmF0ZXMsXHJcbiAgICAgIHpvb206IDE2XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiBjb29yZGluYXRlcyxcclxuICAgICAgbWFwOiBtYXBcclxuICAgIH0pO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Map.js\n");

/***/ }),

/***/ "./src/UI/Modal.js":
/*!*************************!*\
  !*** ./src/UI/Modal.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": function() { return /* binding */ Modal; }\n/* harmony export */ });\nclass Modal {\n  constructor(contentId, fallbackText) {\n    this.fallbackText = fallbackText;\n    this.contentTemplateEl = document.getElementById(contentId);\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n  show() {\n    if ('content' in document.createElement('template')) {\n      const modalElements = document.importNode(this.modalTemplateEl.content, true);\n      this.modalElement = modalElements.querySelector('.modal');\n      this.backdropElement = modalElements.querySelector('.backdrop');\n      const contentElement = document.importNode(this.contentTemplateEl.content, true);\n      this.modalElement.appendChild(contentElement);\n      document.body.insertAdjacentElement('afterbegin', this.modalElement);\n      document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n    } else {\n      alert(this.fallbackText);\n    }\n  }\n  hide() {\n    if (this.modalElement) {\n      document.body.removeChild(this.modalElement);\n      document.body.removeChild(this.backdropElement);\n      this.modalElement = null;\n      this.backdropElement = null;\n    }\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVUkvTW9kYWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktcGxhY2UvLi9zcmMvVUkvTW9kYWwuanM/MjcwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTW9kYWwge1xyXG4gIGNvbnN0cnVjdG9yKGNvbnRlbnRJZCwgZmFsbGJhY2tUZXh0KSB7XHJcbiAgICB0aGlzLmZhbGxiYWNrVGV4dCA9IGZhbGxiYWNrVGV4dFxyXG4gICAgdGhpcy5jb250ZW50VGVtcGxhdGVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRlbnRJZClcclxuICAgIHRoaXMubW9kYWxUZW1wbGF0ZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXRlbXBsYXRlJylcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICBpZiAoJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpIHtcclxuICAgICAgY29uc3QgbW9kYWxFbGVtZW50cyA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy5tb2RhbFRlbXBsYXRlRWwuY29udGVudCwgdHJ1ZSk7XHJcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50ID0gbW9kYWxFbGVtZW50cy5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuICAgICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQgPSBtb2RhbEVsZW1lbnRzLnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZHJvcCcpO1xyXG4gICAgICBjb25zdCBjb250ZW50RWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy5jb250ZW50VGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKTtcclxuXHJcbiAgICAgIHRoaXMubW9kYWxFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRFbGVtZW50KTtcclxuXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5tb2RhbEVsZW1lbnQpXHJcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmJlZ2luJywgdGhpcy5iYWNrZHJvcEVsZW1lbnQpXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYWxlcnQodGhpcy5mYWxsYmFja1RleHQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoaWRlICgpIHtcclxuICAgIGlmKHRoaXMubW9kYWxFbGVtZW50KSB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tb2RhbEVsZW1lbnQpO1xyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50KTtcclxuICAgICAgdGhpcy5tb2RhbEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudCA9IG51bGw7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/UI/Modal.js\n");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/SharePlace.js");
/******/ 	
/******/ })()
;