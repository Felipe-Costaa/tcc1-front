import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletarReservaComponent } from './deletar-reserva.component';

describe('DeletarReservaComponent', () => {
  let component: DeletarReservaComponent;
  let fixture: ComponentFixture<DeletarReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletarReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletarReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
