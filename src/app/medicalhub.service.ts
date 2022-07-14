import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Medicalhub } from './models/Medicalhub';

@Injectable({
  providedIn: 'root',
})
export class MedicalhubService {
  url: string = environment.MEDICALHUB;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  headers = new HttpHeaders().set(
    'Content-Type',
    'application/x-www-form-urlencoded;'
  );


  postMedical(medicalhub: any): Observable<Medicalhub> {
    console.log(medicalhub);
    return this.http.post<Medicalhub>(`${this.url}`, medicalhub);
  }

  getMedical(): Observable<Medicalhub[]> {
    return this.http.get<Medicalhub[]>(`${this.url}`, {
      headers: this.headers,
    });
  }
}
