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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/404/404.js":
/*!***************************************!*\
  !*** ./src/blocks/modules/404/404.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/about-gallery/about-gallery.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/about-gallery/about-gallery.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".about-gallery-slider")) {
  var gallery_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
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
    return item.addEventListener('click', function () {
      overlay.classList.toggle("overlay--active");
    });
  });
  document.querySelector('.mp-close').addEventListener('click', function () {
    overlay.classList.toggle("overlay--active");
  });
}

/***/ }),

/***/ "./src/blocks/modules/about/about.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/about/about.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/book/book.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/book/book.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/conference-booking/conference-booking.js":
/*!*********************************************************************!*\
  !*** ./src/blocks/modules/conference-booking/conference-booking.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/conference-info/conference-info.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/conference-info/conference-info.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/conference/conference.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/conference/conference.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".conference-slider--olimp")) {
  var conference_slider_olimp = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".conference-slider--olimp",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".conference-slider__prev--olimp",
    nextButton: ".conference-slider__next--olimp",
    controlsContainer: ".conference-slider-controls--olimp"
  });
}

if (document.querySelector(".conference-slider--iliada")) {
  var conference_slider_iliada = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".conference-slider--iliada",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".conference-slider__prev--iliada",
    nextButton: ".conference-slider__next--iliada",
    controlsContainer: ".conference-slider-controls--iliada"
  });
}

if (document.querySelector(".conference-slider--germes")) {
  var conference_slider_germes = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".conference-slider--germes",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".conference-slider__prev--germes",
    nextButton: ".conference-slider__next--germes",
    controlsContainer: ".conference-slider-controls--germes"
  });
}

var conference_slider_icon = document.querySelectorAll(".conference-slider__icon");
conference_slider_icon.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var parent = document.getElementById(icon.dataset.parent);
    var prev_icon = parent.querySelector(".conference-slider__icon--active");
    var conference_slider_item = parent.querySelector(".conference-slider");
    var conference_slider_row = parent.querySelector(".conference-slider-row");
    parent.querySelector(".conference-slider-controls").classList.toggle("conference-slider-controls--module");

    if (conference_slider_item) {
      conference_slider_item.classList.remove("conference-slider");
      conference_slider_item.classList.add("conference-slider-row");
    } else if (conference_slider_row) {
      conference_slider_row.classList.remove("conference-slider-row");
      conference_slider_row.classList.add("conference-slider");
    }

    icon.classList.toggle("conference-slider__icon--active");
    prev_icon.classList.toggle("conference-slider__icon--active");
  });
});
var conference_list_items = document.querySelectorAll(".conference-list__item");
conference_list_items.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_item = document.querySelector(".conference-preview-list__item--active");
    var prev_link = document.querySelector(".conference-list__item--active");
    var item = document.querySelector(link.getAttribute("href"));
    item.classList.toggle("conference-preview-list__item--active");
    prev_item.classList.toggle("conference-preview-list__item--active");
    prev_link.classList.toggle("conference-list__item--active");
    link.classList.toggle("conference-list__item--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/contacts/contacts.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/contacts/contacts.js ***!
  \*************************************************/
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

/***/ "./src/blocks/modules/extra-services/extra-services.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/extra-services/extra-services.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/features/features.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/features/features.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/fitness-price/fitness-price.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/fitness-price/fitness-price.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var fitness_price_list_items = document.querySelectorAll(".fitness-price-list__item");
fitness_price_list_items.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_item = document.querySelector(".fitness-price-preview-list__item--active");
    var prev_link = document.querySelector(".fitness-price-list__item--active");
    var item = document.querySelector(link.getAttribute("href"));
    item.classList.toggle("fitness-price-preview-list__item--active");
    prev_item.classList.toggle("fitness-price-preview-list__item--active");
    prev_link.classList.toggle("fitness-price-list__item--active");
    link.classList.toggle("fitness-price-list__item--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/fitness/fitness.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/fitness/fitness.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".fitness-gallery-slider")) {
  var fitness_gallery_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".fitness-gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".fitness-gallery-slider__prev",
    nextButton: ".fitness-gallery-slider__next",
    controlsContainer: ".fitness-gallery-slider-controls"
  });
}

