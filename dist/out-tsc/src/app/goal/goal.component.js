import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Goal } from '../goal';
var GoalComponent = /** @class */ (function () {
    function GoalComponent() {
        this.goals = [
            new Goal(1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son'),
            new Goal(2, 'Buy Cookies', 'I have to buy cookies for the parrot'),
            new Goal(3, 'Get new Phone Case', 'Diana has her birthday coming up soon'),
            new Goal(4, 'Get Dog Food', 'Pupper likes expensive sancks'),
            new Goal(5, 'Solve math homework', 'Damn Math'),
            new Goal(6, 'Plot my world domination plan', 'Cause I am an evil overlord'),
        ];
    }
    GoalComponent.prototype.toogleDetails = function (index) {
        this.goals[index].showDescription = !this.goals[index].showDescription;
    };
    GoalComponent.prototype.ngOnInit = function () {
    };
    GoalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-goal',
            templateUrl: './goal.component.html',
            styleUrls: ['./goal.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalComponent);
    return GoalComponent;
}());
export { GoalComponent };
//# sourceMappingURL=goal.component.js.map