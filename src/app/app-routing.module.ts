import { NgModule } from '@angular/core';
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})

export class AppRoutingModule { }
