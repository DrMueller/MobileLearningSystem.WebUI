import { TestBed, inject } from '@angular/core/testing';

import { FactSelectService } from './fact-select.service';

describe('FactSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactSelectService]
    });
  });

  it('should ...', inject([FactSelectService], (service: FactSelectService) => {
    expect(service).toBeTruthy();
  }));
});
