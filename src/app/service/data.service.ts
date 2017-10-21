import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  constructor() { }

  private messageSource = new BehaviorSubject<string>('Hello World!');
  currentMessage = this.messageSource.asObservable();

  changeMessage(message: string){
    this.messageSource.next(message);
  }

}
