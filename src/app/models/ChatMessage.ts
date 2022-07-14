import { DatePipe } from '@angular/common';
import { User } from './User';

export interface ChatMessage {
    user: User;
    body : string;
    date: number;
    is_read: boolean;

}
