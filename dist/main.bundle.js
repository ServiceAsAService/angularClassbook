webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__teacher_teacher_component__ = __webpack_require__("../../../../../src/app/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class_class_component__ = __webpack_require__("../../../../../src/app/class/class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pupil_pupil_component__ = __webpack_require__("../../../../../src/app/pupil/pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_8__logout_logout_component__["a" /* LogoutComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'class', component: __WEBPACK_IMPORTED_MODULE_3__class_class_component__["a" /* ClassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'class/:id', component: __WEBPACK_IMPORTED_MODULE_3__class_class_component__["a" /* ClassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'teacher', component: __WEBPACK_IMPORTED_MODULE_2__teacher_teacher_component__["a" /* TeacherComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'teacher/:id', component: __WEBPACK_IMPORTED_MODULE_2__teacher_teacher_component__["a" /* TeacherComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'pupil', component: __WEBPACK_IMPORTED_MODULE_4__pupil_pupil_component__["a" /* PupilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'pupil/:id', component: __WEBPACK_IMPORTED_MODULE_4__pupil_pupil_component__["a" /* PupilComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'notes', component: __WEBPACK_IMPORTED_MODULE_5__notes_notes_component__["a" /* NotesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'notes/:id', component: __WEBPACK_IMPORTED_MODULE_5__notes_notes_component__["a" /* NotesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'notes/pupil/:pId', component: __WEBPACK_IMPORTED_MODULE_5__notes_notes_component__["a" /* NotesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]], data: [{ filter: 'pupil' }] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] },
    { path: 'landing-page', component: __WEBPACK_IMPORTED_MODULE_10__landing_page_landing_page_component__["a" /* LandingPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__login_service__["a" /* LoginService */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\r\n  margin-bottom: 2em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar sticky-top navbar-dark bg-dark container-fluid\">\r\n  <span class=\"navbar-left\">\r\n    <a class=\" navbar-brand\" routerLink=\"{{logoutVisible() ? '/dashboard' : '/'}}\">Klassenbuch</a>\r\n    <span *ngIf=\"dataService.getLoggedInUser() !== undefined\">\r\n      <a class=\"navbar-brand\" routerLink=\"{{'/teacher'}}\">Lehrer</a>\r\n      <a class=\"navbar-brand \" routerLink=\"{{'/pupil'}}\">Schüler</a>\r\n      <a class=\"navbar-brand\" routerLink=\"{{'/class'}}\">Klassen</a>\r\n      <a class=\"navbar-brand\" routerLink=\"{{'/notes'}}\">Einträge</a>\r\n    </span>\r\n  </span>\r\n  <div *ngIf=\"dataService.getLoggedInUser() !== undefined\" class=\"navbar-right\">\r\n    <div class=\"navbar-text text-center\">\r\n      Angemeldet als {{dataService.getTeacher(dataService.getLoggedInUser()).firstName}} {{dataService.getTeacher(dataService.getLoggedInUser()).lastName}}\r\n    </div>\r\n    <a (click)=\"logout()\" class=\"btn btn-outline-danger text-white\">Logout</a>\r\n  </div>\r\n\r\n</nav>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(loginService, dataService, router) {
        this.loginService = loginService;
        this.dataService = dataService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.logoutVisible = function () {
        var url = this.router.url;
        return !(url === '/login' || url == '/logout');
    };
    AppComponent.prototype.logout = function () {
        this.loginService.logOut();
        this.router.navigate(['login']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__teacher_teacher_component__ = __webpack_require__("../../../../../src/app/teacher/teacher.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__class_class_component__ = __webpack_require__("../../../../../src/app/class/class.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pupil_pupil_component__ = __webpack_require__("../../../../../src/app/pupil/pupil.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__notes_notes_component__ = __webpack_require__("../../../../../src/app/notes/notes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__logout_logout_component__ = __webpack_require__("../../../../../src/app/logout/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__teacher_teacher_component__["a" /* TeacherComponent */],
            __WEBPACK_IMPORTED_MODULE_7__class_class_component__["a" /* ClassComponent */],
            __WEBPACK_IMPORTED_MODULE_8__pupil_pupil_component__["a" /* PupilComponent */],
            __WEBPACK_IMPORTED_MODULE_9__notes_notes_component__["a" /* NotesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_15__landing_page_landing_page_component__["a" /* LandingPageComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_13__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_14__data_service__["a" /* DataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/class/class.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable td {\r\n  cursor: pointer;\r\n}\r\n\r\n.row-spacing {\r\n  margin-bottom: 1em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/class/class.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"overview()\">\r\n  <div class=\"container\">\r\n    <h1>Klassenübersicht</h1>\r\n    <div class=\"row row-spacing\">\r\n      <button class=\"btn btn-success\" (click)=\"add()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"table table-hover\">\r\n        <tr>\r\n          <th>Klassenname</th>\r\n          <th>Klassenstufe</th>\r\n          <th></th>\r\n        </tr>\r\n        <tr class=\"clickable\" *ngFor=\"let cl of dataService.getClassesVisible()\" routerLink=\"/class/{{cl.id}}\">\r\n          <td>{{cl.name}}</td>\r\n          <td>{{cl.grade}}</td>\r\n          <td>\r\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"delete(cl.id)\"></i>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <p>Zum Bearbeiten einfach auf eine Zeile klicken.</p>\r\n  </div>\r\n\r\n  <ng-template #addClass let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Klasse hinzufügen</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <form class=\"form-horizontal\" (ngSubmit)=\"update()\" #addClassForm=\"ngForm\">\r\n\r\n        <div class=\"form-group\" *ngIf=\"true; then classFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c(false)\">Abbrechen</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"c(true)\" [disabled]=\"formInvalid()\">Speichern</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!overview()\">\r\n  <div class=\"container\">\r\n    <h1>Klasse bearbeiten</h1>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"update(id)\" #modifyClassForm=\"ngForm\">\r\n\r\n      <div *ngIf=\"true; then classFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button class=\"btn btn-secondary\" routerLink=\"/class\">Abbrechen</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formInvalid()\">Ändern</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #deleteQuestion let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Wirklich löschen?</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c(false)\">Abbrechen</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c(true)\">Löschen</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #classFormTmpl>\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-4\" for=\"name\">Klassenname:</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" required [(ngModel)]=\"model.name\" name=\"name\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-4\" for=\"grade\">Klassenstufe:</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"number\" class=\"form-control\" id=\"grade\" required [(ngModel)]=\"model.grade\" name=\"grade\">\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/class/class.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassComponent = (function () {
    function ClassComponent(route, dataService, modalService, router) {
        this.route = route;
        this.dataService = dataService;
        this.modalService = modalService;
        this.router = router;
        this.model = { name: "", grade: 0, classTeacher: "" };
    }
    ClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; //get ID from route parameter
            if (!_this.overview()) {
                _this.model = _this.dataService.getClass(_this.id);
            }
        });
    };
    ClassComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ClassComponent.prototype.formInvalid = function () {
        return !(this.model.name && this.model.grade);
    };
    ClassComponent.prototype.overview = function () {
        return isNaN(this.id);
    };
    ClassComponent.prototype.add = function () {
        var _this = this;
        this.modalService.open(this.addClass).result.then(function (res) {
            if (res) {
                _this.dataService.addClass(_this.model.name, _this.model.grade);
            }
        }, function (reason) {
        });
    };
    ClassComponent.prototype.update = function (id) {
        this.dataService.updateClass(id, this.model.name, this.model.grade);
        this.router.navigate(['/class']);
    };
    ClassComponent.prototype.delete = function (id) {
        var _this = this;
        this.modalService.open(this.deleteQuestion).result.then(function (reallyDelete) {
            if (reallyDelete)
                _this.dataService.removeClass(id);
        }, function (reason) {
        });
    };
    return ClassComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('addClass'),
    __metadata("design:type", Object)
], ClassComponent.prototype, "addClass", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deleteQuestion'),
    __metadata("design:type", Object)
], ClassComponent.prototype, "deleteQuestion", void 0);
ClassComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-class',
        template: __webpack_require__("../../../../../src/app/class/class.component.html"),
        styles: [__webpack_require__("../../../../../src/app/class/class.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], ClassComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=class.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <a routerLink=\"/teacher\" routerLinkActive=\"true\">\n        <div class=\"jumbotron text-center\">\n          <h2><i class=\"fa fa-user\" aria-hidden=\"true\"></i></h2>\n          <h2>Lehrer</h2>\n        </div>\n      </a>\n    </div>\n    <div class=\"col\">\n      <a routerLink=\"/class\" routerLinkActive=\"true\">\n        <div class=\"jumbotron text-center\">\n          <h2><i class=\"fa fa-address-book\" aria-hidden=\"true\"></i></h2>\n          <h2>Klassen</h2>\n        </div>\n      </a>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <a routerLink=\"/pupil\" routerLinkActive=\"true\">\n        <div class=\"jumbotron text-center\">\n          <h2><i class=\"fa fa-users\" aria-hidden=\"true\"></i></h2>\n          <h2>Schüler</h2>\n        </div>\n      </a>\n    </div>\n    <div class=\"col\">\n      <a routerLink=\"/notes\" routerLinkActive=\"true\">\n        <div class=\"jumbotron text-center\">\n          <h2><i class=\"fa fa-comment\" aria-hidden=\"true\"></i></h2>\n          <h2>Einträge</h2>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dataService) {
        this.dataService = dataService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.notes = [];
    }
    DataService.prototype.saveLocalstorage = function (key, data) {
        if (data !== undefined) {
            localStorage['classBook.' + key] = JSON.stringify(data);
        }
        else {
            localStorage.removeItem('classBook.' + key);
        }
    };
    DataService.prototype.getLocalstorage = function (key) {
        var data = localStorage['classBook.' + key];
        if (data)
            return JSON.parse(data);
        else
            return undefined;
    };
    DataService.prototype.generateInitialData = function () {
        this.saveLocalstorage('teachers', [
            {
                id: 0,
                firstName: 'Wurzel',
                lastName: 'Benutzer',
                mail: 'Wurzelbenutzer',
                pass: '$2a$10$F3stp/lEsbvQROvdt5pRaOG6tAIAlVOacd1sZi1ONwvi.L6Q7QEfa'
            },
            { id: 1, firstName: 'Michelle', lastName: 'Kästner', mail: 'm.kaestner@schule.de', pass: '$2a$10$F3stp/lEsbvQROvdt5pRaOG6tAIAlVOacd1sZi1ONwvi.L6Q7QEfa' },
            { id: 2, firstName: 'Sven', lastName: 'Neudorf', mail: 's.neudorf@schule.de', pass: '$2a$10$F3stp/lEsbvQROvdt5pRaOG6tAIAlVOacd1sZi1ONwvi.L6Q7QEfa' },
            { id: 3, firstName: 'Leonie', lastName: 'Löwe', mail: 'l.löwe@schule.de', pass: '$2a$10$F3stp/lEsbvQROvdt5pRaOG6tAIAlVOacd1sZi1ONwvi.L6Q7QEfa' },
        ]);
        this.saveLocalstorage('classes', [
            { id: 0, name: '5a', grade: 5 },
            { id: 1, name: '5b', grade: 5 },
            { id: 2, name: '6a', grade: 6 },
            { id: 3, name: '7a', grade: 7 },
        ]);
        this.saveLocalstorage('pupils', [
            { id: 0, firstName: 'Lisa', lastName: 'Brauer', classId: 0 },
            { id: 1, firstName: 'Nadine', lastName: 'Schmid', classId: 0 },
            { id: 2, firstName: 'Sophia', lastName: 'Bauer', classId: 1 },
            { id: 3, firstName: 'David', lastName: 'Münch', classId: 2 },
            { id: 4, firstName: 'Jürgen', lastName: 'Baader', classId: 3 },
        ]);
        this.saveLocalstorage('notes', [
            { id: 0, pupilId: 0, teacherId: 1, text: "Hat Mitschüler geschlagen.", date: new Date(1505400000000) },
            { id: 1, pupilId: 0, teacherId: 2, text: "Hat Hausaufgaben 3 Mal nicht gemacht.", date: new Date(1505300000000) },
            { id: 2, pupilId: 1, teacherId: 1, text: "Hat Tafel mit Edding bemalt.", date: new Date(1505200000000) },
            { id: 3, pupilId: 1, teacherId: 2, text: "Hat Druckschrift anstatt Schreibschrift geschrieben. Strafarbeit: 5 Seiten Schreibschrift mit Füller.", date: new Date(1505100000000) },
            { id: 4, pupilId: 1, teacherId: 1, text: "Hat \"Hosenscheißer\" zu Mitschüler gesagt.", date: new Date(1505000000000) },
            { id: 5, pupilId: 3, teacherId: 3, text: "Schlägt Mitschülerin ins Gesicht.", date: new Date(1504900000000) },
        ]);
    };
    DataService.prototype.getLoggedInUser = function () {
        var teacherId = this.getLocalstorage('loggedInUser');
        var teacher = this.getTeacher(teacherId);
        if (teacher && !teacher.deleted) {
            return teacherId;
        }
        else
            return undefined;
    };
    DataService.prototype.setLoggedInUser = function (teacherId) {
        this.saveLocalstorage('loggedInUser', teacherId);
    };
    /******************** Teachers **********************/
    DataService.prototype.getTeachers = function () {
        var ret = this.getLocalstorage('teachers');
        if (!ret) {
            this.generateInitialData();
            return this.getTeachers();
        }
        else
            return ret;
    };
    DataService.prototype.getTeachersVisible = function () {
        return this.getTeachers().filter(function (x) { return !x.deleted; });
    };
    DataService.prototype.getTeacherList = function () {
        var t = this.getTeachersVisible();
        t.shift(); //remove root user from List
        t = t.sort(function (a, b) { return a.firstName.localeCompare(b.firstName); });
        t = t.sort(function (a, b) { return a.lastName.localeCompare(b.lastName); });
        return t;
    };
    DataService.prototype.getTeacher = function (id) {
        var teachers = this.getTeachers();
        return teachers.filter(function (e) { return e.id == id; })[0];
    };
    DataService.prototype.getTeacherByMail = function (mail) {
        return this.getTeachersVisible().find(function (x) { return x.mail.toLowerCase() == mail.toLowerCase(); });
    };
    DataService.prototype.getTeacherName = function (id) {
        var t = this.getTeacher(id);
        return t.firstName + " " + t.lastName;
    };
    DataService.prototype.removeTeacher = function (id) {
        var teachers = this.getTeachers();
        var idx = teachers.findIndex(function (e) { return e.id === id; });
        teachers[idx].deleted = true;
        this.saveLocalstorage('teachers', teachers);
    };
    DataService.prototype.addTeacher = function (fName, lName, mail) {
        var teachers = this.getTeachers();
        var id = Math.max.apply(this, teachers.map(function (e) { return e.id; })) + 1; //generate new id
        if (id < 0)
            id = 0; //set id to zero, if no previous id was found
        // password unset due to asynchronous encryption
        var t = { id: id, firstName: fName, lastName: lName, mail: mail, pass: '' };
        teachers.push(t);
        this.saveLocalstorage('teachers', teachers);
        return id;
    };
    DataService.prototype.getTeacherPassword = function (id) {
        var t = this.getTeacher(id);
        return t.password;
    };
    DataService.prototype.updateTeacherObj = function (obj) {
        this.updateTeacher(obj.id, obj.firstName, obj.lastName, obj.mail);
    };
    DataService.prototype.updateTeacher = function (id, fName, lName, mail) {
        var t = this.getTeachers();
        // password unset due to asynchronous encryption
        var idx = t.findIndex(function (e) { return e.id === id; });
        t[idx] = { id: +id, firstName: fName, lastName: lName, mail: mail, pass: '' };
        this.saveLocalstorage('teachers', t);
    };
    DataService.prototype.setTeacherPassword = function (id, pass) {
        var t = this.getTeachers();
        var idx = t.findIndex(function (e) { return e.id === id; });
        if (!t[idx])
            return false;
        t[idx].pass = pass;
        this.saveLocalstorage('teachers', t);
    };
    /******************** Class **********************/
    DataService.prototype.getClasses = function () {
        var ret = this.getLocalstorage('classes');
        if (!ret) {
            this.generateInitialData();
            return this.getClasses();
        }
        else {
            ret.sort(function (a, b) { return a.name.localeCompare(b.name); });
            return ret;
        }
    };
    DataService.prototype.getClassesVisible = function () {
        return this.getClasses().filter(function (x) { return !x.deleted; });
    };
    DataService.prototype.getClass = function (id) {
        var classes = this.getClasses();
        return classes.filter(function (e) { return e.id == id; })[0];
    };
    DataService.prototype.addClass = function (name, grade) {
        var classes = this.getClasses();
        var id = Math.max.apply(this, classes.map(function (e) { return e.id; })) + 1; //generate new id
        if (id < 0)
            id = 0; //set id to zero, if no previous id was found
        var c = { id: id, name: name, grade: grade };
        classes.push(c);
        this.saveLocalstorage('classes', classes);
    };
    DataService.prototype.updateClass = function (id, name, grade) {
        var c = this.getClasses();
        var idx = c.findIndex(function (e) { return e.id === id; });
        c[idx] = { id: +id, name: name, grade: grade };
        this.saveLocalstorage('classes', c);
    };
    DataService.prototype.removeClass = function (id) {
        var c = this.getClasses();
        var idx = c.findIndex(function (e) { return e.id === id; });
        c[idx].deleted = true;
        this.saveLocalstorage('classes', c);
    };
    /******************** Pupil **********************/
    DataService.prototype.getPupils = function () {
        var _this = this;
        var ret = this.getLocalstorage('pupils');
        if (!ret) {
            this.generateInitialData();
            return this.getPupils();
        }
        else {
            ret.sort(function (a, b) { return a.firstName.localeCompare(b.firstName); });
            ret.sort(function (a, b) { return a.lastName.localeCompare(b.lastName); });
            ret.sort(function (a, b) { return _this.getClass(a.classId).name.localeCompare(_this.getClass(b.classId).name); });
            return ret;
        }
    };
    DataService.prototype.getPupilsVisible = function () {
        return this.getPupils().filter(function (x) { return !x.deleted; });
    };
    DataService.prototype.getPupil = function (id) {
        var pupils = this.getPupils();
        return pupils.filter(function (e) { return e.id == id; })[0];
    };
    DataService.prototype.getPupilName = function (id) {
        var p = this.getPupil(id);
        return p.firstName + " " + p.lastName;
    };
    DataService.prototype.addPupil = function (firstName, lastName, classId) {
        var pupils = this.getPupils();
        var id = Math.max.apply(this, pupils.map(function (e) { return e.id; })) + 1; //generate new id
        if (id < 0)
            id = 0; //set id to zero, if no previous id was found
        var p = { id: id, firstName: firstName, lastName: lastName, classId: +classId };
        pupils.push(p);
        this.saveLocalstorage('pupils', pupils);
    };
    DataService.prototype.updatePupil = function (id, firstName, lastName, classId) {
        var p = this.getPupils();
        var idx = p.findIndex(function (e) { return e.id === id; });
        p[idx] = { id: +id, firstName: firstName, lastName: lastName, classId: +classId };
        this.saveLocalstorage('pupils', p);
    };
    DataService.prototype.removePupil = function (id) {
        var p = this.getPupils();
        var idx = p.findIndex(function (e) { return e.id === id; });
        p[idx].deleted = true;
        this.saveLocalstorage('pupils', p);
    };
    DataService.prototype.getPupilClass = function (pId) {
        var p = this.getPupil(pId);
        var c = this.getClass(p.classId);
        return c;
    };
    /******************** Notes **********************/
    DataService.prototype.dateSort = function (a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a > b ? -1 : a < b ? 1 : 0;
    };
    DataService.prototype.getNotes = function () {
        var ret = this.getLocalstorage('notes');
        if (!ret) {
            this.generateInitialData();
            return this.getNotes();
        }
        else {
            ret = ret.map(function (elem) {
                elem.date = new Date(elem.date); //convert date string back to date
                return elem;
            });
            ret.sort(this.dateSort);
            if (JSON.stringify(this.notes) !== JSON.stringify(ret))
                this.notes = ret;
            return this.notes;
        }
    };
    DataService.prototype.getNotesVisible = function () {
        return this.getNotes().filter(function (x) { return !x.deleted; });
    };
    DataService.prototype.getNote = function (id) {
        var notes = this.getNotes();
        return notes.filter(function (e) { return e.id == id; })[0];
    };
    DataService.prototype.getNotesOfPupil = function (pId) {
        var notes = this.getNotesVisible();
        return notes.filter(function (e) { return e.pupilId == pId; });
    };
    DataService.prototype.getNoteCount = function (pId) {
        var n = this.getNotesOfPupil(pId);
        var c = 0;
        if (n)
            c = n.length; //only return length if notes aren't undefined
        return c;
    };
    DataService.prototype.getNotePupilName = function (id) {
        var n = this.getNote(id);
        var p = this.getPupil(n.pupilId);
        return p.firstName + " " + p.lastName;
    };
    DataService.prototype.getNoteTeacherName = function (id) {
        var n = this.getNote(id);
        var p = this.getTeacher(n.teacherId);
        return p.firstName + " " + p.lastName;
    };
    DataService.prototype.addNote = function (pupilId, teacherId, text, date) {
        var notes = this.getNotes();
        var id = Math.max.apply(this, notes.map(function (e) { return e.id; })) + 1; //generate new id
        if (id < 0)
            id = 0; //set id to zero, if no previous id was found
        var n = { id: id, pupilId: +pupilId, teacherId: +teacherId, text: text, date: date };
        notes.push(n);
        this.saveLocalstorage('notes', notes);
    };
    DataService.prototype.updateNote = function (id, pupilId, teacherId, text, date) {
        var n = this.getNotes();
        var idx = n.findIndex(function (e) { return e.id === id; });
        n[idx] = { id: +id, pupilId: +pupilId, teacherId: +teacherId, text: text, date: date };
        this.saveLocalstorage('notes', n);
    };
    DataService.prototype.removeNote = function (id) {
        var n = this.getNotes();
        var idx = n.findIndex(function (e) { return e.id === id; });
        n[idx].deleted = true;
        this.saveLocalstorage('notes', n);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1>Willkommen!</h1>\r\n    <p>\r\n    Vielen Dank dass sie sich für das digitale Klassenbuch entschieden haben. Zur leichteren Einarbeitung wurden bereits Beispieldaten\r\n    für sie generiert. Auf dem praktischen Dashboard finden sie alle notwendigen Schnellzugriffe, um ihre Arbeit zu erleichtern.\r\n    Aus Sicherheitsgründen werden alle notwendigen Daten in ihrem Browser gespeichert, was ihnen eine sorglose Benutzung\r\n    gewährleistet.\r\n    </p>\r\n\r\n    <h2>Notfallsicherheit</h2>\r\n    <p>\r\n    Egal was passiert, das digitale Klassenbuch lässt sie nicht im Stich. Im Notfall steht ihnen der Wurzelbenutzer zur Verfügung\r\n    um Datenverlust zu verhindern.\r\n    </p>\r\n\r\n    <h2>Modernes Design</h2>\r\n    <p>\r\n    Erleben sie neuste Webtechnologien im Einsatz um Ihnen das bestmögliche Benutzererlebnis zu gewährleisten. Dabei wurde auf\r\n    unnötig verzögernde Animationen verzichtet um ein effizientes und entspanntes Arbeiten zu ermöglichen.\r\n    </p>\r\n\r\n    <h2>Effizienz</h2>\r\n    Verwalten sie ihre Klassenbucheinträge mit bisher ungewohnter Effizienz. Hinzufügen, Bearbeiten, Anschauen - alles notwendige\r\n    in wenigen Klicks erreichbar und auf einen Blick sichtbar, dadurch zeichnet sich das digitale Klassenbuch durch exzellente\r\n    Simplizität aus.\r\n    <br>\r\n    <div class=\"pull-right\">\r\n      <a class=\"btn btn-outline-success\" routerLink=\"{{'/dashboard'}}\">Los geht's!</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LandingPageComponent);

//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcryptjs__ = __webpack_require__("../../../../bcryptjs/dist/bcrypt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bcryptjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        console.log(dataService);
    }
    LoginService.prototype.logOut = function () {
        this.dataService.setLoggedInUser(undefined);
    };
    LoginService.prototype.authentificate = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (email === "Wurzelbenutzer" && password === "Wurzelbenutzer") {
                _this.dataService.setLoggedInUser(0);
                resolve();
                return;
            }
            var teacher = _this.dataService.getTeacherByMail(email);
            console.log(teacher, email);
            __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.compare(password, teacher.pass)
                .then(function (result) {
                if (result) {
                    _this.dataService.setLoggedInUser(teacher.id);
                    resolve();
                }
                else {
                    reject();
                }
            })
                .catch(function (err) {
                console.log(err);
                reject();
            });
        });
    };
    LoginService.prototype.setPassword = function (id, password) {
        var th = this;
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_3_bcryptjs___default.a.hash(password, 10).then(function (result) {
                th.dataService.setTeacherPassword(id, result);
                resolve();
            })
                .catch(function () { return reject(); });
        });
    };
    LoginService.prototype.canActivate = function () {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    LoginService.prototype.isLoggedIn = function () {
        if (this.dataService.getTeachers() == []) {
            return false;
        }
        return this.dataService.getLoggedInUser() !== undefined;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1>Login</h1>\r\n    <hr>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\">\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"user\">Username:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"text\" class=\"form-control\" id=\"user\" required [(ngModel)]=\"model.user\" name=\"name\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"control-label col-sm-2\" for=\"pwd\">Passwort:</label>\r\n        <div class=\"col-sm-10\">\r\n          <input type=\"password\" class=\"form-control\" id=\"pwd\" required [(ngModel)]=\"model.pass\" name=\"pass\">\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button type=\"submit\" class=\"btn btn-primary \" [disabled]=\"!loginForm.form.valid\">Anmelden</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"alert alert-danger\" *ngIf=\"wrongCredentials\">\r\n        <strong>Fehler</strong> Username oder Passwort falsch.\r\n      </div>\r\n    </form>\r\n    <div>\r\n      Die initialen Anmeldedaten sind:<br>\r\n      <b>Benutzer:</b> Wurzelbenutzer<br>\r\n      <b>Passwort:</b> Wurzelbenutzer\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(router, loginService, dataService) {
        this.router = router;
        this.loginService = loginService;
        this.dataService = dataService;
        this.wrongCredentials = false;
        this.model = { user: "", pass: "" };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.loginService.setPassword(0, this.model.pass).then(function () {
            return _this.loginService.authentificate(_this.model.user, _this.model.pass)
                .then(function () {
                console.log("authentificated");
                if (_this.model.user == "Wurzelbenutzer") {
                    _this.router.navigate(['/landing-page']);
                    console.log("wurzelchen");
                    return;
                }
                _this.wrongCredentials = false;
                _this.router.navigate(['/dashboard']);
            }).catch(function (err) {
                console.log("not authentificated");
                console.log(err);
                _this.wrongCredentials = true;
            });
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/logout/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__("../../../../../src/app/logout/logout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/logout/logout.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LogoutComponent);

//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable td {\r\n  cursor: pointer;\r\n}\r\n\r\n.row-spacing {\r\n  margin-bottom: 1em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"overview()\">\n  <div class=\"container\">\n    <h1 *ngIf=\"!pupilView()\">Einträgeübersicht</h1>\n    <h1 *ngIf=\"pupilView()\" >Einträgeübersicht für {{dataService.getPupilName(pupilId)}}</h1>\n    <div class=\"row row-spacing\">\n      <button class=\"btn btn-success\" (click)=\"add()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"row\">\n      <table class=\"table table-hover\">\n        <tr>\n          <th>Schüler</th>\n          <th>angelegt von</th>\n          <th>Text</th>\n          <th>Datum</th>\n          <th></th>\n        </tr>\n        <tr class=\"clickable\" *ngFor=\"let note of getNotes()\" routerLink=\"/notes/{{note.id}}\">\n          <td>{{dataService.getNotePupilName(note.id)}}</td>\n          <td>{{dataService.getNoteTeacherName(note.id)}}</td>\n          <td>\n            <span ngbPopover=\"{{note.text}}\" triggers=\"mouseenter:mouseleave\" container=\"body\">\n              {{trimString(note.text, 35, true)}}\n            </span>\n          </td>\n          <td>{{dateToString(note.date)}}</td>\n          <td>\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"delete(note.id)\"></i>\n          </td>\n        </tr>\n      </table>\n    </div>\n    <p>Zum Bearbeiten einfach auf eine Zeile klicken.</p>\n  </div>\n\n  <ng-template #addNote let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">Eintrag hinzufügen</h4>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal\" (ngSubmit)=\"update()\" #addNoteForm=\"ngForm\">\n\n        <div class=\"form-group\" *ngIf=\"true; then noteFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\n\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c(false)\">Abbrechen</button>\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"c(true)\" [disabled]=\"formInvalid()\">Speichern</button>\n    </div>\n  </ng-template>\n</div>\n\n\n<div *ngIf=\"!overview()\">\n  <div class=\"container\">\n    <h1>Eintrag bearbeiten</h1>\n    <form class=\"form-horizontal\" (ngSubmit)=\"update(id)\" #modifyNoteForm=\"ngForm\">\n\n      <div *ngIf=\"true; then noteFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button class=\"btn btn-secondary\" (click)=\"goBack()\">Abbrechen</button>\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formInvalid()\">Ändern</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<ng-template #deleteQuestion let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Wirklich löschen?</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c(false)\">Abbrechen</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c(true)\">Löschen</button>\n  </div>\n</ng-template>\n\n<ng-template #noteFormTmpl>\n  <div class=\"form-group row\">\n    <label class=\"control-label col-sm-4\" for=\"pupil\">Schüler:</label>\n    <div class=\"col-sm-8\">\n      <select class=\"form-control\" id=\"pupil\" [(ngModel)]=\"model.pupilId\" required>\n        <option *ngFor=\"let pupil of dataService.getPupilsVisible()\" [value]=\"pupil.id\">{{pupil.firstName}}\n          {{pupil.lastName}}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"control-label col-sm-4\" for=\"pupil\">Lehrer:</label>\n    <div class=\"col-sm-8\">\n      <select class=\"form-control\" id=\"teacher\" [(ngModel)]=\"model.teacherId\" required>\n        <option *ngFor=\"let teacher of dataService.getTeacherList()\" [value]=\"teacher.id\">{{teacher.firstName}}\n          {{teacher.lastName}}\n        </option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"control-label col-sm-4\" for=\"text\">Notiz:</label>\n    <div class=\"col-sm-8\">\n      <textarea class=\"form-control\" id=\"text\" [(ngModel)]=\"model.text\" required></textarea>\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <label class=\"control-label col-sm-4\" for=\"date\">Zeit:</label>\n    <div class=\"col-sm-8\" id=\"date\">\n      <div class=\"input-group row-spacing\">\n        <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n               name=\"dp\" [(ngModel)]=\"model.datePicker\" ngbDatepicker #d=\"ngbDatepicker\">\n        <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n          <!--img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/-->\n          <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n        </button>\n      </div>\n      <ngb-timepicker [(ngModel)]=\"model.time\" [spinners]=\"false\"></ngb-timepicker>\n    </div>\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/notes/notes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotesComponent = (function () {
    function NotesComponent(route, dataService, modalService, router, location) {
        this.route = route;
        this.dataService = dataService;
        this.modalService = modalService;
        this.router = router;
        this.location = location;
        this.model = { pupilId: -1, teacherId: -1, text: "", date: new Date() };
    }
    NotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; //get ID from route parameter
            if (!_this.overview()) {
                _this.model = _this.dataService.getNote(_this.id);
                if (_this.model)
                    _this.convertToModelDate(_this.model.date);
            }
            _this.pupilId = +params['pId'];
        });
    };
    NotesComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.interval);
        this.sub.unsubscribe();
    };
    NotesComponent.prototype.overview = function () {
        return isNaN(this.id);
    };
    NotesComponent.prototype.pupilView = function () {
        return !isNaN(this.pupilId);
    };
    NotesComponent.prototype.goBack = function () {
        if (this.pupilView()) {
            this.router.navigate(['/notes/pupil', this.pupilId]);
        }
        else
            this.router.navigate(['/notes']);
    };
    NotesComponent.prototype.dateToString = function (date) {
        var d = date.toISOString();
        d = d.replace('T', ' ');
        d = d.substr(0, d.indexOf('.') - 3); //get rid of milliseconds and also seconds
        return d;
    };
    NotesComponent.prototype.trimString = function (str, length, wordWise) {
        var regex = '/^(.{' + length + '}[^\s]*).*/'; //.replace(/^(.{11}[^\s]*).*/, "$1")
        var originalLength = str.length;
        var trimmed = str.substr(0, length);
        if (wordWise && originalLength > length) {
            trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))); //retrim if cutting of a word
            trimmed += "[...]";
        }
        return trimmed;
    };
    NotesComponent.prototype.formInvalid = function () {
        var m = this.model;
        return !(m.pupilId >= 0 && m.teacherId >= 0 && m.text && m.date);
    };
    NotesComponent.prototype.getNotes = function () {
        var _this = this;
        var n = this.dataService.getNotesVisible();
        if (!isNaN(this.pupilId))
            return n.filter(function (e) { return e.pupilId == _this.pupilId; });
        else
            return n;
    };
    NotesComponent.prototype.convertToModelDate = function (d) {
        this.model.datePicker = { year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate() };
        this.model.time = { hour: d.getHours(), minute: d.getMinutes() };
    };
    NotesComponent.prototype.add = function () {
        var _this = this;
        var d = new Date();
        this.convertToModelDate(d);
        if (!isNaN(this.pupilId))
            this.model.pupilId = this.pupilId;
        this.modalService.open(this.addNote).result.then(function (res) {
            if (res) {
                var m = _this.model;
                _this.dataService.addNote(m.pupilId, m.teacherId, m.text, m.date);
            }
        }, function (reason) {
        });
    };
    NotesComponent.prototype.update = function (id) {
        var m = this.model;
        this.dataService.updateNote(id, m.pupilId, m.teacherId, m.text, m.date);
        this.router.navigate(['/notes']);
    };
    NotesComponent.prototype.delete = function (id) {
        var _this = this;
        this.modalService.open(this.deleteQuestion).result.then(function (reallyDelete) {
            if (reallyDelete)
                _this.dataService.removeNote(id);
            //workaround because for some reason it wants to open the detail page, but doesn't do it on any other overview page
            _this.location.back(); //TODO: fix this
        }, function (reason) {
        });
    };
    return NotesComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('addNote'),
    __metadata("design:type", Object)
], NotesComponent.prototype, "addNote", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deleteQuestion'),
    __metadata("design:type", Object)
], NotesComponent.prototype, "deleteQuestion", void 0);
NotesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-notes',
        template: __webpack_require__("../../../../../src/app/notes/notes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notes/notes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */]) === "function" && _e || Object])
], NotesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=notes.component.js.map