var fitness_gallery_slider_icon = document.querySelectorAll(".fitness-gallery-slider__icon");
fitness_gallery_slider_icon.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_icon = document.querySelector(".fitness-gallery-slider__icon--active");
    var fitness_gallery_slider_item = document.querySelector(".fitness-gallery-slider");
    var fitness_gallery_slider_row = document.querySelector(".fitness-gallery-slider-row");
    document.querySelector(".fitness-gallery-slider-controls").classList.toggle("fitness-gallery-slider-controls--module");

    if (fitness_gallery_slider_item) {
      fitness_gallery_slider_item.classList.remove("fitness-gallery-slider");
      fitness_gallery_slider_item.classList.add("fitness-gallery-slider-row");
    } else if (fitness_gallery_slider_row) {
      fitness_gallery_slider_row.classList.remove("fitness-gallery-slider-row");
      fitness_gallery_slider_row.classList.add("fitness-gallery-slider");
    }

    icon.classList.toggle("fitness-gallery-slider__icon--active");
    prev_icon.classList.toggle("fitness-gallery-slider__icon--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
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

/***/ "./src/blocks/modules/gallery/gallery.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/gallery/gallery.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".gallery-slider")) {
  var gallery_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".gallery-slider__prev",
    nextButton: ".gallery-slider__next",
    controlsContainer: ".gallery-slider-controls"
  });
}

var gallery_slider_icon = document.querySelectorAll(".gallery-slider__icon");
gallery_slider_icon.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_icon = document.querySelector(".gallery-slider__icon--active");
    var gallery_slider_item = document.querySelector(".gallery-slider");
    var gallery_slider_row = document.querySelector(".gallery-slider-row");
    document.querySelector(".gallery-slider-controls").classList.toggle("gallery-slider-controls--module");

    if (gallery_slider_item) {
      gallery_slider_item.classList.remove("gallery-slider");
      gallery_slider_item.classList.add("gallery-slider-row"); //console.log(gallery_slider_item.classList); 
      //gallery_slider.destroy();
    } else if (gallery_slider_row) {
      gallery_slider_row.classList.remove("gallery-slider-row");
      gallery_slider_row.classList.add("gallery-slider"); //gallery_slider.rebuild();
    }

    icon.classList.toggle("gallery-slider__icon--active");
    prev_icon.classList.toggle("gallery-slider__icon--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/header-form/header-form.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/header-form/header-form.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var header_submenu_icon = document.querySelector(".header-nav-list__item--menu"); //let header_submenu = document.querySelectorAll(".header-subnav-container");

header_submenu_icon.addEventListener("click", function () {
  header_submenu_icon.classList.toggle("header-nav-list__item--active-menu"); //prev_icon.classList.toggle("header-subnav-container-active");
});
/*window.addEventListener('scroll',() => {
  if (this.oldScroll > this.scrollY) {
    console.log('scroll');
    document.querySelector(".header").classList.toggle("header--hidden");
  }
  this.oldScroll = this.scrollY;
});*/

var lastPos = 0;
window.addEventListener('scroll', function () {
  if (window.pageYOffset < lastPos) {
    document.querySelector(".main").classList.add("main--top");
    document.querySelector(".header").classList.remove("header--hidden");
    document.querySelector(".header").classList.add("header--small");
    document.querySelector(".header-form").classList.add("header-form--hidden");
  } else {
    document.querySelector(".main").classList.add("main--top");
    document.querySelector(".header-form").classList.remove("header-form--hidden");
    document.querySelector(".header").classList.add("header--hidden");
  }

  if (window.pageYOffset == 0) {
    document.querySelector(".header").classList.remove("header--small");
    document.querySelector(".main").classList.remove("main--top");
  }

  lastPos = window.pageYOffset;
});
var header_nav_icon = document.querySelector('.header-nav-icon');
var header_row = document.querySelector('.header-row');
header_nav_icon.addEventListener('click', function (event) {
  header_nav_icon.classList.toggle("header-nav-icon--close");
  header_row.classList.toggle("header-row--mobile");
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

/***/ "./src/blocks/modules/hotel-services/hotel-services.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/hotel-services/hotel-services.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/offers/offers.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/offers/offers.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".offers-slider")) {
  var offers_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".offers-slider",
    items: 3.8,
    slideBy: 1,
    gutter: 150,
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".offers-slider__prev",
    nextButton: ".offers-slider__next",
    controlsContainer: ".offers-slider-controls",
    769: {
      items: 3.8,
      gutter: 150
    },
    600: {
      items: 2,
      gutter: 35,
      slideBy: "page"
    },
    320: {
      items: 1,
      gutter: 35,
      slideBy: .5
    }
  });
}

