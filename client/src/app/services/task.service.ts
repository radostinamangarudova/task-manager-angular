import { Injectable } from '@angular/core';
import { ServerRequestService } from './server-request.service';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private serverReqService: ServerRequestService) { }

  get() {
    return this.serverReqService.get('tasks');
  }

  create(title: string, description: string) {
    return this.serverReqService.post('tasks', { title, description });
  }

  edit(taskId: string, title, description) {
    return this.serverReqService.patch(`tasks/${taskId}`, { title, description });
  }

  delete(taskId: string) {
    return this.serverReqService.delete(`tasks/${taskId}`);
  }

  complete(task: Task) {
      return this.serverReqService.patch(`tasks/${task.id}`, {
          completed: !task.completed
      });
  }
}
