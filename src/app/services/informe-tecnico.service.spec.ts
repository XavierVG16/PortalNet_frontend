import { TestBed } from '@angular/core/testing';

import { InformeTecnicoService } from './informe-tecnico.service';

describe('InformeTecnicoService', () => {
  let service: InformeTecnicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformeTecnicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
