import { Component } from '@angular/core';
import { SlotComponent } from './slot/slot.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SlotComponent]
})

export class AppComponent {
  title = 'EDD Q3';
}
