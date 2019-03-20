import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../goal';
var GoalDetailsComponent = /** @class */ (function () {
    function GoalDetailsComponent() {
        this.isComplete = new EventEmitter();
    }
    GoalDetailsComponent.prototype.goalComplete = function (complete) {
        this.isComplete.emit(complete);
    };
    GoalDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Goal)
    ], GoalDetailsComponent.prototype, "goal", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], GoalDetailsComponent.prototype, "isComplete", void 0);
    GoalDetailsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-goal-details',
            templateUrl: './goal-details.component.html',
            styleUrls: ['./goal-details.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], GoalDetailsComponent);
    return GoalDetailsComponent;
}());
export { GoalDetailsComponent };
//# sourceMappingURL=goal-details.component.js.map