import { StudentProfile } from './StudentProfileData';
import { MentorProfile } from './MentorProfiles';

export type Profile = StudentProfile | MentorProfile;

export enum ProfileTypes {
  MENTOR,
  STUDENT,
}

export enum Gender {
  NONE,
  MALE,
  FEMALE,
}
