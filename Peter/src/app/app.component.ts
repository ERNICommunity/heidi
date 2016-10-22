import { Component, OnInit } from '@angular/core';
import { EddEvent } from './models/edd-event';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventsService]
})
export class AppComponent implements OnInit {
  title = 'EDD Scheduling Manager - Assistance';
  model: Array<EddEvent>;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.model = this.eventsService.getEvents();
  }

  addEvent(){
    var newEvent = new EddEvent();
    newEvent.caption = "Event " + (this.model.length + 1);
    this.model.push(newEvent);;
  }

  removeEvent(event) {
    this.model.splice(this.model.indexOf(event));
  }
}
