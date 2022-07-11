import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'explorer', component: MedicalHubComponent },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'signup', component: SignupComponent
  },
  {
    path:'profile/:user.id', component: ProfileComponent
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
