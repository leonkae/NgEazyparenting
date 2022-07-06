import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DirectService {
  getMessagges() {
    return ["http://127.0.0.1:8000/direct/message-detail/"];   
  }

  constructor() { }
}
