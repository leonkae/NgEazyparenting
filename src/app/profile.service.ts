import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from './models/Profile';


@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  url: string = environment.DEV_URL;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.url}`);
  }
}
