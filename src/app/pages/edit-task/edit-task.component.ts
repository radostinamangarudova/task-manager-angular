import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { Task } from '../../models/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  id: string;

  editTaskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
      Validators.minLength(8)
    ]),
    description: new FormControl('', Validators.maxLength(10000))
  });

  ngOnInit() {
    this.route.params
      .subscribe(params => {
          this.id = params.id
        }
      );
  }

  onSave() {
    let formValues = this.editTaskForm.value;
    this.taskService.edit(this.id, formValues.title, formValues.description).subscribe((task: Task) => {
        this.router.navigate(['tasks']);
    });
  }
}
