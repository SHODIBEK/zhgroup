/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");

$(document).ready(() => {
  var $window = $(window),
      $slider = $('.slider'),
      $animSvg = $('#anim'),
      $lakAnim = $('#lak, .tooltip-three'),
      $textureAnim = $('#texture, .tooltip-two'),
      $pvhAnim = $('#pvh, .tooltip-one'),
      $catalogSlider = $('.catalog-slider-items.owl-carousel'),
      $input = $('.input-group input'),
      $phone = $('input#phone'),
      $newsSlider = $('.news-items.owl-carousel'),
      $sliderBtn = $(".slider-catalog-item"),
      $benefitSlider = $('.benefit-items.owl-carousel'),
      $gallerySlider = $('.gallery-items.owl-carousel');
  $window.on('load', () => {
    setTimeout(() => {
      $slider.addClass('js-animPlay');
    }, 1000);
  });
  $lakAnim.hover(function () {
    $slider.addClass('js-hover');
    $('.slider-catalog').show('slow');
  }, function () {
    $slider.removeClass('js-hover');
  });
  $textureAnim.hover(function () {
    $slider.addClass('js-texture-hover');
  }, function () {
    $slider.removeClass('js-texture-hover');
  });
  $pvhAnim.hover(function () {
    $slider.addClass('js-pvh-hover');
  }, function () {
    $slider.removeClass('js-pvh-hover');
  });
  $catalogSlider.owlCarousel({
    loop: true,
    margin: 30,
    navText: ['<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.22266 1.33337L1.35846 9.19757L9.22266 17.0618" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.77734 17.6666L9.64154 9.80243L1.77734 1.93823"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true
      },
      1024: {
        items: 4,
        autoWidth: false,
        nav: true,
        dots: false
      },
      1169: {
        items: 4,
        autoWidth: true,
        nav: true,
        dots: false
      }
    }
  });
  $newsSlider.owlCarousel({
    loop: true,
    margin: 30,
    navText: ['<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.22266 1.33337L1.35846 9.19757L9.22266 17.0618" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.77734 17.6666L9.64154 9.80243L1.77734 1.93823"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'],
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true
      },
      1024: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  });
  $input.on('focus', function () {
    $(this).parent().addClass('focused');
  }).on('blur', function () {
    $(this).parent().removeClass('focused');
  });

  let onlyNumber = function onlyNumber(e) {
    let key = e.charCode || e.keyCode || 0;

    if (key === 8 || key === 9 || key === 13 || key === 46 || key === 110 || key === 190 || key >= 35 && key <= 40) {} else if (key >= 48 && key <= 57 || key >= 96 && key <= 105) {} else {
      e.preventDefault();
    }
  };

  $phone.keydown(onlyNumber);
  $(".close-popup").on('click', function () {
    $('#iForm-popup').fadeOut();
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      // событие клика по веб-документу
      var div = $('.feedback-popup-wrap'); // тут указываем ID элемента

      if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) {
        // и не по его дочерним элементам
        div.parent().fadeOut(); // скрываем его
      }
    });
  });
  $sliderBtn.on('click', function (e) {
    var imgLink = $(this).attr('href');

    if (typeof imgLink !== "undefined") {
      $("#texture").css('backgroundImage', 'url(' + imgLink + ')');
    }

    return false;
  });
  $('#sliderClose').on('click', function () {
    $('.slider-catalog').hide('slow');
  });
  $('#menu').on('click', function () {
    $(this).toggleClass('mobile-btn--open');
    $('#menu-list').slideToggle();
  });
  $('.mobile-header .submenu a').on('click', function () {
    $(this).next().toggleClass('sublist--open');
    $(this).next().slideToggle('fast');
  });

  if ($window.width() < 1024) {
    $benefitSlider.owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      loop: true,
      navText: ['<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.22266 1.33337L1.35846 9.19757L9.22266 17.0618" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.77734 17.6666L9.64154 9.80243L1.77734 1.93823"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>']
    });
    $gallerySlider.owlCarousel({
      items: 1,
      nav: true,
      dots: true,
      loop: true,
      navText: ['<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.22266 1.33337L1.35846 9.19757L9.22266 17.0618" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>', '<svg width="11" height="19" viewBox="0 0 11 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.77734 17.6666L9.64154 9.80243L1.77734 1.93823"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>']
    });
    $window.scroll(function () {
      let e = $("table");

      if (e.length === 1) {
        $('.swipe-table').length === 0 && $("body").append('<div class="swipe-table"><span class="swipe_table"></span></div>');
        let a = e.offset();
        let t = e.innerHeight();
        let i = a.top + t;
        let s = $(window).scrollTop() + $(window).height();
        let l = a.top + (t - 100) / 2;
        i < s && ($(".swipe-table").css({
          top: l
        }), $('.swipe-table').fadeIn('slow'), setTimeout(() => {
          $('.swipe-table').fadeOut('slow');
        }, 2500));
      }
    });
  }

  $("#pOrder").on('click', function () {
    $("#pPopup").fadeIn();
  });
  $('#pForm .close-popup').on('click', function () {
    $("#pPopup").fadeOut();
  });
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_3__);

 // import $ from 'jquery';

svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()(); // window.$ = $;
// window.jQuery = $;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js"); // import './vendor/mask';


 // import 'jquery.animate-number';

 // import Parallax from 'parallax-js';
// import './vendor/pace';
// import './vendor/swiper.min.js';
// import './vendor/jquery.spincrement';
// import './vendor/datetimepicker';
// import './vendor/revelalotor';

/***/ })

/******/ });
//# sourceMappingURL=main.js.map