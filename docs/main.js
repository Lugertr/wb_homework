"use strict";
(self["webpackChunkmy_app"] = self["webpackChunkmy_app"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pages/contacts/contacts.component */ 5386);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);






function AppComponent_app_modal_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-modal", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("modalVisChange", function AppComponent_app_modal_3_Template_app_modal_modalVisChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.modalVis = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modalVis", ctx_r0.modalVis);
} }
class AppComponent {
    constructor() {
        this.title = 'my-app';
        this.modalVis = false;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [[1, "navArea", 3, "modalVisKostil", "modalVisKostilChange"], [1, "mainArea"], [1, "footerArea"], [3, "modalVis", "modalVisChange", 4, "ngIf"], [3, "modalVis", "modalVisChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-nav-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("modalVisKostilChange", function AppComponent_Template_app_nav_bar_modalVisKostilChange_0_listener($event) { return ctx.modalVis = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-main", 1)(2, "app-footer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AppComponent_app_modal_3_Template, 1, 1, "app-modal", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("modalVisKostil", ctx.modalVis);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modalVis);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent, _components_pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_2__.ContactsComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent], styles: ["[_nghost-%COMP%] {\n  color: #333;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ 4726);
/* harmony import */ var _components_pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pages/contacts/contacts.component */ 5386);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ 4662);
/* harmony import */ var _components_UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UI/follow-links/follow-links.component */ 500);
/* harmony import */ var _components_UI_input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/UI/input/input.component */ 3306);
/* harmony import */ var _components_UI_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UI/checkbox/checkbox.component */ 8688);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal/modal.component */ 385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent,
        _components_pages_contacts_contacts_component__WEBPACK_IMPORTED_MODULE_3__.ContactsComponent,
        _components_UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_5__.FollowLinksComponent,
        _components_UI_input_input_component__WEBPACK_IMPORTED_MODULE_6__.InputComponent,
        _components_UI_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_7__.CheckboxComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__.ModalComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 8688:
/*!**************************************************************!*\
  !*** ./src/app/components/UI/checkbox/checkbox.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckboxComponent": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CheckboxComponent {
    constructor() {
        this.data = { labelName: 'empty',
            type: "checkbox",
            required: false
        };
    }
    ngOnInit() {
    }
}
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(t) { return new (t || CheckboxComponent)(); };
CheckboxComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckboxComponent, selectors: [["app-checkbox"]], hostAttrs: [1, "checkboxfield"], inputs: { data: "data" }, decls: 3, vars: 5, consts: [[1, "checkbox", 3, "id", "type", "required"], [3, "for"]], template: function CheckboxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.data.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.data.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("required", ctx.data.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.data.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.labelName);
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  background: #FFFFFF;\n  border: 1px solid #D7DADD;\n  border-radius: 4px;\n  border: 1px solid #FF3F3A;\n  border-radius: 3px;\n  cursor: pointer;\n}\n\n.checkbox[_ngcontent-%COMP%]:checked {\n  accent-color: #FF3F3A;\n}\n\nlabel[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-left: 12px;\n  color: #424551;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrYm94LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBRUk7RUFBbUIscUJBQUE7QUFFdkI7O0FBQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBR1IiLCJmaWxlIjoiY2hlY2tib3guc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICB3aWR0aDogMTAwJTt9XHJcblxyXG4gICAgLmNoZWNrYm94e1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNEN0RBREQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjNGM0E7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tib3g6Y2hlY2tlZHsgYWNjZW50LWNvbG9yOiAjRkYzRjNBO31cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM0MjQ1NTE7XHJcbiAgICB9Il19 */"] });


/***/ }),

