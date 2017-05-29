import { TestBed, inject } from '@angular/core/testing';

import { FactsOverviewService } from './facts-overview.service';

describe('FactsOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactsOverviewService]
    });
  });

  it('should ...', inject([FactsOverviewService], (service: FactsOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
