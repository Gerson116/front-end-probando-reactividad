import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploReactividadComponent } from './ejemplo-reactividad.component';

describe('EjemploReactividadComponent', () => {
  let component: EjemploReactividadComponent;
  let fixture: ComponentFixture<EjemploReactividadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjemploReactividadComponent]
    });
    fixture = TestBed.createComponent(EjemploReactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
