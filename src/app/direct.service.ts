import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Message } from './models/Message';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DirectService {
  url: string = environment.DEV_URL;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.url}/directs`);
  }
}
