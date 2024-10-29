import { TestBed } from '@angular/core/testing';

import { ApiLaptopService } from './api-laptop.service';

describe('ApiLaptopService', () => {
  let service: ApiLaptopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLaptopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
