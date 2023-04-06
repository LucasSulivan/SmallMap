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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ \"./src/Utility/Location.js\");\n\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    this.shareBtn = document.getElementById('share-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n    //this.shareBtn.addEventListener('click')\n  }\n\n  selectPlace(coordinates, address) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);\n    }\n    this.shareBtn.disabled = false;\n    const sharedLinkInputElement = document.getElementById('share-link');\n    sharedLinkInputElement.value = `${location.origin}/my-place?address=${encodeURI(address)}&lat=${coordinates.lat}&lng=${coordinates.lng}`;\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not avaible in your browser');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(async successResult => {\n      modal.hide();\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      const address = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getAddressFromCoords)(coordinates);\n      modal.hide();\n      this.selectPlace(coordinates, address);\n    }, error => {\n      modal.hide();\n      alert(' Could not locate you unfortunatly.PLease enter an address manually!');\n    });\n  }\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n    if (!address || address.trim().length === 0) {\n      alert('Invalid address entered - please try again!');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    try {\n      const coordinates = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getCoordsFromAddress)(address);\n      this.selectPlace(coordinates);\n    } catch (err) {\n      alert(err.message);\n    }\n    modal.hide();\n  }\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9TaGFyZVBsYWNlLmpzP2Q1YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiLi9VSS9Nb2RhbFwiXHJcbmltcG9ydCB7IE1hcCB9IGZyb20gXCIuL1VJL01hcFwiXHJcbmltcG9ydCB7IGdldENvb3Jkc0Zyb21BZGRyZXNzLGdldEFkZHJlc3NGcm9tQ29vcmRzIH0gZnJvbSBcIi4vVXRpbGl0eS9Mb2NhdGlvblwiXHJcblxyXG5jbGFzcyBQbGFjZUZpbmRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBhZGRyZXNzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuICAgIGNvbnN0IGxvY2F0ZVVzZXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jYXRlLWJ0bicpO1xyXG4gICAgdGhpcy5zaGFyZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1idG4nKVxyXG5cclxuICAgIGxvY2F0ZVVzZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmxvY2F0ZVVzZXJIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgYWRkcmVzc0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5maW5kQWRkcmVzc0hhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICAvL3RoaXMuc2hhcmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snKVxyXG5cclxuICB9XHJcblxyXG4gIHNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKSB7XHJcbiAgICBpZih0aGlzLm1hcCkge1xyXG4gICAgICB0aGlzLm1hcC5yZW5kZXIoY29vcmRpbmF0ZXMpXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5tYXAgPSBuZXcgTWFwKGNvb3JkaW5hdGVzKVxyXG4gICAgfVxyXG4gICAgdGhpcy5zaGFyZUJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgY29uc3Qgc2hhcmVkTGlua0lucHV0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaGFyZS1saW5rJyk7XHJcbiAgICBzaGFyZWRMaW5rSW5wdXRFbGVtZW50LnZhbHVlID0gYCR7bG9jYXRpb24ub3JpZ2lufS9teS1wbGFjZT9hZGRyZXNzPSR7ZW5jb2RlVVJJKGFkZHJlc3MpfSZsYXQ9JHtjb29yZGluYXRlcy5sYXR9JmxuZz0ke2Nvb3JkaW5hdGVzLmxuZ31gO1xyXG4gIH1cclxuXHJcblxyXG4gIGxvY2F0ZVVzZXJIYW5kbGVyKCkge1xyXG4gICAgaWYgKCFuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgYWxlcnQoJ0xvY2F0aW9uIGZlYXR1cmUgaXMgbm90IGF2YWlibGUgaW4geW91ciBicm93c2VyJyk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgY29uc3QgbW9kYWwgPSBuZXcgTW9kYWwoJ2xvYWRpbmctbW9kYWwtY29udGVudCcsICdMb2FkaW5nIGxvY2F0aW9uIC0gcGxlYXNlIHdhaXQnKVxyXG4gICAgbW9kYWwuc2hvdygpXHJcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxyXG4gICAgICBhc3luYyBzdWNjZXNzUmVzdWx0ID0+IHtcclxuICAgICAgICBtb2RhbC5oaWRlKClcclxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgICAgICAgIGxhdDogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICBsbmc6IHN1Y2Nlc3NSZXN1bHQuY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IGdldEFkZHJlc3NGcm9tQ29vcmRzKGNvb3JkaW5hdGVzKTtcclxuICAgICAgICBtb2RhbC5oaWRlKClcclxuICAgICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKVxyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgbW9kYWwuaGlkZSgpXHJcbiAgICAgICAgYWxlcnQoJyBDb3VsZCBub3QgbG9jYXRlIHlvdSB1bmZvcnR1bmF0bHkuUExlYXNlIGVudGVyIGFuIGFkZHJlc3MgbWFudWFsbHkhJylcclxuICAgICAgfVxyXG5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRBZGRyZXNzSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuICAgIGlmKCFhZGRyZXNzIHx8IGFkZHJlc3MudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydCgnSW52YWxpZCBhZGRyZXNzIGVudGVyZWQgLSBwbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLCAnTG9hZGluZyBsb2NhdGlvbiAtIHBsZWFzZSB3YWl0Jyk7XHJcbiAgICBtb2RhbC5zaG93KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzKTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gICAgbW9kYWwuaGlkZSgpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUZpbmRlciA9IG5ldyBQbGFjZUZpbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

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

