import { Component, OnInit    } from '@angular/core';
import {from,Subject}from 'rxjs';
import { EmergencyService } from '../emergency.service';
import { debounceTime,distinctUntilChanged } from 'rxjs/operators';
import { Country } from '../models/Country';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  private subjectKeyUp = new Subject<any>();
  countries$:any;

  


  constructor(private emergencyService: EmergencyService){}


  ngOnInit():void{
    this.subjectKeyUp
      .pipe(debounceTime(1000),distinctUntilChanged())
      .subscribe((data) => {
        this.getCountry(data);
      });
           
  }
  onSearch($event:any){
    const value = $event.target.value;
    if(value === ''){
      // this.subjectKeyUp.next("");  
      this.countries$='' 
    }
    if (value){
      this.subjectKeyUp.next(value);
    }
    
  }

  getCountry(value:string){
    this.emergencyService.getCountry(value).subscribe(countries => this.countries$ = countries);
  }
  showCountries(){
    console.log(this.onSearch)
  }

  

  




}
