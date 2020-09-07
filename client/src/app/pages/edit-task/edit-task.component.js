"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EditTaskComponent = (function () {
    function EditTaskComponent(route, router, taskService) {
        this.route = route;
        this.router = router;
        this.taskService = taskService;
    }
    EditTaskComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.id = params.id;
            _this.title = params.title;
            _this.description = params.description;
        });
    };
    EditTaskComponent.prototype.editTask = function (title, description) {
        var _this = this;
        this.taskService.edit(this.id, title, description).subscribe(function (task) {
            _this.router.navigate(['tasks']);
        });
    };
    EditTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-task',
            templateUrl: './edit-task.component.html',
            styleUrls: ['./edit-task.component.scss']
        })
    ], EditTaskComponent);
    return EditTaskComponent;
}());
exports.EditTaskComponent = EditTaskComponent;
