import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias3Component } from './categorias3.component';

describe('Categorias3Component', () => {
  let component: Categorias3Component;
  let fixture: ComponentFixture<Categorias3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Categorias3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
