import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';

const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  { path: 'explorer', component: MedicalHubComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
