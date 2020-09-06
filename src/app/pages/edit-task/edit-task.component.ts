import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  id: string;
  title: string;
  description: string;

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
          this.id = params.id;
          this.title = params.title;
          this.description = params.description;
        }
      );
  }

  editTask(title: string, description: string) {
    this.taskService.edit(this.id, title, description).subscribe((task: Task) => {
        this.router.navigate(['tasks']);
    });
  }
}
