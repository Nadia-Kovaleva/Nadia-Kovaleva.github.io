(self["webpackChunkabsgroup_loc"] = self["webpackChunkabsgroup_loc"] || []).push([["/js/main"],{

/***/ "./themes/absgroup/src/js/import/modules.js":
/*!**************************************************!*\
  !*** ./themes/absgroup/src/js/import/modules.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_blocks_parts_parts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../partials/blocks/parts/parts */ "./themes/absgroup/src/partials/blocks/parts/parts.js");
/* harmony import */ var _partials_blocks_parts_parts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_partials_blocks_parts_parts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _partials_blocks_vacancies_preview_vacancies_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../partials/blocks/vacancies-preview/vacancies-preview */ "./themes/absgroup/src/partials/blocks/vacancies-preview/vacancies-preview.js");
/* harmony import */ var _partials_blocks_vacancies_preview_vacancies_preview__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_blocks_vacancies_preview_vacancies_preview__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_common_footer_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/common/footer/footer */ "./themes/absgroup/src/partials/common/footer/footer.js");
/* harmony import */ var _partials_common_footer_footer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_partials_common_footer_footer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _partials_common_header_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../partials/common/header/header */ "./themes/absgroup/src/partials/common/header/header.js");
/* harmony import */ var _partials_common_header_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_partials_common_header_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _partials_common_popups_popups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../partials/common/popups/popups */ "./themes/absgroup/src/partials/common/popups/popups.js");
/* harmony import */ var _partials_common_popups_popups__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_partials_common_popups_popups__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _partials_company_history_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../partials/company/history/history */ "./themes/absgroup/src/partials/company/history/history.js");
/* harmony import */ var _partials_company_history_history__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_partials_company_history_history__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _partials_contacts_contacts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../partials/contacts/contacts */ "./themes/absgroup/src/partials/contacts/contacts.js");
/* harmony import */ var _partials_contacts_contacts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_partials_contacts_contacts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _partials_index_welcome_welcome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../partials/index/welcome/welcome */ "./themes/absgroup/src/partials/index/welcome/welcome.js");
/* harmony import */ var _partials_index_welcome_welcome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_partials_index_welcome_welcome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _partials_vacancies_vacancies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../partials/vacancies/vacancies */ "./themes/absgroup/src/partials/vacancies/vacancies.js");
/* harmony import */ var _partials_vacancies_vacancies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_partials_vacancies_vacancies__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./themes/absgroup/src/js/import/wow.min.js":
/*!**************************************************!*\
  !*** ./themes/absgroup/src/js/import/wow.min.js ***!
  \**************************************************/
/***/ (function() {

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

/***/ "./themes/absgroup/src/js/main.js":
/*!****************************************!*\
  !*** ./themes/absgroup/src/js/main.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_slider_src_tiny_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-slider/src/tiny-slider */ "./node_modules/tiny-slider/src/tiny-slider.js");
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import/modules */ "./themes/absgroup/src/js/import/modules.js");
/* harmony import */ var _import_wow_min__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./import/wow.min */ "./themes/absgroup/src/js/import/wow.min.js");
/* harmony import */ var _import_wow_min__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_import_wow_min__WEBPACK_IMPORTED_MODULE_3__);

__webpack_require__.g.$ = __webpack_require__.g.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
 //import { Datepicker } from 'jquery-ui/ui/widgets/datepicker'



new _import_wow_min__WEBPACK_IMPORTED_MODULE_3__.WOW().init(); //WOW.sync();

/***/ }),

/***/ "./themes/absgroup/src/partials/blocks/parts/parts.js":
/*!************************************************************!*\
  !*** ./themes/absgroup/src/partials/blocks/parts/parts.js ***!
  \************************************************************/
/***/ (() => {



/***/ }),

/***/ "./themes/absgroup/src/partials/blocks/vacancies-preview/vacancies-preview.js":
/*!************************************************************************************!*\
  !*** ./themes/absgroup/src/partials/blocks/vacancies-preview/vacancies-preview.js ***!
  \************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "./themes/absgroup/src/partials/common/footer/footer.js":
/*!**************************************************************!*\
  !*** ./themes/absgroup/src/partials/common/footer/footer.js ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "./themes/absgroup/src/partials/common/header/header.js":
/*!**************************************************************!*\
  !*** ./themes/absgroup/src/partials/common/header/header.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var lastPos = 0;
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    if ($(window).scrollTop() < lastPos) {
      //$('.header').removeClass('header--hidden');
      $('.header').addClass('header--show');
    } else {
      $('.header').removeClass('header--show'); //$('.header').addClass('header--hidden');
    }

    lastPos = $(window).scrollTop();
  }
});

/***/ }),

