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
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
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
/******/
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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./themes/parkhotel/src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./themes/parkhotel/src/blocks/modules/404/404.js":
/*!********************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/404/404.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/about-gallery/about-gallery.js":
/*!****************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/about-gallery/about-gallery.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

if (document.querySelector(".about-gallery-slider")) {
  var gallery_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".about-gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".about-gallery-slider__prev",
    nextButton: ".about-gallery-slider__next",
    controlsContainer: ".about-gallery-slider-controls",
    navContainer: ".about-gallery-slider-thumbnails",
    navAsThumbnails: true
  });
}

if (document.querySelector('.about-gallery__item')) {
  var overlay = document.querySelector('.overlay');
  var about_gallery_items = document.querySelectorAll('.about-gallery__item');
  about_gallery_items.forEach(function (item) {
    return item.addEventListener('click', function (el) {
      el.preventDefault();

      if (document.documentElement.clientWidth > 768) {
        overlay.classList.toggle("overlay--active");
        document.querySelector('.body').classList.toggle("body--unscroll");
      }
    });
  });
  document.querySelector('.mp-close').addEventListener('click', function () {
    overlay.classList.toggle("overlay--active");
    document.querySelector('.body').classList.toggle("body--unscroll");
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/about/about.js":
/*!************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/about/about.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('.about-info-image')) {
  var parallaxScroll = function parallaxScroll() {
    var scrolled = window.pageYOffset; //console.log(scrolled);

    document.querySelector('.about-info-image:first-child').style.top = 230 - scrolled * .09 + 'px';
    document.querySelector('.about-info-image:last-child').style.top = 40 - scrolled * .015 + 'px';
  };

  console.log("yes");
  var about_imgs = document.querySelectorAll('.about-info-image');
  about_imgs.forEach(function (img) {
    //img.classList.remove('about-info-image--active');
    img.addEventListener('mouseover', function () {
      console.log("hover");
      var active_img = document.querySelector('.about-info-image--active');

      if (active_img) {
        active_img.classList.toggle('about-info-image--active');
      }

      img.classList.toggle('about-info-image--active');
    });
  });
  window.addEventListener('scroll', function (e) {
    parallaxScroll();
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/book/book.js":
/*!**********************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/book/book.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/conference-booking/conference-booking.js":
/*!**************************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/conference-booking/conference-booking.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/conference-info/conference-info.js":
/*!********************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/conference-info/conference-info.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/contacts/contacts.js":
/*!******************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/contacts/contacts.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var contacts_map_link = document.querySelector('.contacts-map__link');

if (contacts_map_link) {
  contacts_map_link.addEventListener('click', function (event) {
    document.querySelector('.contacts-map').classList.toggle("contacts-map--shown");
  });
} // Yandex Map


if (document.querySelector(".contacts-map")) {
  var init = function init() {
    var myMap = new ymaps.Map("map", {
      center: [45.011529, 41.929064],
      zoom: 16
    });
    myMap.controls.add("zoomControl").add("typeSelector").add("mapTools");
    var myPlacemark = new ymaps.Placemark([45.011529, 41.929064]);
    myMap.geoObjects.add(myPlacemark);
  };

  ymaps.ready(init);
}

var contacts_info_titles = document.querySelectorAll('.contacts-info__title');

if (contacts_info_titles) {
  contacts_info_titles.forEach(function (el) {
    return el.addEventListener('click', function () {
      var contacts_info_list = el.parentElement.querySelector('.contacts-info-list');
      contacts_info_list.classList.toggle("contacts-info-list--shown");
      el.classList.toggle("contacts-info__title--shown");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/extra-services/extra-services.js":
/*!******************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/extra-services/extra-services.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/features/features.js":
/*!******************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/features/features.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/footer/footer.js":
/*!**************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/footer/footer.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var footer_nav_more = document.querySelectorAll('.footer-nav__title');

if (footer_nav_more) {
  footer_nav_more.forEach(function (el) {
    return el.addEventListener('click', function () {
      var footer_nav_list = el.parentElement.querySelector('.footer-nav-list');
      footer_nav_list.classList.toggle("footer-nav-list--shown");
      el.querySelector('.footer-nav__icon').classList.toggle("footer-nav__icon--shown");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/gallery/gallery.js":
/*!****************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/gallery/gallery.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

if (document.querySelector(".gallery-slider")) {
  var gallery_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".gallery-slider__prev",
    nextButton: ".gallery-slider__next",
    controlsContainer: ".gallery-slider-controls",
    navContainer: ".gallery-slider-thumbnails",
    navAsThumbnails: true
  });
}

if (document.querySelector('.gallery__item')) {
  var overlay = document.querySelector('.overlay');
  var about_gallery_items = document.querySelectorAll('.gallery__item');
  about_gallery_items.forEach(function (item) {
    return item.addEventListener('click', function (el) {
      el.preventDefault();

      if (document.documentElement.clientWidth > 768) {
        overlay.classList.toggle("overlay--active");
      }
    });
  });
  document.querySelector('.mp-close').addEventListener('click', function () {
    overlay.classList.toggle("overlay--active");
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/header-form/header-form.js":
/*!************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/header-form/header-form.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/header/header.js":
/*!**************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/header/header.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var header_submenu_icon = document.querySelector(".header-nav-list__item--menu");
var header = document.querySelector(".header");
header_submenu_icon.addEventListener("click", function (el) {
  header_submenu_icon.classList.toggle("header-nav-list__item--active-menu");
  header.classList.toggle("header--open");
  document.querySelector('.header-subnav-container').style.left = -document.querySelector('.header-subnav-container').getBoundingClientRect().left + "px";
  document.querySelector('html').classList.toggle("html--unscroll");
});
var lastPos = 0;
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    if (window.pageYOffset < lastPos) {
      header.classList.remove("header--hidden");
      document.querySelector(".header-form").classList.add("header-form--hidden");
    } else {
      document.querySelector(".header-form").classList.remove("header-form--hidden");
      header.classList.add("header--hidden");
    }

    lastPos = window.pageYOffset;
  }
});
var header_nav_icon = document.querySelector('.header-nav-icon');
var header_row = document.querySelector('.header-row');
header_nav_icon.addEventListener('click', function (event) {
  header_nav_icon.classList.toggle("header-nav-icon--close");
  header_row.classList.toggle("header-row--mobile");
  document.querySelector('html').classList.toggle("html--unscroll");
});
var header_nav_more = document.querySelectorAll('.header-nav__title');

if (header_nav_more) {
  header_nav_more.forEach(function (el) {
    return el.addEventListener('click', function () {
      var header_nav_list = el.parentElement.querySelector('.header-nav-sublist');
      header_nav_list.classList.toggle("header-nav-sublist--shown");
      el.querySelector('.header-nav-more').classList.toggle("header-nav-more--shown");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/hotel-services/hotel-services.js":
/*!******************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/hotel-services/hotel-services.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/index-gallery/index-gallery.js":
/*!****************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/index-gallery/index-gallery.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");
 //import { tns } from "../../../../../../node_modules/tiny-slider/src/tiny-slider";




if (document.querySelector(".index-gallery-slider")) {
  var index_gallery_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".index-gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    loop: false,
    rewind: true,
    prevButton: ".index-gallery .slider__prev",
    nextButton: ".index-gallery .slider__next",
    controlsContainer: ".index-gallery-slider-controls"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('index-gallery', index_gallery_slider, "index-gallery");
}

var index_gallery_slider_icon = document.querySelectorAll(".index-gallery .slider__icon");
index_gallery_slider_icon.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_icon = document.querySelector(".index-gallery .slider__icon--active");
    var index_gallery_slider_item = document.querySelector(".index-gallery-slider");
    var index_gallery_slider_row = document.querySelector(".index-gallery-slider-row");
    document.querySelector(".index-gallery-slider-controls").classList.toggle("index-gallery-slider-controls--module");

    if (index_gallery_slider_item) {
      index_gallery_slider_item.classList.remove("index-gallery-slider");
      index_gallery_slider_item.classList.add("index-gallery-slider-row"); //console.log(index-gallery_slider_item.classList); 
    } else if (index_gallery_slider_row) {
      index_gallery_slider_row.classList.remove("index-gallery-slider-row");
      index_gallery_slider_row.classList.add("index-gallery-slider");
    }

    icon.classList.toggle("slider__icon--active");
    prev_icon.classList.toggle("slider__icon--active");
  });
});

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/offers/offers.js":
/*!**************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/offers/offers.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";

if (document.querySelector(".offers-slider")) {
  var offers_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".offers-slider",
    items: 3.8,
    slideBy: 1,
    //center: true,
    loop: false,
    gutter: 150,
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".offers .slider__prev",
    nextButton: ".offers .slider__next",
    controlsContainer: ".offers-slider-controls",
    responsive: {
      1279: {
        items: 3.8,
        slideBy: 1,
        gutter: 150
      },
      1000: {
        items: 3.1,
        slideBy: 1,
        gutter: 100
      },
      900: {
        items: 2.9,
        slideBy: 1,
        gutter: 80
      },
      768: {
        items: 2.8,
        slideBy: 1,
        gutter: 70
      },
      320: {
        items: 4.8,
        slideBy: 1,
        gutter: 100
      }
    }
  });
}

var offers_next = document.querySelector('.offers .slider__next');
var slider = document.querySelector('.offers-slider-container');

if (offers_next) {
  offers_next.addEventListener('click', function (el) {
    setTimeout(function () {
      slider.style.overflow = "visible";
    }, 77.7); //slider.style.overflow = "visible";
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/opinion/opinion.js":
/*!****************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/opinion/opinion.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/other-rooms/other-rooms.js":
/*!************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/other-rooms/other-rooms.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";



if (document.querySelector(".other-rooms")) {
  var slider_standard1 = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--standard1",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--standard1",
    nextButton: ".other-rooms-preview-slider .slider__next--standard1",
    controlsContainer: ".other-rooms-preview-slider-controls--standard1"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_standard1, 'other-rooms-standard1');
  var slider_standard2 = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--standard2",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--standard2",
    nextButton: ".other-rooms-preview-slider .slider__next--standard2",
    controlsContainer: ".other-rooms-preview-slider-controls--standard2"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_standard2, 'other-rooms-standard2');
  var slider_business_standard = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--business_standard",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--business_standard",
    nextButton: ".other-rooms-preview-slider .slider__next--business_standard",
    controlsContainer: ".other-rooms-preview-slider-controls--business_standard"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_business_standard, 'other-rooms-business_standard');
  var slider_junior_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--junior_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--junior_suite",
    nextButton: ".other-rooms-preview-slider .slider__next--junior_suite",
    controlsContainer: ".other-rooms-preview-slider-controls--junior_suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_junior_suite, 'other-rooms-junior_suite');
  var slider_family_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--family_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--family_suite",
    nextButton: ".other-rooms-preview-slider .slider__next--family_suite",
    controlsContainer: ".other-rooms-preview-slider-controls--family_suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_family_suite, 'other-rooms-family_suite');
  var slider_vip_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--vip_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--vip_suite",
    nextButton: ".other-rooms-preview-slider .slider__next--vip_suite",
    controlsContainer: ".other-rooms-preview-slider-controls--vip_suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_vip_suite, 'other-rooms-vip_suite');
  var slider_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".other-rooms-preview-slider .slider__prev--suite",
    nextButton: ".other-rooms-preview-slider .slider__next--suite",
    controlsContainer: ".other-rooms-preview-slider-controls--suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('other-rooms', slider_suite, 'other-rooms-suite');
  var other_rooms_list = document.querySelectorAll(".other-rooms-list__item");
  var other_rooms_underline = document.querySelector('.other-rooms .underline');
  var other_rooms_item_active = document.querySelector(".other-rooms-list__item--active");
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(other_rooms_underline, {
    'width': other_rooms_item_active.clientWidth + 'px',
    'left': other_rooms_item_active.offsetLeft + 'px'
  });
  other_rooms_list.forEach(function (link) {
    link.addEventListener("click", function (event) {
      Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(other_rooms_underline, {
        'width': link.clientWidth + 'px',
        'left': link.offsetLeft + 'px'
      });
      event.preventDefault(); //setTimeout(function(){

      if (document.documentElement.clientWidth > 768) {
        event.preventDefault();
      }

      var prev_room = document.querySelector(".other-rooms-preview-list__item--active");
      var prev_link = document.querySelector(".other-rooms-list__item--active");
      var room = document.querySelector(link.getAttribute("href"));
      room.classList.toggle("other-rooms-preview-list__item--active");
      prev_room.classList.toggle("other-rooms-preview-list__item--active");
      prev_link.classList.toggle("other-rooms-list__item--active");
      link.classList.toggle("other-rooms-list__item--active"); //}, 500);
    });
    link.addEventListener("click", _js_import_functions__WEBPACK_IMPORTED_MODULE_1__["createRipple"]);
  });
  var other_rooms_detail = document.querySelectorAll('.other-rooms-preview-info-detail');
  other_rooms_detail.forEach(function (el) {
    return el.addEventListener('click', function (event) {
      el.classList.toggle("other-rooms-preview-info-detail--active");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/rest-conf/rest-conf.js":
/*!********************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/rest-conf/rest-conf.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";



if (document.querySelector(".rest-conf")) {
  if (document.querySelector(".rest-conf-slider--olimp")) {
    var rest_conf_slider_olimp = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--olimp",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--olimp",
      nextButton: ".rest-conf .slider__next--olimp",
      controlsContainer: ".rest-conf-slider-controls--olimp"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_olimp, 'rest-conf-olimp');
    var rest_conf_slider_iliada = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--iliada",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--iliada",
      nextButton: ".rest-conf .slider__next--iliada",
      controlsContainer: ".rest-conf-slider-controls--iliada"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_iliada, 'rest-conf-iliada');
    var rest_conf_slider_germes = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--germes",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--germes",
      nextButton: ".rest-conf .slider__next--germes",
      controlsContainer: ".rest-conf-slider-controls--germes"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_germes, 'rest-conf-germes');
  }

  if (document.querySelector(".rest-conf-slider--paradise")) {
    var rest_conf_slider_paradise = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--paradise",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--paradise",
      nextButton: ".rest-conf .slider__next--paradise",
      controlsContainer: ".rest-conf-slider-controls--paradise"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_paradise, 'rest-conf-paradise');
    var rest_conf_slider_prado = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--prado",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--prado",
      nextButton: ".rest-conf .slider__next--prado",
      controlsContainer: ".rest-conf-slider-controls--prado"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_prado, 'rest-conf-prado');
    var rest_conf_slider_ingreco = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--ingreco",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--ingreco",
      nextButton: ".rest-conf .slider__next--ingreco",
      controlsContainer: ".rest-conf-slider-controls--ingreco"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_ingreco, 'rest-conf-ingreco');
    var rest_conf_slider_weddings = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
      container: ".rest-conf-slider--weddings",
      items: 1,
      slideBy: "page",
      autoplay: true,
      touch: true,
      mouseDrag: true,
      loop: false,
      rewind: true,
      prevButton: ".rest-conf .slider__prev--weddings",
      nextButton: ".rest-conf .slider__next--weddings",
      controlsContainer: ".rest-conf-slider-controls--weddings"
    });
    Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rest-conf', rest_conf_slider_weddings, 'rest-conf-weddings');
  }

  var rest_conf_slider_icon = document.querySelectorAll(".rest-conf .slider__icon");
  rest_conf_slider_icon.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      var parent = document.getElementById(icon.dataset.parent);
      var prev_icon = parent.querySelector(".rest-conf .slider__icon--active");
      var rest_conf_slider_item = parent.querySelector(".rest-conf-slider");
      var rest_conf_slider_row = parent.querySelector(".rest-conf-slider-row");
      parent.querySelector(".rest-conf-slider-controls").classList.toggle("rest-conf-slider-controls--module");

      if (rest_conf_slider_item) {
        rest_conf_slider_item.classList.remove("rest-conf-slider");
        rest_conf_slider_item.classList.add("rest-conf-slider-row");
      } else if (rest_conf_slider_row) {
        rest_conf_slider_row.classList.remove("rest-conf-slider-row");
        rest_conf_slider_row.classList.add("rest-conf-slider");
      }

      icon.classList.toggle("slider__icon--active");
      prev_icon.classList.toggle("slider__icon--active");
    });
  });
  var rest_conf_items = document.querySelectorAll(".rest-conf-list__item");
  var rest_conf_underline = document.querySelector('.rest-conf .underline');
  var rest_conf_item_active = document.querySelector(".rest-conf-list__item--active");
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(rest_conf_underline, {
    'width': rest_conf_item_active.clientWidth + 'px',
    'left': rest_conf_item_active.offsetLeft + 'px'
  });
  rest_conf_items.forEach(function (link) {
    link.addEventListener("click", function (event) {
      Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(rest_conf_underline, {
        'width': event.target.clientWidth + 'px',
        'left': event.target.offsetLeft + 'px'
      });
      event.preventDefault();
      var prev_item = document.querySelector(".rest-conf-preview-list__item--active");
      var prev_link = document.querySelector(".rest-conf-list__item--active");
      var item = document.querySelector(link.getAttribute("href"));
      item.classList.toggle("rest-conf-preview-list__item--active");
      prev_item.classList.toggle("rest-conf-preview-list__item--active");
      prev_link.classList.toggle("rest-conf-list__item--active");
      link.classList.toggle("rest-conf-list__item--active");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/restaurants-info/restaurants-info.js":
/*!**********************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/restaurants-info/restaurants-info.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/room/room.js":
/*!**********************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/room/room.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";



if (document.querySelector(".room")) {
  var room_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".room-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".room .slider__prev",
    nextButton: ".room .slider__next",
    controlsContainer: ".room-slider-controls"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('room', room_slider, 'room');
  var room_titles = document.querySelectorAll(".room-info__title");
  var room_underline = document.querySelector('.room .underline');
  var room_item_active = document.querySelector(".room-info__title--active");
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(room_underline, {
    'width': room_item_active.clientWidth + 'px',
    'left': room_item_active.offsetLeft + 'px'
  });
  room_titles.forEach(function (link) {
    link.addEventListener("click", function (event) {
      Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(room_underline, {
        'width': event.target.clientWidth + 'px',
        'left': event.target.offsetLeft + 'px'
      });
      event.preventDefault();
      var prev_title = document.querySelector(".room-info__title--active");
      var prev_preview = document.querySelector(".room-info-preview--active");
      var preview = document.querySelector(link.getAttribute("href"));
      prev_preview.classList.toggle("room-info-preview--active");
      prev_title.classList.toggle("room-info__title--active");
      preview.classList.toggle("room-info-preview--active");
      link.classList.toggle("room-info__title--active");
    });
  });
  var room_preview_titles = document.querySelectorAll('.room-info-preview__title');

  if (room_preview_titles) {
    room_preview_titles.forEach(function (el) {
      return el.addEventListener('click', function () {
        var room_preview_list = el.parentElement.querySelector('.room-info-preview-inner');
        room_preview_list.classList.toggle("room-info-preview-inner--shown");
        el.classList.toggle("room-info__title--shown");
      });
    });
  }
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/rooms/rooms.js":
/*!************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/rooms/rooms.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";



if (document.querySelector(".rooms")) {
  var slider_standard1 = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--standard1",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--standard1",
    nextButton: ".rooms-preview-slider .slider__next--standard1",
    controlsContainer: ".rooms-preview-slider-controls--standard1"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_standard1, 'rooms-standard1');
  var slider_standard2 = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--standard2",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--standard2",
    nextButton: ".rooms-preview-slider .slider__next--standard2",
    controlsContainer: ".rooms-preview-slider-controls--standard2"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_standard2, 'rooms-standard2');
  var slider_business_standard = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--business_standard",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--business_standard",
    nextButton: ".rooms-preview-slider .slider__next--business_standard",
    controlsContainer: ".rooms-preview-slider-controls--business_standard"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_business_standard, 'rooms-business_standard');
  var slider_junior_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--junior_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--junior_suite",
    nextButton: ".rooms-preview-slider .slider__next--junior_suite",
    controlsContainer: ".rooms-preview-slider-controls--junior_suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_junior_suite, 'rooms-junior_suite');
  var slider_family_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--family_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--family_suite",
    nextButton: ".rooms-preview-slider .slider__next--family_suite",
    controlsContainer: ".rooms-preview-slider-controls--family_suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_family_suite, 'rooms-family_suite');
  var slider_vip_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--vip_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--vip_suite",
    nextButton: ".rooms-preview-slider .slider__next--vip_suite",
    controlsContainer: ".rooms-preview-slider-controls--vip_suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_vip_suite, 'rooms-vip_suite');
  var slider_suite = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".rooms-preview-slider .slider__prev--suite",
    nextButton: ".rooms-preview-slider .slider__next--suite",
    controlsContainer: ".rooms-preview-slider-controls--suite"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('rooms', slider_suite, 'rooms-suite');
  var rooms_list_items = document.querySelectorAll(".rooms-list__item"); //let rooms_preview_list_items = document.querySelectorAll(".rooms-preview-list__item");

  var rooms_underline = document.querySelector('.rooms .underline');
  var rooms_item_active = document.querySelector(".rooms-list__item--active");
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineY"])(rooms_underline, {
    'height': rooms_item_active.clientHeight + 'px',
    'top': rooms_item_active.offsetTop + 'px'
  });
  /*rooms_preview_list_items.forEach(function (item) {
    if (!item.classList.contains("rooms-preview-list__item--active")) {
      let slider = "slider_" + item.id.replace("rooms-", "");
      console.log(slider);
      slider.destroy();
    }
  });*/

  rooms_list_items.forEach(function (link) {
    link.addEventListener("click", function (event) {
      Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineY"])(rooms_underline, {
        'height': link.clientHeight + 'px',
        'top': link.offsetTop + 'px'
      }); //event.preventDefault();

      if (document.documentElement.clientWidth > 768) {
        event.preventDefault();
      }

      var prev_room = document.querySelector(".rooms-preview-list__item--active");
      var prev_link = document.querySelector(".rooms-list__item--active");
      var room = document.querySelector(link.getAttribute("href"));
      room.classList.toggle("rooms-preview-list__item--active");
      prev_room.classList.toggle("rooms-preview-list__item--active");
      prev_link.classList.toggle("rooms-list__item--active");
      link.classList.toggle("rooms-list__item--active");
    });
    link.addEventListener("click", _js_import_functions__WEBPACK_IMPORTED_MODULE_1__["createRipple"]);
  });
  var rooms_detail = document.querySelectorAll('.rooms-preview-info-detail');
  rooms_detail.forEach(function (el) {
    return el.addEventListener('click', function (event) {
      el.classList.toggle("rooms-preview-info-detail--active");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/service/service.js":
/*!****************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/service/service.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");





if (document.querySelector(".service")) {
  var service_gallery_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".service-gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    loop: false,
    rewind: true,
    mouseDrag: true,
    prevButton: ".service .slider__prev",
    nextButton: ".service .slider__next",
    controlsContainer: ".service-gallery-slider-controls"
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('service', service_gallery_slider, 'service-gallery');
  var service_gallery_slider_icon = document.querySelectorAll(".service-row .slider__icon");
  service_gallery_slider_icon.forEach(function (icon) {
    icon.addEventListener("click", function (event) {
      event.preventDefault();
      var prev_icon = document.querySelector(".service-row .slider__icon--active");
      var service_gallery_slider_item = document.querySelector(".service-gallery-slider");
      var service_gallery_slider_row = document.querySelector(".service-gallery-slider-row");
      document.querySelector(".service-gallery-slider-controls").classList.toggle("service-gallery-slider-controls--module");

      if (service_gallery_slider_item) {
        service_gallery_slider_item.classList.remove("service-gallery-slider");
        service_gallery_slider_item.classList.add("service-gallery-slider-row");
      } else if (service_gallery_slider_row) {
        service_gallery_slider_row.classList.remove("service-gallery-slider-row");
        service_gallery_slider_row.classList.add("service-gallery-slider");
      }

      icon.classList.toggle("slider__icon--active");
      prev_icon.classList.toggle("slider__icon--active");
    });
  });
}

if (document.querySelector(".service-price")) {
  var service_price_list_items = document.querySelectorAll(".service-price-list__item");
  var service_price_underline = document.querySelector('.service-price .underline');
  var service_price_item_active = document.querySelector(".service-price-list__item--active");
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(service_price_underline, {
    'width': service_price_item_active.clientWidth + 'px',
    'left': service_price_item_active.offsetLeft + 'px'
  });
  service_price_list_items.forEach(function (link) {
    link.addEventListener("click", function (event) {
      Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(service_price_underline, {
        'width': event.target.clientWidth + 'px',
        'left': event.target.offsetLeft + 'px'
      });
      event.preventDefault();
      var prev_item = document.querySelector(".service-price-preview-list__item--active");
      var prev_link = document.querySelector(".service-price-list__item--active");
      var item = document.querySelector(link.getAttribute("href"));
      item.classList.toggle("service-price-preview-list__item--active");
      prev_item.classList.toggle("service-price-preview-list__item--active");
      prev_link.classList.toggle("service-price-list__item--active");
      link.classList.toggle("service-price-list__item--active");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/services/services.js":
/*!******************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/services/services.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _js_import_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/import/functions */ "./themes/parkhotel/src/js/import/functions.js");


 //import { tns } from "../../../../node_modules/tiny-slider/src/tiny-slider";



if (document.querySelector(".services-preview-slider")) {
  var restaurant_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".services-preview-slider__item--restaurant",
    items: 1.9,
    slideBy: 1,
    autoplay: true,
    touch: true,
    gutter: 50,
    mouseDrag: true,
    prevButton: ".services-preview-slider .slider__prev--restaurant",
    nextButton: ".services-preview-slider .slider__next--restaurant",
    controlsContainer: ".services-preview-slider-controls--restaurant",
    responsive: {
      1210: {
        items: 1.9,
        slideBy: 1,
        gutter: 50
      },
      1110: {
        slideBy: 1,
        gutter: 30
      },
      830: {
        items: 1.8,
        slideBy: 1,
        gutter: 30
      },
      320: {
        items: 1,
        gutter: 0,
        slideBy: "page"
      }
    }
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('services', restaurant_slider, 'services-restaurant');
  var conference_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".services-preview-slider__item--conference",
    items: 1.9,
    slideBy: 1,
    autoplay: true,
    touch: true,
    gutter: 50,
    mouseDrag: true,
    prevButton: ".services-preview-slider .slider__prev--conference",
    nextButton: ".services-preview-slider .slider__next--conference",
    controlsContainer: ".services-preview-slider-controls--conference",
    responsive: {
      1210: {
        items: 1.9,
        slideBy: 1,
        gutter: 50
      },
      1110: {
        slideBy: 1,
        gutter: 30
      },
      830: {
        items: 1.8,
        slideBy: 1,
        gutter: 30
      },
      320: {
        items: 1,
        gutter: 0,
        slideBy: "page"
      }
    }
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('services', conference_slider, 'services-conference');
  var fitness_slider = Object(tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".services-preview-slider__item--fitness",
    items: 1.9,
    slideBy: 1,
    autoplay: true,
    touch: true,
    gutter: 50,
    mouseDrag: true,
    prevButton: ".services-preview-slider .slider__prev--fitness",
    nextButton: ".services-preview-slider .slider__next--fitness",
    controlsContainer: ".services-preview-slider-controls--fitness",
    responsive: {
      1210: {
        items: 1.9,
        slideBy: 1,
        gutter: 50
      },
      1110: {
        slideBy: 1,
        gutter: 30
      },
      830: {
        items: 1.8,
        slideBy: 1,
        gutter: 30
      },
      320: {
        items: 1,
        gutter: 0,
        slideBy: "page"
      }
    }
  });
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["setCounter"])('services', fitness_slider, 'services-fitness');
}

if (document.querySelector(".services")) {
  var services_items = document.querySelectorAll(".services-list__item");
  var services_underline = document.querySelector('.services .underline');
  var services_item_active = document.querySelector(".services-list__item--active");
  Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(services_underline, {
    'width': services_item_active.clientWidth + 'px',
    'left': services_item_active.offsetLeft + 'px'
  });
  services_items.forEach(function (link) {
    link.addEventListener("click", function (event) {
      Object(_js_import_functions__WEBPACK_IMPORTED_MODULE_1__["placeLineX"])(services_underline, {
        'width': event.target.clientWidth + 'px',
        'left': event.target.offsetLeft + 'px'
      });
      event.preventDefault();
      var prev_service = document.querySelector(".services-preview-list__item--active");
      var prev_link = document.querySelector(".services-list__item--active");
      var service = document.querySelector(link.getAttribute("href"));
      service.classList.toggle("services-preview-list__item--active");
      prev_service.classList.toggle("services-preview-list__item--active");
      prev_link.classList.toggle("services-list__item--active");
      link.classList.toggle("services-list__item--active");
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/transfer-price/transfer-price.js":
/*!******************************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/transfer-price/transfer-price.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/transfer/transfer.js":
/*!******************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/transfer/transfer.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./themes/parkhotel/src/blocks/modules/welcome/welcome.js":
/*!****************************************************************!*\
  !*** ./themes/parkhotel/src/blocks/modules/welcome/welcome.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('.welcome-down')) {
  document.querySelector('.welcome-down').addEventListener('click', function () {
    var scroll_height = document.querySelector('.welcome').offsetHeight + document.querySelector('.header').offsetHeight - window.pageYOffset;
    window.scrollBy({
      //top: document.documentElement.scrollHeight,
      top: scroll_height,
      behavior: 'smooth'
    });
  });
}

/***/ }),

/***/ "./themes/parkhotel/src/js/import/functions.js":
/*!*****************************************************!*\
  !*** ./themes/parkhotel/src/js/import/functions.js ***!
  \*****************************************************/
/*! exports provided: createRipple, placeLineX, placeLineY, setCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRipple", function() { return createRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeLineX", function() { return placeLineX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeLineY", function() { return placeLineY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCounter", function() { return setCounter; });
function createRipple(event) {
  var button = event.currentTarget;
  var circle = document.createElement("span");
  var diameter = Math.max(button.clientWidth, button.clientHeight);
  var radius = diameter / 2;
  circle.style.width = circle.style.height = "".concat(diameter, "px");
  circle.style.left = "".concat(event.clientX - button.getBoundingClientRect().left - radius, "px");
  circle.style.top = "".concat(event.clientY - button.getBoundingClientRect().top - radius, "px");
  circle.classList.add("ripple");
  var ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

function placeLineX(el, attributes) {
  el.style.width = attributes.width;
  el.style.left = attributes.left;
}

function placeLineY(el, attributes) {
  el.style.height = attributes.height;
  el.style.top = attributes.top;
}

function counterValue(slider) {
  var info = slider.getInfo();
  return info.displayIndex + "/" + info.slideCount;
}

function setCounter(blockName, slider, sliderId) {
  var counter = counterValue(slider);
  document.querySelector('#' + sliderId + ' .' + blockName + '-slider-counter').innerHTML = counter;
  /*sliderName.events.on('indexChanged', () => {
    document.querySelector('.' + blockName + '-slider-counter').innerHTML = counter;
  })*/

  slider.events.on('transitionStart', function () {
    var counter = counterValue(slider); //console.log(document.querySelector('#' + sliderId + ' .' + blockName + '-slider-counter'), counter);

    document.querySelector('#' + sliderId + ' .' + blockName + '-slider-counter').innerHTML = counter;
  });
  /*document.querySelector('#' + sliderId + ' .slider__prev').onclick = function () {
    let counter = counterValue(slider);
    document.querySelector('#' + sliderId + ' .' + blockName + '-slider-counter').innerHTML = counter;
  }
  document.querySelector('#' + sliderId + ' .slider__next').onclick = function () {
    let counter = counterValue(slider);
    //counter = (counter.slice(0, 1) === 1) ? ("2/" + counter.slice(-1)) : counter;
    //console.log(counter.slice(0, 1));
    document.querySelector('#' + sliderId + ' .' + blockName + '-slider-counter').innerHTML = counter;
  }*/
}



/***/ }),

/***/ "./themes/parkhotel/src/js/import/modules.js":
/*!***************************************************!*\
  !*** ./themes/parkhotel/src/js/import/modules.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_404_404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/404/404 */ "./themes/parkhotel/src/blocks/modules/404/404.js");
