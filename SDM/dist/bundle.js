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

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createStudent: () => (/* binding */ createStudent),\n/* harmony export */   loadStudents: () => (/* binding */ loadStudents)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst usersAPIUrl = \"http://localhost:3000/users\";\nconst createStudent = (name, city) => __awaiter(void 0, void 0, void 0, function* () {\n    const body = { name, city };\n    const config = {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify(body),\n    };\n    const response = yield fetch(usersAPIUrl, config);\n    const newUser = yield response.json();\n    alert(\"Student Added\");\n    console.log(newUser);\n    loadStudents(); // Refresh the students list\n});\nconst loadStudents = () => __awaiter(void 0, void 0, void 0, function* () {\n    const response = yield fetch(usersAPIUrl);\n    const students = yield response.json();\n    const studentsTbody = document.getElementById(\"students\");\n    studentsTbody.innerHTML = ''; // Clear the existing table content\n    students.forEach((student) => {\n        const row = studentsTbody.insertRow();\n        row.innerHTML = `\n            <td>${student.id}</td>\n            <td>${student.name}</td>\n            <td>${student.city}</td>\n            <td><button onclick=\"getWeatherInfo('${student.city}')\">Get Weather</button></td>\n        `;\n    });\n});\nconst getWeatherInfo = (city) => __awaiter(void 0, void 0, void 0, function* () {\n    const weatherAPIKey = \"YOUR_WEATHER_API_KEY\"; // Replace with your API key\n    const weatherAPIUrl = `http://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${city}`;\n    const response = yield fetch(weatherAPIUrl);\n    const weatherData = yield response.json();\n    const weatherInfo = `\n        Temperature: ${weatherData.current.temp_c}°C\n        Condition: ${weatherData.current.condition.text}\n    `;\n    alert(weatherInfo); // Display weather information\n});\n\n\n//# sourceURL=webpack://sdm/./src/app.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.ts\");\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n    const studentForm = document.getElementById(\"create-student\");\n    studentForm.addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const name = document.getElementById(\"name\").value;\n        const city = document.getElementById(\"city\").value;\n        (0,_app__WEBPACK_IMPORTED_MODULE_0__.createStudent)(name, city);\n    });\n    (0,_app__WEBPACK_IMPORTED_MODULE_0__.loadStudents)(); // Load students when page loads\n});\n\n\n//# sourceURL=webpack://sdm/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;