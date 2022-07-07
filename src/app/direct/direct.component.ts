import { Message } from './../models/Message';
import { DirectService } from '../direct.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})
export class DirectComponent implements OnInit {
 

  constructor(private directService:DirectService) { }
  messages: Message []=[]

  ngOnInit(): void {
    this.get_messages()
  }
  get_messages(){
    this.directService.getMessages().subscribe((messages)=> (this.messages = messages))
  }
}
  