/***/ }),

/***/ "./src/blocks/modules/opinion/opinion.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/opinion/opinion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/other-rooms/other-rooms.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/other-rooms/other-rooms.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".other-rooms-preview-slider")) {
  var slider_standard1 = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--standard1",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--standard1",
    nextButton: ".other-rooms-preview-slider__next--standard1",
    controlsContainer: ".other-rooms-preview-slider-controls--standard1"
  });
  var slider_standard2 = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--standard2",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--standard2",
    nextButton: ".other-rooms-preview-slider__next--standard2",
    controlsContainer: ".other-rooms-preview-slider-controls--standard2"
  });
  var slider_business_standard = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--business_standard",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--business_standard",
    nextButton: ".other-rooms-preview-slider__next--business_standard",
    controlsContainer: ".other-rooms-preview-slider-controls--business_standard"
  });
  var slider_junior_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--junior_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--junior_suite",
    nextButton: ".other-rooms-preview-slider__next--junior_suite",
    controlsContainer: ".other-rooms-preview-slider-controls--junior_suite"
  });
  var slider_family_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--family_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--family_suite",
    nextButton: ".other-rooms-preview-slider__next--family_suite",
    controlsContainer: ".other-rooms-preview-slider-controls--family_suite"
  });
  var slider_vip_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--vip_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--vip_suite",
    nextButton: ".other-rooms-preview-slider__next--vip_suite",
    controlsContainer: ".other-rooms-preview-slider-controls--vip_suite"
  });
  var slider_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".other-rooms-preview-slider__item--suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".other-rooms-preview-slider__prev--suite",
    nextButton: ".other-rooms-preview-slider__next--suite",
    controlsContainer: ".other-rooms-preview-slider-controls--suite"
  });
}

var other_rooms_list = document.querySelectorAll(".other-rooms-list__item");
other_rooms_list.forEach(function (link) {
  link.addEventListener("click", function (event) {
    if (document.documentElement.clientWidth > 768) {
      event.preventDefault();
    }

    var prev_room = document.querySelector(".other-rooms-preview-list__item--active");
    var prev_link = document.querySelector(".other-rooms-list__item--active");
    var room = document.querySelector(link.getAttribute("href"));
    room.classList.toggle("other-rooms-preview-list__item--active");
    prev_room.classList.toggle("other-rooms-preview-list__item--active");
    prev_link.classList.toggle("other-rooms-list__item--active");
    link.classList.toggle("other-rooms-list__item--active");
  });
});
var other_rooms_detail = document.querySelectorAll('.other-rooms-preview-info-detail');
other_rooms_detail.forEach(function (el) {
  return el.addEventListener('click', function (event) {
    el.classList.toggle("other-rooms-preview-info-detail--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/restaurants-info/restaurants-info.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/restaurants-info/restaurants-info.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/restaurants/restaurants.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/restaurants/restaurants.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".restaurants-slider--paradise")) {
  var restaurants_slider_paradise = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".restaurants-slider--paradise",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".restaurants-slider__prev--paradise",
    nextButton: ".restaurants-slider__next--paradise",
    controlsContainer: ".restaurants-slider-controls--paradise"
  });
}

if (document.querySelector(".restaurants-slider--prado")) {
  var restaurants_slider_prado = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".restaurants-slider--prado",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".restaurants-slider__prev--prado",
    nextButton: ".restaurants-slider__next--prado",
    controlsContainer: ".restaurants-slider-controls--prado"
  });
}

if (document.querySelector(".restaurants-slider--ingreco")) {
  var restaurants_slider_ingreco = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".restaurants-slider--ingreco",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".restaurants-slider__prev--ingreco",
    nextButton: ".restaurants-slider__next--ingreco",
    controlsContainer: ".restaurants-slider-controls--ingreco"
  });
}

if (document.querySelector(".restaurants-slider--weddings")) {
  var restaurants_slider_weddings = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".restaurants-slider--weddings",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".restaurants-slider__prev--weddings",
    nextButton: ".restaurants-slider__next--weddings",
    controlsContainer: ".restaurants-slider-controls--weddings"
  });
}

