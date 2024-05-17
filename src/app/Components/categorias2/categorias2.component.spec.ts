import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categorias2Component } from './categorias2.component';

describe('Categorias2Component', () => {
  let component: Categorias2Component;
  let fixture: ComponentFixture<Categorias2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categorias2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Categorias2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
