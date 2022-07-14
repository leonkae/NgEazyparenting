import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() conversation;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  emojiPickerVisible;
  message = '';
  

  constructor() { }

  ngOnInit(): void {
  }

  submitMessage(event){
    let value = event.target.value.trim();
    this.message = '';
    // alert(value.length);
    if (value.length < 1)return;
    this.conversation.LatestMessage = value;
    this.conversation.messages.unshift({
      id: 1, body: value, time: "10:30", me: true });
  }

  emojiClicked(event){
    this.message += event.emoji.native;
  }
}
