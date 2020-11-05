import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CalendarStateService } from 'src/app/services/calendar-state.service';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-agenda-view',
  templateUrl: './agenda-view.component.html',
  styleUrls: ['./agenda-view.component.scss']
})
export class AgendaViewComponent implements OnInit, OnDestroy {
  swipeSubs = new Subscription();
  next: boolean;

  constructor(private layoutService: LayoutService, public calendarState: CalendarStateService) {
   }

  ngOnInit(): void {
    this.swipeSubs.add(this.layoutService.swipeRight.subscribe(() => {
      this.next = false;
      setTimeout(() => {
        this.calendarState.previousDay();
      }, 100);
    }))
    this.swipeSubs.add(this.layoutService.swipeLeft.subscribe(() => {
      this.next = true;
      setTimeout(() => {
        this.calendarState.nextDay();
      }, 100);
    }))
  }

  ngOnDestroy(): void {
    this.swipeSubs.unsubscribe();
  }
}
