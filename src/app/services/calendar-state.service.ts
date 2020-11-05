import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import CalendarDates from 'calendar-dates';
import { Day } from '../models/Day';

const calendarDates = new CalendarDates();

@Injectable({
  providedIn: 'root',
})
export class CalendarStateService {
  private selectedDaySubject = new BehaviorSubject<Day>(null);
  $selectedDay = this.selectedDaySubject.asObservable();
  calendarDays: Day[];

  get selectedDay() {
    return this.selectedDaySubject.value;
  }

  get selectedWeek() {
    return this.selectedDay ? Math.floor(this.selectedDay.index / 7) : 0
  }

  constructor() {
    this.setupDays();
  }

  private async setupDays() {
    this.calendarDays = (await calendarDates
      .getDates(new Date()))
      .map((day: Day, index: number) => {
        return { ...day, index };
      });
    const currentDate = new Date().getDate();
    const currentDay = this.calendarDays.filter((day) => {
      return day.date === currentDate && day.type === 'current';
    })[0];
    this.selectedDaySubject.next(currentDay);
  }

  selectDay(day: Day) {
    this.selectedDaySubject.next(day);
  }

  previousDay() {
    let nextIndex = this.selectedDay.index - 1;
    if (nextIndex < 0) {
      nextIndex = this.calendarDays.length - 1;
    }
    this.selectedDaySubject.next(this.calendarDays[nextIndex]);
  }

  nextDay() {
    let nextIndex = this.selectedDay.index + 1;
    if (nextIndex >= this.calendarDays.length) {
      nextIndex = 0;
    }
    this.selectedDaySubject.next(this.calendarDays[nextIndex]);
  }
}
