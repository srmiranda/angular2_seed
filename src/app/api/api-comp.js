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
var http_1 = require('@angular/http');
var api_service_1 = require('./api.service');
var APIComponent = (function () {
    function APIComponent(apiService) {
        this.apiService = apiService;
    }
    APIComponent.prototype.ngOnInit = function () {
        console.log('here2');
    };
    APIComponent.prototype.search = function (term) {
        this.items = this.apiService.search(term);
        console.log(this.items);
    };
    APIComponent.prototype.getEvents = function (term) {
        this.events = this.apiService.getEvents(term);
        console.log(this.events);
    };
    APIComponent = __decorate([
        core_1.Component({
            selector: 'api-comp',
            templateUrl: 'app/api/api-comp.html',
            styleUrls: ['app/api/api-comp.css'],
            providers: [http_1.JSONP_PROVIDERS, api_service_1.APIService]
        }), 
        __metadata('design:paramtypes', [api_service_1.APIService])
    ], APIComponent);
    return APIComponent;
}());
exports.APIComponent = APIComponent;
//# sourceMappingURL=api-comp.js.map