import { User } from './User';

export interface Message {
    user: User;
    sender:User;
    body:string;
    date:string;
    is_read:boolean;
}