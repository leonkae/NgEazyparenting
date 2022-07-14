import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { TasksComponent } from './tasks/tasks.component';
import {MedicalhubComponent } from './medicalhub/medicalhub.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'medicalhub', component: MedicalhubComponent },
  { path: 'comments', component: CommentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
