import { Injectable } from '@angular/core';

import { SCHEDULE } from '../schedule/mock-schedule';
import { Schedule } from './schedule';

@Injectable()
export class ScheduleService {

  constructor() {
  }

  getSchedule(): Schedule {
    return SCHEDULE;
  }
}
