import { User } from './User';

export interface Medicalhub{
  id: number;
  image: File;
  description: string;
  created: string;
  modified: string;
  // comments?: string;
  person_posting: User;
}
