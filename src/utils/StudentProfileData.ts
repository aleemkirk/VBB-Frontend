
// const Interests = ['Mathematics', 'Physics', 'Science', 'Programming', 'English', 'Music', 'Sports'];

import { ProfileTypes } from './Profile';

// export type Interests = typeof Interests

export interface StudentProfile {
    type?: ProfileTypes.STUDENT;
    id:string;
    userName: string;
    firstName: string;
    lastName: string;
    program: string;
    dob?: Date;
    interests: string[];
    isVerified: boolean;
    isBooked?: boolean;
};




export var studentProfiles: StudentProfile[] = [
    {
        id: '0',
        userName: 'alKhan',
        firstName: 'Aleem',
        lastName: 'Khan',
        program: 'Program 1',
        dob: new Date('1996, 10, 17'),
        interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
        isVerified: true,
        isBooked: true, 
    },
    {
        id: '1',
        userName: 'JoeB',
        firstName: 'Joe',
        lastName: 'Bonamassa',
        program: 'Program 1',
        dob: new Date('1996, 10, 17'),
        interests: ['Guitars', 'Cruises'],
        isVerified: true,
    },
    {
        id: '2',
        userName: 'rose1',
        firstName: 'Axl',
        lastName: 'Rose',
        program: 'Program 4',
        dob: new Date('17, 10, 1981'),
        interests: ['Music', 'Piano'],
        isVerified: true,
        isBooked: true, 
    },
    {
        id: '3',
        userName: 'JJC',
        firstName: 'John',
        lastName: 'Cale',
        program: 'Program 2',
        dob: new Date('17, 10, 1964'),
        interests: ['Blues', 'Rock'],
        isVerified: false, 
    },
    {
        id: '4',
        userName: 'Slash90',
        firstName: 'Saul',
        lastName: 'Hudsen',
        program: 'Program 1',
        dob: new Date('17, 10, 1978'),
        interests: ['Rock', 'Blues'],
        isVerified: true,
        isBooked: true, 
    },
    {
        id: '5',
        userName: 'DGil',
        firstName: 'David',
        lastName: 'Gilmour',
        program: 'Program 1',
        dob: new Date('17, 10, 1960'),
        interests: ['Prog Rock', 'Blues', 'psychedelic Rock'],
        isVerified: false,
    },
];