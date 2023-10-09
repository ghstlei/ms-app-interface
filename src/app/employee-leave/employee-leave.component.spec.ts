import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLeaveComponent } from './employee-leave.component';

describe('EmployeeLeaveComponent', () => {
  let component: EmployeeLeaveComponent;
  let fixture: ComponentFixture<EmployeeLeaveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeLeaveComponent]
    });
    fixture = TestBed.createComponent(EmployeeLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
