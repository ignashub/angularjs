import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTaskComponent } from './dashboard-task.component';

describe('DashboardTaskComponent', () => {
  let component: DashboardTaskComponent;
  let fixture: ComponentFixture<DashboardTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
