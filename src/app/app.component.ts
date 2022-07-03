import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ParentingService } from '../app/parenting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'eazypfrontend';

  options = ["name", "dispatch"];

  filteredOptions;

  formGroup : FormGroup;
  constructor(private service : ParentingService, private fb:FormBuilder){}

  ngOnInit() {
    this.initForm();
    this.getData();

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
    this.filteredOptions = this.options.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
    })
  }

  getData(){
    this.service.getData().subscribe(response => {
      this.options = response;
      this.filteredOptions =response;
    })
  }
}
