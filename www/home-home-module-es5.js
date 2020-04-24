function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs>\r\n\r\n    <ion-tab-bar slot=\"bottom\" color=\"dark\">\r\n        <ion-tab-button tab=\"feed\">\r\n            <ion-icon name=\"paper\"></ion-icon>\r\n            <ion-label>Feed</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"messages\">\r\n            <ion-icon name=\"send\"></ion-icon>\r\n            <ion-label>Messages</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"notifications\">\r\n            <ion-icon name=\"notifications\"></ion-icon>\r\n            <ion-label>Contact</ion-label>\r\n        </ion-tab-button>\r\n\r\n        <ion-tab-button tab=\"settings\">\r\n            <ion-icon name=\"cog\"></ion-icon>\r\n            <ion-label>Settings</ion-label>\r\n        </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/guards/home.guard.ts":
  /*!**************************************!*\
    !*** ./src/app/guards/home.guard.ts ***!
    \**************************************/

  /*! exports provided: HomeGuard */

  /***/
  function srcAppGuardsHomeGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeGuard", function () {
      return HomeGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _config_auth_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../config/auth-constants */
    "./src/app/config/auth-constants.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HomeGuard = /*#__PURE__*/function () {
      function HomeGuard(storageService, router) {
        _classCallCheck(this, HomeGuard);

        this.storageService = storageService;
        this.router = router;
      }

      _createClass(HomeGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this = this;

          return new Promise(function (resolve) {
            _this.storageService.get(_config_auth_constants__WEBPACK_IMPORTED_MODULE_2__["AuthConstants"].AUTH).then(function (res) {
              if (res) {
                resolve(true);
              } else {
                _this.router.navigate(['login']);

                resolve(false);
              }
            })["catch"](function (err) {
              resolve(false);
            });
          });
        }
      }]);

      return HomeGuard;
    }();

    HomeGuard.ctorParameters = function () {
      return [{
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    HomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_storage_service__WEBPACK_IMPORTED_MODULE_1__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], HomeGuard);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _home_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.router */
    "./src/app/home/home.router.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_router__WEBPACK_IMPORTED_MODULE_5__["HomePageRouter"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  },

  /***/
  "./src/app/home/home.router.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.router.ts ***!
    \*************************************/

  /*! exports provided: HomePageRouter */

  /***/
  function srcAppHomeHomeRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRouter", function () {
      return HomePageRouter;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _guards_home_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../guards/home.guard */
    "./src/app/guards/home.guard.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../resolvers/userData.resolver */
    "./src/app/resolvers/userData.resolver.ts");

    var routes = [{
      path: 'home',
      component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"],
      canActivate: [_guards_home_guard__WEBPACK_IMPORTED_MODULE_1__["HomeGuard"]],
      resolve: {
        userData: _resolvers_userData_resolver__WEBPACK_IMPORTED_MODULE_5__["UserDataResolver"]
      },
      children: [{
        path: 'feed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | page-feed-feed-module */
          "page-feed-feed-module").then(__webpack_require__.bind(null,
          /*! ../page/feed/feed.module */
          "./src/app/page/feed/feed.module.ts")).then(function (m) {
            return m.FeedPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | page-settings-settings-module */
          "page-settings-settings-module").then(__webpack_require__.bind(null,
          /*! ../page/settings/settings.module */
          "./src/app/page/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'messages',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | page-messages-messages-module */
          "page-messages-messages-module").then(__webpack_require__.bind(null,
          /*! ../page/messages/messages.module */
          "./src/app/page/messages/messages.module.ts")).then(function (m) {
            return m.MessagesPageModule;
          });
        }
      }, {
        path: 'notifications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | page-notifications-notifications-module */
          "page-notifications-notifications-module").then(__webpack_require__.bind(null,
          /*! ../page/notifications/notifications.module */
          "./src/app/page/notifications/notifications.module.ts")).then(function (m) {
            return m.NotificationsPageModule;
          });
        }
      }, {
        path: '',
        redirectTo: '/home/feed',
        pathMatch: 'full'
      }]
    }];

    var HomePageRouter = function HomePageRouter() {
      _classCallCheck(this, HomePageRouter);
    };

    HomePageRouter = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], HomePageRouter);
    /***/
  },

  /***/
  "./src/app/resolvers/userData.resolver.ts":
  /*!************************************************!*\
    !*** ./src/app/resolvers/userData.resolver.ts ***!
    \************************************************/

  /*! exports provided: UserDataResolver */

  /***/
  function srcAppResolversUserDataResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserDataResolver", function () {
      return UserDataResolver;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/services/auth.service.ts");

    var UserDataResolver = /*#__PURE__*/function () {
      function UserDataResolver(authService) {
        _classCallCheck(this, UserDataResolver);

        this.authService = authService;
      }

      _createClass(UserDataResolver, [{
        key: "resolve",
        value: function resolve() {
          console.log('Hello');
          return this.authService.getUserData();
        }
      }]);

      return UserDataResolver;
    }();

    UserDataResolver.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    UserDataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])], UserDataResolver);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map