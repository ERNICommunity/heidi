/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ScheduleService } from './schedule.service';

describe('Service: Slot', () => {
  beforeEach(() => {
    addProviders([ScheduleService]);
  });

  it('should ...',
    inject([ScheduleService],
      (service: ScheduleService) => {
        expect(service).toBeTruthy();
      }));
});
