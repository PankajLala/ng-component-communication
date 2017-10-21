import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  message: string;
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.message = $event;
  }
}


/*
Parent1 and Sibling1 communication using @output & eventemittor
*/