/***/ }),

/***/ "./src/Utility/Location.js":
/*!*********************************!*\
  !*** ./src/Utility/Location.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAddressFromCoords\": function() { return /* binding */ getAddressFromCoords; },\n/* harmony export */   \"getCoordsFromAddress\": function() { return /* binding */ getCoordsFromAddress; }\n/* harmony export */ });\nconst GOOGLE_API_KEY = 'AIzaSyBWEW6K4xH5lkcRblHalSZf0RKd7v-gDcU';\nasync function getAddressFromCoords(coords) {\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates.Please try again!');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const address = data.results[0].formatted_address;\n  return address;\n}\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address);\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates.Please try again!');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const coordinates = data.results[0].geometry.location;\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9Mb2NhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzPzQyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR09PR0xFX0FQSV9LRVkgPSAnQUl6YVN5QldFVzZLNHhINWxrY1JibEhhbFNaZjBSS2Q3di1nRGNVJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZGRyZXNzRnJvbUNvb3JkcyAoY29vcmRzKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtjb29yZHMubGF0fSwke2Nvb3Jkcy5sbmd9JmtleT0ke0dPT0dMRV9BUElfS0VZfWApXHJcbiAgaWYoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb29yZGluYXRlcy5QbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmKGRhdGEuZXJyb3JfbWVzc2FnZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3JfbWVzc2FnZSlcclxuICB9XHJcbiAgY29uc3QgYWRkcmVzcyA9IGRhdGEucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICByZXR1cm4gYWRkcmVzc1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzRnJvbUFkZHJlc3MoYWRkcmVzcyl7XHJcbiAgY29uc3QgdXJsQWRkcmVzcyA9IGVuY29kZVVSSShhZGRyZXNzKVxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9nZW9jb2RlL2pzb24/YWRkcmVzcz0ke3VybEFkZHJlc3N9JmtleT0ke0dPT0dMRV9BUElfS0VZfWApO1xyXG4gIGlmKCFyZXNwb25zZS5vaykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggY29vcmRpbmF0ZXMuUGxlYXNlIHRyeSBhZ2FpbiEnKTtcclxuICB9XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICBpZihkYXRhLmVycm9yX21lc3NhZ2UpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihkYXRhLmVycm9yX21lc3NhZ2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb29yZGluYXRlcyA9IGRhdGEucmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbjtcclxuICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Utility/Location.js\n");

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