/***/ 500:
/*!**********************************************************************!*\
  !*** ./src/app/components/UI/follow-links/follow-links.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FollowLinksComponent": () => (/* binding */ FollowLinksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function FollowLinksComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 1);
} if (rf & 2) {
    const links_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("ngClass", "", links_r1.name, " ", ctx_r0.color, "");
} }
class FollowLinksComponent {
    constructor() {
        this.color = 'gray';
        this.linksArr = [];
        console.log(this.linksArr);
    }
    ngOnInit() {
    }
}
FollowLinksComponent.ɵfac = function FollowLinksComponent_Factory(t) { return new (t || FollowLinksComponent)(); };
FollowLinksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FollowLinksComponent, selectors: [["app-follow-links"]], inputs: { color: "color", linksArr: "linksArr" }, decls: 1, vars: 1, consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]], template: function FollowLinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FollowLinksComponent_div_0_Template, 1, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linksArr);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: [".white[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.gray[_ngcontent-%COMP%] {\n  background-color: #787A80;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n\n[_nghost-%COMP%]   .facebook[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('Facebook.svg') no-repeat center;\n          mask: url('Facebook.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .facebook[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n\n[_nghost-%COMP%]   .inst[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('Instagram.svg') no-repeat center;\n          mask: url('Instagram.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .inst[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n\n[_nghost-%COMP%]   .linked[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('Linked-In.svg') no-repeat center;\n          mask: url('Linked-In.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .linked[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n\n[_nghost-%COMP%]   .telegram[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('telegram.svg') no-repeat center;\n          mask: url('telegram.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .telegram[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n\n[_nghost-%COMP%]   .twitter[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('Twitter.svg') no-repeat center;\n          mask: url('Twitter.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .twitter[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n\n[_nghost-%COMP%]   .youtube[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('YouTube.svg') no-repeat center;\n          mask: url('YouTube.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .youtube[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n\n[_nghost-%COMP%]   .google[_ngcontent-%COMP%] {\n  min-height: 23px;\n  min-width: 24px;\n  height: 100%;\n  cursor: pointer;\n  -webkit-mask: url('Google.svg') no-repeat center;\n          mask: url('Google.svg') no-repeat center;\n}\n\n[_nghost-%COMP%]   .google[_ngcontent-%COMP%]:hover {\n  background-color: #FF3F3A;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmtzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBTyx1QkFBQTtBQUVQOztBQUFBO0VBQU0seUJBQUE7QUFJTjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRko7O0FBSUk7RUFYQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQVVJLGtEQUFBO1VBQUEsMENBQUE7QUFDUjs7QUFWSTtFQUFRLHlCQUFBO0FBYVo7O0FBRkk7RUFmQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQWNJLG1EQUFBO1VBQUEsMkNBQUE7QUFPUjs7QUFwQkk7RUFBUSx5QkFBQTtBQXVCWjs7QUFSSTtFQW5CQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQWtCSSxtREFBQTtVQUFBLDJDQUFBO0FBYVI7O0FBOUJJO0VBQVEseUJBQUE7QUFpQ1o7O0FBZEk7RUF2QkEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFzQkksa0RBQUE7VUFBQSwwQ0FBQTtBQW1CUjs7QUF4Q0k7RUFBUSx5QkFBQTtBQTJDWjs7QUFwQkk7RUEzQkEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUEwQkksaURBQUE7VUFBQSx5Q0FBQTtBQXlCUjs7QUFsREk7RUFBUSx5QkFBQTtBQXFEWjs7QUExQkk7RUEvQkEsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUE4QkksaURBQUE7VUFBQSx5Q0FBQTtBQStCUjs7QUE1REk7RUFBUSx5QkFBQTtBQStEWjs7QUEvQkk7RUFwQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFtQ0ksZ0RBQUE7VUFBQSx3Q0FBQTtBQW9DUjs7QUF0RUk7RUFBUSx5QkFBQTtBQXlFWiIsImZpbGUiOiJsaW5rcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndoaXRle2JhY2tncm91bmQtY29sb3I6IHdoaXRlfVxyXG5cclxuLmdyYXl7YmFja2dyb3VuZC1jb2xvcjogIzc4N0E4MDt9XHJcblxyXG5AbWl4aW4gY2hhbmdlQ29sb3IoKSB7IFxyXG4gICAgbWluLWhlaWdodDogMjNweDtcclxuICAgIG1pbi13aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjogI0ZGM0YzQTt9fVxyXG5cclxuOmhvc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgIC5mYWNlYm9va3tcclxuICAgICAgICBAaW5jbHVkZSBjaGFuZ2VDb2xvcigpO1xyXG4gICAgICAgIG1hc2s6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NvY2lhbF9uZXR3b3JrX2xvZ28vRmFjZWJvb2suc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbnN0e1xyXG4gICAgICAgIEBpbmNsdWRlIGNoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgbWFzazogdXJsKCcuLi8uLi8uLi9hc3NldHMvc29jaWFsX25ldHdvcmtfbG9nby9JbnN0YWdyYW0uc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5saW5rZWR7XHJcbiAgICAgICAgQGluY2x1ZGUgY2hhbmdlQ29sb3IoKTtcclxuICAgICAgICBtYXNrOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zb2NpYWxfbmV0d29ya19sb2dvL0xpbmtlZC1Jbi5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRlbGVncmFte1xyXG4gICAgICAgIEBpbmNsdWRlIGNoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgbWFzazogdXJsKCcuLi8uLi8uLi9hc3NldHMvc29jaWFsX25ldHdvcmtfbG9nby90ZWxlZ3JhbS5zdmcnKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnR3aXR0ZXJ7XHJcbiAgICAgICAgQGluY2x1ZGUgY2hhbmdlQ29sb3IoKTtcclxuICAgICAgICBtYXNrOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9zb2NpYWxfbmV0d29ya19sb2dvL1R3aXR0ZXIuc3ZnJykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC55b3V0dWJle1xyXG4gICAgICAgIEBpbmNsdWRlIGNoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgbWFzazogdXJsKCcuLi8uLi8uLi9hc3NldHMvc29jaWFsX25ldHdvcmtfbG9nby9Zb3VUdWJlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmdvb2dsZXtcclxuICAgICAgICBAaW5jbHVkZSBjaGFuZ2VDb2xvcigpO1xyXG4gICAgICAgIG1hc2s6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3NvY2lhbF9uZXR3b3JrX2xvZ28vR29vZ2xlLnN2ZycpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 3306:
/*!********************************************************!*\
  !*** ./src/app/components/UI/input/input.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputComponent": () => (/* binding */ InputComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function InputComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputComponent_div_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.changeType()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} }
