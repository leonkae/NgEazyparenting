import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilesComponent } from './profiles/profiles.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';

const routes: Routes = [
  { path: 'profiles', component: ProfilesComponent },
  { path: 'contacts', component: ContactsComponent},
  { path: 'explorer', component: MedicalHubComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
