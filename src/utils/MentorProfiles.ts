import { ProfileTypes } from './Profile';

export interface MentorProfile {
    type?: ProfileTypes.MENTOR;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    interests: string[];
    isBooked: boolean;
    program: string;
}


export const mentorProfiles: MentorProfile[] = [

]