/***/ "./themes/absgroup/src/partials/common/popups/popups.js":
/*!**************************************************************!*\
  !*** ./themes/absgroup/src/partials/common/popups/popups.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var links = $(".mp__link");
links.click(function (event) {
  $($(this).attr("href"))[0].style.display = "block";
  $("html").toggleClass("html--unscroll");
});

window.onclick = function (event) {
  if ($(event.target).hasClass("mp")) {
    $(event.target).css("display", "none");
    $("html").toggleClass("html--unscroll");
  }
};

/***/ }),

/***/ "./themes/absgroup/src/partials/company/history/history.js":
/*!*****************************************************************!*\
  !*** ./themes/absgroup/src/partials/company/history/history.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
if ($(".history-list__item").length != 0) {
  $(".history-list__item").click(function (event) {
    event.preventDefault();
    $(".history-preview-list__item--active").toggleClass("history-preview-list__item--active");
    $($(this).attr("href")).toggleClass("history-preview-list__item--active");
    $(".history-list__item--active").toggleClass("history-list__item--active");
    $(this).toggleClass("history-list__item--active");
  });
}

/***/ }),

/***/ "./themes/absgroup/src/partials/contacts/contacts.js":
/*!***********************************************************!*\
  !*** ./themes/absgroup/src/partials/contacts/contacts.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
//import { Modernizr } from '../../../../../node_modules/modernizr/src/Modernizr';
if ($('#contacts-animation').length != 0) {
  var windowLoadHandler = function windowLoadHandler() {
    canvasApp();
  };
  /*function canvasSupport() {
      return Modernizr.canvas;
  }*/


  var canvasApp = function canvasApp() {
    /*if (!canvasSupport()) {
        return;
    }*/
    var theCanvas = document.getElementById("contacts-animation");
    var context = theCanvas.getContext("2d");
    var displayWidth;
    var displayHeight;
    var timer;
    var wait;
    var count;
    var numToAddEachFrame;
    var particleList;
    var recycleBin;
    var particleAlpha;
    var r, g, b;
    var fLen;
    var m;
    var projCenterX;
    var projCenterY;
    var zMax;
    var turnAngle;
    var turnSpeed;
    var sphereCenterX, sphereCenterY, sphereCenterZ;
    var particleRad;
    var zeroAlphaDepth;
    var randAccelX, randAccelY, randAccelZ;
    var gravity;
    var rgbString; //we are defining a lot of variables used in the screen update functions globally so that they don't have to be redefined every frame.

    var p;
    var outsideTest;
    var nextParticle;
    var sinAngle;
    var cosAngle;
    var rotX, rotZ;
    var depthAlphaFactor;
    var i;
    var theta, phi;
    var x0, y0, z0;
    init();

    function init() {
      wait = 1;
      count = wait - 1;
      numToAddEachFrame = 8; //particle color

      r = 20;
      g = 189;
      b = 184;
      rgbString = "rgba(" + r + "," + g + "," + b + ","; //partial string for color which will be completed by appending alpha value.

      particleAlpha = 1; //maximum alpha

      displayWidth = theCanvas.width;
      displayHeight = theCanvas.height;
      fLen = 320; //represents the distance from the viewer to z=0 depth.
      //projection center coordinates sets location of origin

      projCenterX = displayWidth / 2;
      projCenterY = displayHeight / 2; //we will not draw coordinates if they have too large of a z-coordinate (which means they are very close to the observer).

      zMax = fLen - 2;
      particleList = {};
      recycleBin = {}; //random acceleration factors - causes some random motion

      randAccelX = 0.1;
      randAccelY = 0.1;
      randAccelZ = 0.1;
      gravity = -0; //try changing to a positive number (not too large, for example 0.3), or negative for floating upwards.

      particleRad = 2.5;
      sphereCenterX = 0;
      sphereCenterY = 0;
      sphereCenterZ = -3 - sphereRad; //alpha values will lessen as particles move further back, causing depth-based darkening:

      zeroAlphaDepth = -750;
      turnSpeed = 2 * Math.PI / 1200; //the sphere will rotate at this speed (one complete rotation every 1600 frames).

      turnAngle = 0; //initial angle

      timer = setInterval(onTimer, 10 / 24);
    }

    function onTimer() {
      //if enough time has elapsed, we will add new particles.
      count++;

      if (count >= wait) {
        count = 0;

        for (i = 0; i < numToAddEachFrame; i++) {
          theta = Math.random() * 2 * Math.PI;
          phi = Math.acos(Math.random() * 2 - 1);
          x0 = sphereRad * Math.sin(phi) * Math.cos(theta);
          y0 = sphereRad * Math.sin(phi) * Math.sin(theta);
          z0 = sphereRad * Math.cos(phi); //We use the addParticle function to add a new particle. The parameters set the position and velocity components.
          //Note that the velocity parameters will cause the particle to initially fly outwards away from the sphere center (after
          //it becomes unstuck).

          var p = addParticle(x0, sphereCenterY + y0, sphereCenterZ + z0, 0.002 * x0, 0.002 * y0, 0.002 * z0); //we set some "envelope" parameters which will control the evolving alpha of the particles.

          p.attack = 50;
          p.hold = 50;
          p.decay = 100;
          p.initValue = 0;
          p.holdValue = particleAlpha;
          p.lastValue = 0; //the particle will be stuck in one place until this time has elapsed:

          p.stuckTime = 90 + Math.random() * 20;
          p.accelX = 0;
          p.accelY = gravity;
          p.accelZ = 0;
        }
      } //update viewing angle


      turnAngle = (turnAngle + turnSpeed) % (2 * Math.PI);
      sinAngle = Math.sin(turnAngle);
      cosAngle = Math.cos(turnAngle); //background fill

      context.fillStyle = "#fff";
      context.fillRect(0, 0, displayWidth, displayHeight); //update and draw particles

      p = particleList.first;

      while (p != null) {
        //before list is altered record next particle
        nextParticle = p.next; //update age

        p.age++; //if the particle is past its "stuck" time, it will begin to move.

        if (p.age > p.stuckTime) {
          p.velX += p.accelX + randAccelX * (Math.random() * 2 - 1);
          p.velY += p.accelY + randAccelY * (Math.random() * 2 - 1);
          p.velZ += p.accelZ + randAccelZ * (Math.random() * 2 - 1);
          p.x += p.velX;
          p.y += p.velY;
          p.z += p.velZ;
        }
        /*
        We are doing two things here to calculate display coordinates.
        The whole display is being rotated around a vertical axis, so we first calculate rotated coordinates for
        x and z (but the y coordinate will not change).
        Then, we take the new coordinates (rotX, y, rotZ), and project these onto the 2D view plane.
        */


        rotX = cosAngle * p.x + sinAngle * (p.z - sphereCenterZ);
        rotZ = -sinAngle * p.x + cosAngle * (p.z - sphereCenterZ) + sphereCenterZ;
        m = radius_sp * fLen / (fLen - rotZ);
        p.projX = rotX * m + projCenterX;
        p.projY = p.y * m + projCenterY; //update alpha according to envelope parameters.

        if (p.age < p.attack + p.hold + p.decay) {
          if (p.age < p.attack) {
            p.alpha = (p.holdValue - p.initValue) / p.attack * p.age + p.initValue;
          } else if (p.age < p.attack + p.hold) {
            p.alpha = p.holdValue;
          } else if (p.age < p.attack + p.hold + p.decay) {
            p.alpha = (p.lastValue - p.holdValue) / p.decay * (p.age - p.attack - p.hold) + p.holdValue;
          }
        } else {
          p.dead = true;
        } //see if the particle is still within the viewable range.


        if (p.projX > displayWidth || p.projX < 0 || p.projY < 0 || p.projY > displayHeight || rotZ > zMax) {
          outsideTest = true;
        } else {
          outsideTest = false;
        }

        if (outsideTest || p.dead) {
          recycle(p);
        } else {
          //depth-dependent darkening
          depthAlphaFactor = 1 - rotZ / zeroAlphaDepth;
          depthAlphaFactor = depthAlphaFactor > 1 ? 1 : depthAlphaFactor < 0 ? 0 : depthAlphaFactor;
          context.fillStyle = rgbString + depthAlphaFactor * p.alpha + ")"; //draw

          context.beginPath();
          context.arc(p.projX, p.projY, m * particleRad, 0, 2 * Math.PI, false);
          context.closePath();
          context.fill();
        }

        p = nextParticle;
      }
    }

    function addParticle(x0, y0, z0, vx0, vy0, vz0) {
      var newParticle;
      var color; //check recycle bin for available drop:

      if (recycleBin.first != null) {
        newParticle = recycleBin.first; //remove from bin

        if (newParticle.next != null) {
          recycleBin.first = newParticle.next;
          newParticle.next.prev = null;
        } else {
          recycleBin.first = null;
        }
      } //if the recycle bin is empty, create a new particle (a new ampty object):
      else {
          newParticle = {};
        } //add to beginning of particle list


      if (particleList.first == null) {
        particleList.first = newParticle;
        newParticle.prev = null;
        newParticle.next = null;
      } else {
        newParticle.next = particleList.first;
        particleList.first.prev = newParticle;
        particleList.first = newParticle;
        newParticle.prev = null;
      } //initialize


      newParticle.x = x0;
      newParticle.y = y0;
      newParticle.z = z0;
      newParticle.velX = vx0;
      newParticle.velY = vy0;
      newParticle.velZ = vz0;
      newParticle.age = 0;
      newParticle.dead = false;

      if (Math.random() < 0.5) {
        newParticle.right = true;
      } else {
        newParticle.right = false;
      }

      return newParticle;
    }

    function recycle(p) {
      //remove from particleList
      if (particleList.first == p) {
        if (p.next != null) {
          p.next.prev = null;
          particleList.first = p.next;
        } else {
          particleList.first = null;
        }
      } else {
        if (p.next == null) {
          p.prev.next = null;
        } else {
          p.prev.next = p.next;
          p.next.prev = p.prev;
        }
      } //add to recycle bin


      if (recycleBin.first == null) {
        recycleBin.first = p;
        p.prev = null;
        p.next = null;
      } else {
        p.next = recycleBin.first;
        recycleBin.first.prev = p;
        recycleBin.first = p;
        p.prev = null;
      }
    }
  };

  window.addEventListener("load", windowLoadHandler, false);
  var sphereRad = 280;
  var radius_sp = 1; //for debug messages

  var Debugger = function Debugger() {};

  Debugger.log = function (message) {
    try {
      console.log(message);
    } catch (exception) {
      return;
    }
  };
}

