(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "80pn":
/*!*****************************************************!*\
  !*** ./src/app/modules/validators/checkPassword.ts ***!
  \*****************************************************/
/*! exports provided: checkPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPassword", function() { return checkPassword; });
function checkPassword(control) {
    let passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,60}$/;
    return passwordRe.test(control.value) ? null : { passwordIsNotValid: true };
}


/***/ }),

/***/ "8SSZ":
/*!*********************************************!*\
  !*** ./src/app/service/comments.service.ts ***!
  \*********************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class CommentsService {
    constructor(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]()
            .set('Content-Type', 'application/json');
    }
    // Get all comments
    getComments(postId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/comments?postId=${postId}`);
    }
    // Create comment
    postComment(postId, comment) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/comment?postId=${postId}`, comment, { headers: this.headers });
    }
    // Delete comment
    deleteComment(commentId) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["enviroment"].rootURL}/comment/${commentId}`);
    }
}
CommentsService.ɵfac = function CommentsService_Factory(t) { return new (t || CommentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
CommentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CommentsService, factory: CommentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "NkCg":
/*!******************************************************!*\
  !*** ./src/app/modules/validators/checkPasswords.ts ***!
  \******************************************************/
/*! exports provided: CheckPasswords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckPasswords", function() { return CheckPasswords; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CheckPasswords {
    validate(formGroup) {
        const { password, confirmPassword } = formGroup.value;
        if (password === confirmPassword) {
            return null;
        }
        else {
            return { passwordsDontMatch: true };
        }
    }
}
CheckPasswords.ɵfac = function CheckPasswords_Factory(t) { return new (t || CheckPasswords)(); };
CheckPasswords.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CheckPasswords, factory: CheckPasswords.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "o+5i":
/*!**************************************************!*\
  !*** ./src/app/modules/validators/checkEmail.ts ***!
  \**************************************************/
/*! exports provided: checkEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkEmail", function() { return checkEmail; });
function checkEmail(control) {
    let emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRe.test(control.value) ? null : { emailIsNotValid: true };
}


/***/ })

}]);
//# sourceMappingURL=common.js.map