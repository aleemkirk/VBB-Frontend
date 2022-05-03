export interface Session {
    title:string;
    dayOfWeek:string;
    timeOfDay:string;
    start?: Date;
    end?: Date;
    meetingLink?: string;
    mentor?: string;
}