/***/ }),

/***/ "../../../../../src/app/pupil/pupil.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable td {\r\n  cursor: pointer;\r\n}\r\n\r\n.row-spacing {\r\n  margin-bottom: 1em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pupil/pupil.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"overview()\">\r\n  <div class=\"container\">\r\n    <h1>Schülerübersicht</h1>\r\n    <div class=\"row row-spacing\">\r\n      <button class=\"btn btn-success\" (click)=\"add()\">\r\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"table table-hover\">\r\n        <tr>\r\n          <th>Vorname</th>\r\n          <th>Nachname</th>\r\n          <th>Klasse</th>\r\n          <th>Einträge</th>\r\n          <th></th>\r\n        </tr>\r\n        <tr class=\"clickable\" *ngFor=\"let pupil of dataService.getPupilsVisible()\" routerLink=\"/pupil/{{pupil.id}}\">\r\n          <td>{{pupil.firstName}}</td>\r\n          <td>{{pupil.lastName}}</td>\r\n          <td>{{dataService.getPupilClass(pupil.id).name}}</td>\r\n          <td><a routerLink=\"/notes/pupil/{{pupil.id}}\">\r\n            <span>{{dataService.getNoteCount(pupil.id)}}</span>\r\n            <span style=\"margin-left: 1em\"></span>\r\n            <span><i class=\"fa fa-plus-circle\" aria-hidden=\"true\"></i></span>\r\n          </a></td>\r\n          <td>\r\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"delete(pupil.id)\"></i>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <p>Zum Bearbeiten einfach auf eine Zeile klicken.</p>\r\n  </div>\r\n\r\n  <ng-template #addPupil let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Schüler hinzufügen</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <form class=\"form-horizontal\" (ngSubmit)=\"update()\" #addPupilForm=\"ngForm\">\r\n\r\n        <div class=\"form-group\" *ngIf=\"true; then pupilFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c(false)\">Abbrechen</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"c(true)\" [disabled]=\"formInvalid()\">Speichern</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!overview()\">\r\n  <div class=\"container\">\r\n    <h1>Schüler bearbeiten</h1>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"update(id)\" #modifyPupilForm=\"ngForm\">\r\n\r\n      <div *ngIf=\"true; then pupilFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button class=\"btn btn-secondary\" routerLink=\"/pupil\">Abbrechen</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formInvalid()\">Ändern</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #deleteQuestion let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Wirklich löschen?</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c(false)\">Abbrechen</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c(true)\">Löschen</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #pupilFormTmpl>\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-4\" for=\"firstName\">Vorname:</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"model.firstName\" name=\"firstName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-4\" for=\"lastName\">Nachname:</label>\r\n    <div class=\"col-sm-8\">\r\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"model.lastName\" name=\"lastName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-4\" for=\"class\">Klasse:</label>\r\n    <div class=\"col-sm-8\">\r\n      <select class=\"form-control\" id=\"class\" [(ngModel)]=\"model.classId\" required>\r\n        <option *ngFor=\"let class of dataService.getClassesVisible()\" [value]=\"class.id\">{{class.name}}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/pupil/pupil.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PupilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PupilComponent = (function () {
    function PupilComponent(route, dataService, modalService, router) {
        this.route = route;
        this.dataService = dataService;
        this.modalService = modalService;
        this.router = router;
        this.model = { firstName: "", lastName: "", classId: -1 };
    }
    PupilComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; //get ID from route parameter
            if (!_this.overview()) {
                _this.model = _this.dataService.getPupil(_this.id);
            }
        });
    };
    PupilComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PupilComponent.prototype.formInvalid = function () {
        var m = this.model;
        return !(m.firstName && m.lastName && m.classId >= 0);
    };
    PupilComponent.prototype.overview = function () {
        return isNaN(this.id);
    };
    PupilComponent.prototype.add = function () {
        var _this = this;
        console.log(this.model);
        this.modalService.open(this.addPupil).result.then(function (res) {
            if (res) {
                var m = _this.model;
                _this.dataService.addPupil(m.firstName, m.lastName, m.classId);
            }
        }, function (reason) {
        });
    };
    PupilComponent.prototype.update = function (id) {
        var m = this.model;
        this.dataService.updatePupil(id, m.firstName, m.lastName, m.classId);
        this.router.navigate(['/pupil']);
    };
    PupilComponent.prototype.delete = function (id) {
        var _this = this;
        this.modalService.open(this.deleteQuestion).result.then(function (reallyDelete) {
            if (reallyDelete)
                _this.dataService.removePupil(id);
        }, function (reason) {
        });
    };
    return PupilComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('addPupil'),
    __metadata("design:type", Object)
], PupilComponent.prototype, "addPupil", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deleteQuestion'),
    __metadata("design:type", Object)
], PupilComponent.prototype, "deleteQuestion", void 0);
PupilComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-pupil',
        template: __webpack_require__("../../../../../src/app/pupil/pupil.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pupil/pupil.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PupilComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=pupil.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher/teacher.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable td {\r\n  cursor: pointer;\r\n}\r\n\r\n.row-spacing {\r\n  margin-bottom: 1em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teacher/teacher.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"overview()\">\r\n  <div class=\"container\">\r\n    <h1>Lehrerübersicht</h1>\r\n    <div class=\"row row-spacing\">\r\n      <button class=\"btn btn-success\" (click)=\"add(addTeacher)\">\r\n        <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\r\n      </button>\r\n    </div>\r\n    <div class=\"row\">\r\n      <table class=\"table table-hover\">\r\n        <tr>\r\n          <th>Vorname</th>\r\n          <th>Nachname</th>\r\n          <th>E-Email</th>\r\n          <th></th>\r\n        </tr>\r\n        <tr class=\"clickable\" *ngFor=\"let teacher of dataService.getTeacherList()\" routerLink=\"/teacher/{{teacher.id}}\">\r\n          <td>{{teacher.firstName}}</td>\r\n          <td>{{teacher.lastName}}</td>\r\n          <td><a href=\"mailto:{{teacher.mail}}\">{{teacher.mail}}</a></td>\r\n          <td>\r\n            <i class=\"fa fa-trash\" aria-hidden=\"true\" (click)=\"delete(teacher.id)\"></i>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <p>Zum Bearbeiten einfach auf eine Zeile klicken.</p>\r\n  </div>\r\n\r\n  <ng-template #addTeacher let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\">Lehrer hinzufügen</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"modal-body\">\r\n      <form class=\"form-horizontal\" (ngSubmit)=\"update()\" #addTeacherForm=\"ngForm\">\r\n\r\n        <div class=\"form-group\" *ngIf=\"true; then teacherFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\r\n\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"c(undefined)\">Abbrechen</button>\r\n      <button type=\"submit\" class=\"btn btn-primary\" (click)=\"c(true)\" [disabled]=\"formInvalid()\">Speichern</button>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n\r\n\r\n<div *ngIf=\"!overview()\">\r\n  <div class=\"container\">\r\n    <h1>Lehrer bearbeiten</h1>\r\n    <form class=\"form-horizontal\" (ngSubmit)=\"update(id)\" #addTeacherForm=\"ngForm\">\r\n\r\n      <div *ngIf=\"true; then teacherFormTmpl\"></div> <!-- only way to insert html \"variables\" -->\r\n\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-offset-2 col-sm-10\">\r\n          <button class=\"btn btn-secondary\" routerLink=\"/teacher\">Abbrechen</button>\r\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"formInvalid()\">Ändern</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n<ng-template #deleteQuestion let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title\">Wirklich löschen?</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c(false)\">Abbrechen</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c(true)\">Löschen</button>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #teacherFormTmpl>\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-2\" for=\"firstName\">Vorname:</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"model.firstName\" name=\"firstName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-2\" for=\"lastName\">Nachname:</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"model.lastName\" name=\"lastName\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-2\" for=\"email\">E-Mail:</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"email\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"model.mail\" name=\"email\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row\">\r\n    <label class=\"control-label col-sm-2\" for=\"pass\">Passwort:</label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"password\" class=\"form-control\" id=\"pass\" required [(ngModel)]=\"model.pass\" name=\"pass\">\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/teacher/teacher.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherComponent = (function () {
    function TeacherComponent(route, dataService, modalService, loginService, router) {
        this.route = route;
        this.dataService = dataService;
        this.modalService = modalService;
        this.loginService = loginService;
        this.router = router;
        this.model = { firstName: "", lastName: "", mail: "", pass: "" };
    }
    TeacherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; //get ID from route parameter
            if (!_this.overview()) {
                _this.model = _this.dataService.getTeacher(_this.id);
            }
        });
    };
    TeacherComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TeacherComponent.prototype.formInvalid = function () {
        return !(this.model.firstName && this.model.lastName && this.model.mail && this.model.pass);
    };
    TeacherComponent.prototype.overview = function () {
        return isNaN(this.id);
    };
    TeacherComponent.prototype.add = function (template) {
        var _this = this;
        this.modalService.open(template).result.then(function (res) {
            if (res) {
                var id = _this.dataService.addTeacher(_this.model.firstName, _this.model.lastName, _this.model.mail);
                _this.loginService.setPassword(id, _this.model.pass);
            }
        }, function (reason) {
        });
    };
    TeacherComponent.prototype.update = function (id) {
        this.dataService.updateTeacher(id, this.model.firstName, this.model.lastName, this.model.mail);
        this.loginService.setPassword(id, this.model.pass);
        this.router.navigate(['/teacher']);
    };
    TeacherComponent.prototype.delete = function (id) {
        var _this = this;
        this.modalService.open(this.deleteQuestion).result.then(function (reallyDelete) {
            if (reallyDelete)
                _this.dataService.removeTeacher(id);
        }, function (reason) {
        });
    };
    return TeacherComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('deleteQuestion'),
    __metadata("design:type", Object)
], TeacherComponent.prototype, "deleteQuestion", void 0);
TeacherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-teacher',
        template: __webpack_require__("../../../../../src/app/teacher/teacher.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teacher/teacher.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _e || Object])
], TeacherComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=teacher.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map