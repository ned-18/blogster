(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/9lB":
/*!***********************************************************!*\
  !*** ./src/app/shared/dialog-box/dialog-box.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");


class DialogBoxComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() { }
}
DialogBoxComponent.ɵfac = function DialogBoxComponent_Factory(t) { return new (t || DialogBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
DialogBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogBoxComponent, selectors: [["app-dialog-box"]], inputs: { header: "header", body: "body", buttonOne: "buttonOne", buttonTwo: "buttonTwo" }, decls: 15, vars: 4, consts: [[1, "overlay", 3, "click"], [1, "modal"], [1, "modal-header"], [1, "close", 3, "click"], [1, "modal-body"], [1, "modal-footer"], [1, "button--modal", "danger", 3, "click"], [1, "button--modal", "primary", 3, "click"]], template: function DialogBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_div_click_0_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_a_click_5_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_a_click_11_listener() { return ctx.activeModal.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogBoxComponent_Template_a_click_13_listener() { return ctx.activeModal.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonOne);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.buttonTwo);
    } }, styles: [".overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 100;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.modal[_ngcontent-%COMP%] {\r\n  background-color: #eee;\r\n  width: 600px;\r\n  position: absolute;\r\n  z-index: 101;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  padding: 1rem 2rem;\r\n  border-radius: 2px;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #333;\r\n  align-items: center;\r\n  color: #333;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  margin: 0;\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover {\r\n  color: #0db3e3;\r\n}\r\n\r\n.modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.modal-footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.button--modal[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  text-transform: uppercase;\r\n  font-weight: 600;\r\n  font-size: 0.8rem;\r\n  font-family: inherit;\r\n  padding: 0.5rem 1.5rem;\r\n  margin-top: 1rem;\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n  transition: 0.2s;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%] {\r\n  background-color: #9d0016;\r\n  border: 1px solid #9d0016;\r\n  color: #eee;\r\n}\r\n\r\n.danger[_ngcontent-%COMP%]:hover {\r\n  background-color: #333;\r\n  border: 1px solid #333;\r\n}\r\n\r\n.primary[_ngcontent-%COMP%] {\r\n  border: 1px solid #0db3e3;\r\n  color: #333;\r\n}\r\n\r\n.primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #0db3e3;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1ib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJkaWFsb2ctYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gIHdpZHRoOiA2MDBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAxO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMzMztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIge1xyXG4gIGNvbG9yOiAjMGRiM2UzO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSBwIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubW9kYWwtZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmJ1dHRvbi0tbW9kYWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmRhbmdlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkMDAxNjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOWQwMDE2O1xyXG4gIGNvbG9yOiAjZWVlO1xyXG59XHJcblxyXG4uZGFuZ2VyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi5wcmltYXJ5IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMGRiM2UzO1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ucHJpbWFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYjNlMztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "/NBf":
/*!*****************************************!*\
  !*** ./src/app/service/cart.service.ts ***!
  \*****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shop.service */ "jl0k");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




class CartService {
    constructor(shopService, toastr) {
        var _a;
        this.shopService = shopService;
        this.toastr = toastr;
        this.cartDataClient = {
            data: [{
                    product: undefined,
                    quantity: 0
                }],
            total: 0
        };
        this.cartTotalItems$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](0);
        this.cartData$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.cartDataClient);
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart !== null && cart !== undefined && ((_a = cart.data[0]) === null || _a === void 0 ? void 0 : _a.quantity) !== 0) {
            this.cartDataClient = cart;
            this.cartData$.next(Object.assign({}, this.cartDataClient));
            this.cartTotalItems$.next(this.cartDataClient.total);
        }
    }
    addToCart(id) {
        this.shopService.getOneBook(id).subscribe({
            next: (book) => {
                if (this.cartDataClient.data[0].product === undefined) {
                    this.cartDataClient.data[0].product = book.data;
                    this.cartDataClient.data[0].quantity = 1;
                    this.cartDataClient.total++;
                    this.cartData$.next(Object.assign({}, this.cartDataClient));
                    this.cartTotalItems$.next(this.cartDataClient.total);
                    localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                    this.toastr.success('Book is added to the cart.');
                    return;
                }
                else {
                    const index = this.cartDataClient.data.findIndex(p => p.product.id === id);
                    if (index === -1) {
                        this.cartDataClient.data.push({
                            product: book.data,
                            quantity: 1
                        });
                        this.cartData$.next(Object.assign({}, this.cartDataClient));
                        this.cartDataClient.total++;
                        this.cartTotalItems$.next(this.cartDataClient.total);
                        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
                        this.toastr.success('Book is added to the cart.');
                        return;
                    }
                    else {
                        this.toastr.info('Book is already added to the cart.');
                        return;
                    }
                }
            },
            error: (error) => {
                console.log(error);
            }
        });
    }
    deleteProductFromCart(index) {
        if (this.cartDataClient.data.length === 1) {
            this.cartDataClient = {
                data: [{
                        product: undefined,
                        quantity: 0
                    }],
                total: 0
            };
        }
        else {
            this.cartDataClient.data.splice(index, 1);
            this.cartDataClient.total--;
        }
        this.cartData$.next(Object.assign({}, this.cartDataClient));
        this.cartTotalItems$.next(this.cartDataClient.total);
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
        this.toastr.info('Book is deleted from the cart.');
    }
    deleteAllProductsFromCart() {
        this.cartDataClient = {
            data: [{
                    product: undefined,
                    quantity: 0
                }],
            total: 0
        };
        this.cartData$.next(Object.assign({}, this.cartDataClient));
        this.cartTotalItems$.next(this.cartDataClient.total);
        localStorage.clear();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shop_service__WEBPACK_IMPORTED_MODULE_2__["ShopService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Nedim\projects\1-nodejs\3-blogster\client\src\main.ts */"zUnb");


/***/ }),

/***/ "6uu6":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart.service */ "/NBf");









class AuthService {
    constructor(http, router, toastr, cartService) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.cartService = cartService;
        this.signedIn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.username$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.profileImage$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
    }
    // USER AUTH
    registerUser(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["enviroment"].rootURL}/auth/register`, user, { headers: this.headers });
    }
    loginUser(user) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["enviroment"].rootURL}/auth/login`, user, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.signedIn$.next(true);
        }));
    }
    logout(message) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["enviroment"].rootURL}/auth/logout`, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(() => {
            this.signedIn$.next(false);
            this.cartService.deleteAllProductsFromCart();
        })).subscribe({
            next: (respone) => {
                this.toastr.info(message, 'Goodbye');
                this.router.navigate(['/']);
            },
            error: (error) => {
                this.toastr.error(error.message, 'Error');
            }
        });
    }
    checkAuth() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__["enviroment"].rootURL}/auth/check-auth`, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(({ authenticated, username, profileImage }) => {
            this.username$.next(username);
            this.signedIn$.next(authenticated);
            this.profileImage$.next(profileImage);
        }));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9odQ":
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



function InputComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.label, " is required. ");
} }
function InputComponent_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r3.label, " must be at least ", ctx_r3.control.errors.minlength.requiredLength, " characters. ");
} }
function InputComponent_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "lowercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Please enter valid ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r4.label), ". E.g. email@email.com ");
} }
function InputComponent_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.label, " must have at least 8 characters. One uppercase letter, numeric and special character. ");
} }
function InputComponent_ng_container_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter valid format. E.g. +38733112233. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputComponent_ng_container_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid format ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputComponent_ng_container_4_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_ng_container_4_div_2_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputComponent_ng_container_4_div_3_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_ng_container_4_div_4_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputComponent_ng_container_4_div_5_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputComponent_ng_container_4_div_6_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.control.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.control.errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.control.errors.emailIsNotValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.control.errors.passwordIsNotValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.control.errors.phoneIsNotValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.control.errors.pattern);
} }
class InputComponent {
    constructor() { }
    ngOnInit() {
        this.date = new Date().toISOString().slice(0, 10);
    }
    get showErrors() {
        const { invalid, touched, dirty } = this.control;
        return invalid && (touched || dirty);
    }
    get validator() {
        const validator = this.control.validator({});
        return validator;
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { control: "control", label: "label", type: "type", name: "name", maxlength: "maxlength" }, decls: 5, vars: 8, consts: [[1, "label"], [4, "ngIf"], [1, "input", 3, "type", "name", "formControl", "max", "maxlength"], ["class", "is-danger help", 4, "ngIf"], [1, "is-danger", "help"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputComponent_span_2_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputComponent_ng_container_4_Template, 7, 6, "ng-container", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("name", ctx.name)("formControl", ctx.control)("max", ctx.date)("maxlength", ctx.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showErrors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"]], styles: ["[_nghost-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #0db3e3;\r\n  box-sizing: border-box;\r\n  display: inline-block;\r\n  font-size: 1rem;\r\n  font-weight: 300;\r\n  height: 2.2rem;\r\n  line-height: 2.5rem;\r\n  outline: none;\r\n  padding: 0 1rem;\r\n  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);\r\n  width: 100%;\r\n  caret-color: #0db3e3;\r\n  margin-bottom: 3rem;\r\n  font-family: inherit;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]:focus {\r\n  color: #333;\r\n  border-bottom: 2px solid #333;\r\n}\r\n\r\n.input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.input[type=\"number\"][_ngcontent-%COMP%] {\r\n  -moz-appearance: textfield;\r\n  color: #0db3e3;\r\n}\r\n\r\n.input[type=\"date\"][_ngcontent-%COMP%]::-webkit-datetime-edit {\r\n  color: #333;\r\n  font-family: inherit;\r\n}\r\n\r\n.input[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\r\n  cursor: pointer;\r\n  border-radius: 4px;\r\n  margin-right: 2px;\r\n  filter: invert(0.4);\r\n}\r\n\r\n.help[_ngcontent-%COMP%] {\r\n  top: 3.8rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtFQUFrRTtFQUNsRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMGRiM2UzO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGhlaWdodDogMi4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNhcmV0LWNvbG9yOiAjMGRiM2UzO1xyXG4gIG1hcmdpbi1ib3R0b206IDNyZW07XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5pbnB1dDpmb2N1cyB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuLmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbn1cclxuXHJcbi5pbnB1dFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1kYXRldGltZS1lZGl0IHtcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLmlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMC40KTtcclxufVxyXG5cclxuLmhlbHAge1xyXG4gIHRvcDogMy44cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: enviroment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enviroment", function() { return enviroment; });
const enviroment = {
    production: false,
    rootURL: 'http://localhost:3000/api'
};


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/cards/cards.component */ "moHP");


class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 2, consts: [[3, "title", "type"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "News and stories")("type", "");
    } }, directives: [_shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "JjYL":
/*!**************************************!*\
  !*** ./src/app/http-interceptors.ts ***!
  \**************************************/
/*! exports provided: HttpInterceptors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptors", function() { return HttpInterceptors; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HttpInterceptors {
    intercept(req, next) {
        // Modify or log the outgoing request
        const modifiedReq = req.clone({
            withCredentials: true
        });
        return next.handle(modifiedReq);
    }
}
HttpInterceptors.ɵfac = function HttpInterceptors_Factory(t) { return new (t || HttpInterceptors)(); };
HttpInterceptors.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpInterceptors, factory: HttpInterceptors.ɵfac });


/***/ }),

/***/ "NBb0":
/*!***************************************************************************!*\
  !*** ./src/app/shared/image-upload-input/image-upload-input.component.ts ***!
  \***************************************************************************/
/*! exports provided: ImageUploadInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploadInputComponent", function() { return ImageUploadInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ImageUploadInputComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageUploadInputComponent_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.imageNameClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.imageName);
} }
function ImageUploadInputComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Max. size 1 MB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r3.imageNameClass);
} }
function ImageUploadInputComponent_ng_container_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Image is too big or type is not suported. Max. size 1 MB. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ImageUploadInputComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ImageUploadInputComponent_ng_container_11_div_1_Template, 2, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.control.errors.notSupportedFileType || ctx_r4.control.errors.imageIsTooBig);
} }
function ImageUploadInputComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.imagePreviewClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.imageData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageUploadInputComponent {
    constructor() { }
    ngOnInit() { }
    get validator() {
        const validator = this.control.validator({});
        return validator;
    }
    onImageSelect(event) {
        const file = event.target.files[0];
        const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        this.control.patchValue(file);
        this.control.updateValueAndValidity();
        const reader = new FileReader();
        reader.onload = () => {
            this.imageData = reader.result;
        };
        if (file && allowedMimeTypes.includes(file.type) && file.size < 1000000) {
            reader.readAsDataURL(file);
            this.imageName = file.name;
        }
        else {
            this.imageData = null;
            this.imageName = null;
        }
    }
}
ImageUploadInputComponent.ɵfac = function ImageUploadInputComponent_Factory(t) { return new (t || ImageUploadInputComponent)(); };
ImageUploadInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageUploadInputComponent, selectors: [["app-image-upload-input"]], inputs: { control: "control", label: "label", labelClass: "labelClass", imageUploadClass: "imageUploadClass", imageNameClass: "imageNameClass", imagePreviewClass: "imagePreviewClass" }, decls: 13, vars: 8, consts: [[1, "control"], [3, "ngClass"], [4, "ngIf"], ["for", "image", 3, "ngClass"], ["id", "image", "type", "file", 3, "change"], [3, "ngClass", 4, "ngIf", "ngIfElse"], ["imageMaxSize", ""], [3, "ngClass", 4, "ngIf"], ["class", "is-danger help", 4, "ngIf"], [1, "is-danger", "help"], [3, "src"]], template: function ImageUploadInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ImageUploadInputComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Choose image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageUploadInputComponent_Template_input_change_6_listener($event) { return ctx.onImageSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ImageUploadInputComponent_span_8_Template, 2, 2, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ImageUploadInputComponent_ng_template_9_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ImageUploadInputComponent_ng_container_11_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ImageUploadInputComponent_div_12_Template, 2, 2, "div", 7);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.labelClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validator);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.imageUploadClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageName)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.control.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imageData !== "" && ctx.imageData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".help[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\ninput[type=\"file\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n\r\n.image-upload[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-color: #fff;\r\n  color: #0db3e3;\r\n  border: 1px solid #0db3e3;\r\n  cursor: pointer;\r\n  margin-top: 1rem;\r\n  padding: 0.5rem 1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.image-upload[_ngcontent-%COMP%]:hover {\r\n  background-color: #0db3e3;\r\n  color: #fff;\r\n}\r\n\r\n.image-name[_ngcontent-%COMP%] {\r\n  margin-left: 1rem;\r\n  font-size: 0.7rem;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%] {\r\n  margin-top: 1rem;\r\n  max-width: 500px;\r\n}\r\n\r\n.image-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.image-upload-profile[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  width: 100%;\r\n  display: block;\r\n  border-bottom: 2px solid #0db3e3;\r\n  padding: 0.5rem 0;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: all 0.3s ease-in;\r\n}\r\n\r\n.image-upload-profile[_ngcontent-%COMP%]:hover {\r\n  font-weight: 600;\r\n  border-bottom: 2px solid #333;\r\n}\r\n\r\n.image-name-profile[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.image-preview-profile[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 200px;\r\n  border: 2px solid #0db3e3;\r\n  border-radius: 50px;\r\n  margin: 3rem auto;\r\n  overflow: hidden;\r\n  background-color: #333;\r\n}\r\n\r\n.image-preview-profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: auto;\r\n  top: 0;\r\n  bottom: 0;\r\n  margin: auto;\r\n}\r\n\r\n.help[_ngcontent-%COMP%] {\r\n  bottom: -1.1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXVwbG9hZC1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQSx5QkFBeUI7O0FBQ3pCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImltYWdlLXVwbG9hZC1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlbHAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogUG9zdCBpbWFnZSB1cGxvYWQgKi9cclxuLmltYWdlLXVwbG9hZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkYjNlMztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uaW1hZ2UtdXBsb2FkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiM2UzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaW1hZ2UtbmFtZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjdyZW07XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFByb2ZpbGUgaW1hZ2UgdXBsb2FkICovXHJcbi5pbWFnZS11cGxvYWQtcHJvZmlsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzBkYjNlMztcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5pbWFnZS11cGxvYWQtcHJvZmlsZTpob3ZlciB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzMzMztcclxufVxyXG5cclxuLmltYWdlLW5hbWUtcHJvZmlsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmltYWdlLXByZXZpZXctcHJvZmlsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMwZGIzZTM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICBtYXJnaW46IDNyZW0gYXV0bztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3LXByb2ZpbGUgaW1nIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4uaGVscCB7XHJcbiAgYm90dG9tOiAtMS4xcmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "NlTk":
/*!******************************************!*\
  !*** ./src/app/service/posts.service.ts ***!
  \******************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class PostsService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
    }
    // Get all posts
    getAllPosts(postsPerPage, currentPage, type) {
        const queryParams = `?page=${currentPage}&limit=${postsPerPage}&type=${type}`;
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/posts${queryParams}`);
    }
    // Get one post
    getOnePost(postId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/post/${postId}`);
    }
    // Create post
    createPost(post) {
        const postData = new FormData();
        postData.append('imageUrl', post.imageUrl);
        postData.append('title', post.title);
        postData.append('content', post.content);
        postData.append('type', post.type);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/post`, postData);
    }
    // Edit post
    editPost(post, postId) {
        let postData;
        if (typeof (post.imageUrl) === 'object') {
            postData = new FormData();
            postData.append('imageUrl', post.imageUrl);
            postData.append('title', post.title);
            postData.append('content', post.content);
            postData.append('type', post.type);
            return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/post/${postId}`, postData);
        }
        else {
            return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/post/${postId}`, post, { headers: this.headers });
        }
    }
    // Delete post
    deletePost(postId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/post/${postId}`);
    }
}
PostsService.ɵfac = function PostsService_Factory(t) { return new (t || PostsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PostsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PostsService, factory: PostsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared-routing.module */ "Sj5B");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input/input.component */ "9odQ");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "/9lB");
/* harmony import */ var _image_upload_input_image_upload_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image-upload-input/image-upload-input.component */ "NBb0");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cards/cards.component */ "moHP");
/* harmony import */ var _shorten_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shorten.pipe */ "d1kc");
/* harmony import */ var _md_navbar_md_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./md-navbar/md-navbar.component */ "nyyE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__["DialogBoxComponent"], _image_upload_input_image_upload_input_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadInputComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_9__["CardsComponent"], _shorten_pipe__WEBPACK_IMPORTED_MODULE_10__["ShortenPipe"], _md_navbar_md_navbar_component__WEBPACK_IMPORTED_MODULE_11__["MdNavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_1__["SharedRoutingModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"]], exports: [_input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"], _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_7__["DialogBoxComponent"], _image_upload_input_image_upload_input_component__WEBPACK_IMPORTED_MODULE_8__["ImageUploadInputComponent"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_9__["CardsComponent"], _shorten_pipe__WEBPACK_IMPORTED_MODULE_10__["ShortenPipe"], _md_navbar_md_navbar_component__WEBPACK_IMPORTED_MODULE_11__["MdNavbarComponent"]] }); })();


/***/ }),

