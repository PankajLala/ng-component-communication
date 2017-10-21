import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component implements OnInit {

  message: string = 'Hello world!';
  @Output() messageEvent =  new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    this.messageEvent.emit(this.message);
  }
}


/*
Parent1 and Sibling1 communication using @output & eventemittor
*/