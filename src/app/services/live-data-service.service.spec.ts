import { TestBed } from '@angular/core/testing';

import { LiveDataServiceService } from './live-data-service.service';

describe('LiveDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LiveDataServiceService = TestBed.get(LiveDataServiceService);
    expect(service).toBeTruthy();
  });
});
