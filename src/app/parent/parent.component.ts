import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit,AfterViewInit {
  constructor(private data: DataService){

  }
  showDataMsg:String;
  ngOnInit(){
    this.data.currentMessage.subscribe(message => this.showDataMsg=message)
  }
  parentMsg:String = "Salut, sa va?";
 
  showMsg:String;
  receiveMsg($event){
    this.showMsg=$event
  }

  @ViewChild(ChildComponent) child;
  ngAfterViewInit(){
    this.showMsg = this.child.childMsg
  }
}
