import { TestBed } from '@angular/core/testing';

import { BranchDetailsService } from './branch-details.service';

describe('BranchDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BranchDetailsService = TestBed.get(BranchDetailsService);
    expect(service).toBeTruthy();
  });
});
