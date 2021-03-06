"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TaskService = (function () {
    function TaskService(serverReqService) {
        this.serverReqService = serverReqService;
    }
    TaskService.prototype.get = function () {
        return this.serverReqService.get('tasks');
    };
    TaskService.prototype.create = function (title, description) {
        return this.serverReqService.post('tasks', { title: title, description: description });
    };
    TaskService.prototype.edit = function (taskId, title, description) {
        return this.serverReqService.patch("tasks/" + taskId, { title: title, description: description });
    };
    TaskService.prototype.delete = function (taskId) {
        return this.serverReqService.delete("tasks/" + taskId);
    };
    TaskService.prototype.complete = function (task) {
        return this.serverReqService.patch("tasks/" + task.id, {
            completed: !task.completed
        });
    };
    TaskService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
