import { TestBed, inject } from '@angular/core/testing';

import { ToastConfigService } from './toast-config.service';

describe('ToastConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToastConfigService]
    });
  });

  it('should ...', inject([ToastConfigService], (service: ToastConfigService) => {
    expect(service).toBeTruthy();
  }));
});
