import { TestBed } from '@angular/core/testing';

import { NewPatientValidationService } from './new-patient-validation.service';

describe('NewPatientValidationService', () => {
  let service: NewPatientValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewPatientValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
