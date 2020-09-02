"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var task_service_1 = require("./task.service");
describe('TaskService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(task_service_1.TaskService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
