import { Injectable } from '@angular/core';
import { EddEvent } from '../models/edd-event';

import { EVENTS } from './mock-events';


@Injectable()
export class EventsService {
  constructor() { }

  getAllEvents(): EddEvent[] {
    return EVENTS;
  }

  getEvent(eventId) {
    for(var counter = 0; counter < EVENTS.length; counter++){
      if (EVENTS[counter].id === eventId) {
        return EVENTS[counter];
      }
    }
    EVENTS[0];
  }
}
