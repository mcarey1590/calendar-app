import { Component, OnInit } from '@angular/core';
import { Day } from 'src/app/models/Day';
import { CalendarStateService } from 'src/app/services/calendar-state.service';

@Component({
  selector: 'app-calendar-matrix',
  templateUrl: './calendar-matrix.component.html',
  styleUrls: ['./calendar-matrix.component.scss']
})
export class CalendarMatrixComponent implements OnInit {
  constructor(public calendarState: CalendarStateService) { }

  ngOnInit(): void {
  }

  changeDay(day: Day) {
    this.calendarState.selectDay(day);
  }

}
