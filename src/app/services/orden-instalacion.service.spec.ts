import { TestBed } from '@angular/core/testing';

import { OrdenInstalacionService } from './orden-instalacion.service';

describe('OrdenInstalacionService', () => {
  let service: OrdenInstalacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdenInstalacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
