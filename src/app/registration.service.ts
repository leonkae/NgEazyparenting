import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, User, Userr } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url: string = environment.REG_URL;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();

  user = new BehaviorSubject<Userr>(null)
  constructor(private http: HttpClient, private router: Router) { }


  userLogin(credentials:Login){
    return this.http.post(this.url, credentials).pipe(
      map((response:any)=> {
        console.log(response.access)
        this.setToken(response)
      })
    )
    //.pipe(resp => map((resp) => console.log(resp)====))
  }

  setToken(token:any){
    localStorage.setItem('access', token.access)
    localStorage.setItem('refresh', token.refresh)

  }

  removeToken(token:any){
    // localStorage.getItem("key")
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
  }
  getProfile():void{

  }


}
