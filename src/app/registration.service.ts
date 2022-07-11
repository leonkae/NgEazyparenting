import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login, User, Userr } from './models/User';
import { Profile } from './models/Profile';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  url: string = environment.REG_URL;
  prof: string = environment.PROF_URL;
  private messageSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public message = this.messageSource.asObservable();
  private _isloggedin = new BehaviorSubject<boolean>(false);

  isloggedin = this._isloggedin.asObservable();
  user = new BehaviorSubject<Userr>(null)
  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('accessToken');
    this._isloggedin.next(!!token)
  }


  userLogin(credentials:Login){
    return this.http.post<any>(this.url, credentials).pipe(
      tap((response:any)=> {
        console.log(response.access)
        this.setToken(response)
        this.reg(response)
      })
    )
    //.pipe(resp => map((resp) => console.log(resp)====))
  }

  private reg(client: User){
    const user = new Userr(client.id, client.first_name, client.email, client.image, client.last_name, client.password, client.token, client.username)
    this.user.next(user)
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user))
    this._isloggedin.next(true)
  }

  setToken(token:any){
    localStorage.setItem('access', token.access)
    localStorage.setItem('refresh', token.refresh)
    // localStorage.setItem('user', JSON.stringify(user))
  }
  getLocalStorage(key:string):any{
    const item = localStorage.getItem(key);
    if (key === 'profile' && item!=null) return JSON.parse(item);
    return item
  }

  removeToken(token:any){
    // localStorage.getItem("key")
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
  }
  getProfiles():Observable<Profile[]>{
    return  this.http.get<Profile[]>('http://localhost:8000/accounts/profile')
    // .pipe(
    //   map((profile:any)=> {
    //     console.log(profile)
    //   }))
  }


}