var restaurants_slider_icon = document.querySelectorAll(".restaurants-slider__icon");
restaurants_slider_icon.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var parent = document.getElementById(icon.dataset.parent);
    var prev_icon = parent.querySelector(".restaurants-slider__icon--active");
    var restaurants_slider_item = parent.querySelector(".restaurants-slider");
    var restaurants_slider_row = parent.querySelector(".restaurants-slider-row");
    parent.querySelector(".restaurants-slider-controls").classList.toggle("restaurants-slider-controls--module");

    if (restaurants_slider_item) {
      restaurants_slider_item.classList.remove("restaurants-slider");
      restaurants_slider_item.classList.add("restaurants-slider-row");
    } else if (restaurants_slider_row) {
      restaurants_slider_row.classList.remove("restaurants-slider-row");
      restaurants_slider_row.classList.add("restaurants-slider");
    }

    icon.classList.toggle("restaurants-slider__icon--active");
    prev_icon.classList.toggle("restaurants-slider__icon--active");
  });
});
var restaurants_list_items = document.querySelectorAll(".restaurants-list__item");
restaurants_list_items.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_item = document.querySelector(".restaurants-preview-list__item--active");
    var prev_link = document.querySelector(".restaurants-list__item--active");
    var item = document.querySelector(link.getAttribute("href"));
    item.classList.toggle("restaurants-preview-list__item--active");
    prev_item.classList.toggle("restaurants-preview-list__item--active");
    prev_link.classList.toggle("restaurants-list__item--active");
    link.classList.toggle("restaurants-list__item--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/room-bottom/room-bottom.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/room-bottom/room-bottom.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/room/room.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/room/room.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".room-slider")) {
  var room_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".room-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    prevButton: ".room-slider__prev",
    nextButton: ".room-slider__next",
    controlsContainer: ".room-slider-controls"
  });
}

var room_titles = document.querySelectorAll(".room-info__title");
room_titles.forEach(function (link) {
  link.addEventListener("click", function (event) {
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
      el.classList.toggle("room-info-preview__title--shown");
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/rooms/rooms.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/rooms/rooms.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".rooms-preview-slider")) {
  var slider_standard1 = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--standard1",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--standard1",
    nextButton: ".rooms-preview-slider__next--standard1",
    controlsContainer: ".rooms-preview-slider-controls--standard1"
  });
  var slider_standard2 = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--standard2",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--standard2",
    nextButton: ".rooms-preview-slider__next--standard2",
    controlsContainer: ".rooms-preview-slider-controls--standard2"
  });
  var slider_business_standard = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--business_standard",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--business_standard",
    nextButton: ".rooms-preview-slider__next--business_standard",
    controlsContainer: ".rooms-preview-slider-controls--business_standard"
  });
  var slider_junior_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--junior_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--junior_suite",
    nextButton: ".rooms-preview-slider__next--junior_suite",
    controlsContainer: ".rooms-preview-slider-controls--junior_suite"
  });
  var slider_family_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--family_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--family_suite",
    nextButton: ".rooms-preview-slider__next--family_suite",
    controlsContainer: ".rooms-preview-slider-controls--family_suite"
  });
  var slider_vip_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--vip_suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--vip_suite",
    nextButton: ".rooms-preview-slider__next--vip_suite",
    controlsContainer: ".rooms-preview-slider-controls--vip_suite"
  });
  var slider_suite = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".rooms-preview-slider__item--suite",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".rooms-preview-slider__prev--suite",
    nextButton: ".rooms-preview-slider__next--suite",
    controlsContainer: ".rooms-preview-slider-controls--suite"
  });
}

