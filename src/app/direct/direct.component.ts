import { DirectService } from '../direct.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
  

  constructor(private http:HttpClient) { }
 

  ngOnInit() {
    let resp = this.http.get("http://127.0.0.1:8000/direct/message-create/");
    resp.subscribe((data)=>console.log(data));
  }

}
  