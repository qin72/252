export class Event
{
    eventName: string;
    eDate: number;
    eventDesc: string;
    isDone: boolean;
    category: string;
    timestamp: number;
    public constructor( eventName: string, eDate : number, eventDesc: string, isDone: boolean, category: string, timestamp: number )
    {
        this.eventName=eventName;
        this.eDate=eDate;
        this.eventDesc=eventDesc;
        this.isDone=isDone;
        this.category=category;
        this.timestamp=timestamp;
    }

    validate() {
      if
      (
        this.eventName == null ||
        this.eDate == null ||
        this.category == null
      ) { return false; }
      return true;
    }
}
