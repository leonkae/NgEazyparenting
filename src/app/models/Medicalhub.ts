import { User } from './User';
import {Comment} from './Comments'
export interface Medicalhub{
  id: number;
  image: File;
  description: string;
  created?: string;
  modified?: string;
  comments?: Comment[];
  person_posting?: User;
}