var rooms_list_items = document.querySelectorAll(".rooms-list__item");
rooms_list_items.forEach(function (link) {
  link.addEventListener("click", function (event) {
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
});
var rooms_detail = document.querySelectorAll('.rooms-preview-info-detail');
rooms_detail.forEach(function (el) {
  return el.addEventListener('click', function (event) {
    el.classList.toggle("rooms-preview-info-detail--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/salon-price/salon-price.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/salon-price/salon-price.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var salon_price_list_items = document.querySelectorAll(".salon-price-list__item");
salon_price_list_items.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_item = document.querySelector(".salon-price-preview-list__item--active");
    var prev_link = document.querySelector(".salon-price-list__item--active");
    var item = document.querySelector(link.getAttribute("href"));
    item.classList.toggle("salon-price-preview-list__item--active");
    prev_item.classList.toggle("salon-price-preview-list__item--active");
    prev_link.classList.toggle("salon-price-list__item--active");
    link.classList.toggle("salon-price-list__item--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/salon/salon.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/salon/salon.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".salon-gallery-slider")) {
  var salon_gallery_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".salon-gallery-slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    touch: true,
    mouseDrag: true,
    //destroy: destroy(),
    prevButton: ".salon-gallery-slider__prev",
    nextButton: ".salon-gallery-slider__next",
    controlsContainer: ".salon-gallery-slider-controls"
  });
}

var salon_gallery_slider_icon = document.querySelectorAll(".salon-gallery-slider__icon");
salon_gallery_slider_icon.forEach(function (icon) {
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    var prev_icon = document.querySelector(".salon-gallery-slider__icon--active");
    var salon_gallery_slider_item = document.querySelector(".salon-gallery-slider");
    var salon_gallery_slider_row = document.querySelector(".salon-gallery-slider-row");
    document.querySelector(".salon-gallery-slider-controls").classList.toggle("salon-gallery-slider-controls--module");

    if (salon_gallery_slider_item) {
      salon_gallery_slider_item.classList.remove("salon-gallery-slider");
      salon_gallery_slider_item.classList.add("salon-gallery-slider-row");
    } else if (salon_gallery_slider_row) {
      salon_gallery_slider_row.classList.remove("salon-gallery-slider-row");
      salon_gallery_slider_row.classList.add("salon-gallery-slider");
    }

    icon.classList.toggle("salon-gallery-slider__icon--active");
    prev_icon.classList.toggle("salon-gallery-slider__icon--active");
  });
});

/***/ }),

/***/ "./src/blocks/modules/services/services.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/services/services.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
 //import { tns } from "tiny-slider";



if (document.querySelector(".services-preview-slider")) {
  var restaurant_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".services-preview-slider__item--restaurant",
    items: 1.9,
    slideBy: 1,
    autoplay: true,
    touch: true,
    gutter: 50,
    mouseDrag: true,
    prevButton: ".services-preview-slider__prev--restaurant",
    nextButton: ".services-preview-slider__next--restaurant",
    controlsContainer: ".services-preview-slider-controls--restaurant",
    responsive: {
      769: {
        items: 1.9,
        gutter: 50
      },
      320: {
        items: 1,
        gutter: 0,
        slideBy: "page"
      }
    }
  });
  var conference_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".services-preview-slider__item--conference",
    items: 1.9,
    slideBy: 1,
    autoplay: true,
    touch: true,
    gutter: 50,
    mouseDrag: true,
    prevButton: ".services-preview-slider__prev--conference",
    nextButton: ".services-preview-slider__next--conference",
    controlsContainer: ".services-preview-slider-controls--conference",
    responsive: {
      769: {
        items: 1.9,
        gutter: 50
      },
      320: {
        items: 1,
        gutter: 0,
        slideBy: "page"
      }
    }
  });
  var fitness_slider = Object(_node_modules_tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_0__["tns"])({
    container: ".services-preview-slider__item--fitness",
    items: 1.9,
    slideBy: 1,
    autoplay: true,
    touch: true,
    gutter: 50,
    mouseDrag: true,
    prevButton: ".services-preview-slider__prev--fitness",
    nextButton: ".services-preview-slider__next--fitness",
    controlsContainer: ".services-preview-slider-controls--fitness",
    responsive: {
      769: {
        items: 1.9,
        gutter: 50
      },
      320: {
        items: 1,
        gutter: 0,
        slideBy: "page"
      }
    }
  });
}

