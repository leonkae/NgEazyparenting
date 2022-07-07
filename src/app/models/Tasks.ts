import { User } from './User';

export interface Tasks {
  taskname: string;
  person_tasking: User;
  taskdescription: string;
}
