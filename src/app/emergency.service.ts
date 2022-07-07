import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class EmergencyService {
  url: string = environment.BASE_URL;

  constructor(private http : HttpClient) { }

  getData(){
    return this.http.get(this.url)

  }  
}

