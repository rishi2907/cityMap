import { TestBed } from '@angular/core/testing';

import { ApiToGetLatAndLongService } from './api-to-get-lat-and-long.service';

describe('ApiToGetLatAndLongService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiToGetLatAndLongService = TestBed.get(ApiToGetLatAndLongService);
    expect(service).toBeTruthy();
  });
});
