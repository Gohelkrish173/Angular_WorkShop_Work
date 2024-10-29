import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeptopComponent } from './leptop.component';

describe('LeptopComponent', () => {
  let component: LeptopComponent;
  let fixture: ComponentFixture<LeptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeptopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
