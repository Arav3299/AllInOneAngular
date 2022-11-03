import { TestBed } from '@angular/core/testing';

import { FrontendserviceService } from './frontendservice.service';

describe('FrontendserviceService', () => {
  let service: FrontendserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontendserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
