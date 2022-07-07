import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HubService {
  url: string = environment.DEV_URL;

  constructor(private http: HttpClient) { }

  addPost(data: any){
    return this.http.post<any>(`${this.url}/explorer`, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
