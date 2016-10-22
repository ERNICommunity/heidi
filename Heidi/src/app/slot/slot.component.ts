import { Component, Input } from '@angular/core';
import { Slot } from './slot';

@Component({
  moduleId: module.id,
  selector: 'hd-slot',
  templateUrl: 'slot.component.html',
  styleUrls: ['slot.component.css']
})

export class SlotComponent {

  @Input()
  slot: Slot;

  constructor() {
  }

}
