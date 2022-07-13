import { Profile } from './Profile';

export interface Medicalhub{
  id: number;
  image: File;
  description: string;
  created?: string;
  modified?: string;
  comments?: string;
  person_posting?: Profile;
}
