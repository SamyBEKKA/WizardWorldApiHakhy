import { TestBed } from '@angular/core/testing';

import { WizardWorldApiService } from './wizard-world-api.service';

describe('WizardWorldApiService', () => {
  let service: WizardWorldApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardWorldApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