/* harmony import */ var _modules_404_404__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_404_404__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/about/about */ "./themes/parkhotel/src/blocks/modules/about/about.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_about_about__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_about_gallery_about_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/about-gallery/about-gallery */ "./themes/parkhotel/src/blocks/modules/about-gallery/about-gallery.js");
/* harmony import */ var _modules_book_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/book/book */ "./themes/parkhotel/src/blocks/modules/book/book.js");
/* harmony import */ var _modules_book_book__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_book_book__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_conference_booking_conference_booking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/conference-booking/conference-booking */ "./themes/parkhotel/src/blocks/modules/conference-booking/conference-booking.js");
/* harmony import */ var _modules_conference_booking_conference_booking__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_conference_booking_conference_booking__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_conference_info_conference_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/conference-info/conference-info */ "./themes/parkhotel/src/blocks/modules/conference-info/conference-info.js");
/* harmony import */ var _modules_conference_info_conference_info__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_conference_info_conference_info__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./themes/parkhotel/src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_extra_services_extra_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/extra-services/extra-services */ "./themes/parkhotel/src/blocks/modules/extra-services/extra-services.js");
/* harmony import */ var _modules_extra_services_extra_services__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_extra_services_extra_services__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/features/features */ "./themes/parkhotel/src/blocks/modules/features/features.js");
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_features_features__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/footer/footer */ "./themes/parkhotel/src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./themes/parkhotel/src/blocks/modules/gallery/gallery.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/header/header */ "./themes/parkhotel/src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_header_form_header_form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/header-form/header-form */ "./themes/parkhotel/src/blocks/modules/header-form/header-form.js");
/* harmony import */ var _modules_header_form_header_form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_header_form_header_form__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_hotel_services_hotel_services__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/hotel-services/hotel-services */ "./themes/parkhotel/src/blocks/modules/hotel-services/hotel-services.js");
/* harmony import */ var _modules_hotel_services_hotel_services__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_hotel_services_hotel_services__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_index_gallery_index_gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/index-gallery/index-gallery */ "./themes/parkhotel/src/blocks/modules/index-gallery/index-gallery.js");
/* harmony import */ var _modules_offers_offers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/offers/offers */ "./themes/parkhotel/src/blocks/modules/offers/offers.js");
/* harmony import */ var _modules_opinion_opinion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/opinion/opinion */ "./themes/parkhotel/src/blocks/modules/opinion/opinion.js");
/* harmony import */ var _modules_opinion_opinion__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_opinion_opinion__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_other_rooms_other_rooms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/other-rooms/other-rooms */ "./themes/parkhotel/src/blocks/modules/other-rooms/other-rooms.js");
/* harmony import */ var _modules_restaurants_info_restaurants_info__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/restaurants-info/restaurants-info */ "./themes/parkhotel/src/blocks/modules/restaurants-info/restaurants-info.js");
/* harmony import */ var _modules_restaurants_info_restaurants_info__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_restaurants_info_restaurants_info__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_rest_conf_rest_conf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/rest-conf/rest-conf */ "./themes/parkhotel/src/blocks/modules/rest-conf/rest-conf.js");
/* harmony import */ var _modules_room_room__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/room/room */ "./themes/parkhotel/src/blocks/modules/room/room.js");
/* harmony import */ var _modules_rooms_rooms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/rooms/rooms */ "./themes/parkhotel/src/blocks/modules/rooms/rooms.js");
/* harmony import */ var _modules_service_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/service/service */ "./themes/parkhotel/src/blocks/modules/service/service.js");
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/services/services */ "./themes/parkhotel/src/blocks/modules/services/services.js");
/* harmony import */ var _modules_transfer_transfer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/transfer/transfer */ "./themes/parkhotel/src/blocks/modules/transfer/transfer.js");
/* harmony import */ var _modules_transfer_transfer__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_modules_transfer_transfer__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_transfer_price_transfer_price__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/transfer-price/transfer-price */ "./themes/parkhotel/src/blocks/modules/transfer-price/transfer-price.js");
/* harmony import */ var _modules_transfer_price_transfer_price__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_modules_transfer_price_transfer_price__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! %modules%/welcome/welcome */ "./themes/parkhotel/src/blocks/modules/welcome/welcome.js");
/* harmony import */ var _modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_26__);




























