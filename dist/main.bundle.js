"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktimetable"] = self["webpackChunktimetable"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dialog: () => (/* binding */ dialog),\n/* harmony export */   openCheck: () => (/* binding */ openCheck)\n/* harmony export */ });\n/* harmony import */ var _modules_edit_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/edit.js */ \"./src/modules/edit.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_delete_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/delete.js */ \"./src/modules/delete.js\");\n/* harmony import */ var _modules_handleFormSubmit_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handleFormSubmit.js */ \"./src/modules/handleFormSubmit.js\");\n\n\n\n\n\nconst storedDataString = localStorage.getItem('userData');\nconst storedData = storedDataString ? JSON.parse(storedDataString) : {};\n\nconst dialog = document.getElementById('popUp');\n\nconst openCheck = (dialog, className) => {\n  if (dialog.open) {\n    document.getElementById('form-container').innerHTML = `\n        <h3 class=\"form-title\">Plan your ${className}</h3>\n        <form method=\"\" id=\"form-data\">\n          <div class=\"form-label\">\n            <label name=\"task\">Task</label>\n            <input type=\"text\" placeholder=\"Enter task...\" id=\"task\" required>\n          </div>\n          <div class=\"form-label\">\n            <label name=\"date\">Date</label>\n            <input type=\"date\" placeholder=\"Enter date\" id=\"date\" required>\n          </div>\n          <div class=\"form-label\">\n            <label name=\"time\">From</label>\n            <input type=\"time\" id=\"from-time\" placeholder=\"time\" required>\n          </div>\n          <div class=\"form-label\">\n            <label name=\"time\">To</label>\n            <input type=\"time\" id=\"to-time\" required>\n          </div>\n          <div class=\"submit-btns\">\n            <button type=\"submit\" id=\"confirm\" class=\"form-btn\">Submit</button>\n            <button id=\"cancel\" type=\"reset  class=\"form-btn\">Cancel</button>\n          </div>\n        </form>\n      `;\n    const cancelButton = document.getElementById('cancel');\n    cancelButton.addEventListener('click', () => {\n      dialog.close();\n      openCheck(dialog, className);\n    });\n\n    const handleSubmit = document.getElementById('form-data');\n    handleSubmit.addEventListener('submit', (e) => {\n      e.preventDefault();\n      (0,_modules_handleFormSubmit_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(className, dialog);\n    });\n  }\n};\n\n// Add elements\ndocument.addEventListener('click', (event) => {\n  if (event.target.classList.contains('new-task')) {\n    dialog.showModal();\n    openCheck(dialog, event.target.previousElementSibling.className);\n  }\n});\n\n// Edit elements\ndocument.addEventListener('click', (event) => {\n  if (event.target.classList.contains('edit')) {\n    const editButton = event.target;\n    (0,_modules_edit_js__WEBPACK_IMPORTED_MODULE_0__.handleEdit)(editButton, dialog, openCheck);\n    (0,_modules_edit_js__WEBPACK_IMPORTED_MODULE_0__.handleEditButtons)(dialog, openCheck);\n  }\n});\n\nconst timeTableTasks = document.querySelectorAll('.sunday, .monday, .tuesday, .wednesday, .thursday, .friday, .saturday');\n(0,_modules_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(timeTableTasks, storedData);\n\n(0,_modules_delete_js__WEBPACK_IMPORTED_MODULE_2__.handleDeleteButtons)();\n\n\n//# sourceURL=webpack://timetable/./src/index.js?");

/***/ }),

/***/ "./src/modules/color.js":
/*!******************************!*\
  !*** ./src/modules/color.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getRandomColor = () => {\n  const minBrightness = 50; // Minimum brightness value (0-255)\n  const maxBrightness = 200; // Maximum brightness value (0-255)\n  const maxAlpha = 1; // Maximum alpha value (1 for fully opaque)\n  const minAlpha = 0; // Minimum alpha value (0 for fully transparent)\n\n  let red;\n  let green;\n  let blue;\n  let alpha;\n  let isDullColor = true;\n\n  while (isDullColor) {\n    red = Math.floor(Math.random() * (maxBrightness - minBrightness + 1) + minBrightness);\n    green = Math.floor(Math.random() * (maxBrightness - minBrightness + 1) + minBrightness);\n    blue = Math.floor(Math.random() * (maxBrightness - minBrightness + 1) + minBrightness);\n    alpha = Math.random() * (maxAlpha - minAlpha) + minAlpha;\n\n    isDullColor = red < minBrightness / 2 && green < minBrightness / 2 && blue < minBrightness / 2;\n  }\n\n  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getRandomColor);\n\n\n//# sourceURL=webpack://timetable/./src/modules/color.js?");

/***/ }),

