import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Agenda } from '../models/Agenda';
import { Day } from '../models/Day';
import shortid from 'shortid';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class AgendaRepoService {

  constructor() { }

  loadAgendaForDay(day: Day): Observable<Agenda[]> {
    const items = Math.floor(Math.random() * 7) + 1;
    return of(Array.apply(null, { length: items }).map(_ => {
      return {
        id: shortid.generate(),
        title: 'test' + faker.fake("{{lorem.sentence}}"),
        description: 'test' + faker.fake("{{lorem.paragraph}}")
      } as Agenda;
    }));
  }
}
