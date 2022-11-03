import { TestBed } from '@angular/core/testing';

import { ServicecommonService } from './servicecommon.service';

describe('ServicecommonService', () => {
  let service: ServicecommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicecommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
