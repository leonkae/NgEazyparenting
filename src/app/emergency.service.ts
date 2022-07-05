import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, skipWhile, tap} from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmergencyService {


  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get('https://africa-emergency-contacts.herokuapp.com/all/')
      // .pipe(
      //   map((response:[]) => response.map(country => country['Country']))
      // )
  }

}



