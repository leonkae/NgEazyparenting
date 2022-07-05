import { Component } from '@angular/core';
import { ParentingService } from './parenting.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eazypfrontend';
  msg: any;
  constructor(private pService: ParentingService){

  }
  ngOnInit(): void {
    this.showMessage();
  }

  showMessage() {
    this.pService.getMessage().subscribe(data=>{
      this.msg = data,
      console.log(this.msg);
    });
  }
}
