import { TestBed, inject } from '@angular/core/testing';

import { SessionsOverviewService } from './sessions-overview.service';

describe('SessionsOverviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionsOverviewService]
    });
  });

  it('should ...', inject([SessionsOverviewService], (service: SessionsOverviewService) => {
    expect(service).toBeTruthy();
  }));
});
