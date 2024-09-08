import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbSecComponent } from './prob-sec.component';

describe('ProbSecComponent', () => {
  let component: ProbSecComponent;
  let fixture: ComponentFixture<ProbSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProbSecComponent]
    });
    fixture = TestBed.createComponent(ProbSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
