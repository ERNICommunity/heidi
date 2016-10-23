import { Component, OnInit } from '@angular/core';
import { EddEvent } from '../models/edd-event';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
  providers: [EventsService],  
})
export class MainViewComponent implements OnInit {
  model: Array<EddEvent>;
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.model = this.eventsService.getAllEvents();
  }

  addEvent(){
    var newEvent = new EddEvent();
    newEvent.caption = "Event " + (this.model.length + 1);
    this.model.push(newEvent);
  }
  
  removeEvent(event) {
    this.model.splice(this.model.indexOf(event), 1);
  }
}
