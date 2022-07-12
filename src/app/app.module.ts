import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingComponent } from './landing/landing.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TasksComponent } from './tasks/tasks.component';
import { MedicalhubComponent } from './medicalhub/medicalhub.component';
import { RegistrationService } from './registration.service';
import { AuthInterceptor } from './auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactsComponent } from './contacts/contacts.component';
// import { ProfilesComponent } from './profiles/profiles.component';
import { SearchPipe } from './search.pipe';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    ContactsComponent,
    SearchPipe,
    

  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [RegistrationService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
