import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
export class ObservableService {

  constructor() { }

  createObservable(): Observable<Date> {
    return new Observable(
      observer => {
        setInterval(() =>
            observer.next(new Date())
          , 1000);
      }
    );
  }
}