class InputComponent {
    constructor(cd) {
        this.cd = cd;
        this.data = { labelName: 'empty',
            type: "text",
            placeholder: "emptyField",
            required: false
        };
        this.inputType = 'text';
    }
    PasswordInput() {
        if (this.data.type === 'password')
            return true;
        return false;
    }
    changeType() {
        if (this.inputType == 'text')
            this.inputType = "password";
        else
            this.inputType = "text";
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.inputType = (this.data.type === 'password') ? "password" : this.data.type;
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
InputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { data: "data" }, decls: 4, vars: 7, consts: [[3, "for"], ["autocomplete", "on", 1, "input", 3, "name", "type", "required", "placeholder"], ["class", "input_password_btn", 4, "ngIf"], [1, "input_password_btn"], [1, "eye", 3, "click"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputComponent_div_3_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("for", ctx.data.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", ctx.data.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("required", ctx.data.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.data.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.PasswordInput());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n\n.input[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #FFFFFF;\n  border: 1px solid #D7DADD;\n  border-radius: 4px;\n  width: 100%;\n  height: 100%;\n  padding: 16px;\n}\n\n.input_password_btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n\n.input_password_btn[_ngcontent-%COMP%]   .eye[_ngcontent-%COMP%] {\n  background-color: #424551;\n  width: 17px;\n  height: 17px;\n  position: absolute;\n  cursor: pointer;\n  right: 17px;\n  top: -34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklucHV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ1EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUNSOztBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFBUTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUVaIiwiZmlsZSI6IklucHV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5pbnB1dHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDdEQUREO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRfcGFzc3dvcmRfYnRue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmV5ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDU1MTtcclxuICAgICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxN3B4O1xyXG4gICAgICAgICAgICB0b3A6IC0zNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 4662:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/linksNames */ 7514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/follow-links/follow-links.component */ 500);





function FooterComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const links_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](links_r2.name);
} }
function FooterComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const links_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](links_r3.name);
} }
class FooterComponent {
    constructor() {
        this.social_networks = src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_0__.social_networks_links;
        this.siteMapLinks = src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_0__.siteMap;
        this.coursesLinks = src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_0__.courses;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 46, vars: 4, consts: [[1, "footer"], [1, "footerList"], ["src", "../../../assets/logo/logo_white.svg", "alt", "Createx", 1, "logo"], [1, "companyInfo"], [1, "footerLinks", 3, "linksArr", "color"], [1, "listEl"], ["href", "", 4, "ngFor", "ngForOf"], [1, "textAndSvg"], [1, "link", "phone_img"], [1, "link", "mail_img"], [1, "inputField"], ["type", "email", "placeholder", "Email address"], [1, "arrow"], [1, "copyrightContent"], [1, "copyright_left"], [1, "copyright_love_img"], ["href", ""]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts. We provide relevant approaches to online learning, internships and employment in the largest companies in the country.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-follow-links", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "SITE MAP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, FooterComponent_li_10_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 1)(12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "COURSES");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, FooterComponent_li_15_Template, 2, 1, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 1)(17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "(405) 555-0128");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "hello@createx.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "form", 1)(28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "SIGN UP TO OUR NEWSLETTER");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 11)(32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13)(36, "div", 14)(37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "\u00A9 All rights reserved. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Made with");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "by Createx Studio");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "GO TO TOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("linksArr", ctx.social_networks)("color", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.siteMapLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.coursesLinks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_1__.FollowLinksComponent], styles: ["p[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .textAndSvg[_ngcontent-%COMP%], span[_ngcontent-%COMP%] {\n  color: white;\n}\n\np[_ngcontent-%COMP%], li[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], .textAndSvg[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\nli[_ngcontent-%COMP%]:hover, .textAndSvg[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\nli[_ngcontent-%COMP%], .textAndSvg[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\nspan[_ngcontent-%COMP%] {\n  line-height: 160%;\n}\n\nli[_ngcontent-%COMP%], .textAndSvg[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], .copyrightContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 150%;\n}\n\np[_ngcontent-%COMP%], .copyrightContent[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\nh6[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: 10px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 150%;\n  text-transform: uppercase;\n  margin-bottom: 12px;\n}\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #1E212C;\n  font-weight: 400;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 64.0625%;\n  display: grid;\n  grid-template-columns: 2fr 1fr 1fr 1fr 2fr;\n  margin-top: 81px;\n  margin-bottom: 60px;\n  column-gap: 80px;\n}\n\n.footerList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.listEl[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.textAndSvg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  column-gap: 10px;\n}\n\n.link[_ngcontent-%COMP%] {\n  min-height: 21px;\n  min-width: 17px;\n  background-color: white;\n}\n\n.companyInfo[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  margin-bottom: 40px;\n}\n\n.footerLinks[_ngcontent-%COMP%] {\n  column-gap: 25px;\n  min-height: 18px;\n  opacity: 0.6;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  position: relative;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  opacity: 0.6;\n  color: white;\n  margin-top: 12px;\n  padding: 9px;\n  padding-left: 12px;\n  font-size: 14px;\n  width: 100%;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  background-color: white;\n  position: absolute;\n  top: 27px;\n  right: 14px;\n  width: 12px;\n  height: 8px;\n  cursor: pointer;\n}\n\n.copyrightContent[_ngcontent-%COMP%] {\n  height: 58px;\n  width: 64.0625%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.copyrightContent[_ngcontent-%COMP%]::before {\n  content: \"\";\n  height: 58px;\n  width: 100%;\n  position: absolute;\n  left: 0;\n  background: #FFFFFF;\n  opacity: 0.05;\n}\n\n.copyright_left[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.copyright_love_img[_ngcontent-%COMP%] {\n  background-color: #FF3F3A;\n  min-width: 14px;\n  min-height: 16px;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n\nh2[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5zY3NzIiwiX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQWdDLFlBQUE7QUFBaEM7O0FBRUE7RUFBcUIsWUFBQTtBQUVyQjs7QUFBQTtFQUE0QixZQUFBO0FBSTVCOztBQUZBO0VBQ0ksdUJBQUE7RUFBQSxrQkFBQTtBQUtKOztBQUhBO0VBQU0saUJBQUE7QUFPTjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQVFKOztBQUxBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQVFKOztBQUxBO0VBQTBCLGVBQUE7QUFTMUI7O0FBUEE7RUFBSSxnQkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFUQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVRBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBWUo7O0FBVEE7RUFDSSxlQzdDYTtFRDhDYixhQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQVlKOztBQVRBO0VBQ0kscUJBQUE7QUFZSjs7QUFUQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFZSjs7QUFUQTtFQUFNLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsdUJBQUE7QUFlekM7O0FBVkE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBYUo7O0FBVkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQWFKOztBQVRBO0VBQ0ksa0JBQUE7QUFZSjs7QUFUQTtFQUNJLHFDQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVRBO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBWUo7O0FBTkE7RUFDSSxZQUFBO0VBQ0EsZUN4SGE7RUR5SGIsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFTSjs7QUFOQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQVNKOztBQU5BO0VBQWdCLGFBQUE7QUFVaEI7O0FBUkE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFSQTtFQUFHLGVBQUE7QUFZSCIsImZpbGUiOiJmb290ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL3ZhclwiO1xyXG5cclxucCxsaSxoMSxoMixoNiwudGV4dEFuZFN2ZyxzcGFueyBjb2xvcjp3aGl0ZX1cclxuXHJcbnAsbGksaDIsLnRleHRBbmRTdmcge29wYWNpdHk6IDAuNjt9XHJcblxyXG5saTpob3ZlciwudGV4dEFuZFN2Zzpob3ZlciB7b3BhY2l0eTogMC45O31cclxuXHJcbmxpLC50ZXh0QW5kU3Zne1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O31cclxuXHJcbnNwYW4ge2xpbmUtaGVpZ2h0OiAxNjAlO31cclxuXHJcbmxpLC50ZXh0QW5kU3Zne1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5wLGg2LC5jb3B5cmlnaHRDb250ZW50IHNwYW57XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbn1cclxuXHJcbnAsLmNvcHlyaWdodENvbnRlbnQgc3BhbnsgZm9udC1zaXplOiAxMnB4O31cclxuXHJcbmg2eyBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOjEwcHh9XHJcblxyXG5oMXtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59ICAgXHJcblxyXG46aG9zdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTIxMkM7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6ICRzdHJ1Y3R1cmVXaWR0aDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnIgMWZyIDFmciAyZnI7XHJcbiAgICBtYXJnaW4tdG9wOiA4MXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGNvbHVtbi1nYXA6IDgwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJMaXN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5saXN0RWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0QW5kU3Zne1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5saW5re21pbi1oZWlnaHQ6IDIxcHg7IG1pbi13aWR0aDogMTdweDsgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxyXG5cclxuLy9saSBmaXJzdFxyXG5cclxuXHJcbi5jb21wYW55SW5mb3tcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyTGlua3N7XHJcbiAgICBjb2x1bW4tZ2FwOiAyNXB4O1xyXG4gICAgbWluLWhlaWdodDogMThweDtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuXHJcbi5pbnB1dEZpZWxke1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5hcnJvd3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyN3B4O1xyXG4gICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLy9jb3B5d3JpdGVcclxuXHJcbi5jb3B5cmlnaHRDb250ZW50e1xyXG4gICAgaGVpZ2h0OiA1OHB4O1xyXG4gICAgd2lkdGg6ICRzdHJ1Y3R1cmVXaWR0aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29weXJpZ2h0Q29udGVudDo6YmVmb3Jle1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgb3BhY2l0eTogMC4wNTtcclxufVxyXG5cclxuLmNvcHlyaWdodF9sZWZ0e2Rpc3BsYXk6ZmxleH1cclxuXHJcbi5jb3B5cmlnaHRfbG92ZV9pbWd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzRjNBO1xyXG4gICAgbWluLXdpZHRoOiAxNHB4O1xyXG4gICAgbWluLWhlaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcblxyXG5oMntjdXJzb3I6IHBvaW50ZXI7fSIsIiRzdHJ1Y3R1cmVXaWR0aDogNjQuMDYyNSU7Il19 */"] });


