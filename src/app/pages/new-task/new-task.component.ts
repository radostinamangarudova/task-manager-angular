import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../models/task.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  createTaskForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.maxLength(250),
      Validators.minLength(8)
    ]),
    description: new FormControl('', Validators.maxLength(10000))
  });

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSave() {
    let formValues = this.createTaskForm.value;
    this.taskService.create(formValues.title, formValues.description).subscribe((newTask: Task) => {
      this.router.navigate(['tasks']);
    });
  }
}