/***/ "Sj5B":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵfac = function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); };
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _helpers_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/items */ "a9bj");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth.service */ "6uu6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _shared_md_navbar_md_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/md-navbar/md-navbar.component */ "nyyE");










function AppComponent_app_sidebar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-sidebar");
} }
function AppComponent_app_navbar_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-navbar");
} }
function AppComponent_app_md_navbar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-md-navbar", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r2.items);
} }
class AppComponent {
    constructor(authService, activatedRoute, router) {
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.visibility = false;
        this.items = _helpers_items__WEBPACK_IMPORTED_MODULE_2__["navItems"];
    }
    ngOnInit() {
        this.authService.checkAuth().subscribe(() => { });
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(events => events instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(evt => this.activatedRoute), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(route => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(route => route.outlet === 'primary'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(route => route.data)).subscribe(x => x.navbars === true ? this.visibility = true : this.visibility = false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 3, consts: [[1, "main-container"], [4, "ngIf"], [1, "content"], ["link", "/dashboard/posts", 3, "items", 4, "ngIf"], ["link", "/dashboard/posts", 3, "items"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppComponent_app_sidebar_1_Template, 1, 0, "app-sidebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AppComponent_app_navbar_3_Template, 1, 0, "app-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppComponent_app_md_navbar_4_Template, 1, 1, "app-md-navbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visibility);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visibility);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"], _shared_md_navbar_md_navbar_component__WEBPACK_IMPORTED_MODULE_8__["MdNavbarComponent"]], styles: [".main-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0 auto;\r\n  min-height: 850px;\r\n  width: 1150px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n@media only screen and (max-width: 1209px) {\r\n  .main-container[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: 0;\r\n    min-height: 100vh;\r\n    height: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQSxlQUFlOztBQUNmO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsU0FBUztJQUNULGlCQUFpQjtJQUNqQixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtaW4taGVpZ2h0OiA4NTBweDtcclxuICB3aWR0aDogMTE1MHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogUkVTUE9OU0lWRSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDlweCkge1xyXG4gIC5tYWluLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad(route, segments) {
        return this.authService.signedIn$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["skipWhile"])(value => value === null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((authenticated) => {
            if (!authenticated) {
                this.router.navigateByUrl('/join/login');
            }
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "WMHx":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class Page404Component {
    constructor() { }
    ngOnInit() { }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 10, vars: 0, consts: [[1, "mainbox"], [1, "err"], [1, "msg"], ["routerLink", "/"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Maybe this page is hiding out in quarantine? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Let's go ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " and try from there.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".mainbox[_ngcontent-%COMP%] {\r\n  background-color: #0db3e3;\r\n  margin: auto;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n\r\n.err[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  font-size: 11rem;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 8%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.msg[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-family: \"Nunito Sans\", sans-serif;\r\n  font-size: 1.6rem;\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 45%;\r\n  width: 75%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: white;\r\n  transition: 0.3s;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #333;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2U0MDQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0NBQXNDO0VBQ3RDLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0VBQ1YsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoicGFnZTQwNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5ib3gge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGIzZTM7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uZXJyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LWZhbWlseTogXCJOdW5pdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTFyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDglO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLm1zZyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk51bml0byBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDQ1JTtcclxuICB3aWR0aDogNzUlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _http_interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-interceptors */ "JjYL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page404/page404.component */ "WMHx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: _http_interceptors__WEBPACK_IMPORTED_MODULE_2__["HttpInterceptors"], multi: true }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"].forRoot({
                timeOut: 4000,
                progressBar: true,
                preventDuplicates: true,
                positionClass: 'toast-top-left'
            }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
        _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_14__["Page404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();


/***/ }),

/***/ "ZJt8":
/*!************************************************!*\
  !*** ./src/app/shared/md-navbar/animations.ts ***!
  \************************************************/
/*! exports provided: flyInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flyInOut", function() { return flyInOut; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const flyInOut = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('flyInOut', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        transform: 'translateX(0)', opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(10rem)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s 0.1s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(0)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 1
            }))
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateX(20rem)',
            })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s 0.2s ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0
            }))
        ])
    ])
]);


/***/ }),

/***/ "a9bj":
/*!**********************************!*\
  !*** ./src/app/helpers/items.ts ***!
  \**********************************/
/*! exports provided: navItems, dashboardNavItems, userIsNotSignedNavItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardNavItems", function() { return dashboardNavItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userIsNotSignedNavItems", function() { return userIsNotSignedNavItems; });
const navItems = [
    {
        link: 'home',
        route: '/',
        icon: 'home'
    },
    {
        link: 'my profile',
        route: '/dashboard/posts',
        icon: 'manage_accounts'
    },
    {
        link: 'travel',
        route: '/stories/travel',
        icon: 'hiking'
    },
    {
        link: 'world',
        route: '/stories/world',
        icon: 'public'
    },
    {
        link: 'sport',
        route: '/stories/travel',
        icon: 'sports_tennis'
    },
    {
        link: 'music',
        route: '/stories/travel',
        icon: 'music_note'
    },
    {
        link: 'shop',
        route: '/shop',
        icon: 'store'
    },
    {
        link: 'my cart',
        route: '/cart',
        icon: 'shopping_cart'
    },
    {
        link: 'contact',
        route: '/contact',
        icon: 'contact_support'
    }
];
const dashboardNavItems = [
    {
        link: 'home',
        route: '/',
        icon: 'home'
    },
    {
        link: 'posts',
        route: '/dashboard/posts',
        icon: 'description'
    },
    {
        link: 'edit profile',
        route: '/dashboard/profile',
        icon: 'settings_accessibility'
    },
    {
        link: 'comments',
        route: '/dashboard/comments',
        icon: 'comment'
    }
];
const userIsNotSignedNavItems = [
    {
        link: 'home',
        route: '/',
        icon: 'home'
    },
    {
        link: 'travel',
        route: '/stories/travel',
        icon: 'hiking'
    },
    {
        link: 'world',
        route: '/stories/world',
        icon: 'public'
    },
    {
        link: 'sport',
        route: '/stories/travel',
        icon: 'sports_tennis'
    },
    {
        link: 'music',
        route: '/stories/travel',
        icon: 'music_note'
    },
    {
        link: 'shop',
        route: '/shop',
        icon: 'store'
    },
    {
        link: 'contact',
        route: '/contact',
        icon: 'contact_support'
    },
    {
        link: 'login',
        route: '/join/login',
        icon: 'login'
    },
    {
        link: 'register',
        route: '/join/signup',
        icon: 'lock_open'
    }
];


/***/ }),

/***/ "d1kc":
/*!****************************************!*\
  !*** ./src/app/shared/shorten.pipe.ts ***!
  \****************************************/
/*! exports provided: ShortenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShortenPipe {
    transform(value, limit) {
        if (value.length > limit) {
            return value.substr(0, limit) + ' ...';
        }
        return value;
    }
}
ShortenPipe.ɵfac = function ShortenPipe_Factory(t) { return new (t || ShortenPipe)(); };
ShortenPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shorten", type: ShortenPipe, pure: true });


/***/ }),

/***/ "fqJD":
/*!***************************************!*\
  !*** ./src/app/helpers/catchError.ts ***!
  \***************************************/
/*! exports provided: catchError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "catchError", function() { return catchError; });
const catchError = (toastr, isLoading = false) => {
    toastr.error('Something went wrong! Please try later.', 'Error');
    isLoading = false;
};


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cart.service */ "/NBf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function NavbarComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Register");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function NavbarComponent_ng_container_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.totalItems);
} }
function NavbarComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "shopping_cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavbarComponent_ng_container_2_div_8_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ng_container_2_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.totalItems > 0);
} }
class NavbarComponent {
    constructor(authService, cartService) {
        this.authService = authService;
        this.cartService = cartService;
    }
    ngOnInit() {
        // Check if user signed in
        this.subscriptionSignedIn = this.authService.signedIn$.subscribe(signedIn => {
            this.signedIn = signedIn;
        });
        // Get users username if she/he is logged in
        this.subscriptionUsername = this.authService.username$.subscribe(username => {
            this.username = username;
        });
        // Get users items in cart
        this.subscriptionCartTotalItems = this.cartService.cartTotalItems$.subscribe(items => {
            this.totalItems = items;
        });
    }
    onLogout() {
        this.authService.logout('You are logged out!');
    }
    ngOnDestroy() {
        this.subscriptionSignedIn.unsubscribe();
        this.subscriptionUsername.unsubscribe();
        this.subscriptionCartTotalItems.unsubscribe();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 3, vars: 2, consts: [[1, "navbar"], [4, "ngIf"], [1, "navbar-box--buttons"], ["routerLink", "join/login", 1, "button", "button--login"], ["routerLink", "join/signup", 1, "button", "button--register"], [1, "navbar-box"], ["routerLink", "/dashboard/posts", 1, "username"], [1, "cart"], ["fontSet", "material-icons-outlined", "routerLink", "/cart", 1, "icon"], ["routerLink", "/cart", "class", "cart-num", 4, "ngIf"], [1, "button", "button--logout", 3, "click"], ["routerLink", "/cart", 1, "cart-num"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_container_1_Template, 6, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavbarComponent_ng_container_2_Template, 11, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.signedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signedIn);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  background-color: #fff;\r\n  height: 80px;\r\n  padding: 0 2rem;\r\n  width: 100%;\r\n  border-bottom: 1px solid #eee;\r\n}\r\n\r\n.navbar-box[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n  display: flex;\r\n}\r\n\r\n.navbar-box--buttons[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 0;\r\n  margin: 0;\r\n  text-align: right;\r\n}\r\n\r\n.button--register[_ngcontent-%COMP%], .button--logout[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background-color: #0db3e3;\r\n}\r\n\r\n.button--login[_ngcontent-%COMP%] {\r\n  color: #0db3e3;\r\n  margin-right: 1.5rem;\r\n}\r\n\r\n.button--login[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  background-color: #0db3e3;\r\n}\r\n\r\n.button--register[_ngcontent-%COMP%]:hover, .button--logout[_ngcontent-%COMP%]:hover {\r\n  color: #0db3e3;\r\n  background-color: #fff;\r\n}\r\n\r\n.username[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  font-size: 1.2rem;\r\n  font-weight: 700;\r\n  margin-right: 1rem;\r\n  padding: 0.2rem;\r\n  color: #6c757d;\r\n  outline: none;\r\n  vertical-align: middle;\r\n}\r\n\r\n.username[_ngcontent-%COMP%]:hover {\r\n  color: #0db3e3;\r\n  transition: 0.3s;\r\n}\r\n\r\n.cart[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  cursor: pointer;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  cursor: pointer;\r\n  vertical-align: middle;\r\n  color: #6c757d;\r\n  margin-right: 2rem;\r\n  font-size: 2rem;\r\n  height: 35px;\r\n}\r\n\r\n.cart[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover {\r\n  color: #0db3e3;\r\n  transition: 0.3s;\r\n}\r\n\r\n.cart-num[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  z-index: 1;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  border: 1px solid #0db3e3;\r\n  width: 25px;\r\n  height: 25px;\r\n  border-radius: 100%;\r\n  background-color: #0db3e3;\r\n  color: #fff;\r\n  font-weight: 600;\r\n  font-size: 0.9rem;\r\n  top: -0.63rem;\r\n  right: 0.8rem;\r\n}\r\n\r\n@media only screen and (max-width: 849px) {\r\n  .navbar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixTQUFTO0VBQ1QsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6Im5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogODBweDtcclxuICBwYWRkaW5nOiAwIDJyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5uYXZiYXItYm94IHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJveC0tYnV0dG9ucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5idXR0b24tLXJlZ2lzdGVyLFxyXG4uYnV0dG9uLS1sb2dvdXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYjNlMztcclxufVxyXG5cclxuLmJ1dHRvbi0tbG9naW4ge1xyXG4gIGNvbG9yOiAjMGRiM2UzO1xyXG4gIG1hcmdpbi1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLS1sb2dpbjpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkYjNlMztcclxufVxyXG5cclxuLmJ1dHRvbi0tcmVnaXN0ZXI6aG92ZXIsXHJcbi5idXR0b24tLWxvZ291dDpob3ZlciB7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnVzZXJuYW1lIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuMnJlbTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi51c2VybmFtZTpob3ZlciB7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNhcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5jYXJ0OmhvdmVyIC5pY29uLFxyXG4uaWNvbjpob3ZlciB7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbiAgdHJhbnNpdGlvbjogMC4zcztcclxufVxyXG5cclxuLmNhcnQtbnVtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkYjNlMztcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGRiM2UzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgdG9wOiAtMC42M3JlbTtcclxuICByaWdodDogMC44cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XHJcbiAgLm5hdmJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "jl0k":
/*!*****************************************!*\
  !*** ./src/app/service/shop.service.ts ***!
  \*****************************************/
/*! exports provided: ShopService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopService", function() { return ShopService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ShopService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
    }
    getAllBooks() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/books`);
    }
    getOneBook(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/books/${id}`);
    }
}
ShopService.ɵfac = function ShopService_Factory(t) { return new (t || ShopService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
ShopService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ShopService, factory: ShopService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "moHP":
/*!*************************************************!*\
  !*** ./src/app/shared/cards/cards.component.ts ***!
  \*************************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _helpers_catchError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/catchError */ "fqJD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/posts.service */ "NlTk");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function CardsComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "forum");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const post_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", post_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/post/" + post_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](post_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, post_r5.createdAt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", post_r5.user.username, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", post_r5.comment.length, " comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", post_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", post_r5.title)("routerLink", "/post/" + post_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", post_r5.content, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/post/" + post_r5.id);
} }
function CardsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CardsComponent_div_5_div_1_Template, 27, 14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.posts);
} }
function CardsComponent_mat_paginator_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-paginator", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function CardsComponent_mat_paginator_6_Template_mat_paginator_page_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changedPage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", ctx_r1.totalPosts)("pageSize", ctx_r1.postsPerPage);
} }
function CardsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "There are currently no posts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Create post?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CardsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 50);
} }
class CardsComponent {
    constructor(postsService, toastr) {
        this.postsService = postsService;
        this.toastr = toastr;
        this.posts = [];
        this.postsPerPage = 2;
        this.currentPage = 0;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.getAllPosts();
    }
    changedPage(pageData) {
        this.currentPage = pageData.pageIndex;
        this.postsPerPage = pageData.pageSize;
        this.getAllPosts();
    }
    getAllPosts() {
        this.postsService.getAllPosts(this.postsPerPage, this.currentPage, this.type).subscribe({
            next: (respone) => {
                this.posts = respone.data;
                this.totalPosts = respone.totalPosts;
                this.isLoading = false;
            },
            error: (error) => {
                Object(_helpers_catchError__WEBPACK_IMPORTED_MODULE_0__["catchError"])(this.toastr, this.isLoading);
            }
        });
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["app-cards"]], inputs: { title: "title", type: "type" }, decls: 9, vars: 5, consts: [[1, "container"], [1, "header"], [1, "subtitle"], ["class", "cards", 4, "ngIf"], [3, "length", "pageSize", "page", 4, "ngIf"], [4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "cards"], ["class", "card", 4, "ngFor", "ngForOf"], [1, "card"], [1, "type", 3, "ngClass"], [1, "title", 3, "routerLink"], [1, "items"], [1, "icon"], ["fontSet", "material-icons-outlined", 1, "icon"], [1, "image-container"], [3, "src", "alt", "routerLink"], [1, "parag"], ["href", "#", 1, "button", "button--read-more", 3, "routerLink"], [1, "arrow"], [3, "length", "pageSize", "page"], [1, "no-posts"], ["routerLink", "/dashboard/add-post", 1, "create-post"], [1, "spinner"], [3, "diameter"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta mollitia saepe architecto odio enim illo ex at tempora perferendis, numquam iste molestiae voluptates delectus debitis eius consequatur ea quia sequi? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CardsComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CardsComponent_mat_paginator_6_Template, 1, 2, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CardsComponent_div_7_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CardsComponent_div_8_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.posts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.posts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.posts.length && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".subtitle[_ngcontent-%COMP%] {\r\n  line-height: 1.75rem;\r\n  color: #6c757d;\r\n  text-align: justify;\r\n}\r\n\r\n.cards[_ngcontent-%COMP%] {\r\n  margin-top: 3rem;\r\n}\r\n\r\n.no-posts[_ngcontent-%COMP%] {\r\n  margin-top: 5rem;\r\n  border-top: 1px solid #eeeeee;\r\n  line-height: 3.125rem;\r\n  font-weight: 700;\r\n  font-size: 1.4rem;\r\n  text-align: center;\r\n}\r\n\r\n.create-post[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  text-align: center;\r\n  display: inline-block;\r\n  width: 100%;\r\n  color: #0db3e3;\r\n  padding-bottom: 1rem;\r\n  transition: 0.3s;\r\n}\r\n\r\n.create-post[_ngcontent-%COMP%]:hover {\r\n  color: #333;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  margin-top: 2rem;\r\n  border-bottom: 1px solid #eee;\r\n  padding-bottom: 2rem;\r\n}\r\n\r\n.type[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  font-size: 1.5rem;\r\n  margin: 0;\r\n  transition: all 0.3s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]:hover {\r\n  color: #0db3e3;\r\n}\r\n\r\n.items[_ngcontent-%COMP%] {\r\n  list-style: none;\r\n  padding: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  font-size: 0.8rem;\r\n  margin-right: 2rem;\r\n  vertical-align: middle;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.image-container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 15.625rem;\r\n}\r\n\r\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n  filter: brightness(50%);\r\n  -webkit-filter: brightness(50%);\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  font-size: 1.3rem;\r\n  vertical-align: middle;\r\n}\r\n\r\n.parag[_ngcontent-%COMP%] {\r\n  text-align: justify;\r\n  color: #333;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.button--read-more[_ngcontent-%COMP%] {\r\n  color: #0db3e3;\r\n  display: flex;\r\n  justify-content: center;\r\n  width: 9.375rem;\r\n}\r\n\r\n.button--read-more[_ngcontent-%COMP%]:hover {\r\n  color: #fff;\r\n  background-color: #0db3e3;\r\n}\r\n\r\n.arrow[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n  width: 20px;\r\n  height: 15px;\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n\r\n\r\n.sport[_ngcontent-%COMP%] {\r\n  color: #027190;\r\n}\r\n\r\n.world[_ngcontent-%COMP%] {\r\n  color: #06ec4c;\r\n}\r\n\r\n.travel[_ngcontent-%COMP%] {\r\n  color: #e71f00;\r\n}\r\n\r\n.music[_ngcontent-%COMP%] {\r\n  color: #e7a200;\r\n}\r\n\r\n.other[_ngcontent-%COMP%] {\r\n  color: #333;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztFQUNYLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBLE9BQU87O0FBQ1A7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6ImNhcmRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3VidGl0bGUge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgbWFyZ2luLXRvcDogM3JlbTtcclxufVxyXG5cclxuLm5vLXBvc3RzIHtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gIGxpbmUtaGVpZ2h0OiAzLjEyNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNyZWF0ZS1wb3N0IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogIzBkYjNlMztcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcblxyXG4uY3JlYXRlLXBvc3Q6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLnR5cGUge1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdGxlOmhvdmVyIHtcclxuICBjb2xvcjogIzBkYjNlMztcclxufVxyXG5cclxuLml0ZW1zIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5pdGVtcyBsaSB7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTUuNjI1cmVtO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIGltZzpob3ZlciB7XHJcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5wYXJhZyB7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBjb2xvcjogIzMzMztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4uYnV0dG9uLS1yZWFkLW1vcmUge1xyXG4gIGNvbG9yOiAjMGRiM2UzO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDkuMzc1cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLS1yZWFkLW1vcmU6aG92ZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwZGIzZTM7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG59XHJcblxyXG4vKnR5cGUqL1xyXG4uc3BvcnQge1xyXG4gIGNvbG9yOiAjMDI3MTkwO1xyXG59XHJcblxyXG4ud29ybGQge1xyXG4gIGNvbG9yOiAjMDZlYzRjO1xyXG59XHJcblxyXG4udHJhdmVsIHtcclxuICBjb2xvcjogI2U3MWYwMDtcclxufVxyXG5cclxuLm11c2ljIHtcclxuICBjb2xvcjogI2U3YTIwMDtcclxufVxyXG5cclxuLm90aGVyIHtcclxuICBjb2xvcjogIzMzMztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "nyyE":
/*!*********************************************************!*\
  !*** ./src/app/shared/md-navbar/md-navbar.component.ts ***!
  \*********************************************************/
/*! exports provided: MdNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdNavbarComponent", function() { return MdNavbarComponent; });
/* harmony import */ var _helpers_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/items */ "a9bj");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "ZJt8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "6uu6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function MdNavbarComponent_ul_5_ng_container_1_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MdNavbarComponent_ul_5_ng_container_1_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r5.toggleNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r4.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r4.link, " ");
} }
function MdNavbarComponent_ul_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MdNavbarComponent_ul_5_ng_container_1_li_1_Template, 4, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MdNavbarComponent_ul_5_ng_container_1_Template_li_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r7.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Logout ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.items);
} }
function MdNavbarComponent_ul_5_ng_container_2_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MdNavbarComponent_ul_5_ng_container_2_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r11.toggleNavbar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", item_r10.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r10.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r10.link, " ");
} }
function MdNavbarComponent_ul_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MdNavbarComponent_ul_5_ng_container_2_li_1_Template, 4, 3, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.itemsUserIsNotSigned);
} }
function MdNavbarComponent_ul_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MdNavbarComponent_ul_5_ng_container_1_Template, 6, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MdNavbarComponent_ul_5_ng_container_2_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@flyInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.signedIn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.signedIn);
} }
class MdNavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.isOpen = false;
        this.itemsUserIsNotSigned = _helpers_items__WEBPACK_IMPORTED_MODULE_0__["userIsNotSignedNavItems"];
    }
    ngOnInit() {
        this.subscriptionSignedIn = this.authService.signedIn$.subscribe(signedIn => {
            this.signedIn = signedIn;
        });
        this.subscriptionUsername = this.authService.username$.subscribe(username => {
            this.username = username;
        });
    }
    toggleNavbar() {
        this.isOpen = !this.isOpen;
    }
    onLogout() {
        this.authService.logout('You are logged out!');
        this.isOpen = !this.isOpen;
    }
    ngOnDestroy() {
        this.subscriptionSignedIn.unsubscribe();
        this.subscriptionUsername.unsubscribe();
    }
}
MdNavbarComponent.ɵfac = function MdNavbarComponent_Factory(t) { return new (t || MdNavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
MdNavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MdNavbarComponent, selectors: [["app-md-navbar"]], inputs: { link: "link", items: "items" }, decls: 6, vars: 3, consts: [[1, "dashboard-navbar"], ["routerLink", "/", 1, "profile"], [1, "material-icons", 3, "ngClass", "click"], ["class", "nav-list", 4, "ngIf"], [1, "nav-list"], [4, "ngIf"], [3, "routerLink", "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "material-icons", "nav-icon"], [3, "routerLink", "click"]], template: function MdNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Blogster");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MdNavbarComponent_Template_span_click_3_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MdNavbarComponent_ul_5_Template, 3, 3, "ul", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.isOpen ? "icon-fixed" : "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.isOpen ? "close" : "menu", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".dashboard-navbar[_ngcontent-%COMP%] {\r\n  display: none;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 1rem 2rem;\r\n  background-color: #333;\r\n  box-shadow: 0px 2px 8px 1px #888888;\r\n}\r\n.profile[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  font-size: 1.3rem;\r\n  color: #eee;\r\n  font-weight: 600;\r\n  transition: 0.2s;\r\n}\r\n.icon[_ngcontent-%COMP%], .icon-fixed[_ngcontent-%COMP%] {\r\n  z-index: 2000;\r\n  color: #eee;\r\n  font-size: 2rem;\r\n  transition: 0.2s;\r\n  cursor: pointer;\r\n}\r\n.icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.icon-fixed[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  right: 2rem;\r\n}\r\n.profile[_ngcontent-%COMP%]:hover, .icon[_ngcontent-%COMP%]:hover, .icon-fixed[_ngcontent-%COMP%]:hover {\r\n  color: #0db3e3;\r\n}\r\n.nav-list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  position: fixed;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #333;\r\n  color: #eee;\r\n  z-index: 1500;\r\n  list-style: none;\r\n}\r\n.nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  text-align: center;\r\n  font-size: 1.5rem;\r\n  cursor: pointer;\r\n  padding: 1rem 0;\r\n  width: 100%;\r\n  text-transform: uppercase;\r\n  transition: 0.5s;\r\n}\r\n.nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n  color: #333;\r\n  background-color: #eee;\r\n}\r\n.nav-icon[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 7px;\r\n  margin-right: 1rem;\r\n  font-size: 2rem;\r\n}\r\n@media only screen and (max-width: 849px) {\r\n  .dashboard-navbar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n}\r\n@media only screen and (min-width: 849px) {\r\n  .nav-list[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1kLW5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCO0FBRUE7O0VBRUUsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6Im1kLW5hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypSZXNwb25zaXZlIG5hdmJhciovXHJcbi5kYXNoYm9hcmQtbmF2YmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gMnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggOHB4IDFweCAjODg4ODg4O1xyXG59XHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxufVxyXG5cclxuLmljb24sXHJcbi5pY29uLWZpeGVkIHtcclxuICB6LWluZGV4OiAyMDAwO1xyXG4gIGNvbG9yOiAjZWVlO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb24tZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMnJlbTtcclxufVxyXG5cclxuLnByb2ZpbGU6aG92ZXIsXHJcbi5pY29uOmhvdmVyLFxyXG4uaWNvbi1maXhlZDpob3ZlciB7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgY29sb3I6ICNlZWU7XHJcbiAgei1pbmRleDogMTUwMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4ubmF2LWxpc3QgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIHRyYW5zaXRpb246IDAuNXM7XHJcbn1cclxuXHJcbi5uYXYtbGlzdCBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA3cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCkge1xyXG4gIC5kYXNoYm9hcmQtbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg0OXB4KSB7XHJcbiAgLm5hdi1saXN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["flyInOut"]] } });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/page404/page404.component */ "WMHx");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const routes = [
    { path: '', data: { navbars: true }, component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    {
        path: 'stories', data: { navbars: true }, loadChildren: () => __webpack_require__.e(/*! import() | modules-stories-stories-module */ "modules-stories-stories-module").then(__webpack_require__.bind(null, /*! ./modules/stories/stories.module */ "X/A9")).then((m) => m.StoriesModule)
    },
    {
        path: 'join', data: { navbars: true }, loadChildren: () => Promise.all(/*! import() | modules-auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "305l")).then((m) => m.AuthModule)
    },
    {
        path: 'dashboard', data: { navbars: false }, canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: () => Promise.all(/*! import() | modules-dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "XoyV")).then((m) => m.DashboardModule)
    },
    {
        path: 'contact', data: { navbars: true }, loadChildren: () => Promise.all(/*! import() | modules-contact-contact-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-contact-contact-module")]).then(__webpack_require__.bind(null, /*! ./modules/contact/contact.module */ "kPMt")).then((m) => m.ContactModule)
    },
    {
        path: 'post/:postId', data: { navbars: true }, loadChildren: () => Promise.all(/*! import() | modules-blog-post-blog-post-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-blog-post-blog-post-module")]).then(__webpack_require__.bind(null, /*! ./modules/blog-post/blog-post.module */ "7Axj")).then((m) => m.BlogPostModule)
    },
    {
        path: 'shop', data: { navbars: true }, loadChildren: () => __webpack_require__.e(/*! import() | modules-shop-shop-module */ "modules-shop-shop-module").then(__webpack_require__.bind(null, /*! ./modules/shop/shop.module */ "Km2g")).then((m) => m.ShopModule)
    },
    {
        path: 'cart', data: { navbars: true }, canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | modules-cart-cart-module */ "modules-cart-cart-module").then(__webpack_require__.bind(null, /*! ./modules/cart/cart.module */ "GcBr")).then((m) => m.CartModule)
    },
    {
        path: 'checkout', data: { navbars: true }, canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], loadChildren: () => __webpack_require__.e(/*! import() | modules-checkout-checkout-module */ "modules-checkout-checkout-module").then(__webpack_require__.bind(null, /*! ./modules/checkout/checkout.module */ "bqgV")).then((m) => m.CheckoutModule)
    },
    {
        path: 'verification', data: { navbars: false }, loadChildren: () => __webpack_require__.e(/*! import() | modules-email-verification-email-verification-module */ "modules-email-verification-email-verification-module").then(__webpack_require__.bind(null, /*! ./modules/email-verification/email-verification.module */ "4bbZ")).then((m) => m.EmailVerificationModule)
    },
    {
        path: 'password', data: { navbars: false }, loadChildren: () => Promise.all(/*! import() | modules-new-password-new-password-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-new-password-new-password-module")]).then(__webpack_require__.bind(null, /*! ./modules/new-password/new-password.module */ "g+WH")).then((m) => m.NewPasswordModule)
    },
    { path: '**', data: { navbars: false }, component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class SidebarComponent {
    constructor() { }
    ngOnInit() { }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 39, vars: 4, consts: [[1, "side-navbar"], [1, "logo-container"], ["src", "../../../assets/images/logo.png", "alt", "logo", "routerLink", "/", "routerLinkActive", "", 3, "routerLinkActiveOptions"], [1, "links"], ["routerLink", "/", "routerLinkActive", "active", 1, "item", 3, "routerLinkActiveOptions"], [1, "material-icons", "nav-icon"], ["routerLink", "/stories/travel", "routerLinkActive", "active", 1, "item"], ["routerLink", "/stories/world", "routerLinkActive", "active", 1, "item"], ["routerLink", "/stories/sport", "routerLinkActive", "active", 1, "item"], ["routerLink", "/stories/music", "routerLinkActive", "active", 1, "item"], ["routerLink", "/shop", "routerLinkActive", "active", 1, "item"], ["routerLink", "/contact", "routerLinkActive", "active", 1, "item"], [1, "badge"], ["href", "https://github.com/ned-18"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa delectus atque saepe impedit. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "flight_takeoff");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Travel ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " public");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "World ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "sports_basketball");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sport ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "headphones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Music ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "store");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Shop ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "contact_support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2020 \u00A9 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "ned-18");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: [".side-navbar[_ngcontent-%COMP%] {\r\n  background-color: #f0f4f7;\r\n  width: 350px;\r\n  height: 100%;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n  padding: 2rem 2rem 0 2rem;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.links[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  list-style: none;\r\n  position: relative;\r\n}\r\n\r\n.nav-icon[_ngcontent-%COMP%] {\r\n  margin-right: 0.7rem;\r\n}\r\n\r\n.item[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  padding: 1rem 2rem;\r\n  position: relative;\r\n  z-index: 10;\r\n  font-weight: 600;\r\n  transition: color cubic-bezier(1, 0, 0, 1) 0.2s;\r\n  outline: none;\r\n  display: flex;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover {\r\n  color: #6c757d;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100%;\r\n  width: 3px;\r\n  background-color: #fff;\r\n  transform: scaleY(0);\r\n  transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,\r\n    background-color 0.1s;\r\n  z-index: -1;\r\n}\r\n\r\n.item[_ngcontent-%COMP%]:hover::before, .item--active[_ngcontent-%COMP%]::before {\r\n  transform: scaleY(1);\r\n  width: 100%;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%] {\r\n  padding: 0 2rem 2rem 2rem;\r\n  color: #6c757d;\r\n}\r\n\r\n.badge[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #6c757d;\r\n  font-weight: 600;\r\n}\r\n\r\n.active[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n  color: #0db3e3;\r\n}\r\n\r\n@media only screen and (max-width: 1000px) {\r\n  .side-navbar[_ngcontent-%COMP%] {\r\n    width: 280px;\r\n  }\r\n\r\n  .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 849px) {\r\n  .side-navbar[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwrQ0FBK0M7RUFDL0MsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCO3lCQUN1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7O0VBRUUsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY0Zjc7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAycmVtIDJyZW0gMCAycmVtO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogNzUlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5saW5rcyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5hdi1pY29uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDAuN3JlbTtcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuMnM7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uaXRlbTpob3ZlciB7XHJcbiAgY29sb3I6ICM2Yzc1N2Q7XHJcbn1cclxuXHJcbi5pdGVtOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIHdpZHRoIDAuNHMgY3ViaWMtYmV6aWVyKDEsIDAsIDAsIDEpIDAuMnMsXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuMXM7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5pdGVtOmhvdmVyOjpiZWZvcmUsXHJcbi5pdGVtLS1hY3RpdmU6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWRnZSB7XHJcbiAgcGFkZGluZzogMCAycmVtIDJyZW0gMnJlbTtcclxuICBjb2xvcjogIzZjNzU3ZDtcclxufVxyXG5cclxuLmJhZGdlIGEge1xyXG4gIGNvbG9yOiAjNmM3NTdkO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY29sb3I6ICMwZGIzZTM7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnNpZGUtbmF2YmFyIHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICB9XHJcblxyXG4gIC5sb2dvLWNvbnRhaW5lciBpbWcge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg0OXB4KSB7XHJcbiAgLnNpZGUtbmF2YmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["enviroment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map