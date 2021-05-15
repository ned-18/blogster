(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-stories-stories-module"],{

/***/ "FiDW":
/*!***********************************************************!*\
  !*** ./src/app/modules/stories/stories-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: StoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesRoutingModule", function() { return StoriesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel/travel.component */ "hLbL");
/* harmony import */ var _world_world_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world/world.component */ "UCn0");
/* harmony import */ var _sport_sport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sport/sport.component */ "xMOO");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./music/music.component */ "li0G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: 'travel', component: _travel_travel_component__WEBPACK_IMPORTED_MODULE_1__["TravelComponent"] },
    { path: 'world', component: _world_world_component__WEBPACK_IMPORTED_MODULE_2__["WorldComponent"] },
    { path: 'sport', component: _sport_sport_component__WEBPACK_IMPORTED_MODULE_3__["SportComponent"] },
    { path: 'music', component: _music_music_component__WEBPACK_IMPORTED_MODULE_4__["MusicComponent"] }
];
class StoriesRoutingModule {
}
StoriesRoutingModule.ɵfac = function StoriesRoutingModule_Factory(t) { return new (t || StoriesRoutingModule)(); };
StoriesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: StoriesRoutingModule });
StoriesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](StoriesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "UCn0":
/*!**********************************************************!*\
  !*** ./src/app/modules/stories/world/world.component.ts ***!
  \**********************************************************/
/*! exports provided: WorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldComponent", function() { return WorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/cards/cards.component */ "moHP");


class WorldComponent {
    constructor() { }
    ngOnInit() { }
}
WorldComponent.ɵfac = function WorldComponent_Factory(t) { return new (t || WorldComponent)(); };
WorldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorldComponent, selectors: [["app-world"]], decls: 1, vars: 2, consts: [[3, "title", "type"]], template: function WorldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "About world")("type", "world");
    } }, directives: [_shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JsZC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "X/A9":
/*!***************************************************!*\
  !*** ./src/app/modules/stories/stories.module.ts ***!
  \***************************************************/
/*! exports provided: StoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesModule", function() { return StoriesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _stories_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stories-routing.module */ "FiDW");
/* harmony import */ var _travel_travel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./travel/travel.component */ "hLbL");
/* harmony import */ var _world_world_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./world/world.component */ "UCn0");
/* harmony import */ var _sport_sport_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sport/sport.component */ "xMOO");
/* harmony import */ var _music_music_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./music/music.component */ "li0G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class StoriesModule {
}
StoriesModule.ɵfac = function StoriesModule_Factory(t) { return new (t || StoriesModule)(); };
StoriesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: StoriesModule });
StoriesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _stories_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoriesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](StoriesModule, { declarations: [_travel_travel_component__WEBPACK_IMPORTED_MODULE_3__["TravelComponent"], _world_world_component__WEBPACK_IMPORTED_MODULE_4__["WorldComponent"], _sport_sport_component__WEBPACK_IMPORTED_MODULE_5__["SportComponent"], _music_music_component__WEBPACK_IMPORTED_MODULE_6__["MusicComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _stories_routing_module__WEBPACK_IMPORTED_MODULE_2__["StoriesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();


/***/ }),

/***/ "hLbL":
/*!************************************************************!*\
  !*** ./src/app/modules/stories/travel/travel.component.ts ***!
  \************************************************************/
/*! exports provided: TravelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelComponent", function() { return TravelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/cards/cards.component */ "moHP");


class TravelComponent {
    constructor() { }
    ngOnInit() { }
}
TravelComponent.ɵfac = function TravelComponent_Factory(t) { return new (t || TravelComponent)(); };
TravelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TravelComponent, selectors: [["app-travel"]], decls: 1, vars: 2, consts: [[3, "title", "type"]], template: function TravelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "About travel")("type", "travel");
    } }, directives: [_shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmF2ZWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "li0G":
/*!**********************************************************!*\
  !*** ./src/app/modules/stories/music/music.component.ts ***!
  \**********************************************************/
/*! exports provided: MusicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicComponent", function() { return MusicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/cards/cards.component */ "moHP");


class MusicComponent {
    constructor() { }
    ngOnInit() { }
}
MusicComponent.ɵfac = function MusicComponent_Factory(t) { return new (t || MusicComponent)(); };
MusicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MusicComponent, selectors: [["app-music"]], decls: 1, vars: 2, consts: [[3, "title", "type"]], template: function MusicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "About music")("type", "music");
    } }, directives: [_shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtdXNpYy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "xMOO":
/*!**********************************************************!*\
  !*** ./src/app/modules/stories/sport/sport.component.ts ***!
  \**********************************************************/
/*! exports provided: SportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SportComponent", function() { return SportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/cards/cards.component */ "moHP");


class SportComponent {
    constructor() { }
    ngOnInit() { }
}
SportComponent.ɵfac = function SportComponent_Factory(t) { return new (t || SportComponent)(); };
SportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SportComponent, selectors: [["app-sport"]], decls: 1, vars: 2, consts: [[3, "title", "type"]], template: function SportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cards", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "About sport")("type", "sport");
    } }, directives: [_shared_cards_cards_component__WEBPACK_IMPORTED_MODULE_1__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcG9ydC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=modules-stories-stories-module.js.map