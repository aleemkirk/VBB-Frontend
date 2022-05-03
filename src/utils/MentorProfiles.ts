import { ProfileTypes } from './Profile';

export interface MentorProfile {
    type: ProfileTypes.MENTOR;
    id:string;
    firstName: string;
    lastName: string;
    isVerified: boolean;
    interests: string[];
    isBooked: boolean;
    program: string;
    dob?: Date;
}


export const MentorProfiles: MentorProfile[] = [
    {
        id:'0',
        type: ProfileTypes.MENTOR,
        firstName: 'Sandra',
        lastName: 'Cook',
        isVerified: false,
        interests: ['Cooking', 'Swimming'],
        isBooked: false,
        program: 'Program 2',
    },
    {
        id:'1',
        type: ProfileTypes.MENTOR,
        firstName: 'Anthony',
        lastName: 'Smith',
        isVerified: true,
        interests: ['Cars', 'Movies', 'Programming'],
        isBooked: true,
        program: 'Program 1',
    },
    {
        id:'2',
        type: ProfileTypes.MENTOR,
        firstName: 'Joshua',
        lastName: 'Ricken',
        isVerified: false,
        interests: ['Nothing!'],
        isBooked: true,
        program: 'Program 1',
    },
    {
        id:'3',
        type: ProfileTypes.MENTOR,
        firstName: 'Kyle',
        lastName: 'Smoth',
        isVerified: true,
        interests: ['Video Games', 'Swimming'],
        isBooked: false,
        program: 'Program 4',
    },
    {
        id:'4',
        type: ProfileTypes.MENTOR,
        firstName: 'Michael',
        lastName: 'King',
        isVerified: true,
        interests: ['Programming', 'Physics', 'Music'],
        isBooked: true,
        program: 'Program 2',
    },
    {
        id:'5',
        type: ProfileTypes.MENTOR,
        firstName: 'Michael2',
        lastName: 'King2',
        isVerified: true,
        interests: ['Programming', 'Physics', 'Music'],
        isBooked: true,
        program: 'Program 2',
    },

]