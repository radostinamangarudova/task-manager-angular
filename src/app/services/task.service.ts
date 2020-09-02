import { Injectable } from '@angular/core';
import {ServerRequestService} from './server-request.service';

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
}
