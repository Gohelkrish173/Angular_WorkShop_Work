import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrishComponent } from './krish.component';

describe('KrishComponent', () => {
  let component: KrishComponent;
  let fixture: ComponentFixture<KrishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KrishComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KrishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
