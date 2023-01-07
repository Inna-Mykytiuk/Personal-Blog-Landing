/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\nmodalBtn.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let $this = event.currentTarget;\r\n    let modalId = $this.getAttribute('data-modal');\r\n    let modal = document.getElementById(modalId);\r\n    let modalContent = modal.querySelector('.modal__content');\r\n    \r\n    modalContent.addEventListener('click', event => {\r\n        event.stopPropagation();\r\n    });\r\n    \r\n    modal.classList.add('show');\r\n    body.classList.add('no-scroll');\r\n    \r\n    setTimeout(() => {\r\n        modalContent.style.transform = 'none';\r\n        modalContent.style.opacity = '1';\r\n    }, 1);\r\n      \r\n  });\r\n});\r\n\r\n\r\nmodalClose.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.currentTarget.closest('.modal');\r\n    \r\n    closeModal(currentModal);\r\n  });\r\n});\r\n\r\n\r\nmodal.forEach(item => {\r\n  item.addEventListener('click', event => {\r\n    let currentModal = event.currentTarget;\r\n    \r\n    closeModal(currentModal);\r\n  });\r\n});\r\n\r\n\r\nfunction closeModal(currentModal) {\r\n  let modalContent = currentModal.querySelector('.modal__content');\r\n  modalContent.removeAttribute('style');\r\n    \r\n  setTimeout(() => {\r\n    currentModal.classList.remove('show');\r\n    body.classList.remove('no-scroll');\r\n  }, 200);\r\n\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (function() {

eval("const burger = document.getElementById('sidebarToggle');\r\nconst sidebar = document.getElementById('sidebar');\r\nconst page = document.getElementById('page');\r\nconst body = document.body;\r\n\r\n\r\nburger.addEventListener('click', event => {\r\n    if( body.classList.contains('show-sidebar') ) {\r\n        closeSidebar();\r\n    } else {\r\n        showSidebar();\r\n    }\r\n});\r\n\r\nfunction showSidebar() {\r\n    let mask = document.createElement('div');\r\n    mask.classList.add('page__mask');\r\n    mask.addEventListener('click', closeSidebar);\r\n    page.appendChild(mask);\r\n    \r\n    body.classList.add('show-sidebar');\r\n}\r\n\r\nfunction closeSidebar() {\r\n    body.classList.remove('show-sidebar');\r\n    document.querySelector('.page__mask').remove();\r\n}\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (function() {

eval("const textArea = document.querySelectorAll('[data-autoresize]');\r\n\r\ntextArea.forEach(item => {\r\n    let textAreaH = item.offsetHeight;\r\n    \r\n    item.addEventListener('input', event => {\r\n        let $this = event.target;\r\n        \r\n        $this.style.height = textAreaH + 'px';\r\n        $this.style.height = $this.scrollHeight + 'px';\r\n    });\r\n});\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;