import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../services/events.service';
import { EddEvent } from '../models/edd-event';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [EventsService],
})
export class EditEventComponent implements OnInit {
  event: EddEvent;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    var eventId = this.route.params['id'];
    this.event = this.eventsService.getEvent(eventId);
  }
}