/***/ }),

/***/ 385:
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_data_InputForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/InputForms */ 314);
/* harmony import */ var src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/linksNames */ 7514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/follow-links/follow-links.component */ 500);
/* harmony import */ var _UI_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/input/input.component */ 3306);
/* harmony import */ var _UI_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/checkbox/checkbox.component */ 8688);








function ModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function ModalComponent_ng_template_3_app_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-input", 11);
} if (rf & 2) {
    const inputs_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", inputs_r6);
} }
function ModalComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 7)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Registration takes less than a minute but gives you full control");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "over your studying.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_ng_template_3_app_input_8_Template, 1, 1, "app-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Already have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_3_Template_span_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.dialogFormChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.regForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r2.checkboxData);
} }
function ModalComponent_ng_template_5_app_input_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-input", 11);
} if (rf & 2) {
    const inputs_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", inputs_r10);
} }
function ModalComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 7)(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Sign in");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Sign in to your account using email and password provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "during registration.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_ng_template_5_app_input_8_Template, 1, 1, "app-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Forgot password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Don't have an account? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_5_Template_span_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.dialogFormChange()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Sign up");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx_r4.checkboxData);
} }
class ModalComponent {
    constructor() {
        this.regModal = false;
        this.social_links = src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_1__.modal_social_links;
        this.modalVis = false;
        this.modalVisChange = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.loginForm = src_app_data_InputForms__WEBPACK_IMPORTED_MODULE_0__.signInForm;
        this.regForm = src_app_data_InputForms__WEBPACK_IMPORTED_MODULE_0__.signUpForm;
        this.checkboxData = {
            labelName: "Keep me signed in",
            type: "checkbox",
            required: true,
        };
    }
    onChangemodalVis(state) {
        this.modalVis = state;
        this.regModal = false;
        this.modalVisChange.emit(state);
    }
    onClick() {
        this.onChangemodalVis(false);
    }
    ClickOnDialog(e) {
        e.stopPropagation();
    }
    dialogFormChange() {
        this.regModal = !this.regModal;
    }
    ngOnInit() {
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], hostBindings: function ModalComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_click_HostBindingHandler($event) { return ctx.onClick($event.target); });
    } }, inputs: { modalVis: "modalVis" }, outputs: { modalVisChange: "modalVisChange" }, decls: 11, vars: 4, consts: [[1, "dialog", 3, "click"], [1, "cross", 3, "click"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["reg", ""], ["login", ""], [1, "line"], [1, "links_soc", 3, "linksArr"], [1, "form"], [1, "inputDataPanel"], [3, "data", 4, "ngFor", "ngForOf"], [1, "checkboxModal"], [3, "data"], [1, "btn"], [1, "linkText", 3, "click"], ["div", "", 1, "inputDataPanel"], [1, "linkText"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_0_listener($event) { return ctx.ClickOnDialog($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_Template_div_click_1_listener() { return ctx.onChangemodalVis(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_ng_template_3_Template, 17, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_ng_template_5_Template, 19, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Or sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "app-follow-links", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.regModal)("ngIfThen", _r1)("ngIfElse", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linksArr", ctx.social_links);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_2__.FollowLinksComponent, _UI_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _UI_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent], styles: ["[_nghost-%COMP%] {\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 2;\n  position: fixed;\n  display: flex;\n}\n\n.dialog[_ngcontent-%COMP%] {\n  margin: auto;\n  background: white;\n  align-items: center;\n  padding: 48px;\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%], .dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  row-gap: 24px;\n  align-items: center;\n}\n\n.cross[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 16px;\n  height: 16px;\n  opacity: 0.3;\n  top: 28px;\n  right: 28px;\n  cursor: pointer;\n  opacity: 0.3;\n}\n\n.cross[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.cross[_ngcontent-%COMP%]:before, .cross[_ngcontent-%COMP%]:after {\n  position: absolute;\n  left: 7px;\n  top: -2px;\n  content: \" \";\n  height: 20px;\n  width: 2px;\n  background-color: #333;\n}\n\n.cross[_ngcontent-%COMP%]:before {\n  transform: rotate(45deg);\n}\n\n.cross[_ngcontent-%COMP%]:after {\n  transform: rotate(-45deg);\n}\n\np[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 28px;\n  line-height: 150%;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n  align-self: flex-start;\n}\n\n.line[_ngcontent-%COMP%] {\n  height: 1px;\n  background-color: #E5E8ED;\n  width: calc(100% + 96px);\n}\n\n.linkText[_ngcontent-%COMP%] {\n  color: #FF3F3A;\n  cursor: pointer;\n  width: 100%;\n  text-align: right;\n}\n\n.links_soc[_ngcontent-%COMP%] {\n  min-height: 18px;\n  column-gap: 18px;\n}\n\n.inputDataPanel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  gap: 20px;\n  font-size: 14px;\n  line-height: 150%;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 44px;\n}\n\n.checkboxModal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQUE7RUFDSSx3QkFBQTtBQUdKOztBQURBO0VBQ0kseUJBQUE7QUFJSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFHSjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBQUE7RUFDSSxnQkFBQTtFQUNKLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBR0E7O0FBQUE7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUdKOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSxZQUFBO0FBRUo7O0FBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6Im1vZGFsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdHtcclxuICAgIHRvcDowO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmRpYWxvZyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9ybSwuZGlhbG9ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICByb3ctZ2FwOiAyNHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNyb3NzIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgb3BhY2l0eTogMC4zO1xyXG4gICAgdG9wOiAyOHB4O1xyXG4gICAgcmlnaHQ6IDI4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5jcm9zczpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jcm9zczpiZWZvcmUsIC5jcm9zczphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgICBjb250ZW50OiAnICc7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxufVxyXG4uY3Jvc3M6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG4uY3Jvc3M6YWZ0ZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xyXG59XHJcblxyXG5zcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMTUwJTtcclxuYWxpZ24tc2VsZjpmbGV4LXN0YXJ0XHJcbn1cclxuXHJcbi5saW5le1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFOEVEO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDk2cHgpO1xyXG59XHJcblxyXG5cclxuLmxpbmtUZXh0e1xyXG4gICAgY29sb3I6ICNGRjNGM0E7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubGlua3Nfc29je1xyXG4gICAgbWluLWhlaWdodDogMThweDtcclxuICAgIGNvbHVtbi1nYXA6IDE4cHg7XHJcbn1cclxuXHJcbi5pbnB1dERhdGFQYW5lbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIGhlaWdodDogNDRweDtcclxufVxyXG5cclxuLmNoZWNrYm94TW9kYWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 4726:
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavBarComponent": () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



function NavBarComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const links_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](links_r1.name);
} }
class NavBarComponent {
    constructor() {
        this.logoColor = 'black';
        this.modalVisKostil = false;
        this.modalVisKostilChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.linksArr = [
            { name: "About Us", link: null },
            { name: "Courses", link: null },
            { name: "Events", link: null },
            { name: "Blog", link: null },
            { name: "Contracts", link: null },
        ];
    }
    onChangemodalVis(state) {
        this.modalVisKostil = state;
        this.modalVisKostilChange.emit(state);
    }
    ngOnInit() {
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(); };
NavBarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], inputs: { modalVisKostil: "modalVisKostil" }, outputs: { modalVisKostilChange: "modalVisKostilChange" }, decls: 10, vars: 1, consts: [["src", "../../../assets/logo/logo_black.svg", "alt", "Createx", 1, "logo"], [1, "navList"], ["class", "navListEl", 4, "ngFor", "ngForOf"], [1, "cta"], [1, "btn"], [1, "logArea", 3, "click"], [1, "link", "person_img"], [1, "navListEl"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavBarComponent_li_2_Template, 2, 1, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get consultaion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_div_click_6_listener() { return ctx.onChangemodalVis(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log in / Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.linksArr);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["li[_ngcontent-%COMP%], .logArea[_ngcontent-%COMP%] {\n  color: #424551;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 160%;\n  cursor: pointer;\n}\n\n.navListEl[_ngcontent-%COMP%]:hover, .link[_ngcontent-%COMP%]:hover, span[_ngcontent-%COMP%]:hover {\n  color: #FF3F3A;\n}\n\n[_nghost-%COMP%] {\n  margin-top: 20px;\n  width: 64.0625%;\n  display: grid;\n  justify-content: center;\n  align-items: center;\n  grid-template-columns: 1fr 3fr 2fr;\n}\n\n.navList[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  list-style-type: none;\n  column-gap: 40px;\n}\n\n.cta[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  min-height: 52px;\n}\n\n.logArea[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  width: 100%;\n  cursor: pointer;\n}\n\n.logArea[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.logArea[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  background: #424551;\n  min-width: 18px;\n  min-height: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5zY3NzIiwiX3Zhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdJO0VBQ0ksY0FBQTtBQUFSOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQ2hCYTtFRGlCYixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBREo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDSSxnQkFBQTtBQUhKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBSEo7O0FBS0k7RUFDSSxpQkFBQTtBQUhSOztBQU1JO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKUiIsImZpbGUiOiJuYXYuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuL192YXJcIjtcclxuXHJcbmxpLC5sb2dBcmVhe1xyXG4gICAgY29sb3I6ICM0MjQ1NTE7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7fVxyXG5cclxuICAgIC5uYXZMaXN0RWw6aG92ZXIsLmxpbms6aG92ZXIsc3Bhbjpob3ZlcntcclxuICAgICAgICBjb2xvcjojRkYzRjNBO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG46aG9zdHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB3aWR0aDogJHN0cnVjdHVyZVdpZHRoO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmciAyZnI7XHJcbn1cclxuXHJcblxyXG4ubmF2TGlzdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGNvbHVtbi1nYXA6IDQwcHg7XHJcbn1cclxuXHJcblxyXG4uY3Rhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bnsgICAgICAgXHJcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG59XHJcblxyXG4ubG9nQXJlYXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIHNwYW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxpbmt7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzQyNDU1MTtcclxuICAgICAgICBtaW4td2lkdGg6IDE4cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTdweDtcclxuICAgIH1cclxufVxyXG4iLCIkc3RydWN0dXJlV2lkdGg6IDY0LjA2MjUlOyJdfQ== */"] });


/***/ }),

/***/ 5386:
/*!*****************************************************************!*\
  !*** ./src/app/components/pages/contacts/contacts.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var src_app_data_InputForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/data/InputForms */ 314);
/* harmony import */ var src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data/linksNames */ 7514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/follow-links/follow-links.component */ 500);
/* harmony import */ var _UI_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../UI/input/input.component */ 3306);
/* harmony import */ var _UI_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../UI/checkbox/checkbox.component */ 8688);







