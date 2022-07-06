import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MedicalHubComponent } from './medical-hub/medical-hub.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    NavbarComponent,
    MedicalHubComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
