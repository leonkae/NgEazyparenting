import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TasksComponent } from './tasks/tasks.component';
import { MedicalhubComponent } from './medicalhub/medicalhub.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MedicalHubComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    LandingComponent,
    ContactusComponent,
    TasksComponent,
    MedicalhubComponent,


  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
