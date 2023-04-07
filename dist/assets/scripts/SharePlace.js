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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI/Modal */ \"./src/UI/Modal.js\");\n/* harmony import */ var _UI_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI/Map */ \"./src/UI/Map.js\");\n/* harmony import */ var _Utility_Location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utility/Location */ \"./src/Utility/Location.js\");\n\n\n\nclass PlaceFinder {\n  constructor() {\n    const addressForm = document.querySelector('form');\n    const locateUserBtn = document.getElementById('locate-btn');\n    locateUserBtn.addEventListener('click', this.locateUserHandler.bind(this));\n    addressForm.addEventListener('submit', this.findAddressHandler.bind(this));\n  }\n  selectPlace(coordinates) {\n    if (this.map) {\n      this.map.render(coordinates);\n    } else {\n      this.map = new _UI_Map__WEBPACK_IMPORTED_MODULE_1__.Map(coordinates);\n    }\n  }\n  locateUserHandler() {\n    if (!navigator.geolocation) {\n      alert('Location feature is not avaible in your browser');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    navigator.geolocation.getCurrentPosition(async successResult => {\n      const coordinates = {\n        lat: successResult.coords.latitude,\n        lng: successResult.coords.longitude\n      };\n      const address = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getAddressFromCoords)(coordinates);\n      modal.hide();\n      this.selectPlace(coordinates, address);\n    }, error => {\n      modal.hide();\n      alert(' Could not locate you unfortunatly.PLease enter an address manually!');\n    });\n  }\n  async findAddressHandler(event) {\n    event.preventDefault();\n    const address = event.target.querySelector('input').value;\n    if (!address || address.trim().length === 0) {\n      alert('Invalid address entered - please try again!');\n      return;\n    }\n    const modal = new _UI_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('loading-modal-content', 'Loading location - please wait');\n    modal.show();\n    try {\n      const coordinates = await (0,_Utility_Location__WEBPACK_IMPORTED_MODULE_2__.getCoordsFromAddress)(address);\n      this.selectPlace(coordinates, address);\n    } catch (err) {\n      alert(err.message);\n    }\n    modal.hide();\n  }\n}\nconst placeFinder = new PlaceFinder();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvU2hhcmVQbGFjZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXBsYWNlLy4vc3JjL1NoYXJlUGxhY2UuanM/ZDVhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuL1VJL01vZGFsXCJcclxuaW1wb3J0IHsgTWFwIH0gZnJvbSBcIi4vVUkvTWFwXCJcclxuaW1wb3J0IHsgZ2V0Q29vcmRzRnJvbUFkZHJlc3MsZ2V0QWRkcmVzc0Zyb21Db29yZHMgfSBmcm9tIFwiLi9VdGlsaXR5L0xvY2F0aW9uXCJcclxuXHJcbmNsYXNzIFBsYWNlRmluZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IGFkZHJlc3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gICAgY29uc3QgbG9jYXRlVXNlckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2NhdGUtYnRuJyk7XHJcblxyXG4gICAgbG9jYXRlVXNlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubG9jYXRlVXNlckhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICBhZGRyZXNzRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmZpbmRBZGRyZXNzSGFuZGxlci5iaW5kKHRoaXMpKTtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgc2VsZWN0UGxhY2UoY29vcmRpbmF0ZXMpIHtcclxuICAgIGlmKHRoaXMubWFwKSB7XHJcbiAgICAgIHRoaXMubWFwLnJlbmRlcihjb29yZGluYXRlcylcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLm1hcCA9IG5ldyBNYXAoY29vcmRpbmF0ZXMpXHJcbiAgICB9XHJcbiAgXHJcbiAgfVxyXG5cclxuXHJcbiAgbG9jYXRlVXNlckhhbmRsZXIoKSB7XHJcbiAgICBpZiAoIW5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICBhbGVydCgnTG9jYXRpb24gZmVhdHVyZSBpcyBub3QgYXZhaWJsZSBpbiB5b3VyIGJyb3dzZXInKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgnbG9hZGluZy1tb2RhbC1jb250ZW50JywgJ0xvYWRpbmcgbG9jYXRpb24gLSBwbGVhc2Ugd2FpdCcpXHJcbiAgICBtb2RhbC5zaG93KClcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgIGFzeW5jIHN1Y2Nlc3NSZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xyXG4gICAgICAgICAgbGF0OiBzdWNjZXNzUmVzdWx0LmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgIGxuZzogc3VjY2Vzc1Jlc3VsdC5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0QWRkcmVzc0Zyb21Db29yZHMoY29vcmRpbmF0ZXMpO1xyXG4gICAgICAgIG1vZGFsLmhpZGUoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKVxyXG4gICAgICB9LCBlcnJvciA9PiB7XHJcbiAgICAgICAgbW9kYWwuaGlkZSgpXHJcbiAgICAgICAgYWxlcnQoJyBDb3VsZCBub3QgbG9jYXRlIHlvdSB1bmZvcnR1bmF0bHkuUExlYXNlIGVudGVyIGFuIGFkZHJlc3MgbWFudWFsbHkhJylcclxuICAgICAgfVxyXG5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGFzeW5jIGZpbmRBZGRyZXNzSGFuZGxlcihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGFkZHJlc3MgPSBldmVudC50YXJnZXQucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZTtcclxuICAgIGlmKCFhZGRyZXNzIHx8IGFkZHJlc3MudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBhbGVydCgnSW52YWxpZCBhZGRyZXNzIGVudGVyZWQgLSBwbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCdsb2FkaW5nLW1vZGFsLWNvbnRlbnQnLCAnTG9hZGluZyBsb2NhdGlvbiAtIHBsZWFzZSB3YWl0Jyk7XHJcbiAgICBtb2RhbC5zaG93KCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBjb29yZGluYXRlcyA9IGF3YWl0IGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3MpO1xyXG4gICAgICB0aGlzLnNlbGVjdFBsYWNlKGNvb3JkaW5hdGVzLCBhZGRyZXNzKTtcclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKVxyXG4gICAgfVxyXG4gICAgbW9kYWwuaGlkZSgpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBwbGFjZUZpbmRlciA9IG5ldyBQbGFjZUZpbmRlcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/SharePlace.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAddressFromCoords\": function() { return /* binding */ getAddressFromCoords; },\n/* harmony export */   \"getCoordsFromAddress\": function() { return /* binding */ getCoordsFromAddress; }\n/* harmony export */ });\nconst GOOGLE_API_KEY = 'AIzaSyBWEW6K4xH5lkcRblHalSZf0RKd7v-gDcU';\nasync function getAddressFromCoords(coords) {\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords.lat},${coords.lng}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates.Please try again!');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const address = data.results[0].formatted_address;\n  return address;\n}\nasync function getCoordsFromAddress(address) {\n  const urlAddress = encodeURI(address);\n  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlAddress}&key=${GOOGLE_API_KEY}`);\n  if (!response.ok) {\n    throw new Error('Failed to fetch coordinates.Please try again!');\n  }\n  const data = await response.json();\n  if (data.error_message) {\n    throw new Error(data.error_message);\n  }\n  const coordinates = data.results[0].geometry.location;\n  return coordinates;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvVXRpbGl0eS9Mb2NhdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1wbGFjZS8uL3NyYy9VdGlsaXR5L0xvY2F0aW9uLmpzPzQyZGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR09PR0xFX0FQSV9LRVkgPSAnQUl6YVN5QldFVzZLNHhINWxrY1JibEhhbFNaZjBSS2Q3di1nRGNVJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBZGRyZXNzRnJvbUNvb3JkcyAoY29vcmRzKSB7XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9JHtjb29yZHMubGF0fSwke2Nvb3Jkcy5sbmd9JmtleT0ke0dPT0dMRV9BUElfS0VZfWApXHJcbiAgaWYoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBjb29yZGluYXRlcy5QbGVhc2UgdHJ5IGFnYWluIScpO1xyXG4gIH1cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmKGRhdGEuZXJyb3JfbWVzc2FnZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGRhdGEuZXJyb3JfbWVzc2FnZSlcclxuICB9XHJcbiAgY29uc3QgYWRkcmVzcyA9IGRhdGEucmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcclxuICByZXR1cm4gYWRkcmVzcztcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvb3Jkc0Zyb21BZGRyZXNzKGFkZHJlc3Mpe1xyXG4gIGNvbnN0IHVybEFkZHJlc3MgPSBlbmNvZGVVUkkoYWRkcmVzcylcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvZ2VvY29kZS9qc29uP2FkZHJlc3M9JHt1cmxBZGRyZXNzfSZrZXk9JHtHT09HTEVfQVBJX0tFWX1gKTtcclxuICBpZighcmVzcG9uc2Uub2spIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIGNvb3JkaW5hdGVzLlBsZWFzZSB0cnkgYWdhaW4hJyk7XHJcbiAgfVxyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgaWYoZGF0YS5lcnJvcl9tZXNzYWdlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5lcnJvcl9tZXNzYWdlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBkYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb247XHJcbiAgcmV0dXJuIGNvb3JkaW5hdGVzO1xyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/Utility/Location.js\n");

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