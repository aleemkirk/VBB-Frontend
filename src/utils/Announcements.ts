

export interface Announcement {
    id: string;
    datePosted: string;
    subject: string;
    content: string;
    program: string;
}


export const announcements = [
    {
        id: '0',
        datePosted: new Date(2022, 1, 12).toDateString(),
        subject: 'Ghana Holidays',
        content: 'Mentor program pasued until next week due to school holidays',
        program: 'Program 1',
    }, 
    {
        id: '1',
        datePosted: new Date(2022, 3, 4).toDateString(),
        subject: 'Power Outage',
        content: 'All sessions between 1-2pm UTC postposed due to power outage',
        program: 'Program 1',
    }, 
    {
        id: '2',
        datePosted: new Date(2022, 4, 9).toDateString(),
        subject: 'Littelflower: New Indian Program!!!',
        content: 'Looking for mentors for our new program in India!',
        program: 'Program 3',
    }
]