var services_list_items = document.querySelectorAll(".services-list__item");
services_list_items.forEach(function (link) {
  link.addEventListener("click", function (event) {
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

/***/ }),

/***/ "./src/blocks/modules/transfer-price/transfer-price.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/transfer-price/transfer-price.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/transfer/transfer.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/transfer/transfer.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/welcome/welcome.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/welcome/welcome.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (document.querySelector('.welcome-down')) {
  document.querySelector('.welcome-down').addEventListener('click', function () {
    window.scrollBy({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  });
}

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_404_404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/404/404 */ "./src/blocks/modules/404/404.js");
/* harmony import */ var _modules_404_404__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_404_404__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/about/about */ "./src/blocks/modules/about/about.js");
/* harmony import */ var _modules_about_about__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_about_about__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_about_gallery_about_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/about-gallery/about-gallery */ "./src/blocks/modules/about-gallery/about-gallery.js");
/* harmony import */ var _modules_book_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/book/book */ "./src/blocks/modules/book/book.js");
/* harmony import */ var _modules_book_book__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_book_book__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_conference_conference__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/conference/conference */ "./src/blocks/modules/conference/conference.js");
/* harmony import */ var _modules_conference_booking_conference_booking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/conference-booking/conference-booking */ "./src/blocks/modules/conference-booking/conference-booking.js");
/* harmony import */ var _modules_conference_booking_conference_booking__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_conference_booking_conference_booking__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_conference_info_conference_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/conference-info/conference-info */ "./src/blocks/modules/conference-info/conference-info.js");
/* harmony import */ var _modules_conference_info_conference_info__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_conference_info_conference_info__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/contacts/contacts */ "./src/blocks/modules/contacts/contacts.js");
/* harmony import */ var _modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_contacts_contacts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_extra_services_extra_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/extra-services/extra-services */ "./src/blocks/modules/extra-services/extra-services.js");
/* harmony import */ var _modules_extra_services_extra_services__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_extra_services_extra_services__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/features/features */ "./src/blocks/modules/features/features.js");
/* harmony import */ var _modules_features_features__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_features_features__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_fitness_fitness__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/fitness/fitness */ "./src/blocks/modules/fitness/fitness.js");
/* harmony import */ var _modules_fitness_price_fitness_price__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/fitness-price/fitness-price */ "./src/blocks/modules/fitness-price/fitness-price.js");
/* harmony import */ var _modules_fitness_price_fitness_price__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_fitness_price_fitness_price__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_gallery_gallery__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/gallery/gallery */ "./src/blocks/modules/gallery/gallery.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _modules_header_form_header_form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/header-form/header-form */ "./src/blocks/modules/header-form/header-form.js");
/* harmony import */ var _modules_header_form_header_form__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_header_form_header_form__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_hotel_services_hotel_services__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/hotel-services/hotel-services */ "./src/blocks/modules/hotel-services/hotel-services.js");
/* harmony import */ var _modules_hotel_services_hotel_services__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_hotel_services_hotel_services__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_offers_offers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/offers/offers */ "./src/blocks/modules/offers/offers.js");
/* harmony import */ var _modules_opinion_opinion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/opinion/opinion */ "./src/blocks/modules/opinion/opinion.js");
/* harmony import */ var _modules_opinion_opinion__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_opinion_opinion__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_other_rooms_other_rooms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/other-rooms/other-rooms */ "./src/blocks/modules/other-rooms/other-rooms.js");
/* harmony import */ var _modules_restaurants_restaurants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/restaurants/restaurants */ "./src/blocks/modules/restaurants/restaurants.js");
/* harmony import */ var _modules_restaurants_info_restaurants_info__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/restaurants-info/restaurants-info */ "./src/blocks/modules/restaurants-info/restaurants-info.js");
/* harmony import */ var _modules_restaurants_info_restaurants_info__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_restaurants_info_restaurants_info__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _modules_room_room__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/room/room */ "./src/blocks/modules/room/room.js");
/* harmony import */ var _modules_rooms_rooms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/rooms/rooms */ "./src/blocks/modules/rooms/rooms.js");
/* harmony import */ var _modules_room_bottom_room_bottom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/room-bottom/room-bottom */ "./src/blocks/modules/room-bottom/room-bottom.js");
/* harmony import */ var _modules_room_bottom_room_bottom__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_modules_room_bottom_room_bottom__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _modules_salon_salon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/salon/salon */ "./src/blocks/modules/salon/salon.js");
/* harmony import */ var _modules_salon_price_salon_price__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! %modules%/salon-price/salon-price */ "./src/blocks/modules/salon-price/salon-price.js");
/* harmony import */ var _modules_salon_price_salon_price__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_modules_salon_price_salon_price__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _modules_services_services__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! %modules%/services/services */ "./src/blocks/modules/services/services.js");
/* harmony import */ var _modules_transfer_transfer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! %modules%/transfer/transfer */ "./src/blocks/modules/transfer/transfer.js");
/* harmony import */ var _modules_transfer_transfer__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_modules_transfer_transfer__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _modules_transfer_price_transfer_price__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! %modules%/transfer-price/transfer-price */ "./src/blocks/modules/transfer-price/transfer-price.js");
/* harmony import */ var _modules_transfer_price_transfer_price__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_modules_transfer_price_transfer_price__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! %modules%/welcome/welcome */ "./src/blocks/modules/welcome/welcome.js");
/* harmony import */ var _modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_modules_welcome_welcome__WEBPACK_IMPORTED_MODULE_30__);
































/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map