import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TaskViewComponent} from "./pages/task-view/task-view.component";
import {NewTaskComponent} from "./pages/new-task/new-task.component";

const routes: Routes = [
    { path: '', component: TaskViewComponent },
    { path: 'new-task', component: NewTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
