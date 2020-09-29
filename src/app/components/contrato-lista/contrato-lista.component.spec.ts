import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratoListaComponent } from './contrato-lista.component';

describe('ContratoListaComponent', () => {
  let component: ContratoListaComponent;
  let fixture: ComponentFixture<ContratoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
