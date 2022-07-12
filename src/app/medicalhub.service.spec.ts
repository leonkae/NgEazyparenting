import { TestBed } from '@angular/core/testing';

import { MedicalhubService } from './medicalhub.service';

describe('MedicalhubService', () => {
  let service: MedicalhubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalhubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
