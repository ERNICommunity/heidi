import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EddEvent } from '../models/edd-event';

@Component({
  selector: 'edd-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() events : EddEvent[];
  @Output() onRemoveEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeEvent(event){
    this.onRemoveEvent.emit(event);
  }
}
