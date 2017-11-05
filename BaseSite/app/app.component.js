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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var counter_service_1 = require("./counter.service");
var AppComponent = (function () {
    function AppComponent(_counterService) {
        this._counterService = _counterService;
        this.Counter = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._counterService.getCounter()
            .subscribe(this.UpdateCounter.bind(this), function (error) { return console.error(error); });
    };
    ;
    AppComponent.prototype.IncrementCounter = function () {
        console.log('IncrementCounter()');
        this._counterService.PostIncrement().subscribe(this.UpdateCounter.bind(this));
    };
    AppComponent.prototype.DecrementCounter = function () {
        console.log('DecrementCounter()');
        this._counterService.PostDecrement().subscribe(this.UpdateCounter.bind(this));
    };
    AppComponent.prototype.UpdateCounter = function (val) {
        this.Counter = val.currentNumber;
        console.log('Counter:' + this.Counter);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ben-Angular',
        templateUrl: './app/Counter/AngularCounter.component.html',
        providers: [counter_service_1.CounterService]
    }),
    __metadata("design:paramtypes", [counter_service_1.CounterService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map