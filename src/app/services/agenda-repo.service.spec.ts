import { TestBed } from '@angular/core/testing';

import { AgendaRepoService } from './agenda-repo.service';

describe('AgendaRepoService', () => {
  let service: AgendaRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
