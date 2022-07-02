import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ParentingService {

  constructor(private httpClient: HttpClient) { }

  public getCountry(){
    return this.httpClient.get('https://africa-emergency-contacts.herokuapp.com/all/');
  }

}
