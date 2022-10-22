/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Hey there!\")\n\nconst contactInfo = {\n    firstName: \"Stenver\",\n    lastName: \"Suurkütt\",\n    email: \"hello@stenver.dev\",\n    github: [\"circuitstan\", \"https://github.com/circuitstan\"]\n}\n\nlet keys = Object.keys(contactInfo)\n\nfunction displayInfo() {\n    document.querySelector('.open').textContent = \"{\"\n\n    document.querySelector('.first-name').textContent = keys[0] + \": \" + contactInfo.firstName\n    document.querySelector('.last-name').textContent = keys[1] + \": \" + contactInfo.lastName\n    \n    let email = document.querySelector('.email')\n    email.textContent = keys[2] + \": \"\n    let emailLink = document.createElement('a')\n    emailLink.href = \"mailto:\" + contactInfo.email\n    emailLink.textContent = contactInfo.email\n    email.appendChild(emailLink)\n\n    let github = document.querySelector('.github')\n    github.textContent = keys[3] + \": \"\n    let githubLink = document.createElement('a')\n    githubLink.href = contactInfo.github[1]\n    githubLink.textContent = contactInfo.github[0]\n    github.appendChild(githubLink)\n\n    document.querySelector('.close').textContent = \"}\"\n}\n\ndisplayInfo()\n\n\n//# sourceURL=webpack://contactpage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;