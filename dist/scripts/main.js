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

/***/ "./assets/scripts/classes/backToTop.js":
/*!*********************************************!*\
  !*** ./assets/scripts/classes/backToTop.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* eslint-disable */
function backToTop() {
  var _this = this;

  var button = $('.toTop');
  $(window).on('scroll', function () {
    if ($(_this).scrollTop() >= 50) {
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });
  button.on('click', function (e) {
    e.preventDefault();
    $('html').animate({
      scrollTop: 0
    }, 1000);
  });
}

backToTop();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/scripts/classes/preloader.js":
/*!*********************************************!*\
  !*** ./assets/scripts/classes/preloader.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */
setTimeout(function () {
  var blinds = document.querySelector('.blinds');
  var imgs = blinds.querySelectorAll('.blinds__img');
  var blindsWidth = blinds.clientWidth;
  var amount = 12;
  var distance = 10;
  var width = (blindsWidth - (amount - 1) * distance) / amount;
  var number = 0;

  for (var i = 0; i < amount; i++) {
    var span = document.createElement('span');
    var x = i * (width + distance);
    span.style.position = 'absolute';
    span.style.width = width + 'px';
    span.style.left = x + 'px';
    span.style.backgroundSize = blindsWidth + 'px auto';
    span.style.backgroundPosition = -x + 'px 50%';
    blinds.appendChild(span);
  }

  var spans = blinds.querySelectorAll('span');
  animateBlinds();

  function animateBlinds() {
    imgs[number].classList.add('blinds__img_active');
    var src = imgs[number].src;

    var _loop = function _loop(_i) {
      spans[_i].style.backgroundImage = 'url(' + src + ')';
      var max = 100 - random(0, 40);
      animate(1000, function (s) {
        return spans[_i].style.height = s * max + '%';
      }, function (s) {
        return s;
      }, function () {
        return animate(1000, function (s) {
          return spans[_i].style.height = max - s * max + '%';
        }, function (s) {
          return s;
        }, function () {
          if (_i === amount - 1) {
            imgs[number].classList.remove('blinds__img_active');
            number = number === imgs.length - 1 ? 0 : number + 1;
            animateBlinds();
          }
        });
      });
    };

    for (var _i = 0; _i < amount; _i++) {
      _loop(_i);
    }
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function animate(duration, draw) {
    var timing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (stateTime) {
      return stateTime;
    };
    var complete = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var startTime = performance.now();

    var f = function f(currentTime) {
      var stateTime = (currentTime - startTime) / duration;
      stateTime = stateTime > 1 ? 1 : stateTime;
      var stateAnimation = timing(stateTime);
      draw(stateAnimation);

      if (stateTime < 1) {
        requestAnimationFrame(f);
      } else {
        complete();
      }
    };

    requestAnimationFrame(f);
  }
}, 1000);

window.onload = function () {
  setTimeout(function () {
    var elems = document.getElementsByClassName('preloader');

    for (var i = 0; i < elems.length; i++) {
      elems[i].style.display = 'none';
    }
  }, 2000);
};

/***/ }),

/***/ "./assets/scripts/classes/scroll.js":
/*!******************************************!*\
  !*** ./assets/scripts/classes/scroll.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/* eslint-disable */
$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  $('.three').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
});
var counterStart = false;
var e_top = $('.counter').offset().top - $(window).height();
console.log(e_top);
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});
$(window).on('scroll', function () {
  var w_top = $(window).scrollTop();

  if (w_top >= e_top && !counterStart) {
    counterStart = true;
    var time = 2;
    $('.number').each(function () {
      var $item = $(this),
          maxNum = +$item.data('num'),
          step = Math.floor(time * 2000 / maxNum);
      showNumber($item, step, maxNum);
    });
  }
});

function showNumber($item, step, maxNum) {
  var currentNum = +$item.html() + 1;

  if (currentNum <= maxNum) {
    $item.html(Math.min(maxNum, currentNum));
    setTimeout(function () {
      showNumber($item, step, maxNum);
    }, step);
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./assets/scripts/classes/slider.js":
/*!******************************************!*\
  !*** ./assets/scripts/classes/slider.js ***!
  \******************************************/
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

/***/ "./assets/scripts/main.js":
/*!********************************!*\
  !*** ./assets/scripts/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_preloader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/preloader */ "./assets/scripts/classes/preloader.js");
/* harmony import */ var _classes_preloader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_classes_preloader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_backToTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/backToTop */ "./assets/scripts/classes/backToTop.js");
/* harmony import */ var _classes_backToTop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_classes_backToTop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/slider */ "./assets/scripts/classes/slider.js");
/* harmony import */ var _classes_slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_classes_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/scroll */ "./assets/scripts/classes/scroll.js");
/* harmony import */ var _classes_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_classes_scroll__WEBPACK_IMPORTED_MODULE_3__);





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

__webpack_require__(/*! C:\Users\Kristina\Desktop\web\ITStudio\assets/scripts/main.js */"./assets/scripts/main.js");
module.exports = __webpack_require__(/*! C:\Users\Kristina\Desktop\web\ITStudio\assets/styles/main.scss */"./assets/styles/main.scss");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map