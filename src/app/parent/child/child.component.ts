import { Component, Input,Output,EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnChanges {

  @Input() parentMsg: String;
  ngOnChanges(changes: SimpleChanges){
    for(let key in changes){
        let change = changes[key];
        let current = JSON.stringify(change.currentValue);
        let previous = JSON.stringify(change.previousValue);

        console.log(key+ 'current-value='+current+' previous-value='+previous);
    }
  }

  childMsg:String = "Bounjour! ca va, et toi?";
  @Output() msgEvent = new EventEmitter<String>();
  sendMessage(){
    this.msgEvent.emit(this.childMsg);
  }

}
