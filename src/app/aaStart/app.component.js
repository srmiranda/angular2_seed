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
var route1_comp_1 = require('../route1/route1-comp');
var route2_comp_1 = require('../route2/route2-comp');
var wiki_smart_component_1 = require('../wiki/wiki-smart.component');
var api_comp_1 = require('../api/api-comp');
var app_providers_1 = require('../zzProviders/app.providers');
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('app.component');
        this.title = 'My Seed Angular 23 App';
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'seed-app',
            templateUrl: 'app/aaStart/app.component.html',
            styleUrls: ['app/aaStart/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [app_providers_1.APP_PROVIDERS]
        }),
        router_1.Routes([
            {
                path: '/Route1',
                component: route1_comp_1.Route1Component
            },
            {
                path: '/Route2',
                component: route2_comp_1.Route2Component
            },
            {
                path: '/Wiki',
                component: wiki_smart_component_1.WikiComponent
            },
            {
                path: '/API',
                component: api_comp_1.APIComponent
            }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map