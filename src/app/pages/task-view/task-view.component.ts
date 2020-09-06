import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {

  tasks: Task[];
  config: any;

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) {
  }

  ngOnInit(): void {
    this.taskService.get().subscribe((tasks: Task[]) => {
      this.tasks = tasks.sort((a, b) => a['id'] < b['id'] ? 1 : a['id'] === b['id'] ? 0 : -1);
      this.config = {
        itemsPerPage: 5,
        currentPage: 1,
        totalItems: this.tasks.length
      };
    });
  }

  deleteTask(task: Task) {
    this.taskService.delete(task.id).subscribe((res: any) => {
      this.tasks = this.tasks.filter(val => val.id !== task.id);
      this.router.navigate(['/tasks']);
    });
  }

  onTaskClick(task: Task) {
    this.taskService.complete(task).subscribe(() => {
      task.completed = !task.completed;
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
}
