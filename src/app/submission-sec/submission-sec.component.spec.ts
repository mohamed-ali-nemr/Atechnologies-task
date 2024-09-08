import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionSecComponent } from './submission-sec.component';

describe('SubmissionSecComponent', () => {
  let component: SubmissionSecComponent;
  let fixture: ComponentFixture<SubmissionSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionSecComponent]
    });
    fixture = TestBed.createComponent(SubmissionSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
