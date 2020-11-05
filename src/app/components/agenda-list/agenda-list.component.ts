import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Agenda } from 'src/app/models/Agenda';
import { AgendaRepoService } from 'src/app/services/agenda-repo.service';
import { CalendarStateService } from 'src/app/services/calendar-state.service';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styleUrls: ['./agenda-list.component.scss'],
})
export class AgendaListComponent implements OnInit, OnDestroy {
  agendaItems: Agenda[];
  sub: any;
  constructor(
    private calendarState: CalendarStateService,
    private agendaRepo: AgendaRepoService
  ) {}

  ngOnInit(): void {
    this.sub = this.calendarState.$selectedDay
      .pipe(switchMap((day) => this.agendaRepo.loadAgendaForDay(day)))
      .subscribe((agendaItems) => {
        this.agendaItems = [];
        setTimeout(() => {
          this.agendaItems = agendaItems;
        }, 100);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