function ContactsComponent_app_input_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-input", 23);
} if (rf & 2) {
    const input_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", input_r1);
} }
class ContactsComponent {
    constructor() {
        this.social_networks = src_app_data_linksNames__WEBPACK_IMPORTED_MODULE_1__.social_networks_links;
        this.inputs = src_app_data_InputForms__WEBPACK_IMPORTED_MODULE_0__.contactInputForm;
        this.lastInput = src_app_data_InputForms__WEBPACK_IMPORTED_MODULE_0__.contactMessageInput;
        this.checkboxData = {
            labelName: "I agree to receive communications from Createx Online School",
            type: "checkbox",
            required: true,
        };
    }
    ngOnInit() {
    }
}
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["app-main"]], decls: 48, vars: 8, consts: [[1, "contactsArea"], [1, "contactsInfo"], [1, "h2top"], [1, "contactAdressForm"], [1, "link", "chat_img"], [1, "contactAdressFormData"], [1, "contact_label"], [1, "link", "phone_img"], [1, "link", "outline_img"], [1, "h2bottom"], [1, "links", 3, "linksArr"], ["id", "map", 1, "map"], [1, "askArea"], ["src", "../../../assets/contacts/Askform_illustration.svg", "alt", "ASK US", 1, "img", "askImg"], [1, "askForm"], [1, "askInputArea"], [3, "data", 4, "ngFor", "ngForOf"], [1, "mesArea"], [3, "for"], [1, "mes", 3, "name", "required", "placeholder"], [1, "sendForm"], [1, "agreeChekbox", 3, "data"], [1, "btn"], [3, "data"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "CONTACT INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Get in touch");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Talk to us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "hello@createx.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 5)(16, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Call us:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "(405) 555-0128");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 5)(23, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Address:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "2464 Royal Ln. Mesa, New Jersey 45463, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "h2", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "FOLLOW US:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "app-follow-links", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 14)(34, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "ANY QUESTIONS?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "Drop us a line");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, ContactsComponent_app_input_39_Template, 1, 1, "app-input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 17)(41, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "app-checkbox", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "Send message");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("linksArr", ctx.social_networks);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.inputs);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", ctx.lastInput.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.lastInput.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("name", ctx.lastInput.labelName);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("required", ctx.lastInput.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("placeholder", ctx.lastInput.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.checkboxData);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _UI_follow_links_follow_links_component__WEBPACK_IMPORTED_MODULE_2__.FollowLinksComponent, _UI_input_input_component__WEBPACK_IMPORTED_MODULE_3__.InputComponent, _UI_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent], styles: [".map[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  margin-top: 32px;\n}\n\n.contactsInfo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n\n.contactAdressForm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 24px;\n  font-weight: 700;\n}\n\n.contactAdressFormData[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-left: 13px;\n  cursor: pointer;\n}\n\n.link[_ngcontent-%COMP%] {\n  background-color: #FF3F3A;\n  min-width: 22px;\n  min-height: 14px;\n}\n\n.h2bottom[_ngcontent-%COMP%] {\n  margin-top: 48px;\n  margin-bottom: 27px;\n}\n\n.links[_ngcontent-%COMP%] {\n  min-height: 24px;\n  column-gap: 33px;\n}\n\n.askImg[_ngcontent-%COMP%] {\n  padding-top: 67px;\n  padding-bottom: 66px;\n  margin-right: 105px;\n  font-size: 200px;\n  text-align: center;\n}\n\n.askInputArea[_ngcontent-%COMP%], .sendForm[_ngcontent-%COMP%] {\n  font-weight: 400;\n  line-height: 160%;\n}\n\n.askForm[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.askInputArea[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 2fr;\n  gap: 24px;\n  align-items: center;\n  margin-bottom: 48px;\n}\n\n.mesArea[_ngcontent-%COMP%] {\n  padding-top: 24px;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 48px;\n}\n\n.mes[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #FFFFFF;\n  border: 1px solid #D7DADD;\n  border-radius: 4px;\n  padding: 16px;\n  width: 100%;\n  height: 100%;\n  resize: none;\n}\n\n.sendForm[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 25px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  height: 52px;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], span[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\n  color: #1E212C;\n}\n\nh2[_ngcontent-%COMP%], .contact_label[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.contact_label[_ngcontent-%COMP%], span[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  line-height: 150%;\n}\n\n.contact_label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 46px;\n  line-height: 130%;\n  margin-bottom: 40px;\n}\n\n[_nghost-%COMP%] {\n  padding-top: 124px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  width: 100%;\n  font-size: 16px;\n}\n\n.h2top[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.contactsArea[_ngcontent-%COMP%], .askArea[_ngcontent-%COMP%] {\n  width: 64.0625%;\n  display: flex;\n  flex-direction: row;\n}\n\n.askArea[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin-top: 168px;\n  margin-bottom: 180px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb250YWN0c0FyZWEuc2NzcyIsImNvbnRhY3RzLnNjc3MiLCJfYXNrRm9ybS5zY3NzIiwiLi5cXC4uXFxfdmFyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FESUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjs7QURJQTtFQUFNLHlCQUFBO0VBQTBCLGVBQUE7RUFBaUIsZ0JBQUE7QUNFakQ7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDR0o7O0FDMUNBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRDZDSjs7QUMxQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FENkNKOztBQzFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FENkNKOztBQ3pDQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUQ0Q0o7O0FDekNBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRDRDSjs7QUN6Q0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBRDRDSjs7QUN4Q0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FEMkNKOztBQ3hDQTtFQUFLLFlBQUE7QUQ0Q0w7O0FBbkdBO0VBQWtCLGNBQUE7QUF1R2xCOztBQXBHQTtFQUFrQixnQkFBQTtBQXdHbEI7O0FBdkdBO0VBQXVCLGlCQUFBO0FBMkd2Qjs7QUF6R0E7RUFBZSxlQUFBO0FBNkdmOztBQTNHQTtFQUFLLGdCQUFBO0VBQ0QsZUFBQTtBQStHSjs7QUE3R0E7RUFBRyxlQUFBO0VBQ0MsbUJBQUE7RUFDQSx5QkFBQTtBQWlISjs7QUEvR0E7RUFBSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBbUhKOztBQWpIQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBb0hKOztBQWpIQTtFQUFPLGtCQUFBO0FBcUhQOztBQW5IQTtFQUNJLGVFdENhO0VGdUNiLGFBQUE7RUFDQSxtQkFBQTtBQXNISjs7QUFsSEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBcUhKIiwiZmlsZSI6ImNvbnRhY3RzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICAvL21pbi13aWR0aDogNzA1cHg7XHJcbiAgICAvL21pbi1oZWlnaHQ6IDQxMnB4O1xyXG59XHJcblxyXG4uY29udGFjdHNJbmZve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNvbnRhY3RBZHJlc3NGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4gICAgXHJcbi5jb250YWN0QWRyZXNzRm9ybURhdGF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubGlua3tiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzRjNBO21pbi13aWR0aDogMjJweDsgbWluLWhlaWdodDogMTRweDt9XHJcblxyXG4uaDJib3R0b217XHJcbiAgICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxufVxyXG5cclxuLmxpbmtzeyBcclxuICAgIG1pbi1oZWlnaHQ6IDI0cHg7XHJcbiAgICBjb2x1bW4tZ2FwOiAzM3B4O30iLCJAaW1wb3J0IFwiLi4vLi4vdmFyXCI7XHJcblxyXG5AaW1wb3J0IFwiLi9jb250YWN0c0FyZWFcIjtcclxuQGltcG9ydCBcIi4vYXNrRm9ybVwiO1xyXG5cclxuaDEsaDIsc3BhbixsYWJlbCB7Y29sb3I6ICMxRTIxMkM7fVxyXG5cclxuXHJcbmgyLC5jb250YWN0X2xhYmVse2ZvbnQtd2VpZ2h0OiA3MDA7fVxyXG4uY29udGFjdF9sYWJlbCxzcGFuLGgye2xpbmUtaGVpZ2h0OiAxNTAlO31cclxuXHJcbi5jb250YWN0X2xhYmVse2ZvbnQtc2l6ZTogMTRweDt9XHJcblxyXG5zcGFue2ZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7fVxyXG5cclxuaDJ7Zm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7fVxyXG5cclxuaDF7IGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBmb250LXNpemU6IDQ2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTMwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7fVxyXG5cclxuOmhvc3R7XHJcbiAgICBwYWRkaW5nLXRvcDogMTI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uaDJ0b3B7bWFyZ2luLWJvdHRvbTogOHB4O31cclxuXHJcbi5jb250YWN0c0FyZWEsIC5hc2tBcmVhIHtcclxuICAgIHdpZHRoOiAkc3RydWN0dXJlV2lkdGg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuXHJcbi5hc2tBcmVhe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tdG9wOiAxNjhweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xyXG59XHJcblxyXG4iLCIuYXNrSW1ne1xyXG4gICAgcGFkZGluZy10b3A6IDY3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNjZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTA1cHg7XHJcbiAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXNrSW5wdXRBcmVhLC5zZW5kRm9ybXtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTYwJTtcclxufVxyXG5cclxuLmFza0Zvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5cclxuLmFza0lucHV0QXJlYXtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgKDJmcik7XHJcbiAgICBnYXA6MjRweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4ubWVzQXJlYXtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLm1lc3tcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDdEQUREO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcmVzaXplOiBub25lO1xyXG59XHJcblxyXG5cclxuLnNlbmRGb3Jte1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMjVweDtcclxufVxyXG5cclxuLmJ0bntoZWlnaHQ6IDUycHg7XHJcbn1cclxuIiwiJHN0cnVjdHVyZVdpZHRoOiA2NC4wNjI1JTsiXX0= */"] });


