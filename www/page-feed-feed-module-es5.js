function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-feed-feed-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page/feed/feed.page.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/feed/feed.page.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageFeedFeedPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<ion-header>\r\n    <ion-toolbar color=\"myapp\">\r\n        <ion-title>feed</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>-->\r\n\r\n<ion-content>\r\n    <div class=\"center\">\r\n        <h2 color=\"myapp\"> Welcome {{authUser?.username }}</h2>\r\n    </div>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/page/feed/feed-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/page/feed/feed-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: FeedPageRoutingModule */

  /***/
  function srcAppPageFeedFeedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageRoutingModule", function () {
      return FeedPageRoutingModule;
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


    var _feed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/page/feed/feed.page.ts");

    var routes = [{
      path: '',
      component: _feed_page__WEBPACK_IMPORTED_MODULE_3__["FeedPage"]
    }];

    var FeedPageRoutingModule = function FeedPageRoutingModule() {
      _classCallCheck(this, FeedPageRoutingModule);
    };

    FeedPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FeedPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/page/feed/feed.module.ts":
  /*!******************************************!*\
    !*** ./src/app/page/feed/feed.module.ts ***!
    \******************************************/

  /*! exports provided: FeedPageModule */

  /***/
  function srcAppPageFeedFeedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () {
      return FeedPageModule;
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


    var _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./feed-routing.module */
    "./src/app/page/feed/feed-routing.module.ts");
    /* harmony import */


    var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./feed.page */
    "./src/app/page/feed/feed.page.ts");

    var FeedPageModule = function FeedPageModule() {
      _classCallCheck(this, FeedPageModule);
    };

    FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feed_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedPageRoutingModule"]],
      declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
    })], FeedPageModule);
    /***/
  },

  /***/
  "./src/app/page/feed/feed.page.scss":
  /*!******************************************!*\
    !*** ./src/app/page/feed/feed.page.scss ***!
    \******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageFeedFeedPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvZmVlZC9mZWVkLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/page/feed/feed.page.ts":
  /*!****************************************!*\
    !*** ./src/app/page/feed/feed.page.ts ***!
    \****************************************/

  /*! exports provided: FeedPage */

  /***/
  function srcAppPageFeedFeedPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedPage", function () {
      return FeedPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FeedPage = /*#__PURE__*/function () {
      function FeedPage(auth) {
        _classCallCheck(this, FeedPage);

        this.auth = auth;
      }

      _createClass(FeedPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.auth.userData$.subscribe(function (res) {
            _this.authUser = res;
            console.log(_this.authUser);
          });
        }
      }]);

      return FeedPage;
    }();

    FeedPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }];
    };

    FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-feed',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feed.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page/feed/feed.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feed.page.scss */
      "./src/app/page/feed/feed.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])], FeedPage);
    /***/
  }
}]);
//# sourceMappingURL=page-feed-feed-module-es5.js.map