import { Component, HostBinding, OnInit } from '@angular/core';
import { CalendarStateService } from 'src/app/services/calendar-state.service';
import { LayoutService } from 'src/app/services/layout.service';

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss']
})
export class CalendarViewComponent implements OnInit {
  currentMonth: string;
  @HostBinding('class.open') get open() {
    return this.layoutService.menuOpen;
  }
  constructor(public layoutService: LayoutService, public calendarState: CalendarStateService) { }

  ngOnInit(): void {
    this.currentMonth = monthNames[new Date().getMonth()]
  }

}
