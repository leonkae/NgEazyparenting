import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Profile } from './models/Profile'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  url: string = environment.PROF_URL;

  private initialUser: any = null;
  private profileSource: BehaviorSubject<any> = new BehaviorSubject<any>(this.initialUser);
  public profile = this.profileSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    this.profileSource.next(this.getLocalStorage('profile'));
  }

  updateProf(profile:any){
    return this.http.put(this.url, profile)
  }

  // getProf(details:any){
  //   return this.http.get(this.url).pipe(
  //     map((profile: any) => {
  //       this.setLocalStorage('profile', profile);
  //       this.profileSource.next(profile);
  //       return profile;
  //     })
  //   );
  // }${profile.id}

  getProf():Observable<Profile[]>{
    return this.http.get<Profile[]>(`${this.url}`)
  }

  setLocalStorage(key: string, value: any) {
    if (key === 'profile') value = JSON.stringify(value);
    localStorage.setItem(key, value);
    return this.getLocalStorage(key);
  }
  removeLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExp');
    localStorage.removeItem('profile');
    return this.getLocalStorage('token');
  }
  getLocalStorage(key: string): any {
    const item = localStorage.getItem(key);
    if (key === 'profile' && item != null) return JSON.parse(item);
    return item;
  }
  
  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.url}`);
  }
}
