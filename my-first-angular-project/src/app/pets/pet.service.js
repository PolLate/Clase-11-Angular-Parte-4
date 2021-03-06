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
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
var PetService = (function () {
    function PetService(_httpService) {
        this._httpService = _httpService;
        this.WEB_API_URL = 'api/pets/test-api.json';
    }
    PetService.prototype.getPets = function () {
        return this._httpService.get(this.WEB_API_URL)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    // getPetById(id : string): Observable<Pet> {
    //     return this._httpService.get(this.WEB_API_URL)
    //     .map((response : Response) => <Pet> response.json().find((pet : Pet) => pet.id == id))
    //     .do(data => console.log('Los datos que obtuvimos fueron: ' + JSON.stringify(data)))
    //     .catch(this.handleError);
    // }
    PetService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return PetService;
}());
PetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PetService);
exports.PetService = PetService;
//# sourceMappingURL=pet.service.js.map