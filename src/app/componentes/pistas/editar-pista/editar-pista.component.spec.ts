import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPistaComponent } from './editar-pista.component';

describe('EditarPistaComponent', () => {
  let component: EditarPistaComponent;
  let fixture: ComponentFixture<EditarPistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
