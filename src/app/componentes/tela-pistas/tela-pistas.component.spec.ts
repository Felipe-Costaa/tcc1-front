import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPistasComponent } from './tela-pistas.component';

describe('TelaPistasComponent', () => {
  let component: TelaPistasComponent;
  let fixture: ComponentFixture<TelaPistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaPistasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaPistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
