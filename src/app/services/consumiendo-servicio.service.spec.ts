import { TestBed } from '@angular/core/testing';

import { ConsumiendoServicioService } from './consumiendo-servicio.service';

describe('ConsumiendoServicioService', () => {
  let service: ConsumiendoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumiendoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
