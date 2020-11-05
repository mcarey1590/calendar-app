import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Day } from 'src/app/models/Day';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  @HostBinding('class.current') get current(){
    return this.day?.type === 'current';
  }
  @Input() day: Day;
  constructor() { }

  ngOnInit(): void {
  }

}
