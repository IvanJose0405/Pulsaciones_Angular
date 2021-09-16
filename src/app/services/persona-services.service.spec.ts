import { TestBed } from '@angular/core/testing';

import { PersonaServicesService } from './persona-services.service';

describe('PersonaServicesService', () => {
  let service: PersonaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
