import { Component, OnInit } from '@angular/core';
import {TaskService} from "../../services/task.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createTask(title: string, description: string) {
    this.taskService.create(title, description).subscribe((res: any) => {
      this.router.navigate(['', res.id]);
    });
  }
}
