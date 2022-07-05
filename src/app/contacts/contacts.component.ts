import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { filter } from 'rxjs';
import { EmergencyService } from '../emergency.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  options:any = [];

  // options = ["country"];

  filteredOptions:any=[];

  formGroup : FormGroup;
  constructor(private service : EmergencyService, private fb:FormBuilder){}



  ngOnInit() {
    this.initForm();
    this.getCountry();

  }

  initForm() {
      this.formGroup = this.fb.group({
        'country': ['']
    })
    this.formGroup.get('country').valueChanges.subscribe(response => {
      console.log('data is' ,response);
      this.filterData(response);
    })
  }
  
  filterData(enteredData){
    this.filteredOptions = this.options.filter (country => {
      return country.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    })
    console.log(this.filteredOptions)
  }

  getCountry(){
    this.service.getData().subscribe(response => {
      this.options = response;
      this.filteredOptions =response;
    })
  }

  showCountries(){
    console.log(this.filteredOptions)
  }

}
