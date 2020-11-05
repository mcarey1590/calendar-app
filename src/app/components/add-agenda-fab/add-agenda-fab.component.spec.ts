import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgendaFabComponent } from './add-agenda-fab.component';

describe('AddAgendaFabComponent', () => {
  let component: AddAgendaFabComponent;
  let fixture: ComponentFixture<AddAgendaFabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAgendaFabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgendaFabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
