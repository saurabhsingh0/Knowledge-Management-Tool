import { TestBed } from '@angular/core/testing';

import { MappingServiceService } from './mapping-service.service';

describe('MappingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MappingServiceService = TestBed.get(MappingServiceService);
    expect(service).toBeTruthy();
  });
});