/***/ "./src/modules/delete.js":
/*!*******************************!*\
  !*** ./src/modules/delete.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleDelete: () => (/* binding */ handleDelete),\n/* harmony export */   handleDeleteButtons: () => (/* binding */ handleDeleteButtons)\n/* harmony export */ });\nconst handleDelete = (deleteDivElement) => {\n  const deleteKey = deleteDivElement.getAttribute('data-key');\n  const deleteTdElement = deleteDivElement.closest('div');\n  deleteTdElement.parentElement.removeChild(deleteDivElement);\n  const deleteStoredDataString = localStorage.getItem('userData');\n  const deleteStoredData = deleteStoredDataString ? JSON.parse(deleteStoredDataString) : {};\n  delete deleteStoredData[deleteKey];\n  localStorage.setItem('userData', JSON.stringify(deleteStoredData));\n};\n\nconst handleDeleteButtons = () => {\n  const deleteButtons = document.querySelectorAll('.delete');\n  deleteButtons.forEach((button) => {\n    button.removeEventListener('click', handleDelete);\n    button.addEventListener('click', (event) => {\n      const deleteButton = event.target;\n      const deleteDivElement = deleteButton.parentElement;\n      handleDelete(deleteDivElement);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://timetable/./src/modules/delete.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ \"./src/modules/color.js\");\n\n\nconst renderData = (tdElement, data) => {\n  let content = '';\n  Object.keys(data).forEach((key) => {\n    if (tdElement.className.startsWith(key.substring(0, 3))) {\n      content += `\n        <div data-key=\"${key}\" class=\"task-elements\" style=\"background-color: ${(0,_color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()};\">\n          <p>Task: ${data[key].task}</p>\n          <p>Date: ${data[key].date}</p>\n          <p>Time: ${data[key].fromTime} - ${data[key].toTime} </p>\n          <button class=\"edit\">Edit</button>\n          <button class=\"delete\">Delete</button>\n        </div>\n      `;\n    }\n  });\n  tdElement.innerHTML = content;\n};\n\nconst displayStoredData = (tdElements, data) => {\n  if (data) {\n    if (tdElements instanceof NodeList) {\n      tdElements.forEach((tdElement) => {\n        renderData(tdElement, data);\n      });\n    } else {\n      renderData(tdElements, data);\n    }\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayStoredData);\n\n\n//# sourceURL=webpack://timetable/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/edit.js":
/*!*****************************!*\
  !*** ./src/modules/edit.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleEdit: () => (/* binding */ handleEdit),\n/* harmony export */   handleEditButtons: () => (/* binding */ handleEditButtons)\n/* harmony export */ });\n/* harmony import */ var _delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete.js */ \"./src/modules/delete.js\");\n\n\nconst handleEdit = (editButton, dialog, openCheck) => {\n  const editDivElement = editButton.parentElement;\n  const editKey = editDivElement.getAttribute('data-key');\n  const editTdElement = editDivElement.closest('div');\n  const editStoredDataString = localStorage.getItem('userData');\n  const editStoredData = editStoredDataString ? JSON.parse(editStoredDataString) : {};\n  if (editKey && editStoredData[editKey] && !dialog.open) {\n    const {\n      task, date, fromTime, toTime,\n    } = editStoredData[editKey];\n    dialog.showModal();\n    openCheck(dialog, editTdElement.className);\n\n    document.getElementById('task').value = task;\n    document.getElementById('date').value = date;\n    document.getElementById('from-time').value = fromTime;\n    document.getElementById('to-time').value = toTime;\n\n    const handleSubmit = document.getElementById('form-data');\n    const sumbitListener = (event) => {\n      event.preventDefault();\n      const editedTaskInput = document.getElementById('task').value;\n      const editedDateInput = document.getElementById('date').value;\n      const editedFromTimeInput = document.getElementById('from-time').value;\n      const editedToTimeInput = document.getElementById('to-time').value;\n\n      editStoredData[editKey] = {\n        task: editedTaskInput,\n        date: editedDateInput,\n        fromTime: editedFromTimeInput,\n        toTime: editedToTimeInput,\n      };\n\n      localStorage.setItem('userData', JSON.stringify(editStoredData));\n\n      editTdElement.innerHTML = `\n        <p>Task: ${editedTaskInput}</p>\n        <p>Date: ${editedDateInput}</p>\n        <p>Time: ${editedFromTimeInput} - ${editedToTimeInput} </p>\n        <button class=\"edit\">Edit</button>\n        <button class=\"delete\">Delete</button>\n      `;\n      (0,_delete_js__WEBPACK_IMPORTED_MODULE_0__.handleDeleteButtons)();\n      // eslint-disable-next-line no-use-before-define\n      handleEditButtons(dialog, openCheck);\n      dialog.close();\n    };\n    handleSubmit.addEventListener('submit', sumbitListener);\n  }\n};\n\nconst handleEditButtons = (dialog, openCheck) => {\n  const editButtons = document.querySelectorAll('.edit');\n  editButtons.forEach((button) => {\n    button.removeEventListener('click', handleEdit);\n    button.addEventListener('click', (event) => {\n      const editButton = event.target;\n      handleEdit(editButton, dialog, openCheck);\n    });\n  });\n};\n\n\n//# sourceURL=webpack://timetable/./src/modules/edit.js?");

/***/ }),

/***/ "./src/modules/handleFormSubmit.js":
/*!*****************************************!*\
  !*** ./src/modules/handleFormSubmit.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display.js */ \"./src/modules/display.js\");\n\n\nconst handleSubmitForm = (className, dialog) => {\n  const taskInput = document.getElementById('task').value;\n  const dateInput = document.getElementById('date').value;\n  const fromTimeInput = document.getElementById('from-time').value;\n  const toTimeInput = document.getElementById('to-time').value;\n  const divElement = document.querySelector(`div.${className}`);\n\n  const storedDataString = localStorage.getItem('userData');\n  const storedData = storedDataString ? JSON.parse(storedDataString) : {};\n\n  const key = `${className}-${Date.now()}`;\n  storedData[key] = {\n    task: taskInput,\n    date: dateInput,\n    fromTime: fromTimeInput,\n    toTime: toTimeInput,\n  };\n  localStorage.setItem('userData', JSON.stringify(storedData));\n  (0,_display_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(divElement, storedData);\n  dialog.close();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleSubmitForm);\n\n\n//# sourceURL=webpack://timetable/./src/modules/handleFormSubmit.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);