import { studentProfiles } from './StudentProfileData';
import {Profile} from '../utils/Profile';

export const getStduentProfles = ():Profile[] => {
    return studentProfiles;
}