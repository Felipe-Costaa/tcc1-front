import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardReservaComponent } from './card-reserva.component';

describe('CardReservaComponent', () => {
  let component: CardReservaComponent;
  let fixture: ComponentFixture<CardReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardReservaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