/***/ }),

/***/ "./themes/parkhotel/src/js/import/wow.min.js":
/*!***************************************************!*\
  !*** ./themes/parkhotel/src/js/import/wow.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
  var a,
      b,
      c,
      d,
      e,
      f = function f(a, b) {
    return function () {
      return a.apply(b, arguments);
    };
  },
      g = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  b = function () {
    function a() {}

    return a.prototype.extend = function (a, b) {
      var c, d;

      for (c in b) {
        d = b[c], null == a[c] && (a[c] = d);
      }

      return a;
    }, a.prototype.isMobile = function (a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
    }, a.prototype.createEvent = function (a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e;
    }, a.prototype.emitEvent = function (a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0;
    }, a.prototype.addEvent = function (a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c;
    }, a.prototype.removeEvent = function (a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b];
    }, a.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
    }, a;
  }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
    function a() {
      this.keys = [], this.values = [];
    }

    return a.prototype.get = function (a) {
      var b, c, d, e, f;

      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) {
        if (c = f[b], c === a) return this.values[b];
      }
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;

      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) {
        if (d = g[c], d === a) return void (this.values[c] = b);
      }

      return this.keys.push(a), this.values.push(b);
    }, a;
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.");
    }

    return a.notSupported = !0, a.prototype.observe = function () {}, a;
  }()), d = this.getComputedStyle || function (a) {
    return this.getPropertyValue = function (b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
        return b.toUpperCase();
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null;
    }, this;
  }, e = /(\-([a-z]){1})/g, this.WOW = function () {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c(), this.wowEvent = this.util().createEvent(this.config.boxClass);
    }

    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null
    }, e.prototype.init = function () {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [];
    }, e.prototype.start = function () {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function () {
        var a, c, d, e;

        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(b);
        }

        return e;
      }.call(this), this.all = function () {
        var a, c, d, e;

        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) {
          b = d[a], e.push(b);
        }

        return e;
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle();else for (e = this.boxes, c = 0, d = e.length; d > c; c++) {
        b = e[c], this.applyStyle(b, !0);
      }
      return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
        return function (b) {
          var c, d, e, f, g;

          for (g = [], c = 0, d = b.length; d > c; c++) {
            f = b[c], g.push(function () {
              var a, b, c, d;

              for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) {
                e = c[a], d.push(this.doSync(e));
              }

              return d;
            }.call(a));
          }

          return g;
        };
      }(this)).observe(document.body, {
        childList: !0,
        subtree: !0
      }) : void 0;
    }, e.prototype.stop = function () {
      return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0;
    }, e.prototype.sync = function () {
      return a.notSupported ? this.doSync(this.element) : void 0;
    }, e.prototype.doSync = function (a) {
      var b, c, d, e, f;

      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) {
          b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        }

        return f;
      }
    }, e.prototype.show = function (a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a;
    }, e.prototype.applyStyle = function (a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e);
        };
      }(this));
    }, e.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a);
      } : function (a) {
        return a();
      };
    }(), e.prototype.resetStyle = function () {
      var a, b, c, d, e;

      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
        a = d[b], e.push(a.style.visibility = "visible");
      }

      return e;
    }, e.prototype.resetAnimation = function (a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0;
    }, e.prototype.customStyle = function (a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
        animationDuration: c
      }), d && this.vendorSet(a.style, {
        animationDelay: d
      }), e && this.vendorSet(a.style, {
        animationIterationCount: e
      }), this.vendorSet(a.style, {
        animationName: b ? "none" : this.cachedAnimationName(a)
      }), a;
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
      var c, d, e, f;
      d = [];

      for (c in b) {
        e = b[c], a["" + c] = e, d.push(function () {
          var b, d, g, h;

          for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) {
            f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
          }

          return h;
        }.call(this));
      }

      return d;
    }, e.prototype.vendorCSS = function (a, b) {
      var c, e, f, g, h, i;

      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) {
        i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      }

      return g;
    }, e.prototype.animationName = function (a) {
      var b;

      try {
        b = this.vendorCSS(a, "animation-name").cssText;
      } catch (c) {
        b = d(a).getPropertyValue("animation-name");
      }

      return "none" === b ? "" : b;
    }, e.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a));
    }, e.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a);
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0;
    }, e.prototype.scrollCallback = function () {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
        var b, c, d, e;

        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) {
          a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        }

        return e;
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop();
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) {
        a = a.parentNode;
      }

      for (b = a.offsetTop; a = a.offsetParent;) {
        b += a.offsetTop;
      }

      return b;
    }, e.prototype.isVisible = function (a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f;
    }, e.prototype.util = function () {
      return null != this._util ? this._util : this._util = new b();
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent);
    }, e;
  }();
}).call(this);

/***/ }),

/***/ "./themes/parkhotel/src/js/index.js":
/*!******************************************!*\
  !*** ./themes/parkhotel/src/js/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./themes/parkhotel/src/js/import/modules.js");
/* harmony import */ var _import_wow_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/wow.min */ "./themes/parkhotel/src/js/import/wow.min.js");
/* harmony import */ var _import_wow_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_wow_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _import_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/functions */ "./themes/parkhotel/src/js/import/functions.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var buttons = document.getElementsByClassName("btn");

var _iterator = _createForOfIteratorHelper(buttons),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var button = _step.value;
    button.addEventListener("click", function (event) {
      event.preventDefault();
      setTimeout(function () {
        window.location = event.target.href ? event.target.href : event.target.parentElement.href;
      }, 500);
    });
    button.addEventListener("click", _import_functions__WEBPACK_IMPORTED_MODULE_2__["createRipple"]);
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

new _import_wow_min__WEBPACK_IMPORTED_MODULE_1__["WOW"]().init(); //WOW.sync();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map