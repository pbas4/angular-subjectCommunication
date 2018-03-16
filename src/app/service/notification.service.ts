import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificationService {

  private subject = new Subject<string>();
  private inputsSubject = new Subject<any>();

  notifications$ = this.subject.asObservable();
  inputsData$ = this.inputsSubject.asObservable();

  emit(notification) {
    this.subject.next(notification);
  }

  emitInputs(inputData) {
    this.inputsSubject.next(inputData);
  }

}
