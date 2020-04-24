(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src='assets/icon/vscode.png' alt='Mango Project Logo'>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n\r\n    <ion-slide>\r\n        <!--<app-logo></app-logo>-->\r\n        <img src='assets/icon/kubernetes.png' alt='Mango Project Logo'>\r\n        <h1>Welcome to HelloWorld</h1>\r\n        <p>My First App</p>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img src='assets/icon/ionic.png' alt=\"Ionic\">\r\n        <img src='assets/icon/angular.png' alt=\"Angular\">\r\n        <h1>Made ON Ionic & Angular </h1>\r\n    </ion-slide>\r\n    <ion-slide>\r\n        <img src='assets/icon/git.png' alt=\"Git\">\r\n        <h1>Backed up by GIT</h1>\r\n    </ion-slide>\r\n</ion-slides>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\" share=\"round\" color=\"myapp\" (click)=\"navigateToLoginPage()\">\r\n    Start</ion-button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/welcome/welcome.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/welcome/welcome.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\r\n    <ion-toolbar>\r\n        <ion-title>welcome</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>-->\r\n<ion-content>\r\n    <app-slides></app-slides>\r\n    <app-start></app-start>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _slides_slides_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slides/slides.component */ "./src/app/components/slides/slides.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./start/start.component */ "./src/app/components/start/start.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/components/logo/logo.component.ts");








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"]],
        exports: [_slides_slides_component__WEBPACK_IMPORTED_MODULE_3__["SlidesComponent"], _start_start_component__WEBPACK_IMPORTED_MODULE_4__["StartComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_7__["LogoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/logo/logo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/logo/logo.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 160px 20px 160px 20px;\n  display: block; }\n  ion-slide img {\n    width: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dvL0Y6XFxfX19fX19fX0xlYXJuaW5nX19fX19fX19cXFdvcmtTcGFjZSAtLS0tIE1hbmdvIEZyb250IEVuZFxcTWFuZ28tSW9uaWMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ29cXGxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIsY0FBYyxFQUFBO0VBRmxCO0lBSVEsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dvL2xvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tc2xpZGUge1xyXG4gICAgcGFkZGluZzogMTYwcHggMjBweCAxNjBweCAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/logo/logo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/logo/logo.component.ts ***!
  \***************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    constructor() { }
    ngOnInit() { }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/logo/logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo.component.scss */ "./src/app/components/logo/logo.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LogoComponent);



/***/ }),

/***/ "./src/app/components/slides/slides.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/slides/slides.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-slide {\n  padding: 160px 20px 160px 20px;\n  display: block; }\n  ion-slide img {\n    width: 100px; }\n  ion-slide h2 {\n    font-size: 36px;\n    font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvRjpcXF9fX19fX19fTGVhcm5pbmdfX19fX19fX1xcV29ya1NwYWNlIC0tLS0gTWFuZ28gRnJvbnQgRW5kXFxNYW5nby1Jb25pYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2xpZGVzXFxzbGlkZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBOEI7RUFDOUIsY0FBYyxFQUFBO0VBRmxCO0lBSVEsWUFBWSxFQUFBO0VBSnBCO0lBT1EsZUFBZTtJQUNmLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXMvc2xpZGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXNsaWRlIHtcclxuICAgIHBhZGRpbmc6IDE2MHB4IDIwcHggMTYwcHggMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/slides/slides.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/slides/slides.component.ts ***!
  \*******************************************************/
/*! exports provided: SlidesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesComponent", function() { return SlidesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SlidesComponent = class SlidesComponent {
    constructor() {
        // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
        this.slideOpts = {
            initialSlide: 0,
            speed: 400
        };
    }
    ngOnInit() { }
};
SlidesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slides',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slides.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/slides/slides.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slides.component.scss */ "./src/app/components/slides/slides.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SlidesComponent);



/***/ }),

/***/ "./src/app/components/start/start.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/start/start.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  margin: 10px;\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdGFydC9GOlxcX19fX19fX19MZWFybmluZ19fX19fX19fXFxXb3JrU3BhY2UgLS0tLSBNYW5nbyBGcm9udCBFbmRcXE1hbmdvLUlvbmljL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzdGFydFxcc3RhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdGFydC9zdGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/start/start.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/start/start.component.ts ***!
  \*****************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let StartComponent = class StartComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToLoginPage() {
        this.router.navigate(['/login']);
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-start',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/start/start.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.scss */ "./src/app/components/start/start.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], StartComponent);



/***/ }),

/***/ "./src/app/page/welcome/welcome-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/page/welcome/welcome-routing.module.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageRoutingModule", function() { return WelcomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./welcome.page */ "./src/app/page/welcome/welcome.page.ts");




const routes = [
    {
        path: '',
        component: _welcome_page__WEBPACK_IMPORTED_MODULE_3__["WelcomePage"]
    }
];
let WelcomePageRoutingModule = class WelcomePageRoutingModule {
};
WelcomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WelcomePageRoutingModule);



/***/ }),

/***/ "./src/app/page/welcome/welcome.module.ts":
/*!************************************************!*\
  !*** ./src/app/page/welcome/welcome.module.ts ***!
  \************************************************/
/*! exports provided: WelcomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./welcome-routing.module */ "./src/app/page/welcome/welcome-routing.module.ts");
/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome.page */ "./src/app/page/welcome/welcome.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let WelcomePageModule = class WelcomePageModule {
};
WelcomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _welcome_routing_module__WEBPACK_IMPORTED_MODULE_5__["WelcomePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_welcome_page__WEBPACK_IMPORTED_MODULE_6__["WelcomePage"]]
    })
], WelcomePageModule);



/***/ }),

/***/ "./src/app/page/welcome/welcome.page.scss":
/*!************************************************!*\
  !*** ./src/app/page/welcome/welcome.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Uvd2VsY29tZS93ZWxjb21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/page/welcome/welcome.page.ts":
/*!**********************************************!*\
  !*** ./src/app/page/welcome/welcome.page.ts ***!
  \**********************************************/
/*! exports provided: WelcomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePage", function() { return WelcomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomePage = class WelcomePage {
    constructor() { }
    ngOnInit() {
    }
};
WelcomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/welcome/welcome.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.page.scss */ "./src/app/page/welcome/welcome.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WelcomePage);



/***/ })

}]);
//# sourceMappingURL=page-welcome-welcome-module-es2015.js.map