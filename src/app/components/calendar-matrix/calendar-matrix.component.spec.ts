import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMatrixComponent } from './calendar-matrix.component';

describe('CalendarMatrixComponent', () => {
  let component: CalendarMatrixComponent;
  let fixture: ComponentFixture<CalendarMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
