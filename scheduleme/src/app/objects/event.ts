export class Event
{
    eventName: string;
    date: Date;
    eventDesc: string;
    isDone: boolean;
    category: string;
    public constructor( eventName: string, date : Date, eventDesc: string, isDone: boolean, category: string )
    {
        this.eventName=eventName;
        this.date=date;
        this.eventDesc=eventDesc;
        this.isDone=isDone;
        this.category=category;
    }
}