import { TestBed, inject } from '@angular/core/testing';

import { FactEditService } from './fact-edit.service';

describe('FactEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FactEditService]
    });
  });

  it('should ...', inject([FactEditService], (service: FactEditService) => {
    expect(service).toBeTruthy();
  }));
});
