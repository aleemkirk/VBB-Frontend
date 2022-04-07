
// const Interests = ['Mathematics', 'Physics', 'Science', 'Programming', 'English', 'Music', 'Sports'];

// export type Interests = typeof Interests

export interface StudentProfile {
    id:string;
    userName: string;
    firstName: string;
    lastName: string;
    program: string;
    dob: Date;
    interests: string[];
    isVerified: boolean;
    isBooked?: boolean;
};




export const studentProfiles: StudentProfile[] = [
    {
        id: '0',
        userName: 'alKhan',
        firstName: 'Aleem',
        lastName: 'Khan',
        program: 'Program 1',
        dob: new Date('17, 10, 1996'),
        interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
        isVerified: true,
        isBooked: true, 
    },
    {
        id: '1',
        userName: 'JD19',
        firstName: 'Josh',
        lastName: 'Dunford',
        program: 'Program 1',
        dob: new Date('17, 10, 1996'),
        interests: ['Mathematics', 'Sports'],
        isVerified: true,
    },
    {
        id: '2',
        userName: 'alKhan',
        firstName: 'Aleem',
        lastName: 'Khan',
        program: 'Program 4',
        dob: new Date('17, 10, 1996'),
        interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
        isVerified: true,
        isBooked: true, 
    },
    {
        id: '3',
        userName: 'alKhan',
        firstName: 'Aleem',
        lastName: 'Khan',
        program: 'Program 2',
        dob: new Date('17, 10, 1996'),
        interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
        isVerified: false, 
    },
    {
        id: '4',
        userName: 'alKhan',
        firstName: 'Aleem',
        lastName: 'Khan',
        program: 'Program 1',
        dob: new Date('17, 10, 1996'),
        interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
        isVerified: true,
        isBooked: true, 
    },
    {
        id: '5',
        userName: 'alKhan',
        firstName: 'Aleem',
        lastName: 'Khan',
        program: 'Program 1',
        dob: new Date('17, 10, 1996'),
        interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
        isVerified: false,
    },
];