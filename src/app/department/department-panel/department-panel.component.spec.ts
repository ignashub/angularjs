import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentPanelComponent } from './department-panel.component';

describe('DepartmentPanelComponent', () => {
  let component: DepartmentPanelComponent;
  let fixture: ComponentFixture<DepartmentPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
