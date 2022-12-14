function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _errpr_errpr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./errpr/errpr.component */
    "./src/app/errpr/errpr.component.ts");
    /* harmony import */


    var _sec4_sec4_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sec4/sec4.component */
    "./src/app/sec4/sec4.component.ts");
    /* harmony import */


    var _sec3_sec3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./sec3/sec3.component */
    "./src/app/sec3/sec3.component.ts");
    /* harmony import */


    var _sec1_sec1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sec1/sec1.component */
    "./src/app/sec1/sec1.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sec2_sec2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sec2/sec2.component */
    "./src/app/sec2/sec2.component.ts");

    var routes = [{
      path: 'home',
      component: _sec1_sec1_component__WEBPACK_IMPORTED_MODULE_3__["Sec1Component"]
    }, {
      path: 'about',
      component: _sec2_sec2_component__WEBPACK_IMPORTED_MODULE_6__["Sec2Component"]
    }, {
      path: 'gallary',
      component: _sec3_sec3_component__WEBPACK_IMPORTED_MODULE_2__["Sec3Component"]
    }, {
      path: 'contact',
      component: _sec4_sec4_component__WEBPACK_IMPORTED_MODULE_1__["Sec4Component"]
    }, {
      path: '',
      component: _sec1_sec1_component__WEBPACK_IMPORTED_MODULE_3__["Sec1Component"]
    }, {
      path: '**',
      component: _errpr_errpr_component__WEBPACK_IMPORTED_MODULE_0__["ErrprComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'angularFP';
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sec1_sec1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sec1/sec1.component */
    "./src/app/sec1/sec1.component.ts");
    /* harmony import */


    var _sec2_sec2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sec2/sec2.component */
    "./src/app/sec2/sec2.component.ts");
    /* harmony import */


    var _sec3_sec3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./sec3/sec3.component */
    "./src/app/sec3/sec3.component.ts");
    /* harmony import */


    var _sec4_sec4_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sec4/sec4.component */
    "./src/app/sec4/sec4.component.ts");
    /* harmony import */


    var _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sec5/sec5.component */
    "./src/app/sec5/sec5.component.ts");
    /* harmony import */


    var _errpr_errpr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./errpr/errpr.component */
    "./src/app/errpr/errpr.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sec1_sec1_component__WEBPACK_IMPORTED_MODULE_5__["Sec1Component"], _sec2_sec2_component__WEBPACK_IMPORTED_MODULE_6__["Sec2Component"], _sec3_sec3_component__WEBPACK_IMPORTED_MODULE_7__["Sec3Component"], _sec4_sec4_component__WEBPACK_IMPORTED_MODULE_8__["Sec4Component"], _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_9__["Sec5Component"], _errpr_errpr_component__WEBPACK_IMPORTED_MODULE_10__["ErrprComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _sec1_sec1_component__WEBPACK_IMPORTED_MODULE_5__["Sec1Component"], _sec2_sec2_component__WEBPACK_IMPORTED_MODULE_6__["Sec2Component"], _sec3_sec3_component__WEBPACK_IMPORTED_MODULE_7__["Sec3Component"], _sec4_sec4_component__WEBPACK_IMPORTED_MODULE_8__["Sec4Component"], _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_9__["Sec5Component"], _errpr_errpr_component__WEBPACK_IMPORTED_MODULE_10__["ErrprComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/errpr/errpr.component.ts":
  /*!******************************************!*\
    !*** ./src/app/errpr/errpr.component.ts ***!
    \******************************************/

  /*! exports provided: ErrprComponent */

  /***/
  function srcAppErrprErrprComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrprComponent", function () {
      return ErrprComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ErrprComponent = /*#__PURE__*/function () {
      function ErrprComponent() {
        _classCallCheck(this, ErrprComponent);
      }

      _createClass(ErrprComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrprComponent;
    }();

    ErrprComponent.??fac = function ErrprComponent_Factory(t) {
      return new (t || ErrprComponent)();
    };

    ErrprComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: ErrprComponent,
      selectors: [["app-errpr"]],
      decls: 3,
      vars: 0,
      template: function ErrprComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, " error 404 not Found ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["div[_ngcontent-%COMP%]\r\n{\r\n    background-image: url('3d5.jpg');\r\n    background-size: 100% 100%;\r\n\r\n    width: 100%;\r\n    height: 100vh;\r\n\r\n}\r\n\r\ndiv[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]\r\n{\r\n    color :black;\r\n    font-size: 100px;\r\n    box-shadow: 10px 10px 10px black;\r\n    text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJycHIvZXJycHIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQ0FBa0Q7SUFDbEQsMEJBQTBCOztJQUUxQixXQUFXO0lBQ1gsYUFBYTs7QUFFakI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZXJycHIvZXJycHIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy8zZDUuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuXHJcbn1cclxuXHJcbmRpdiBoMVxyXG57XHJcbiAgICBjb2xvciA6YmxhY2s7XHJcbiAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDEwcHggYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ErrprComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-errpr',
          templateUrl: './errpr.component.html',
          styleUrls: ['./errpr.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/navbar/navbar.component.ts":
  /*!********************************************!*\
    !*** ./src/app/navbar/navbar.component.ts ***!
    \********************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.??fac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 36,
      vars: 0,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark", "navBar"], ["routerLink", "/home", 1, "navbar-brand", "nav-Name"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "active", "mr-1", "mr-1"], ["routerLink", "/home", 1, "nav-link"], [1, "sr-only"], [1, "nav-item", "active", "mr-1"], ["routerLink", "/about", 1, "nav-link"], ["routerLink", "/gallary", 1, "nav-link"], ["routerLink", "/contact", 1, "nav-link"], [1, "nav-item", "active"], ["type", "button", 1, "btn", "btn-outline-primary", "mr-3"], ["type", "button", 1, "btn", "btn-outline-success", "mr-2"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "MoA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, "Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Gallery ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, "Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Footer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "(current)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sec1/sec1.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sec1/sec1.component.ts ***!
    \****************************************/

  /*! exports provided: Sec1Component */

  /***/
  function srcAppSec1Sec1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sec1Component", function () {
      return Sec1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sec5/sec5.component */
    "./src/app/sec5/sec5.component.ts");

    var Sec1Component = /*#__PURE__*/function () {
      function Sec1Component() {
        _classCallCheck(this, Sec1Component);
      }

      _createClass(Sec1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Sec1Component;
    }();

    Sec1Component.??fac = function Sec1Component_Factory(t) {
      return new (t || Sec1Component)();
    };

    Sec1Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Sec1Component,
      selectors: [["app-sec1"]],
      decls: 39,
      vars: 0,
      consts: [[1, "w-100", "bg-secondary", "Page"], [1, "Slider"], ["id", "carouselExampleCaptions", "data-ride", "carousel", 1, "carousel", "slide", "h-100", "w-100"], [1, "carousel-indicators"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "0", 1, "active"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "1"], ["data-target", "#carouselExampleCaptions", "data-slide-to", "2"], [1, "carousel-inner", "w-100", "h-100"], [1, "carousel-item", "w-100", "h-100", "active"], ["src", "../../assets/images/dark1.jpg", "alt", "err", 1, "d-block", "w-100", "h-100"], [1, "carousel-caption", "d-none", "d-md-block"], [1, "carousel-item", "w-100", "h-100"], ["src", "../../assets/images/dark2.jpg", "alt", "err", 1, "d-block", "w-100", "h-100"], ["src", "../../assets/images/dark3.jpg", "alt", "err", 1, "d-block", "w-100", "h-100"], ["type", "button", "data-target", "#carouselExampleCaptions", "data-slide", "prev", 1, "carousel-control-prev"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "sr-only"], ["type", "button", "data-target", "#carouselExampleCaptions", "data-slide", "next", 1, "carousel-control-next"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
      template: function Sec1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "ol", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "li", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "First slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Some representative placeholder content for the first slide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Second slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Some representative placeholder content for the second slide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](24, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Third slide label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Some representative placeholder content for the third slide.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](33, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](35, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](37, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "app-sec5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__["Sec5Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYzEvc2VjMS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Sec1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sec1',
          templateUrl: './sec1.component.html',
          styleUrls: ['./sec1.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sec2/sec2.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sec2/sec2.component.ts ***!
    \****************************************/

  /*! exports provided: Sec2Component */

  /***/
  function srcAppSec2Sec2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sec2Component", function () {
      return Sec2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sec5/sec5.component */
    "./src/app/sec5/sec5.component.ts");

    var Sec2Component = /*#__PURE__*/function () {
      function Sec2Component() {
        _classCallCheck(this, Sec2Component);
      }

      _createClass(Sec2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Sec2Component;
    }();

    Sec2Component.??fac = function Sec2Component_Factory(t) {
      return new (t || Sec2Component)();
    };

    Sec2Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Sec2Component,
      selectors: [["app-sec2"]],
      decls: 28,
      vars: 0,
      consts: [[1, "w-100", "Page-Free"], [1, "Header", "mt-2"], [1, "line-2", "w-75", "mx-auto", "my-3"], [1, "line-1", "w-50", "mx-auto", "my-3"], [1, "line-1", "w-25", "mx-auto", "my-3"], [1, "container-fluid", "Page-2-Content"], [1, "row", "h-100"], ["src", "../../assets/images/nesr.jpg", 1, "img-fluid", "h-75", "m-lg-0", "m-sm-auto", "mt-md-5", "col-md-4", "image"], [1, "col-md-8"], [1, "Content-2", "text-center", "mt-5", "mb-5"], [1, "modal-title"], [1, "Content-2", "text-center", "mb-5"], [1, "Content-2", "text-center"]],
      template: function Sec2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " About Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, " Our Mission ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, " A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, " Our Mission ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, " A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "h1", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](24, " Our Mission ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, " A paragraph is a series of related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "app-sec5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__["Sec5Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYzIvc2VjMi5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Sec2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sec2',
          templateUrl: './sec2.component.html',
          styleUrls: ['./sec2.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sec3/sec3.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sec3/sec3.component.ts ***!
    \****************************************/

  /*! exports provided: Sec3Component */

  /***/
  function srcAppSec3Sec3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sec3Component", function () {
      return Sec3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sec5/sec5.component */
    "./src/app/sec5/sec5.component.ts");

    var Sec3Component = /*#__PURE__*/function () {
      function Sec3Component() {
        _classCallCheck(this, Sec3Component);
      }

      _createClass(Sec3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Sec3Component;
    }();

    Sec3Component.??fac = function Sec3Component_Factory(t) {
      return new (t || Sec3Component)();
    };

    Sec3Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Sec3Component,
      selectors: [["app-sec3"]],
      decls: 63,
      vars: 0,
      consts: [[1, "w-100", "Page-Free"], [1, "Header", "mt-2"], [1, "line-2", "w-75", "mx-auto", "my-3"], [1, "line-1", "w-50", "mx-auto", "my-3"], [1, "line-1", "w-25", "mx-auto", "my-3"], [1, "Capsule", "w-75", "m-auto", "thirdMedia"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-3", "justify-content-center", "border-bottom"], ["role", "presentation", 1, "nav-item", "ml-5"], ["id", "pills-home-tab", "data-toggle", "pill", "data-target", "#pills-home", "type", "button", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-toggle", "pill", "data-target", "#pills-profile", "type", "button", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-toggle", "pill", "data-target", "#pills-contact", "type", "button", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active", "container-fluid"], [1, "row", "justify-content-around"], ["href", "", 1, "pageThreeImage", "col-lg-3", "mx-lg-1", "col-md-5"], ["src", "../../assets/images/lab1.jpg"], ["src", "../../assets/images/lab2.jpg"], ["src", "../../assets/images/lab3.jpg"], ["src", "../../assets/images/lab4.jpg"], ["src", "../../assets/images/lab5.jpg"], ["src", "../../assets/images/lab6.jpg"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["src", "../../assets/images/m1.jpg", "height", "300px"], ["src", "../../assets/images/m2.jpg", "height", "300px"], ["src", "../../assets/images/m3.jpg", "height", "300px"], ["src", "../../assets/images/m4.jpg", "height", "300px"], ["src", "../../assets/images/m5.jpg", "height", "300px"], ["src", "../../assets/images/m6.jpg", "height", "300px"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"], ["src", "../../assets/images/c1.jpg"], ["src", "../../assets/images/c2.jfif"], ["src", "../../assets/images/c3.jpg"], ["src", "../../assets/images/c4.jpg"], ["src", "../../assets/images/c5.jpg"], ["src", "../../assets/images/c6.jpg"]],
      template: function Sec3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Gallery ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Laptops");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Mobiles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Cars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](25, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](31, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](37, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](43, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](45, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](47, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](53, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](55, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](56, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](57, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](58, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](59, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](60, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](61, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](62, "app-sec5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__["Sec5Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYzMvc2VjMy5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Sec3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sec3',
          templateUrl: './sec3.component.html',
          styleUrls: ['./sec3.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sec4/sec4.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sec4/sec4.component.ts ***!
    \****************************************/

  /*! exports provided: Sec4Component */

  /***/
  function srcAppSec4Sec4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sec4Component", function () {
      return Sec4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.component */
    "./src/app/navbar/navbar.component.ts");
    /* harmony import */


    var _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../sec5/sec5.component */
    "./src/app/sec5/sec5.component.ts");

    var Sec4Component = /*#__PURE__*/function () {
      function Sec4Component() {
        _classCallCheck(this, Sec4Component);
      }

      _createClass(Sec4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Sec4Component;
    }();

    Sec4Component.??fac = function Sec4Component_Factory(t) {
      return new (t || Sec4Component)();
    };

    Sec4Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Sec4Component,
      selectors: [["app-sec4"]],
      decls: 41,
      vars: 0,
      consts: [[1, "w-100", "Page-Free"], [1, "Header", "mt-2"], [1, "line-2", "w-75", "mx-auto", "my-3"], [1, "line-1", "w-50", "mx-auto", "my-3"], [1, "line-1", "w-25", "mx-auto", "my-3"], [1, "container-fluid", "pageFourContent", "text-center"], [1, "row"], [1, "col-md-6", "mb-5"], [1, "form-row"], [1, "form-group", "col-lg-6"], ["for", "inputEmail4"], ["type", "email", "id", "inputEmail4", 1, "form-control"], ["for", "inputPassword4"], ["type", "password", "id", "inputPassword4", 1, "form-control"], [1, "form-group"], ["for", "inputAddress"], ["type", "text", "id", "inputAddress", "placeholder", "1234 Main St", 1, "form-control"], ["for", "inputAddress2"], ["type", "text", "id", "inputAddress2", "placeholder", "Apartment, studio, or floor", 1, "form-control"], [1, "form-group", "col-md-6"], ["for", "inputCity"], ["type", "text", "id", "inputCity", 1, "form-control"], [1, "form-group", "col-md-2"], ["for", "inputZip"], ["type", "text", "id", "inputZip", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg"], ["src", "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27632.27876643873!2d31.185523450000005!3d30.03585815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1660288968389!5m2!1sar!2seg", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 1, "col-md-5", "mb-5", 2, "border", "0"]],
      template: function Sec4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](15, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Address 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](27, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "City");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](32, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Zip");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Sign in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](39, "iframe", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](40, "app-sec5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _sec5_sec5_component__WEBPACK_IMPORTED_MODULE_2__["Sec5Component"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYzQvc2VjNC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Sec4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sec4',
          templateUrl: './sec4.component.html',
          styleUrls: ['./sec4.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/sec5/sec5.component.ts":
  /*!****************************************!*\
    !*** ./src/app/sec5/sec5.component.ts ***!
    \****************************************/

  /*! exports provided: Sec5Component */

  /***/
  function srcAppSec5Sec5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sec5Component", function () {
      return Sec5Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Sec5Component = /*#__PURE__*/function () {
      function Sec5Component() {
        _classCallCheck(this, Sec5Component);
      }

      _createClass(Sec5Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Sec5Component;
    }();

    Sec5Component.??fac = function Sec5Component_Factory(t) {
      return new (t || Sec5Component)();
    };

    Sec5Component.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: Sec5Component,
      selectors: [["app-sec5"]],
      decls: 45,
      vars: 0,
      consts: [["id", "fifthPage", 1, "w-100", "Page-Free", "container-fluid"], [1, "row"], [1, "col-lg-6"], [1, "col-lg-3", "col-md-6"], [1, "links"], ["href", ""]],
      template: function Sec5Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, " About ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, " Scanfcode.com is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](9, " Categories ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "UI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "PHP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "C++");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, " Quick Links ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "ul", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](32, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](35, "Footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](36, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](38, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "About Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "C#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYzUvc2VjNS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](Sec5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sec5',
          templateUrl: './sec5.component.html',
          styleUrls: ['./sec5.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\WebDev\Course\Tasks\angularBootstrap\angularFP\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map