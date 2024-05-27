import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPistaComponent } from './cadastro-pista.component';

describe('CadastroPistaComponent', () => {
  let component: CadastroPistaComponent;
  let fixture: ComponentFixture<CadastroPistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
