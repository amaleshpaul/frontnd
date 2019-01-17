import { TestBed } from '@angular/core/testing';

import { AssueService } from './assue.service';

describe('AssueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssueService = TestBed.get(AssueService);
    expect(service).toBeTruthy();
  });
});
