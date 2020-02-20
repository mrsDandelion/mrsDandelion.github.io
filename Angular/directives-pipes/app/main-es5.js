function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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


    var _mock_responce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-responce */
    "./src/app/mock-responce.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/result-list/result-list.component */
    "./src/app/components/result-list/result-list.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "handleFetch",
        value: function handleFetch() {
          this.items = _mock_responce__WEBPACK_IMPORTED_MODULE_1__["responce"].items;
        }
      }, {
        key: "handleSort",
        value: function handleSort(_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              type = _ref2[0],
              sortWords = _ref2[1];

          this.typeSort = type;
          this.sortWords = sortWords;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 3,
      consts: [[3, "searchResponseItems", "sortItems"], [3, "items", "typeSort", "sortWords"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchResponseItems", function AppComponent_Template_app_header_searchResponseItems_0_listener($event) {
            return ctx.handleFetch();
          })("sortItems", function AppComponent_Template_app_header_sortItems_0_listener($event) {
            return ctx.handleSort($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-result-list", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("typeSort", ctx.typeSort)("sortWords", ctx.sortWords);
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_3__["ResultListComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50XFx5b3V0dWJlLWNsaWVudFxcYXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
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


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/result-list/result-list.component */
    "./src/app/components/result-list/result-list.component.ts");
    /* harmony import */


    var _components_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/result-item/result-item.component */
    "./src/app/components/result-item/result-item.component.ts");
    /* harmony import */


    var _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/sort/sort.component */
    "./src/app/components/sort/sort.component.ts");
    /* harmony import */


    var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pipes/sort.pipe */
    "./src/app/pipes/sort.pipe.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./directives/border-color.directive */
    "./src/app/directives/border-color.directive.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_7__["ResultListComponent"], _components_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_8__["ResultItemComponent"], _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_9__["SortComponent"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__["SortPipe"], _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_12__["BorderColorDirective"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _components_result_list_result_list_component__WEBPACK_IMPORTED_MODULE_7__["ResultListComponent"], _components_result_item_result_item_component__WEBPACK_IMPORTED_MODULE_8__["ResultItemComponent"], _components_sort_sort_component__WEBPACK_IMPORTED_MODULE_9__["SortComponent"], _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_10__["SortPipe"], _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_12__["BorderColorDirective"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../search/search.component */
    "./src/app/components/search/search.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../login/login.component */
    "./src/app/components/login/login.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _sort_sort_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sort/sort.component */
    "./src/app/components/sort/sort.component.ts");

    var _c0 = ["sort"];

    function HeaderComponent_app_sort_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-sort", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sortItems", function HeaderComponent_app_sort_7_Template_app_sort_sortItems_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.handleSort($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.searchResponseItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sortItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSortOpen = false;
      }

      _createClass(HeaderComponent, [{
        key: "toggleSort",
        value: function toggleSort(isOpen) {
          this.isSortOpen = isOpen;
        }
      }, {
        key: "handleSort",
        value: function handleSort(_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              typeSort = _ref4[0],
              sortWords = _ref4[1];

          this.sortItems.emit([typeSort, sortWords]);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      viewQuery: function HeaderComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sortRef = _t.first);
        }
      },
      outputs: {
        searchResponseItems: "searchResponseItems",
        sortItems: "sortItems"
      },
      decls: 8,
      vars: 1,
      consts: [[1, "header-content"], [1, "header-info"], ["src", "../../../assets/logo.svg", "alt", ""], [3, "toggleSort", "searchItems"], [3, "sortItems", 4, "ngIf"], [3, "sortItems"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-search", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSort", function HeaderComponent_Template_app_search_toggleSort_5_listener($event) {
            return ctx.toggleSort($event);
          })("searchItems", function HeaderComponent_Template_app_search_searchItems_5_listener($event) {
            return ctx.searchResponseItems.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_app_sort_7_Template, 1, 0, "app-sort", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSortOpen);
        }
      },
      directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _sort_sort_component__WEBPACK_IMPORTED_MODULE_4__["SortComponent"]],
      styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\nheader[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: #E5E5E5;\n}\n\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 1142px;\n}\n\nheader[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\nheader[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\nheader[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50XFx5b3V0dWJlLWNsaWVudFxcYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0FDQ0o7O0FEQ0k7RUFDRSxrQkFBQTtBQ0NOOztBREdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7QUNESjs7QURHSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcclxuXHJcbiAgLmhlYWRlci1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDExNDJweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xufVxuaGVhZGVyIC5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMTQycHg7XG59XG5oZWFkZXIgLmhlYWRlci1jb250ZW50IGltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbmhlYWRlciAuaGVhZGVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuaGVhZGVyIC5oZWFkZXItaW5mbyBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], null, {
        searchResponseItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sortItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        sortRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sort']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/login/login.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/login/login.component.ts ***!
    \*****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 4,
      vars: 0,
      consts: [["src", "../../../assets/icon-login.svg", "alt", ""]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["[_nghost-%COMP%] {\n  margin-left: 190px;\n}\n\np[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\np[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9EOlxcQW5ndWxhclxceW91dHViZS1jbGllbnRcXHlvdXR1YmUtY2xpZW50XFxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtYXJnaW4tbGVmdDogMTkwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgbWFyZ2luLWxlZnQ6IDE5MHB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnAgc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/result-item/result-item.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/result-item/result-item.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResultItemComponent */

  /***/
  function srcAppComponentsResultItemResultItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultItemComponent", function () {
      return ResultItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _directives_border_color_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../directives/border-color.directive */
    "./src/app/directives/border-color.directive.ts");

    var ResultItemComponent =
    /*#__PURE__*/
    function () {
      function ResultItemComponent() {
        _classCallCheck(this, ResultItemComponent);
      }

      _createClass(ResultItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultItemComponent;
    }();

    ResultItemComponent.ɵfac = function ResultItemComponent_Factory(t) {
      return new (t || ResultItemComponent)();
    };

    ResultItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultItemComponent,
      selectors: [["app-result-item"]],
      inputs: {
        item: "item"
      },
      decls: 20,
      vars: 7,
      consts: [[3, "BorderColorDirective"], ["alt", "more...", 1, "item-img", 3, "src"], ["src", "../../../assets/icon-view.svg", "alt", ""], ["src", "../../../assets/icon-like.svg", "alt", ""], ["src", "../../../assets/icon-dislike.svg", "alt", ""], ["src", "../../../assets/icon-comments.svg", "alt", ""], ["type", "button"]],
      template: function ResultItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "more...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("BorderColorDirective", ctx.item.snippet.publishedAt);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.item.snippet.thumbnails.medium.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.statistics.viewCount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.statistics.likeCount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.statistics.dislikeCount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.item.statistics.commentCount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.snippet.title);
        }
      },
      directives: [_directives_border_color_directive__WEBPACK_IMPORTED_MODULE_1__["BorderColorDirective"]],
      styles: ["[_nghost-%COMP%]:nth-child(4n)   li[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n[_nghost-%COMP%]:first-child   li[_ngcontent-%COMP%] {\n  margin-right: 30px;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 300px;\n  min-height: 400px;\n  margin-right: 30px;\n  margin-bottom: 30px;\n  padding: 20px 20px 10px;\n  background: #E5E5E5;\n  border-radius: 5px;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   .item-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin: 20px 0;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 13px;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n  text-align: center;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  align-self: center;\n  background: #2F80ED;\n  border-radius: 5px;\n  margin-top: 60px;\n  color: #FFF;\n  font-size: 12px;\n  line-height: 14px;\n  padding: 7px 30px;\n  border: none;\n  box-shadow: 2px 0 4px #2F80ED;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #5EA2FF;\n  box-shadow: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtaXRlbS9EOlxcQW5ndWxhclxceW91dHViZS1jbGllbnRcXHlvdXR1YmUtY2xpZW50XFxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3VsdC1pdGVtXFxyZXN1bHQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtaXRlbS9yZXN1bHQtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7QUNESjtBRElFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0ZKO0FESUk7RUFDRSxXQUFBO0FDRk47QURLSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxjQUFBO0FDSE47QURLTTtFQUNFLFlBQUE7QUNIUjtBRE9JO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDTE47QURRSTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQ05OO0FEUU07RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDTlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdC1pdGVtL3Jlc3VsdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICY6bnRoLWNoaWxkKDRuKSBsaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICAmOmZpcnN0LWNoaWxkIGxpIHtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICB9XHJcblxyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAyMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTVFNUU1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgICAuaXRlbS1pbWcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW46IDIwcHggMDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogIzJGODBFRDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgICAgcGFkZGluZzogN3B4IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDAgNHB4ICMyRjgwRUQ7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM1RUEyRkY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdDpudGgtY2hpbGQoNG4pIGxpIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuOmhvc3Q6Zmlyc3QtY2hpbGQgbGkge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG46aG9zdCBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDMwMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweDtcbiAgYmFja2dyb3VuZDogI0U1RTVFNTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3gtc2hhZG93OiAycHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuOmhvc3QgbGkgLml0ZW0taW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBsaSBwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDIwcHggMDtcbn1cbjpob3N0IGxpIHAgaW1nIHtcbiAgaGVpZ2h0OiAxM3B4O1xufVxuOmhvc3QgbGkgaDMge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgbGkgYnV0dG9uIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMkY4MEVEO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBwYWRkaW5nOiA3cHggMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiAycHggMCA0cHggIzJGODBFRDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgbGkgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzVFQTJGRjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result-item',
          templateUrl: './result-item.component.html',
          styleUrls: ['./result-item.component.scss']
        }]
      }], function () {
        return [];
      }, {
        item: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/result-list/result-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/result-list/result-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ResultListComponent */

  /***/
  function srcAppComponentsResultListResultListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultListComponent", function () {
      return ResultListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _result_item_result_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../result-item/result-item.component */
    "./src/app/components/result-item/result-item.component.ts");
    /* harmony import */


    var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../pipes/sort.pipe */
    "./src/app/pipes/sort.pipe.ts");

    function ResultListComponent_app_result_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-result-item", 1);
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r4);
      }
    }

    var ResultListComponent = function ResultListComponent() {
      _classCallCheck(this, ResultListComponent);

      this.getResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    };

    ResultListComponent.ɵfac = function ResultListComponent_Factory(t) {
      return new (t || ResultListComponent)();
    };

    ResultListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResultListComponent,
      selectors: [["app-result-list"]],
      inputs: {
        items: "items",
        typeSort: "typeSort",
        sortWords: "sortWords"
      },
      outputs: {
        getResponse: "getResponse"
      },
      decls: 3,
      vars: 5,
      consts: [[3, "item", 4, "ngFor", "ngForOf"], [3, "item"]],
      template: function ResultListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResultListComponent_app_result_item_1_Template, 1, 1, "app-result-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "sort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 1, ctx.items, ctx.typeSort, ctx.sortWords));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _result_item_result_item_component__WEBPACK_IMPORTED_MODULE_2__["ResultItemComponent"]],
      pipes: [_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_3__["SortPipe"]],
      styles: ["ul[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  margin: 30px;\n  width: 1290px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtbGlzdC9EOlxcQW5ndWxhclxceW91dHViZS1jbGllbnRcXHlvdXR1YmUtY2xpZW50XFxhcHAvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3VsdC1saXN0XFxyZXN1bHQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtbGlzdC9yZXN1bHQtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHQtbGlzdC9yZXN1bHQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDMwcHg7XHJcbiAgd2lkdGg6IDEyOTBweDtcclxufVxyXG4iLCJ1bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAzMHB4O1xuICB3aWR0aDogMTI5MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-result-list',
          templateUrl: './result-list.component.html',
          styleUrls: ['./result-list.component.scss']
        }]
      }], function () {
        return [];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        typeSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sortWords: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        getResponse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/search/search.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/search/search.component.ts ***!
    \*******************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SearchComponent =
    /*#__PURE__*/
    function () {
      function SearchComponent() {
        _classCallCheck(this, SearchComponent);

        this.toggleSort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.searchItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isSortOpen = false;
      }

      _createClass(SearchComponent, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
          e.preventDefault();
          this.searchItems.emit();
        }
      }, {
        key: "toggleSortFunc",
        value: function toggleSortFunc() {
          this.isSortOpen = !this.isSortOpen;
          this.toggleSort.emit(this.isSortOpen);
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)();
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      outputs: {
        toggleSort: "toggleSort",
        searchItems: "searchItems"
      },
      decls: 5,
      vars: 0,
      consts: [[3, "submit"], ["type", "text"], ["type", "submit", "value", "search"], ["type", "button", 3, "click"], ["src", "../../../assets/icon-sort.svg"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SearchComponent_Template_form_submit_0_listener($event) {
            return ctx.handleSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_3_listener($event) {
            return ctx.toggleSortFunc();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%], [_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  background: #2F80ED;\n  box-shadow: 2px 0 4px #2F80ED;\n  height: 24px;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #5EA2FF;\n  box-shadow: none;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=submit][_ngcontent-%COMP%] {\n  padding: 0 22px;\n  border-radius: 0 5px 5px 0;\n  color: #FFF;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  border-radius: 5px;\n  margin-left: 10px;\n  width: 24px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  height: 24px;\n  width: 400px;\n}\n[_nghost-%COMP%]   form[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:focus {\n  border: 1px solid #2F80ED;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvRDpcXEFuZ3VsYXJcXHlvdXR1YmUtY2xpZW50XFx5b3V0dWJlLWNsaWVudFxcYXBwL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzZWFyY2hcXHNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7QURDSTs7RUFFRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ047QURDTTs7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURFSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNBTjtBREdJO0VBQ0UsMkJBQUE7RUFBQSxvQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNETjtBRElJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNGTjtBRElNO0VBQ0UseUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZDogIzJGODBFRDtcclxuICAgICAgYm94LXNoYWRvdzogMnB4IDAgNHB4ICMyRjgwRUQ7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzVFQTJGRjtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMjJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgd2lkdGg6IDQwMHB4O1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzJGODBFRDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSxcbjpob3N0IGZvcm0gYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMkY4MEVEO1xuICBib3gtc2hhZG93OiAycHggMCA0cHggIzJGODBFRDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG46aG9zdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3Zlcixcbjpob3N0IGZvcm0gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzVFQTJGRjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbjpob3N0IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgcGFkZGluZzogMCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgY29sb3I6ICNGRkY7XG59XG46aG9zdCBmb3JtIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI0cHg7XG59XG46aG9zdCBmb3JtIGlucHV0W3R5cGU9dGV4dF0ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cbjpob3N0IGZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyRjgwRUQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [];
      }, {
        toggleSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        searchItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/sort/sort.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/sort/sort.component.ts ***!
    \***************************************************/

  /*! exports provided: SortComponent */

  /***/
  function srcAppComponentsSortSortComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortComponent", function () {
      return SortComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        clicked: a0
      };
    };

    var SortComponent =
    /*#__PURE__*/
    function () {
      function SortComponent() {
        _classCallCheck(this, SortComponent);

        this.sortItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isClickedDateSort = false;
        this.isClickedViewSort = false;
      }

      _createClass(SortComponent, [{
        key: "handleSortItems",
        value: function handleSortItems(type) {
          if (type) {
            if (type === 'date') {
              this.isClickedDateSort = true;
              this.isClickedViewSort = false;
            } else {
              this.isClickedDateSort = false;
              this.isClickedViewSort = true;
            }

            this.sortType = type;
          }

          this.sortItems.emit([this.sortType, this.sortWords]);
        }
      }]);

      return SortComponent;
    }();

    SortComponent.ɵfac = function SortComponent_Factory(t) {
      return new (t || SortComponent)();
    };

    SortComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SortComponent,
      selectors: [["app-sort"]],
      outputs: {
        sortItems: "sortItems"
      },
      decls: 11,
      vars: 7,
      consts: [["type", "button", 3, "ngClass", "click"], ["type", "text", "name", "sortWords", 3, "ngModel", "input", "ngModelChange"]],
      template: function SortComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sorting by");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortComponent_Template_button_click_3_listener($event) {
            return ctx.handleSortItems("date");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SortComponent_Template_button_click_5_listener($event) {
            return ctx.handleSortItems("view");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "count of views");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "by word or sentance");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SortComponent_Template_input_input_10_listener($event) {
            return ctx.handleSortItems();
          })("ngModelChange", function SortComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.sortWords = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.isClickedDateSort));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isClickedViewSort));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sortWords);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["[_nghost-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 20px 0;\n}\n\nspan[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  color: #2F80ED;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background: none;\n  outline: none;\n  text-decoration: underline;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  border: 1px solid #2F80ED;\n}\n\n.clicked[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #5EA2FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3J0L0Q6XFxBbmd1bGFyXFx5b3V0dWJlLWNsaWVudFxceW91dHViZS1jbGllbnRcXGFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc29ydFxcc29ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zb3J0L3NvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NvcnQvc29ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG5zcGFuLCBidXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxubGFiZWwgc3BhbiwgYnV0dG9uIHtcclxuICBjb2xvcjogIzJGODBFRDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMkY4MEVEO1xyXG59XHJcblxyXG4uY2xpY2tlZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjNUVBMkZGO1xyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG5zcGFuLCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbmxhYmVsIHNwYW4sIGJ1dHRvbiB7XG4gIGNvbG9yOiAjMkY4MEVEO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMkY4MEVEO1xufVxuXG4uY2xpY2tlZCB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1RUEyRkY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sort',
          templateUrl: './sort.component.html',
          styleUrls: ['./sort.component.scss']
        }]
      }], function () {
        return [];
      }, {
        sortItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/directives/border-color.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/directives/border-color.directive.ts ***!
    \******************************************************/

  /*! exports provided: BorderColorDirective */

  /***/
  function srcAppDirectivesBorderColorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BorderColorDirective", function () {
      return BorderColorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BorderColorDirective =
    /*#__PURE__*/
    function () {
      function BorderColorDirective(elementRef, renderer2) {
        _classCallCheck(this, BorderColorDirective);

        this.elementRef = elementRef;
        this.renderer2 = renderer2;
      }

      _createClass(BorderColorDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var delta = Date.now() - Date.parse(this.date);
          var currentClass;

          if (delta < 7 * 24 * 3600 * 1000) {
            currentClass = 'blue-border';
          } else if (delta < 30 * 24 * 3600 * 1000) {
            currentClass = 'green-border';
          } else if (delta < 6 * 30 * 24 * 3600 * 1000) {
            currentClass = 'yellow-border';
          } else {
            currentClass = 'red-border';
          }

          this.renderer2.addClass(this.elementRef.nativeElement, currentClass);
        }
      }]);

      return BorderColorDirective;
    }();

    BorderColorDirective.ɵfac = function BorderColorDirective_Factory(t) {
      return new (t || BorderColorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    BorderColorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: BorderColorDirective,
      selectors: [["", "BorderColorDirective", ""]],
      inputs: {
        date: ["BorderColorDirective", "date"]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BorderColorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[BorderColorDirective]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['BorderColorDirective']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/mock-responce.ts":
  /*!**********************************!*\
    !*** ./src/app/mock-responce.ts ***!
    \**********************************/

  /*! exports provided: responce */

  /***/
  function srcAppMockResponceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "responce", function () {
      return responce;
    });

    var responce = {
      'kind': 'youtube#videoListResponse',
      'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/Cmodw7c5XPTM8Yg3kMXelihxek4\'',
      'pageInfo': {
        'totalResults': 10,
        'resultsPerPage': 10
      },
      'items': [{
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI\'',
        'id': 'YN8zNnV0sK8',
        'snippet': {
          'publishedAt': '2020-02-17T12:42:19.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 8 - Быстрый курс за 60 минут',
          'description': 'Полный курс по Angular 8+:\nhttps://clc.to/angular\n\nTelegram: ' + 'https://teleg.one/js_by_vladilen' + ' \nInstagram: https://www.instagram.com/vladilen.minin \nVK: ' + 'https://vk.com/vladilen.minin \nГруппа VK:' + ' https://vk.com/js_by_vladilen \n\nReact Native: мобильная разработка на JavaScript:' + '\nhttps://clc.to/rnative\n\nПоддержать выпуск новых видео:\nЯД: ' + 'https://money.yandex.ru/to/410013757655670' + '\nPayPal: https://www.paypal.me/vladilenm \n\n30 мая 2019 года бы' + ' релиз Angular 8 и я решил записать' + '  по нему быстрый курс. В видео вы узнаете, как Angular' + ' работает, как его установить.\nВ результате урока' + ' я покажу создание Todo приложения с разными подходами.' + ' Разберем работу с сервером, сервисами, пайпами,' + ' коммуникацией между компонентами и немного RxJS\n\n' + 'Исходный код:\nhttps://github.com/vladilenm/angular8-cc' + '\n\nAngular 8 - Быстрый курс за 60 минут',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angular 8', 'angularjs', 'js', 'javascript', 'rxjs', 'angular 60 минут', 'angular 1 час', 'angular 8 1 час', 'владилен минин', 'уроки javascript', 'angular 2', 'angular 4', 'angular уроки', 'курс angular', 'основы angular', 'angular фреймворк', 'angular уроки для начинающих', 'уроки angular', 'angular практика', 'ангуляр', 'angular изучение', 'angular курс', 'ангуляр 4 уроки', 'angular уроки на русском'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 8 - Быстрый курс за 60 минут',
            'description': 'Полный курс по Angular 8+:\nhttps:' + '//clc.to/angular\n\nTelegram:' + ' https://teleg.one/js_by_vladilen \nInstagram: ' + 'https://www.instagram.com/vladilen.minin ' + '\nVK: https://vk.com/vladilen.minin \nГруппа ' + 'VK: https://vk.com/js_by_vladilen ' + '\n\nReact Native: мобильная разработка на ' + 'JavaScript:\nhttps://clc.to/rnative\n\n' + 'Поддержать выпуск новых видео:\nЯД: https:' + '//money.yandex.ru/to/410013757655670\nPayPal:' + ' https://www.paypal.me/vladilenm \n\n30 мая ' + '2019 года бы релиз Angular 8 и я решил записать ' + ' по нему быстрый курс. В видео вы узнаете,' + ' как Angular работает, как его установить.\nВ ' + 'результате урока я покажу создание Todo ' + 'приложения с разными подходами. Разберем работу с' + ' сервером, сервисами, пайпами, к' + 'оммуникацией между компонентами и немного RxJS\n\nИсходный ' + 'код:\nhttps://github.com/vladilenm/angular8-cc\n\nAngular' + ' 8 - Быстрый курс за 60 минут'
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '33265',
          'likeCount': '1173',
          'dislikeCount': '26',
          'favoriteCount': '0',
          'commentCount': '170'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ\'',
        'id': 'Fdf5aTYRW0E',
        'snippet': {
          'publishedAt': '2020-02-10T17:46:58.000Z',
          'channelId': 'UC29ju8bIPH5as8OGnQzwJyA',
          'title': 'Angular Crash Course',
          'description': 'In this video we will talk about what ' + 'Angular is and then jump in and ' + 'build a small app With Angular 7, looking at most' + ' of the fundamental concepts like ' + 'components, services, modules, etc\n\nSponsor:' + '\nhttp://www.netlify.com\n\nCode:' + '\nhttps://github.com/bradtraversy/angular' + '-crash-todolist\n\n💖 Become a Patron: ' + 'Show support & get perks!\nhttp://www.' + 'patreon.com/traversymedia\n\nWebsite & Udemy ' + 'Courses\nhttp://www.traversymedia.com\n' + '\nFollow Traversy Media:\nhttps://www.' + 'facebook.com/t' + 'raversymedia\nhttps://www.twitter.com/' + 'traversymedia\nhttps://www.instagram.com/traversymedia',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Traversy Media',
          'tags': ['angular', 'angular 7', 'angular tutorial', 'angularjs'],
          'categoryId': '28',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular Crash Course',
            'description': 'In this video we will talk' + ' about what Angular is and then jump in ' + 'and build a ' + 'small app With Angular 7, looking at most' + ' of the fundamental concepts like components, services,' + ' modules, etc\n\nSponsor:\nhttp://www.netlify.' + 'com\n\nCode:\nhttps://github.com/bradtraversy/' + 'angular-crash-todolist\n\n💖 Become a Patron:' + ' Show support & get perks!\nhttp://www.patreon.com/' + 'traversymedia\n\nWebsite & Udemy Courses\nhttp' + '://www.traversymedia.com\n\nFollow Traversy Media:\n' + 'https://www.facebook.com/traversymedia\nhttps' + '://www.twitter.com/traversymedia\nhttps:/' + '/www.instagram.com/traversymedia'
          },
          'defaultAudioLanguage': 'en'
        },
        'statistics': {
          'viewCount': '456979',
          'likeCount': '8213',
          'dislikeCount': '131',
          'favoriteCount': '0',
          'commentCount': '555'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A\'',
        'id': 'k5E2AVpwsko',
        'snippet': {
          'publishedAt': '2017-09-05T16:48:15.000Z',
          'channelId': 'UCWv7vMbMWH4-V0ZXdmDpPBA',
          'title': 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
          'description': '🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): ' + 'https://programmingwithmosh.com/courses/angular' + '\n\nThis Angular tutorial teaches ' + 'you the fundamentals of Angular and TypeScript.' + '\n\nSUBSCRIBE FOR MORE VIDEOS!' + '\nhttps://www.youtube.com/channel/UCWv7vMbMWH4-' + 'V0ZXdmDpPBA?sub_confirmation=1\n\n' + '\nTABLE OF CONTENT \n\n00:00 Introduction\n02:54 ' + 'What is Angular?\n04:54 Architecture ' + 'of Angular Apps\n08:41 Setting Up the Development' + ' Environment\n11:25 Your First Angular ' + 'App\n13:50 Structure of Angular Projects\n20:43' + ' Webpack\n23:57 Angular Version History ' + '\n27:31 Course Structure\n31:55 TypeScript ' + 'Fundamentals\n32:34 What is TypeScript?\n34:58 ' + 'Your First TypeScript Program\n37:57 Declaring ' + 'Variables\n42:46 Types\n48:29 Type Assertions' + '\n51:15 Arrow Functions\n52:59 Interfaces\n56:54 ' + 'Classes\n01:01:22 Objects\n01:05:31 Constructors' + '\n01:08:22 Access Modifiers\n01:11:18 Access' + ' Modifiers in Constructor Parameters\n01:12:58' + ' Properties\n01:18:15 Modules\n01:23:22 Angular ' + 'Fundamentals\n01:23:41 Building Blocks of' + ' Angular Apps\n01:27:22 Creating Components\n' + '01:37:00 Generating Components Using Angular' + ' CLI\n01:41:40 Templates\n01:44:08 Directives' + '\n01:47:34 Services\n01:52:02 Dependency ' + 'Injection\n01:59:22 Generating Services Using ' + 'Angular CLI\n02:01:32 Exercise\n \n\nSTAY' + ' IN TOUCH\n\nhttps://www.facebook.com/' + 'programmingwithmosh/\nhttps://twitter.com/moshhamedani',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Programming with Mosh',
          'tags': ['learn angular 4', 'learn angular 4 from scratch', 'angular4', 'learn angular', 'angular tutorial', 'angular 4', 'Angular', 'angular 5', 'angular 5 course', 'angular course', 'angular.js', 'angularjs', 'angular 2', 'angular2', 'angular 4 tutorial', 'angular 4 tutorial for beginners', 'angular tutorial for beginners', 'angular 4 crash course', 'angular 4 in 60 minutes', 'angularjs 4', 'angular 4 tutorial for beginners step by step', 'angular js', 'angularjs tutorial for beginners', 'angular 6', 'angular 7'],
          'categoryId': '22',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh',
            'description': '🔥Get the COMPLETE COURSE (60% OFF - LIMITED TIME): ' + 'https://programmingwithmosh.com/courses/angular' + '\n\nThis Angular' + ' tutorial teaches you the fundamentals of ' + 'Angular and TypeScript.\n' + '\nSUBSCRIBE FOR MORE VIDEOS!\nhttps://www.' + 'youtube.com/channel/UCWv7vMbMWH4-' + 'V0ZXdmDpPBA?sub_confirmation=1\n\n\nTABLE ' + 'OF CONTENT \n\n00:00 Introduction' + '\n02:54 What is Angular?\n04:54 Architecture' + ' of Angular Apps\n08:41 Setting Up' + ' the Development Environment\n11:25 Your' + ' First Angular App\n13:50 Structure of ' + 'Angular Projects\n20:43 Webpack\n23:57 ' + 'Angular Version History \n27:31 Course' + ' Structure\n31:55 TypeScript Fundamentals' + '\n32:34 What is TypeScript?\n34:58 Your' + ' First TypeScript Program\n37:57 Declaring' + ' Variables\n42:46 Types\n48:29 Type ' + 'Assertions\n51:15 Arrow Functions\n52:59 ' + 'Interfaces\n56:54 Classes\n01:01:22 Objects\n01:05:31' + ' Constructors\n01:08:22 Access Modifiers\n' + '01:11:18 Access Modifiers in Constructor ' + 'Parameters\n01:12:58 Properties\n01:18:15 ' + 'Modules\n01:23:22 Angular Fundamentals\n01:23:41 ' + 'Building Blocks of Angular Apps\n01:27:22 ' + 'Creating Components\n01:37:00 Generating ' + 'Components Using Angular CLI\n01:41:40 ' + 'Templates\n01:44:08 Directives\n01:47:34' + ' Services\n01:52:02 Dependency Injection\n01:59:22' + ' Generating Services Using Angular' + ' CLI\n02:01:32 Exercise\n \n\nSTAY IN TOUCH\n\n' + 'https://www.facebook.com/programmingwithmosh/' + '\nhttps://twitter.com/moshhamedani'
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '1266085',
          'likeCount': '18342',
          'dislikeCount': '473',
          'favoriteCount': '0',
          'commentCount': '1255'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY\'',
        'id': 'Rf54BH35yrY',
        'snippet': {
          'publishedAt': '2019-09-04T15:00:12.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 8 Основы. Полный Курс' + ' для начинающих',
          'description': 'Полный курс по Angular 8+:\n' + 'https://clc.to/angular\n\nДобавляйте меня в' + ' ВК: https://vk.com/vladilen.minin\nTelegram:' + ' https://teleg.one/js_by_vladilen\nInstagram: ' + 'https://www.instagram.com/vladilen.minin\nГруппа' + ' ВК: https://vk.com/js_by_vladilen\n\nПоддержать ' + 'выпуск новых видео:\nЯД: https://money.yandex.ru' + '/to/410013757655670\nPayPal:' + ' https://www.paypal.me/vladilenm \n\nУрок по ' + 'Angular. В этом курсе вы познакомитесь ' + 'со всеми основными элементами, которые есть в ' + 'Angular с полного нуля\n\nAngular 8 Основы. ' + 'Полный Курс. Урок для Новичков',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angularjs', 'js', 'javascript', 'уроки angular', 'angular уроки', 'angular 8', 'курс angular', 'angular основы', 'владилен', 'владилен минин', 'минин', 'основы angular', 'ангуляр', 'angular 6', 'angular js', 'angular уроки для начинающих', 'angular фреймворк', 'angular практика', 'что такое angular', 'angular cli', 'angular уроки на русском', 'курсы программирования', 'angular tutorial'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 8 Основы. Полный Курс для начинающих',
            'description': 'Полный курс по Angular 8+' + ':\nhttps://clc.to/angular\n\nДобавляйте меня в ВК:' + ' https://vk.com/vladilen.minin\nTelegram: ' + 'https://teleg.one/js_by_vladilen\nInstagram: ' + 'https://www.instagram.com/vladilen.minin\n' + 'Группа ВК: https://vk.com/js_by_vladilen\n\n' + 'Поддержать ' + 'выпуск новых видео:\nЯД: https://money.yandex.ru/to/410013757655670' + '\nPayPal:' + ' https://www.paypal.me/vladilenm \n\nУрок по Angular. ' + 'В этом курсе вы познакомитесь ' + 'со всеми основными элементами, которые есть в Angular ' + 'с полного нуля\n\nAngular 8 Основы. ' + 'Полный Курс. Урок для Новичков'
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '14544',
          'likeCount': '573',
          'dislikeCount': '11',
          'favoriteCount': '0',
          'commentCount': '88'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY\'',
        'id': 'm0yGx2MGZWg',
        'snippet': {
          'publishedAt': '2018-05-13T07:44:08.000Z',
          'channelId': 'UCe_H8hzx9WV7Ca7Ps5gt72Q',
          'title': 'Что такое Angular. Обзор возможностей',
          'description': 'В этом видео речь пойдет про javascript' + ' фреймворк Angular. Я расскажу что такое ' + 'Angular, где и когда его применяют, а так же сделаю ' + 'небольшой обзор его возможностей. Расскажу ' + 'чем фреймворк сложен для новичков и чем он' + ' действительно хорош для новых проектов. Сейчас для того' + ' что б стать junior javascript разработчиком ' + 'нужно обязательно знать хотя бы один фреймворк js и' + ' ангуляр будет отличным выбором.',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Web Developer Blog',
          'tags': ['angular', 'ангуляр', 'angular js', 'уроки angular', 'angular уроки', 'angular tutorial', 'что такое angular', 'angular обзор', 'angular фреймворк', 'js', 'javascript', 'web development', 'angular 6', 'angular примеры', 'angular практика', 'стоит ли учить angular', 'angular учить', 'программирование'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'defaultLanguage': 'ru',
          'localized': {
            'title': 'Что такое Angular. Обзор возможностей',
            'description': 'В этом видео речь пойдет про' + ' javascript фреймворк Angular. Я расскажу что такое ' + 'Angular, где и когда его применяют, а так' + ' же сделаю небольшой обзор его возможностей. Расскажу ' + 'чем фреймворк сложен для новичков и чем он' + ' действительно хорош для новых проектов. Сейчас для того ' + 'что б стать junior javascript разработчиком' + ' нужно обязательно знать хотя бы один фреймворк js и ' + 'ангуляр будет отличным выбором.'
          },
          'defaultAudioLanguage': 'ru'
        },
        'statistics': {
          'viewCount': '43470',
          'likeCount': '1047',
          'dislikeCount': '198',
          'favoriteCount': '0',
          'commentCount': '96'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4\'',
        'id': 'VAkio68d51A',
        'snippet': {
          'publishedAt': '2019-02-25T00:09:23.000Z',
          'channelId': 'UCZ9qFEC82qM6Pk-54Q4TVWA',
          'title': 'What is Angular? (Explained for Beginners)',
          'description': 'When youre just starting out you are' + ' probably wondering "What is Angular exactly?' + ' When you ask that question it leads to a lot of' + ' concepts that are over your head and dont make ' + 'sense. So in this video I really want to cover ' + 'what exactly Angular is and why its even necessary... ' + 'all from a beginners point of view.\n\n*** DOWNLOAD ' + 'THE FREE REPORT ***\nFor my free report on the five ' + 'best programming languages in 2019 (for beginners) ' + 'go to: https://andysterkowitz.com/report',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Andy Sterkowitz',
          'tags': ['angular', 'angular 7', 'angularjs', 'learn angular', 'angular.js', 'angular tutorial for beginners', 'angular for beginners', 'angular for dummies', 'what is angular', 'what is angular 7', 'angular2', 'angular 2', 'javascript', 'front end framework', 'web development', 'web development 2019', 'front end framework 2019', 'what is a front end framework', 'software development', 'programming', 'front end software developer', 'web developer'],
          'categoryId': '28',
          'liveBroadcastContent': 'none',
          'defaultLanguage': 'en',
          'localized': {
            'title': 'What is Angular? (Explained for Beginners)',
            'description': 'When you"re just starting out you' + ' are probably wondering \'What is Angular exactly? When ' + 'you ask that question it leads to a lot of ' + 'concepts that are over your head and dont make sense. So in ' + 'this video I really want to cover what exactly' + ' Angular is and why its even necessary... all from a' + ' beginners point of view.\n\n*** DOWNLOAD THE' + ' FREE REPORT ***\nFor my free report on the five best' + ' programming languages in 2019 (for beginners) ' + 'go to: https://andysterkowitz.com/report'
          },
          'defaultAudioLanguage': 'en'
        },
        'statistics': {
          'viewCount': '57997',
          'likeCount': '1662',
          'dislikeCount': '34',
          'favoriteCount': '0',
          'commentCount': '114'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg\'',
        'id': 'u1VCxpvDgsk',
        'snippet': {
          'publishedAt': '2018-12-01T15:00:05.000Z',
          'channelId': 'UCvuY904el7JvBlPbdqbfguw',
          'title': 'Уроки Angular для начинающих / #1 - Введение в Angular',
          'description': 'Приступаем к изучению библиотеки' + ' Angular. В ходе курса мы создадим небольшой' + ' сайт и научимся всем основным концепциям' + ' библиотеки Angular. Мы рассмотрим события, компоненты,' + ' создание форм и многое другое, чтобы вы в' + ' дальнейшем сами могли создавать веб сайты на Angular.' + '\n\n1) Курс на сайте itProger: ' + 'https://itproger.com/course/angular\n2) Node JS: https://nodejs.org/\n3) ' + 'Редактор кода: https://atom.io/\n4) Angular ' + 'CLI: https://cli.angular.io/\n\n✔ Сообщество программистов:' + ' https://itproger.com/\n\n✔ ------------' + '-\nВступай в группу Вк - https://vk.com/prog_life 🚀\nГруппа' + ' FaceBook - https://goo.gl/XW0aaP\n\nInstagram: ' + 'https://www.instagram.com/gosha_dudar/\nTelegram:' + ' http://t.me/itProger_official\nTwitter - ' + 'https://twitter.com/GoshaDudar\n\n- Уроки от #GoshaDudar 👨' + "\uD83C\uDFFC\u200D\uD83D\uDCBB\n- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular",
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Гоша Дударь',
          'tags': ['angular', 'angular 6', 'angular уроки', 'angular node js', 'angularjs', 'angularjs уроки', 'для начинающих', 'angular уроки на русском', 'Введение в Angular', 'что такое angular', 'установка angular', '#GoshaDudar', '#goshaAngular'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'defaultLanguage': 'ru',
          'localized': {
            'title': 'Уроки Angular для начинающих / #1 - ' + 'Введение в Angular',
            'description': 'Приступаем к изучению ' + 'библиотеки Angular. В ходе курса мы создадим небольшой ' + 'сайт и научимся всем основным концепциям' + ' библиотеки Angular. Мы рассмотрим события, компоненты,' + ' создание форм и многое другое, чтобы ' + 'вы в дальнейшем сами могли создавать веб сайты ' + 'на Angular.\n\n1) Курс на сайте itProger:' + ' https://itproger.com/course/angular\n2) Node' + ' JS: https://nodejs.org/\n3) Редактор кода:' + ' https://atom.io/\n4) Angular CLI:' + ' https://cli.angular.io/\n\n✔ Сообщество' + ' программистов: https://itproger.com/\n\n✔ ' + '-------------\nВступай в группу Вк - ' + 'https://vk.com/prog_life 🚀\nГруппа FaceBook - ' + 'https://goo.gl/XW0aaP\n\nInstagram: ' + 'https://www.instagram.com/gosha_dudar/\nTelegram:' + ' http://t.me/itProger_official\nTwitter ' + '- https://twitter.com/GoshaDudar\n\n- ' + "\u0423\u0440\u043E\u043A\u0438 \u043E\u0442 #GoshaDudar \uD83D\uDC68\uD83C\uDFFC\u200D\uD83D\uDCBB\n- " + 'Все уроки по хештегу #goshaAngular'
          },
          'defaultAudioLanguage': 'ru'
        },
        'statistics': {
          'viewCount': '33896',
          'likeCount': '612',
          'dislikeCount': '37',
          'favoriteCount': '0',
          'commentCount': '50'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME\'',
        'id': 'rc3E4tplFCU',
        'snippet': {
          'publishedAt': '2019-10-29T15:00:14.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 40 вопросов для собеседования',
          'description': 'Полный курс по Angular 8+:' + '\nhttps://clc.to/angular\n\nДобавляйте меня в' + ' ВК: https://vk.com/vladilen.minin\n' + 'Группа ВК: https://vk.com/js_by_vladilen\nTelegram:' + ' https://teleg.one/js_by_vladilen\nI' + 'nstagram: https://www.instagram.com/vladilen.minin' + '\n\nПоддержать выпуск новых видео:\nЯД:' + ' https://money.yandex.ru/to/410013757655670\nPayPal:' + ' https://www.paypal.me/vladilenm \n\n' + 'Angular 40 вопросов для собеседования. Подготовка к интервью',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/rc3E4tplFCU/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angularjs', 'js', 'javascript', 'уроки angular', 'angular уроки', 'angular 8', 'курс angular', 'angular основы', 'владилен', 'владилен минин', 'минин', 'основы angular', 'angular вопросы', 'angular интервью', 'собеседование', 'angular собеседование', 'вопросы на собеседование', 'angular 6', 'angular для начинающих', 'angular уроки на русском'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 40 вопросов для собеседования',
            'description': 'Полный курс по Angular 8+' + ':\nhttps://clc.to/angular\n\nДобавляйте меня в ' + 'ВК: https://vk.com/vladilen.minin\nГруппа ' + 'ВК: https://vk.com/js_by_vladilen\nTelegram:' + ' https://teleg.one/js_by_vladilen\nInstagram: ' + 'https://www.instagram.com/vladilen.minin' + '\n\nПоддержать выпуск новых видео:\nЯД: ' + 'https://money.yandex.ru/to/410013757655670\nPayPal:' + ' https://www.paypal.me/vladilenm \n\nAngular ' + '40 вопросов для собеседования. Подготовка к интервью'
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '6824',
          'likeCount': '595',
          'dislikeCount': '10',
          'favoriteCount': '0',
          'commentCount': '126'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg\'',
        'id': 'NaZwVUHnmfE',
        'snippet': {
          'publishedAt': '2019-06-19T16:06:13.000Z',
          'channelId': 'UCg8ss4xW9jASrqWGP30jXiw',
          'title': 'Angular 8 + RxJS. Приложение Органайзер ' + 'С Нуля (Для Опытных!)',
          'description': 'Курс по Angular 8+: \nhttps://clc.to/angular ' + '\n\nДобавляйте меня в' + ' ВК: https://vk.com/vladilen.minin\nTelegram:' + ' https://teleg.one/js_by_vladilen\nInstagram:' + ' https://www.instagram.com/vladilen.minin\nГруппа ' + 'ВК: https://vk.com/js_by_vladilen\n\nПоддержать' + ' выпуск новых видео:\nЯД: ' + 'https://money.yandex.ru/to/410013757655670\nPayPal:' + ' https://www.paypal.me/vladilenm \n\nВ ' + 'видео я покажу разработку приложения органайзера ' + 'с нуля.\nВ видео я не буду пояснять базовые ' + 'моменты, так как это практика для опытных ' + 'разработчиков\n\nВ результате вы получите ' + 'приложение, в котором будет использоваться ' + 'много RxJS, Firebase, MomentJS и Angular' + ' 8\nНе будет никаких CSS фреймворков - все стили ' + 'будут написаны с нуля с использованием CSS ' + 'переменных\n\nИсходный код:\nhttps://github.com' + '/vladilenm/angular-organizer\n\nAngular 8 + ' + 'RxJS. Приложение Целиком (Для Опытных!)\nhttps:' + '//youtu.be/NaZwVUHnmfE',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/NaZwVUHnmfE/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Владилен Минин',
          'tags': ['angular', 'angular 8', 'vladilen', 'владилен', 'владилен минин', 'angularjs', 'angular практика', 'уроки angular', 'rxjs', 'rxjs уроки', 'momentjs', 'js', 'javascript', 'web', 'frontend', 'ангуляр', 'angular уроки', 'angular уроки для начинающих', 'создание приложения на angular 4', 'angular 60 минут', 'изучение angular', 'angular 6', 'ангуляр 7 уроки', 'реактивное программирование'],
          'categoryId': '27',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular 8 + RxJS. Приложение Органайзер ' + 'С Нуля (Для Опытных!)',
            'description': 'Курс по Angular 8+: ' + '\nhttps://clc.to/angular \n\nДобавляйте меня в ВК:' + ' https://vk.com/vladilen.minin\nTelegram: ' + 'https://teleg.one/js_by_vladilen\nInstagram:' + ' https://www.instagram.com/vladilen.minin\nГруппа ' + 'ВК: https://vk.com/js_by_vladilen\n\n' + 'Поддержать выпуск новых видео:\nЯД: ' + 'https://money.yandex.ru/to/410013757655670\nPayPal:' + ' https://www.paypal.me/vladilenm \n\nВ видео' + ' я покажу разработку приложения органайзера' + ' с нуля.\nВ видео я не буду пояснять базовые ' + 'моменты, так как это практика для опытных' + ' разработчиков\n\nВ результате вы получите ' + 'приложение, в котором будет использоваться много ' + 'RxJS, Firebase, MomentJS и Angular 8\nНе будет ' + 'никаких CSS фреймворков - все стили будут ' + 'написаны с нуля с использованием CSS переменных' + '\n\nИсходный код:\nhttps://github.com/vladilenm/' + 'angular-organizer\n\nAngular 8 + RxJS. Приложение' + ' Целиком (Для Опытных!)\nhttps://youtu.be/NaZwVUHnmfE'
          },
          'defaultAudioLanguage': 'en-US'
        },
        'statistics': {
          'viewCount': '12128',
          'likeCount': '665',
          'dislikeCount': '11',
          'favoriteCount': '0',
          'commentCount': '156'
        }
      }, {
        'kind': 'youtube#video',
        'etag': '\'Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o\'',
        'id': 'G0bBLvWXBvc',
        'snippet': {
          'publishedAt': '2019-09-16T16:53:41.000Z',
          'channelId': 'UCsBjURrPoezykLs9EqgamOA',
          'title': 'Angular for Beginners - Lets build a ' + 'Tic-Tac-Toe PWA',
          'description': 'Learn the basics of Angular 8 🚀' + ' by building a tic-tac-toe game 🕹️ from scratch...' + 'Then deploy it as an installable progressive ' + 'web app (PWA). Go beyond the basics ' + '👉https://fireship.io/courses/angular/\n\nFull ' + 'Source Code: ' + 'https://github.com/fireship-io/angular-tic-tac-toe' + '\nAngular Docs: https://angular.io/\n\n#angular ' + '#pwa #tutorial\n\nTake Angular quizzes ' + '🤓\n\niOS https://itunes.apple.com/us/app/fireship' + 'id1462592372?mt=8\nAndroid' + ' https://play.google.com/store/apps/details?id=io.' + 'fireship.quizapp\n\nUpgrade to ' + 'Fireship PRO at https://fireship.io/pro\nUse code ' + 'lORhwXd2 for 25% off your first payment.',
          'thumbnails': {
            'default': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg',
              'width': 120,
              'height': 90
            },
            'medium': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg',
              'width': 320,
              'height': 180
            },
            'high': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg',
              'width': 480,
              'height': 360
            },
            'standard': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg',
              'width': 640,
              'height': 480
            },
            'maxres': {
              'url': 'https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg',
              'width': 1280,
              'height': 720
            }
          },
          'channelTitle': 'Fireship',
          'tags': ['webdev', 'app development', 'lesson', 'tutorial', 'beginners', 'beginner', 'basic', 'angular tutorial', 'angular basics', 'angular for beginners', 'angular 8', 'angular components', 'learn angular'],
          'categoryId': '28',
          'liveBroadcastContent': 'none',
          'localized': {
            'title': 'Angular for Beginners - Let"s build a Tic-Tac-Toe PWA',
            'description': 'Learn the basics of Angular 8 🚀 by' + ' building a tic-tac-toe game 🕹️' + ' from scratch...Then deploy it as an installable ' + 'progressive web app (PWA). Go ' + 'beyond the basics ' + '👉https://fireship.io/courses/angular/\n\nFull Source Code:' + ' https://github.com/fireship-io/angular-tic-tac-toe\n' + 'Angular Docs:' + ' https://angular.io/\n\n#angular #pwa #tutorial\n\nTake' + ' Angular quizzes ' + '🤓\n\niOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=' + '8\nAndroid' + ' https://play.google.com/store/apps/details?id=io.fire' + 'ship.quizapp\n\nUpgrade to' + ' Fireship PRO at https://fireship.io/pro\nUse code lOR' + 'hwXd2 for 25% off your first payment.'
          },
          'defaultAudioLanguage': 'en'
        },
        'statistics': {
          'viewCount': '56657',
          'likeCount': '2092',
          'dislikeCount': '36',
          'favoriteCount': '0',
          'commentCount': '128'
        }
      }]
    };
    /***/
  },

  /***/
  "./src/app/pipes/sort.pipe.ts":
  /*!************************************!*\
    !*** ./src/app/pipes/sort.pipe.ts ***!
    \************************************/

  /*! exports provided: SortPipe */

  /***/
  function srcAppPipesSortPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SortPipe", function () {
      return SortPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SortPipe =
    /*#__PURE__*/
    function () {
      function SortPipe() {
        _classCallCheck(this, SortPipe);
      }

      _createClass(SortPipe, [{
        key: "transform",
        value: function transform(value, sortBy, words) {
          if (value && value.length) {
            var result;

            if (words) {
              result = value.filter(function (item) {
                return item.snippet.title.indexOf(words) > -1;
              });
            } else {
              result = value;
            }

            if (sortBy === 'date') {
              result.sort(function (a, b) {
                return Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt);
              });
            } else if (sortBy === 'view') {
              result.sort(function (a, b) {
                return +b.statistics.viewCount - +a.statistics.viewCount;
              });
            }

            return result;
          }
        }
      }]);

      return SortPipe;
    }();

    SortPipe.ɵfac = function SortPipe_Factory(t) {
      return new (t || SortPipe)();
    };

    SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "sort",
      type: SortPipe,
      pure: false
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'sort',
          pure: false
        }]
      }], null, null);
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

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
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
    /*! D:\Angular\youtube-client\youtube-client\app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map