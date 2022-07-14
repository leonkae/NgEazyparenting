import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Output() conversationClicked: EventEmitter<any> = new EventEmitter();
  searchText!: string;

  conversations = [
    {
      name: "David", time: "8:31", LatestMessage: "Good Evening!", LatestMessageRead: false,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },

    {
      name: "Jane", time: "8:31", LatestMessage: "Hey baby", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Peter", time: "8:31", LatestMessage: "Wagwan", LatestMessageRead: false,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Grace", time: "8:31", LatestMessage: "How are you today?", LatestMessageRead: false,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Marvin", time: "8:31", LatestMessage: "Konichiwa!", LatestMessageRead: false,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Shalyne", time: "8:31", LatestMessage: "Nibuyie dudu dust", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Oscar", time: "8:31", LatestMessage: "Sema mzito!", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Andre", time: "8:31", LatestMessage: "Is beaury!", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Paul", time: "8:31", LatestMessage: "Wassgood", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Oliver", time: "8:31", LatestMessage: "Sema bro", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Irene", time: "8:31", LatestMessage: "Hey there", LatestMessageRead: true,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Ann", time: "8:31", LatestMessage: "Hey pappy", LatestMessageRead: false,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
    {
      name: "Liam", time: "8:31", LatestMessage: "Yoh", LatestMessageRead: false,
      messages: [
        { id: 1, body: "Hello world", time: "8:31", me: true },
        { id: 2, body: "How are you?", time: "8:31", me: false },
        { id: 3, body: "Fine thank you", time: "8:31", me: true },
        { id: 4, body: "What's the occassion?", time: "8:31", me: false },
        { id: 5, body: "Just a small reunion.", time: "8:31", me: true },
      ]
    },
  ]

  get filteredConversations() {
    return this.conversations.filter((conversation) => {
      return (
        conversation.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase()) ||
        conversation.LatestMessage
          .toLowerCase()
          .toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
