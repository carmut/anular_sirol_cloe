import { TestBed } from '@angular/core/testing';

import { VoyageFormService } from './voyage-form.service';

describe('VoyageFormService', () => {
  let service: VoyageFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoyageFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
