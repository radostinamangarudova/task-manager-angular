"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NewTaskComponent = (function () {
    function NewTaskComponent(router, taskService) {
        this.router = router;
        this.taskService = taskService;
    }
    NewTaskComponent.prototype.ngOnInit = function () {
    };
    NewTaskComponent.prototype.createTask = function (title, description) {
        var _this = this;
        this.taskService.create(title, description).subscribe(function (res) {
            _this.router.navigate(['', res.id]);
        });
    };
    NewTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-new-task',
            templateUrl: './new-task.component.html',
            styleUrls: ['./new-task.component.scss']
        })
    ], NewTaskComponent);
    return NewTaskComponent;
}());
exports.NewTaskComponent = NewTaskComponent;
