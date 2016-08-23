import { Component } from '@angular/core';
import { ScheduleComponent } from './schedule/schedule.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ScheduleComponent]
})

export class AppComponent {
  title = 'EDD Q3';
}
