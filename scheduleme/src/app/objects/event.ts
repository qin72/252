export class Event
{
    eventName: string;
    eDate: number;
    eventDesc: string;
    isDone: boolean;
    category: string;
    timestamp: number;
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
