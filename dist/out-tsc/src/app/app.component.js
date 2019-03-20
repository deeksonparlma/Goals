import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Goal } from './goal';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.goals = [
            new Goal(1, 'Watch Finding Nemo'),
            new Goal(2, 'Buy Cookies'),
            new Goal(3, 'Get new Phone Case'),
            new Goal(4, 'Get Dog Food'),
            new Goal(5, 'Solve math homework'),
            new Goal(6, 'Plot my world domination plan'),
        ];
    }
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html'
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map