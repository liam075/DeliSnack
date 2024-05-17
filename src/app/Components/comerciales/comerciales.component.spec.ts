import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialesComponent } from './comerciales.component';

describe('ComercialesComponent', () => {
  let component: ComercialesComponent;
  let fixture: ComponentFixture<ComercialesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComercialesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComercialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
