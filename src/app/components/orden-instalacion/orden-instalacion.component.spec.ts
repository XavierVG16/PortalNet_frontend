import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenInstalacionComponent } from './orden-instalacion.component';

describe('OrdenInstalacionComponent', () => {
  let component: OrdenInstalacionComponent;
  let fixture: ComponentFixture<OrdenInstalacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenInstalacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenInstalacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
