import { Component, OnInit } from '@angular/core';
import { WebSocketService } from '../websocket.service';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.css']
})

export class DirectComponent implements OnInit {

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit() {
    //listen to an event from the socket.io server
    this.webSocketService.listen('test event').subscribe((data) => {
      console.log(data);
    })
  }

  conversation;
  onConversationSelected(conversation) {
    this.conversation = conversation;
  }

}