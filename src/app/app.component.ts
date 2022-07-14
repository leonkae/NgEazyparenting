import { Component } from '@angular/core';
import { WebSocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'eazy-parenting-chatapp';

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