/***/ }),

/***/ 314:
/*!************************************!*\
  !*** ./src/app/data/InputForms.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactInputForm": () => (/* binding */ contactInputForm),
/* harmony export */   "contactMessageInput": () => (/* binding */ contactMessageInput),
/* harmony export */   "signInForm": () => (/* binding */ signInForm),
/* harmony export */   "signUpForm": () => (/* binding */ signUpForm)
/* harmony export */ });
const contactInputForm = [
    { labelName: 'First Name*', type: "text", placeholder: "Your first name", required: true, },
    { labelName: 'Last Name*', type: "text", placeholder: "Your last name", required: true, },
    { labelName: 'Email*', type: "text", placeholder: "Your working email", required: true, },
    { labelName: 'Phone', type: "tel", placeholder: "You phone number", required: false, },
];
const contactMessageInput = { labelName: 'Message*', type: "text", placeholder: "Your message", required: true, };
const signInForm = [
    { labelName: 'Email', type: "email", placeholder: "Your working email", required: true, },
    { labelName: 'Password', type: "password", placeholder: "************", required: true, },
];
const signUpForm = [
    { labelName: 'Full Name', type: "text", placeholder: "Your full name", required: true, },
    { labelName: 'Email', type: "email", placeholder: "Your working email", required: true, },
    { labelName: 'Password', type: "password", placeholder: "************", required: true, },
    { labelName: 'Confirm Password', type: "password", placeholder: "************", required: true, },
];


/***/ }),

/***/ 7514:
/*!************************************!*\
  !*** ./src/app/data/linksNames.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "courses": () => (/* binding */ courses),
/* harmony export */   "modal_social_links": () => (/* binding */ modal_social_links),
/* harmony export */   "siteMap": () => (/* binding */ siteMap),
/* harmony export */   "social_networks_links": () => (/* binding */ social_networks_links)
/* harmony export */ });
const siteMap = [
    { name: "About Us", link: null },
    { name: "Courses", link: null },
    { name: "Events", link: null },
    { name: "Blog", link: null },
    { name: "Contracts", link: null },
];
const courses = [
    { name: "Marketing", link: null },
    { name: "Management", link: null },
    { name: "HR & Recruting", link: null },
    { name: "Design", link: null },
    { name: "Development", link: null },
];
const social_networks_links = [
    { name: "facebook", link: null },
    { name: "inst", link: null },
    { name: "linked", link: null },
    { name: "twitter", link: null },
    { name: "youtube", link: null },
];
const modal_social_links = [
    { name: "facebook", link: null },
    { name: "google", link: null },
    { name: "twitter", link: null },
    { name: "linked", link: null },
];


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map