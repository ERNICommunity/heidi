import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'hd-slot',
  templateUrl: 'slot.component.html',
  styleUrls: ['slot.component.css']
})
export class SlotComponent implements OnInit {

  startTime: Date;
  endTime: Date;
  title: String;
  tracks: any[];

  constructor() {
    this.startTime = new Date(2016, 8, 24, 8, 0, 0);
    this.endTime = new Date(2016, 8, 24, 8, 30, 0);
    this.title = 'Introduction';
    this.tracks = [];
  }

  ngOnInit() {
  }

}
