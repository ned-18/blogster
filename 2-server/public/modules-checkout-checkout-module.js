(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-checkout-checkout-module"],{

/***/ "bqgV":
/*!*****************************************************!*\
  !*** ./src/app/modules/checkout/checkout.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout-routing.module */ "vdoo");
/* harmony import */ var _checkout_home_checkout_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkout-home/checkout-home.component */ "szvu");
/* harmony import */ var _checkout_home_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkout-home/order-details/order-details.component */ "e16l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class CheckoutModule {
}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); };
CheckoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CheckoutModule });
CheckoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _checkout_routing_module__WEBPACK_IMPORTED_MODULE_3__["CheckoutRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_checkout_home_checkout_home_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutHomeComponent"], _checkout_home_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _checkout_routing_module__WEBPACK_IMPORTED_MODULE_3__["CheckoutRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();


/***/ }),

/***/ "e16l":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/checkout/checkout-home/order-details/order-details.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


class OrderDetailsComponent {
    constructor() { }
    ngOnInit() { }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(); };
OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["app-order-details"]], inputs: { product: "product" }, decls: 6, vars: 6, consts: [[1, "product-img", 3, "src", "alt"], [1, "product-title"], [1, "product-price"]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.product.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.product.price));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"]], styles: ["[_nghost-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 2rem 0;\r\n  padding-bottom: 2rem;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.product-img[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.product-title[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  margin-right: 1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4ucHJvZHVjdC1pbWcge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG5cclxuLnByb2R1Y3QtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "szvu":
/*!***************************************************************************!*\
  !*** ./src/app/modules/checkout/checkout-home/checkout-home.component.ts ***!
  \***************************************************************************/
/*! exports provided: CheckoutHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutHomeComponent", function() { return CheckoutHomeComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/cart.service */ "/NBf");
/* harmony import */ var _shared_input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/input/input.component */ "9odQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-details/order-details.component */ "e16l");







function CheckoutHomeComponent_app_order_details_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-order-details", 12);
} if (rf & 2) {
    const prod_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", prod_r1.product);
} }
class CheckoutHomeComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.checkout = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            cardholderName: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            cvv: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getOrderDetails();
    }
    onSubmit() {
        console.log(this.checkout.value);
    }
    getOrderDetails() {
        this.subscription = this.cartService.cartData$.subscribe(data => {
            this.orderDetails = data;
            let price = 0;
            this.orderDetails.data.forEach(item => {
                var _a;
                price = price + (Number((_a = item.product) === null || _a === void 0 ? void 0 : _a.price) * item.quantity);
            });
            this.totalPrice = price;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CheckoutHomeComponent.ɵfac = function CheckoutHomeComponent_Factory(t) { return new (t || CheckoutHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
CheckoutHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CheckoutHomeComponent, selectors: [["app-checkout-home"]], decls: 21, vars: 20, consts: [[1, "container"], [1, "header", 2, "color", "firebrick", "font-size", "2rem"], [1, "checkout"], [1, "header"], [3, "formGroup", "ngSubmit"], [3, "name", "control", "label", "maxlength"], [3, "name", "control", "label", "type"], [3, "name", "control", "label"], [1, "submit"], ["type", "submit", 1, "button", "button--payment", 3, "disabled"], [1, "order-details"], [3, "product", 4, "ngFor", "ngForOf"], [3, "product"]], template: function CheckoutHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Coming Soon... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CheckoutHomeComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Complete Payment ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Order Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, CheckoutHomeComponent_app_order_details_20_Template, 1, 1, "app-order-details", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkout);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "cardholderName")("control", ctx.checkout.get("cardholderName"))("label", "Cardholder Name")("maxlength", "60");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "cardNumber")("control", ctx.checkout.get("cardNumber"))("label", "Card Number")("type", "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "expiryDate")("control", ctx.checkout.get("expiryDate"))("label", "Expiry Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "cvv")("control", ctx.checkout.get("cvv"))("label", "CVV");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.checkout.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Total price: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 18, ctx.totalPrice), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.orderDetails.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _shared_input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _order_details_order_details_component__WEBPACK_IMPORTED_MODULE_5__["OrderDetailsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["form[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 1.2rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.button--payment[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  padding: 0.9rem 1.5rem;\r\n  font-size: 0.85rem;\r\n  border: 1px solid #0db3e3;\r\n  background-color: transparent;\r\n  color: #0db3e3;\r\n}\r\n\r\n.button--payment[_ngcontent-%COMP%]:hover {\r\n  background-color: #0db3e3;\r\n  color: #fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2IiLCJmaWxlIjoiY2hlY2tvdXQtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN1Ym1pdCBwIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uYnV0dG9uLS1wYXltZW50IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgcGFkZGluZzogMC45cmVtIDEuNXJlbTtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkYjNlMztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb2xvcjogIzBkYjNlMztcclxufVxyXG5cclxuLmJ1dHRvbi0tcGF5bWVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYjNlMztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "vdoo":
/*!*************************************************************!*\
  !*** ./src/app/modules/checkout/checkout-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CheckoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRoutingModule", function() { return CheckoutRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _checkout_home_checkout_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-home/checkout-home.component */ "szvu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    { path: '', component: _checkout_home_checkout_home_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutHomeComponent"] }
];
class CheckoutRoutingModule {
}
CheckoutRoutingModule.ɵfac = function CheckoutRoutingModule_Factory(t) { return new (t || CheckoutRoutingModule)(); };
CheckoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CheckoutRoutingModule });
CheckoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=modules-checkout-checkout-module.js.map