import { Injectable } from '@angular/core';
import { EddEvent } from '../models/edd-event';

import { EVENTS } from './mock-events';


@Injectable()
export class EventsService {
  constructor() { }

  getEvents(): EddEvent[] {
    return EVENTS;
  }
}
