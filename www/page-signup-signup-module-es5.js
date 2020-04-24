function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/page/signup/signup.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/signup/signup.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPageSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n    <ion-header>\r\n        <ion-toolbar>\r\n            <div class=\"center\">\r\n                <img src=\"assets/icon/kubernetes_small.png\" alt=\"app-logo\">\r\n                <h1 color=\"myapp\">Welcome to HelloWorld</h1>\r\n            </div>\r\n        </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content padding=\"true\">\r\n        <form>\r\n            <ion-list>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Email ID</ion-label>\r\n                    <ion-input name=\"email\" clearInput value=\"clear me\" type='text' required [(ngModel)]=\"postData.email\"></ion-input>\r\n                </ion-item><br>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\">Username</ion-label>\r\n                    <ion-input name=\"user\" clearInput value=\"clear me\" type='text' required [(ngModel)]=\"postData.username\"></ion-input>\r\n                </ion-item><br>\r\n                <ion-item>\r\n                    <ion-label position=\"floating\" clearInput value=\"clear me \">Password</ion-label>\r\n                    <ion-input name=\"pass\" clearInput value=\"clear me\" type='password' required [(ngModel)]=\"postData.password \"></ion-input>\r\n                </ion-item><br>\r\n                <ion-button expand=\"block \" shape=\"round \" color=\"myapp\" (click)=\"signAction() \">Sign Up</ion-button>\r\n                <ion-item lines=\"none \">\r\n                    <a routerLink=\"/login\">Have an account?</a>\r\n                </ion-item>\r\n            </ion-list>\r\n        </form>\r\n    </ion-content>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/page/signup/signup-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/page/signup/signup-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: SignupPageRoutingModule */

  /***/
  function srcAppPageSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
      return SignupPageRoutingModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/page/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }];

    var SignupPageRoutingModule = function SignupPageRoutingModule() {
      _classCallCheck(this, SignupPageRoutingModule);
    };

    SignupPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SignupPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/page/signup/signup.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/page/signup/signup.module.ts ***!
    \**********************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppPageSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-routing.module */
    "./src/app/page/signup/signup-routing.module.ts");
    /* harmony import */


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/page/signup/signup.page.ts");

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/page/signup/signup.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/page/signup/signup.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPageSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/page/signup/signup.page.ts":
  /*!********************************************!*\
    !*** ./src/app/page/signup/signup.page.ts ***!
    \********************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppPageSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
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
    /*! ../../config/auth-constants */
    "./src/app/config/auth-constants.ts");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../services/storage.service */
    "./src/app/services/storage.service.ts");
    /* harmony import */


    var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../services/toast.service */
    "./src/app/services/toast.service.ts");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage(authService, storageService, router, toastService) {
        _classCallCheck(this, SignupPage);

        this.authService = authService;
        this.storageService = storageService;
        this.router = router;
        this.toastService = toastService;
        this.postData = {
          username: '',
          email: '',
          password: ''
        };
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "validateInputs",
        value: function validateInputs() {
          var username = this.postData.username.trim();
          var password = this.postData.password.trim();
          var email = this.postData.email.trim();
          return this.postData.username && this.postData.password && this.postData.email && username.length > 0 && password.length > 0 && email.length > 0;
        }
      }, {
        key: "signAction",
        value: function signAction() {
          var _this = this;

          if (this.validateInputs()) {
            console.log(this.postData);
            this.authService.signup(this.postData).subscribe(function (res) {
              if (res.userData) {
                // Storing the User data.
                _this.storageService.store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData).then(function (res) {
                  _this.router.navigate(['home/feed']);
                });
              } else {
                _this.toastService.presentToast('Data already exists, please enter new details');
              }
            }, function (error) {
              _this.toastService.presentToast('Network Issue');
            });
          } else {
            this.toastService.presentToast('Please enter username or password.');
          }
        }
      }]);

      return SignupPage;
    }();

    SignupPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]
      }];
    };

    SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/page/signup/signup.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/page/signup/signup.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=page-signup-signup-module-es5.js.map