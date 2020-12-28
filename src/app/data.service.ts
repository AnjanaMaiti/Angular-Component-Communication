import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource=new BehaviorSubject<String>("default message");
  currentMessage= this.messageSource.asObservable();

  changeMessage(message:String){
    this.messageSource.next(message);
  }


}
