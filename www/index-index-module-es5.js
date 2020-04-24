function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-index-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppIndexIndexPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>index</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>-->\r\n<ion-content>\r\n    <router-outlet></router-outlet>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/guards/index.guard.ts":
  /*!***************************************!*\
    !*** ./src/app/guards/index.guard.ts ***!
    \***************************************/

  /*! exports provided: IndexGuard */

  /***/
  function srcAppGuardsIndexGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexGuard", function () {
      return IndexGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/auth-constants */
    "./src/app/config/auth-constants.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/storage.service */
    "./src/app/services/storage.service.ts");

    var IndexGuard = /*#__PURE__*/function () {
      function IndexGuard(storageService, router) {
        _classCallCheck(this, IndexGuard);

        this.storageService = storageService;
        this.router = router;
      }

      _createClass(IndexGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storageService.get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH).then(function (res) {
              if (res) {
                _this.router.navigate(['home/feed']);

                resolve(false);
              } else resolve(true);
            })["catch"](function (err) {
              resolve(true);
            });
          });
        }
      }]);

      return IndexGuard;
    }();

    IndexGuard.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    IndexGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], IndexGuard);
    /***/
  },

  /***/
  "./src/app/index/index.module.ts":
  /*!***************************************!*\
    !*** ./src/app/index/index.module.ts ***!
    \***************************************/

  /*! exports provided: IndexPageModule */

  /***/
  function srcAppIndexIndexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageModule", function () {
      return IndexPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _index_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/index/index.page.ts");
    /* harmony import */


    var _index_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./index.router */
    "./src/app/index/index.router.ts");

    var IndexPageModule = function IndexPageModule() {
      _classCallCheck(this, IndexPageModule);
    };

    IndexPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _index_router__WEBPACK_IMPORTED_MODULE_6__["IndexPageRouter"]],
      declarations: [_index_page__WEBPACK_IMPORTED_MODULE_5__["IndexPage"]]
    })], IndexPageModule);
    /***/
  },

  /***/
  "./src/app/index/index.page.scss":
  /*!***************************************!*\
    !*** ./src/app/index/index.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppIndexIndexPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/index/index.page.ts":
  /*!*************************************!*\
    !*** ./src/app/index/index.page.ts ***!
    \*************************************/

  /*! exports provided: IndexPage */

  /***/
  function srcAppIndexIndexPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPage", function () {
      return IndexPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndexPage = /*#__PURE__*/function () {
      function IndexPage() {
        _classCallCheck(this, IndexPage);
      }

      _createClass(IndexPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndexPage;
    }();

    IndexPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-index',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./index.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/index/index.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./index.page.scss */
      "./src/app/index/index.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IndexPage);
    /***/
  },

  /***/
  "./src/app/index/index.router.ts":
  /*!***************************************!*\
    !*** ./src/app/index/index.router.ts ***!
    \***************************************/

  /*! exports provided: IndexPageRouter */

  /***/
  function srcAppIndexIndexRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndexPageRouter", function () {
      return IndexPageRouter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guards_index_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../guards/index.guard */
    "./src/app/guards/index.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _index_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index.page */
    "./src/app/index/index.page.ts");

    var routes = [{
      path: '',
      component: _index_page__WEBPACK_IMPORTED_MODULE_4__["IndexPage"],
      canActivate: [_guards_index_guard__WEBPACK_IMPORTED_MODULE_1__["IndexGuard"]],
      children: [{
        path: 'welcome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | page-welcome-welcome-module */
          "page-welcome-welcome-module").then(__webpack_require__.bind(null,
          /*! ../page/welcome/welcome.module */
          "./src/app/page/welcome/welcome.module.ts")).then(function (m) {
            return m.WelcomePageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | page-login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("page-login-login-module")]).then(__webpack_require__.bind(null,
          /*! ../page/login/login.module */
          "./src/app/page/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | page-signup-signup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("page-signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ../page/signup/signup.module */
          "./src/app/page/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: '/',
        redirectTo: '/welcome',
        pathMatch: 'full'
      }]
    }];

    var IndexPageRouter = function IndexPageRouter() {
      _classCallCheck(this, IndexPageRouter);
    };

    IndexPageRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], IndexPageRouter);
    /***/
  }
}]);
//# sourceMappingURL=index-index-module-es5.js.map