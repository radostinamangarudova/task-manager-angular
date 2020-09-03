"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskViewComponent = (function () {
    function TaskViewComponent(route, taskService) {
        this.route = route;
        this.taskService = taskService;
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.get().subscribe(function (tasks) {
            _this.tasks = tasks.sort(function (a, b) { return a['id'] < b['id'] ? 1 : a['id'] === b['id'] ? 0 : -1; });
            _this.config = {
                itemsPerPage: 5,
                currentPage: 1,
                totalItems: _this.tasks.length
            };
        });
    };
    TaskViewComponent.prototype.onTaskClick = function (task) {
        this.taskService.complete(task).subscribe(function () {
            task.completed = !task.completed;
        });
    };
    TaskViewComponent.prototype.pageChanged = function (event) {
        this.config.currentPage = event;
    };
    TaskViewComponent = __decorate([
        core_1.Component({
            selector: 'app-task-view',
            templateUrl: './task-view.component.html',
            styleUrls: ['./task-view.component.scss']
        })
    ], TaskViewComponent);
    return TaskViewComponent;
}());
exports.TaskViewComponent = TaskViewComponent;
