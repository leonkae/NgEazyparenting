import { ChatComponent } from './chat/chat.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { TasksComponent } from './tasks/tasks.component';
import  {MedicalhubComponent } from './medicalhub/medicalhub.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AuthGuard } from './auth.guard';
import { CommentsComponent } from './comments/comments.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DirectComponent } from './direct/direct.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path:'login', component: LoginComponent },
  { path:'signup', component: SignupComponent },
  { path:'contactus', component:ContactusComponent },
  { path: 'explorer', component: MedicalHubComponent },
  { path:'profile/:user.id', component: ProfileComponent, },
  { path: 'tasks', component: TasksComponent },
  { path: 'medicalhub', component: MedicalhubComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'comments', component: CommentsComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'sidebar', component: SidebarComponent},
  { path: 'direct', component: DirectComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})

export class AppRoutingModule { }
