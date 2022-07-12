import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Tasks } from './models/Tasks';


@Injectable({
  providedIn: 'root',
})
export class TasksService {
  url: string = environment.API_URL;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  postTask(task: any): Observable<Tasks> {
    return this.http.post<Tasks>(`${this.url}/tasks/`, task);
  }
  

  getTasks(): Observable<Tasks []> {
    return this.http.get<Tasks []>(`${this.url}/tasks/`);
  }
}
