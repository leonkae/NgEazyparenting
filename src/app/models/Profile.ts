import { User } from './User';
export interface Profile {
    id: number;
    user: User;
    bio: string;
    image: string;
}
