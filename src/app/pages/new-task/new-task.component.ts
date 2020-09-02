import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  createTask(title: string, description: string) {
    this.taskService.create(title, description).subscribe((newTask: Task) => {
      this.router.navigate(['tasks']);
    });
  }
}
