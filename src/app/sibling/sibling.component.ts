import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html'
})
export class SiblingComponent implements OnInit {

  constructor(private data: DataService) { }

  showDataMsg:String;
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.showDataMsg=message)
  }
  siblingMsg:String;
  newMessage(){
    this.data.changeMessage(this.siblingMsg)
  }
}
