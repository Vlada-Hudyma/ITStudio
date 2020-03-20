/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
var buttunLeft = 0;

function sliderLeft() {
  var polosa = document.getElementById('slider');
  buttunLeft = buttunLeft - 390;

  if (buttunLeft < -2200) {
    buttunLeft = 0;
  }

  polosa.style.left = buttunLeft + 'px';
}

setTimeout(function () {
  document.getElementById('slider-left').onclick = function () {
    sliderLeft();
  };

  var rio = document.getElementById('rio');

  rio.onclick = function (e) {
    var target = e.target;
    if (target.tagName != 'IMG') return; //проверяем, чтоб клик шел именно по картинкам

    var random = Math.random(); //генерирует случайное дробное число от 0 до 1

    console.log(random); //выводит в консоль рандомное число и если оно будет менее, чем 0,1 - сработает редирект

    if (random < 1) {
      //условие, при котором сработает редирект - сгенеренное число в дипазаоне от 0 до 0,1, 
      window.location.href = "https://vintage.com.ua/portfolio/view/fie-rio"; //редирект на гугл, если нужно на другую страницу - меняем тут
    }
  };

  var copout = document.getElementById('copout');

  copout.onclick = function (e) {
    var target = e.target;
    if (target.tagName != 'IMG') return;
    var random = Math.random();
    console.log(random);

    if (random < 1) {
      window.location.href = "https://vintage.com.ua/portfolio/view/copout";
    }
  };

  var concord = document.getElementById('concord');

  concord.onclick = function (e) {
    var target = e.target;
    if (target.tagName != 'IMG') return;
    var random = Math.random();
    console.log(random);

    if (random < 1) {
      window.location.href = "https://vintage.com.ua/portfolio/view/concord-bank";
    }
  };
}, 1000);

/***/ }),

/***/ "./assets/styles/main.scss":
/*!*********************************!*\
  !*** ./assets/styles/main.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************************************!*\
  !*** multi ./assets/scripts/main.js ./assets/styles/main.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Kristina\Desktop\ITStudio\assets/scripts/main.js */"./assets/scripts/main.js");
module.exports = __webpack_require__(/*! C:\Users\Kristina\Desktop\ITStudio\assets/styles/main.scss */"./assets/styles/main.scss");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map