import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentAssignComponent } from './department-assign.component';

describe('DepartmentAssignComponent', () => {
  let component: DepartmentAssignComponent;
  let fixture: ComponentFixture<DepartmentAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
