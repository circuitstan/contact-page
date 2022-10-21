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

eval("console.log(\"hello circuitstan!\")\n\nconst container = document.getElementById('container')\n\nlet infoObject = document.createElement('div')\nlet objectOpen = document.createElement('p')\nlet objectClose = document.createElement('p')\nlet infoContent = document.createElement('div')\nlet firstName = document.createElement('p')\nlet lastName = document.createElement('p')\nlet email = document.createElement('p')\nlet emailLink = document.createElement('a')\nlet emailDiv = document.createElement('div')\nlet github = document.createElement('p')\nlet githubLink = document.createElement('a')\nlet githubDiv = document.createElement('div')\n\ninfoObject.className = \"info\"\ninfoContent.className = \"info-content\"\nemailDiv.className = \"email\"\ngithubDiv.className = \"github\"\n\n\nfunction createInfo() {\n    objectOpen.textContent = \"{\"\n\n    firstName.textContent = \"firstName: \\\"Stenver\\\"\"\n    lastName.textContent = \"lastName: \\\"Suurkütt\\\"\"\n\n    email.textContent = \"email: \"\n    emailLink.href = \"mailto:hello@stenver.dev\"\n    let mailAadress = document.createTextNode(\"hello@stenver.dev\")\n    emailLink.appendChild(mailAadress)\n\n    github.textContent = \"gitHub: \"\n    githubLink.href = \"https://github.com/circuitstan\"\n    let gitUser = document.createTextNode(\"circuitstan\")\n    githubLink.appendChild(gitUser)\n\n    objectClose.textContent += \"}\"\n}\n\ncreateInfo()\n\ninfoContent.appendChild(firstName)\ninfoContent.appendChild(lastName)\n\nemailDiv.appendChild(email)\nemailDiv.appendChild(emailLink)\ngithubDiv.appendChild(github)\ngithubDiv.appendChild(githubLink)\ninfoContent.appendChild(emailDiv)\ninfoContent.appendChild(githubDiv)\n\ninfoObject.appendChild(objectOpen)\ninfoObject.appendChild(infoContent)\ninfoObject.appendChild(objectClose)\n\ncontainer.appendChild(infoObject)\n\n//# sourceURL=webpack://contactpage/./src/index.js?");

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