import { Component, OnInit } from '@angular/core';
import { EddEvent } from './models/edd-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EDD Scheduling Manager - Assistance';

  constructor() { }

  ngOnInit() {
  }
}
