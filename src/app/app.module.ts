import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { TasksComponent } from './tasks/tasks.component';
import { MedicalhubComponent } from './medicalhub/medicalhub.component';
import { CommentsComponent } from './comments/comments.component';
import { DatecountPipe } from './datecount.pipe';
import { DatePipe } from './date.pipe';
import { DatePipeComponent } from './date-pipe/date-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfilesComponent,
    TasksComponent,
    MedicalhubComponent,
    CommentsComponent,
    DatecountPipe,
    DatePipe,
    DatePipeComponent,


  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
