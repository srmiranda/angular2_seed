"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Route2Component = (function () {
    function Route2Component() {
    }
    Route2Component.prototype.ngOnInit = function () {
        console.log('route 2');
        this.title = 'Route2';
    };
    Route2Component = __decorate([
        core_1.Component({
            selector: 'route2',
            templateUrl: 'app/route2/route2-comp.html',
            styleUrls: ['app/route2/route2-comp.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], Route2Component);
    return Route2Component;
}());
exports.Route2Component = Route2Component;
//# sourceMappingURL=route2-comp.js.map