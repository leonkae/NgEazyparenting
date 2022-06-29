import { TestBed } from '@angular/core/testing';

import { ParentingService } from './parenting.service';

describe('ParentingService', () => {
  let service: ParentingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParentingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
