import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionSecComponent } from './selection-sec.component';

describe('SelectionSecComponent', () => {
  let component: SelectionSecComponent;
  let fixture: ComponentFixture<SelectionSecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionSecComponent]
    });
    fixture = TestBed.createComponent(SelectionSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
