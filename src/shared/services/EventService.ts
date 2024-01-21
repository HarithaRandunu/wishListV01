import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { AppModule } from "../../app/app.module";

@Injectable({
    providedIn: 'root'  //or AppModule or 'platform' or 'any'
})           // This will tell angular that this class can be injected to other classes.
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any) {
        this.subject.next({eventName, payload});                        //  This will pass the event object that is going to emit calling subject.next method.
    }

    listen(eventName: string, callBack: (event: any) => void) {         
        this.subject.asObservable().subscribe((nextObj: any) => {       // This will listen to the event object by using subscribe method in subject.observable() method
            if(eventName == nextObj.eventName) {
                callBack(nextObj.payload);                              // The object is going to subscribe will receive the event object with eventName and payload
            }
        });
    }
}