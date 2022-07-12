import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class EmergencyService {
  constructor(private httpClient: HttpClient){}

  getCountry(value: string): Observable<any> {
    return this.httpClient.get(`https://africa-emergency-contacts.herokuapp.com/search?q=${value}`)
      //  .pipe(map((data:any) => data.countries));
  }
}

