import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilaComponent } from './tela-fila.component';

describe('TelaFilaComponent', () => {
  let component: TelaFilaComponent;
  let fixture: ComponentFixture<TelaFilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFilaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaFilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