/***/ }),

/***/ "./themes/absgroup/src/partials/index/welcome/welcome.js":
/*!***************************************************************!*\
  !*** ./themes/absgroup/src/partials/index/welcome/welcome.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
jQuery(document).ready(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $('.welcome-media').addClass('welcome-media--scroll');
      /*if ($(window).scrollTop() < 100 ) {
          $('.welcome-media').css("max-width", "1580px")
      }
      if ($(window).scrollTop() > 100 ) {
          $('.welcome-media').css("max-width", "calc(1580px + (100vw - 1580px)/5)")
      }
      if ($(window).scrollTop() > 200 ) {
          $('.welcome-media').css("max-width", "calc(1580px + ((100vw - 1580px)*2)/5)")
      }
      if ($(window).scrollTop() > 300 ) {
          $('.welcome-media').css("max-width", "calc(1580px + ((100vw - 1580px)*3)/5)")
      }
      if ($(window).scrollTop() > 400 ) {
          $('.welcome-media').css("max-width", "calc(1580px + ((100vw - 1580px)*4)/5)")
      }
      if ($(window).scrollTop() > 500 ) {
          $('.welcome-media').css("max-width", "100vw")
      }*/
    } else {
      $('.welcome-media').removeClass('welcome-media--scroll');
    }
  });
});

/***/ }),

/***/ "./themes/absgroup/src/partials/vacancies/vacancies.js":
/*!*************************************************************!*\
  !*** ./themes/absgroup/src/partials/vacancies/vacancies.js ***!
  \*************************************************************/
/***/ (() => {



/***/ }),

/***/ "./themes/absgroup/src/styles/main.scss":
/*!**********************************************!*\
  !*** ./themes/absgroup/src/styles/main.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["styles/main","/js/vendor"], () => (__webpack_exec__("./themes/absgroup/src/js/main.js"), __webpack_exec__("./themes/absgroup/src/styles/main.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);