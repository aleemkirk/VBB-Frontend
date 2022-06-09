// const Interests = ['Mathematics', 'Physics', 'Science', 'Programming', 'English', 'Music', 'Sports'];

import { ProfileTypes, Gender } from './Profile';

// export type Interests = typeof Interests

export interface StudentProfile {
  type: ProfileTypes.STUDENT;
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  libraryID: string;
  dob?: Date;
  interests: string[];
  isVerified: boolean;
  isBooked?: boolean;
  gender?: Gender.NONE;
}

export var studentProfiles: StudentProfile[] = [
  {
    type: ProfileTypes.STUDENT,
    id: '0',
    userName: 'alKhan',
    firstName: 'Aleem',
    lastName: 'Khan',
    libraryID: '1',
    dob: new Date('1996, 10, 17'),
    interests: ['Mathematics', 'Physics', 'Science', 'Programming'],
    isVerified: true,
    isBooked: true,
  },
  {
    type: ProfileTypes.STUDENT,
    id: '1',
    userName: 'JoeB',
    firstName: 'Joe',
    lastName: 'Bonamassa',
    libraryID: '1',
    dob: new Date('1996, 10, 17'),
    interests: ['Guitars', 'Cruises'],
    isVerified: true,
  },
  {
    type: ProfileTypes.STUDENT,
    id: '2',
    userName: 'rose1',
    firstName: 'Axl',
    lastName: 'Rose',
    libraryID: '4',
    dob: new Date('17, 10, 1981'),
    interests: ['Music', 'Piano'],
    isVerified: true,
    isBooked: true,
  },
  {
    type: ProfileTypes.STUDENT,
    id: '3',
    userName: 'JJC',
    firstName: 'John',
    lastName: 'Cale',
    libraryID: '2',
    dob: new Date('17, 10, 1964'),
    interests: ['Blues', 'Rock'],
    isVerified: false,
  },
  {
    type: ProfileTypes.STUDENT,
    id: '4',
    userName: 'Slash90',
    firstName: 'Saul',
    lastName: 'Hudsen',
    libraryID: '1',
    dob: new Date('17, 10, 1978'),
    interests: ['Rock', 'Blues'],
    isVerified: true,
    isBooked: true,
  },
  {
    type: ProfileTypes.STUDENT,
    id: '5',
    userName: 'DGil',
    firstName: 'David',
    lastName: 'Gilmour',
    libraryID: '1',
    dob: new Date('17, 10, 1960'),
    interests: ['Prog Rock', 'Blues', 'psychedelic Rock'],
    isVerified: false,
  },
];
