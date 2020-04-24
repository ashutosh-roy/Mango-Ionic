(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/login.page.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/login.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n    <ion-toolbar>\r\n        <div class=\"center\">\r\n            <img src=\"assets/icon/kubernetes_small.png\" alt=\"app-logo\">\r\n            <h1 color=\"myapp\">Welcome to HelloWorld</h1>\r\n        </div>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <form>\r\n        <ion-list>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Username</ion-label>\r\n                <ion-input name=\"user\" type='text' required [(ngModel)]=\"postData.username\"></ion-input>\r\n            </ion-item><br>\r\n            <ion-item>\r\n                <ion-label position=\"floating\">Password</ion-label>\r\n                <ion-input name=\"pass\" type='password' required [(ngModel)]=\"postData.password\"></ion-input>\r\n            </ion-item><br>\r\n            <ion-button expand=\"block\" shape=\"round\" color=\"myapp\" (click)=\"loginAction()\">Sign In</ion-button>\r\n            <ion-item lines=\"none\">\r\n                <a routerLink=\"/signup\">Create Account</a>\r\n            </ion-item>\r\n        </ion-list>\r\n    </form>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/page/login/login-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/page/login/login-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/page/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/page/login/login.module.ts":
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/page/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/page/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/page/login/login.page.scss":
/*!********************************************!*\
  !*** ./src/app/page/login/login.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/page/login/login.page.ts":
/*!******************************************!*\
  !*** ./src/app/page/login/login.page.ts ***!
  \******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _config_auth_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/auth-constants */ "./src/app/config/auth-constants.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");







let LoginPage = class LoginPage {
    constructor(router, authService, storageService, toastService) {
        this.router = router;
        this.authService = authService;
        this.storageService = storageService;
        this.toastService = toastService;
        this.postData = {
            username: '',
            password: ''
        };
    }
    ngOnInit() { }
    validateInputs() {
        let username = this.postData.username.trim();
        let password = this.postData.password.trim();
        return (this.postData.username &&
            this.postData.password &&
            username.length > 0 &&
            password.length > 0);
    }
    loginAction() {
        if (this.validateInputs()) {
            this.authService.login(this.postData).subscribe((res) => {
                if (res.userData) {
                    // Storing the User data.
                    this.storageService.store(_config_auth_constants__WEBPACK_IMPORTED_MODULE_3__["AuthConstants"].AUTH, res.userData);
                    this.router.navigate(['home/feed']);
                }
                else {
                    this.toastService.presentToast('Incorrect username and password.');
                }
            }, (error) => {
                this.toastService.presentToast('Network Issue');
            });
        }
        else {
            this.toastService.presentToast('Please enter username or password.');
        }
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/page/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"],
        _services_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=page-login-login-module-es2015.js.map