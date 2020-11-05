import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgendaListComponent } from './components/agenda-list/agenda-list.component';
import { AgendaItemComponent } from './components/agenda-item/agenda-item.component';
import { CalendarMatrixComponent } from './components/calendar-matrix/calendar-matrix.component';
import { CalendarDayComponent } from './components/calendar-day/calendar-day.component';

import { CalendarViewComponent } from './views/calendar-view/calendar-view.component';
import { AgendaViewComponent } from './views/agenda-view/agenda-view.component';

import { MainContentComponent } from './layout/main-content/main-content.component';
import { TopMenuComponent } from './layout/top-menu/top-menu.component';
import { AddAgendaFabComponent } from './components/add-agenda-fab/add-agenda-fab.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewComponent,
    AgendaViewComponent,
    AgendaListComponent,
    AgendaItemComponent,
    CalendarMatrixComponent,
    CalendarDayComponent,
    MainContentComponent,
    TopMenuComponent,
    AddAgendaFabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
