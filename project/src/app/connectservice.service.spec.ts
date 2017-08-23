import { TestBed, inject } from '@angular/core/testing';

import { ConnectserviceService } from './connectservice.service';

describe('ConnectserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectserviceService]
    });
  });

  it('should be created', inject([ConnectserviceService], (service: ConnectserviceService) => {
    expect(service).toBeTruthy();
  }));
});
