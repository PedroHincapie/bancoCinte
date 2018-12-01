import { TestBed, inject } from '@angular/core/testing';

import { BancoCinteService } from './banco-cinte.service';

describe('BancoCinteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BancoCinteService]
    });
  });

  it('should be created', inject([BancoCinteService], (service: BancoCinteService) => {
    expect(service).toBeTruthy();
  }));
});
