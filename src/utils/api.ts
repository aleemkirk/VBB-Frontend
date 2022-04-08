import { studentProfiles } from './StudentProfileData';
import {Profile} from '../utils/Profile';
import {Events} from '../utils/Events';

export const getStduentProfles = ():Profile[] => {
    return studentProfiles;
}


export const getEvents = () => {
    return Events
}