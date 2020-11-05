import { Component, Input, OnInit } from '@angular/core';
import { Agenda } from 'src/app/models/Agenda';

@Component({
  selector: 'app-agenda-item',
  templateUrl: './agenda-item.component.html',
  styleUrls: ['./agenda-item.component.scss']
})
export class AgendaItemComponent implements OnInit {
  @Input() agenda: Agenda;
  constructor() { }

  ngOnInit(): void {
  }

}
