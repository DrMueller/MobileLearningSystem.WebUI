import { TestBed, inject } from '@angular/core/testing';

import { SessionEditService } from './session-edit.service';

describe('SessionEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionEditService]
    });
  });

  it('should ...', inject([SessionEditService], (service: SessionEditService) => {
    expect(service).toBeTruthy();
  }));
});
