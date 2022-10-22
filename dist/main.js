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

eval("console.log(\"Hey there!\")\n\nconst contactInfo = {\n    firstName: \"Stenver\",\n    lastName: \"Suurkütt\",\n    email: \"hello@stenver.dev\",\n    linkedIn: [\"stenver-suurkütt\", \"https://www.linkedin.com/in/stenver-suurk%C3%BCtt/\"],\n    gitHub: [\"circuitstan\", \"https://github.com/circuitstan\"]\n}\n\nlet keys = Object.keys(contactInfo)\n\nfunction displayInfo() {\n    document.querySelector('.open').textContent = \"contactInfo = {\"\n\n    document.querySelector('.first-name').textContent = keys[0] + \": \" + contactInfo.firstName\n    document.querySelector('.last-name').textContent = keys[1] + \": \" + contactInfo.lastName\n    \n    let email = document.querySelector('.email')\n    email.textContent = keys[2] + \": \"\n    let emailLink = document.createElement('a')\n    emailLink.href = \"mailto:\" + contactInfo.email\n    emailLink.textContent = contactInfo.email\n    email.appendChild(emailLink)\n\n    let linkedIn = document.querySelector('.linkedin')\n    linkedIn.textContent = keys[3] + \": \"\n    let linkedInLink = document.createElement('a')\n    linkedInLink.href = contactInfo.linkedIn[1]\n    linkedInLink.textContent = contactInfo.linkedIn[0]\n    linkedIn.appendChild(linkedInLink)\n\n    let gitHub = document.querySelector('.github')\n    gitHub.textContent = keys[4] + \": \"\n    let gitHubLink = document.createElement('a')\n    gitHubLink.href = contactInfo.gitHub[1]\n    gitHubLink.textContent = contactInfo.gitHub[0]\n    gitHub.appendChild(gitHubLink)\n\n    document.querySelector('.close').textContent = \"}\"\n}\n\ndisplayInfo()\n\n\n//# sourceURL=webpack://contactpage/./src/index.js?");

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