import { Component, OnInit } from '@angular/core';
import { Schedule } from './schedule';
import { ScheduleService } from './schedule.service';
import { SlotComponent } from '../slot/slot.component';

@Component({
  moduleId: module.id,
  selector: 'hd-schedule',
  templateUrl: 'schedule.component.html',
  styleUrls: ['schedule.component.css'],
  providers: [ScheduleService],
  directives: [SlotComponent]
})
export class ScheduleComponent implements OnInit {

  schedule: Schedule;

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit() {
    this.schedule = this.scheduleService.getSchedule();
  }

}
