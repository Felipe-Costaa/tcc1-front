import { TestBed } from '@angular/core/testing';

import { PistasService } from './pistas.service';

describe('PistasService', () => {
  let service: PistasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PistasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
