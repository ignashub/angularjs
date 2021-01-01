import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { TaskComponent } from './task/task.component';
import { TaskPanelComponent } from './task/task-panel/task-panel.component';
import { EmployeePanelComponent } from './employee/employee-panel/employee-panel.component';
import { TaskCreationComponent } from './task/task-creation/task-creation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDetailsComponent } from './dashboard/dashboard-details/dashboard-details.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { DepartmentComponent } from './department/department.component';
import { DepartmentPanelComponent } from './department/department-panel/department-panel.component';
import { DepartmentAssignComponent } from './department/department-assign/department-assign.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeAssignComponent } from './employee/employee-assign/employee-assign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalenderComponent } from './calender/calender.component';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardDepartmentComponent } from './dashboard-department/dashboard-department.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';
import { DashboardTaskComponent } from './dashboard-task/dashboard-task.component';
import { HttpClientModule } from '@angular/common/http';
import { Chart } from 'chart.js';
import { NgChartjsModule  } from 'ng-chartjs';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskPanelComponent,
    DepartmentComponent,
    DepartmentPanelComponent,
    EmployeeComponent,
    EmployeePanelComponent,
    DepartmentAssignComponent,
    DepartmentDetailComponent,
    TaskCreationComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    TaskDetailComponent,
    EmployeeDetailComponent,
    EmployeeAssignComponent,
    CalenderComponent,
    DashboardDepartmentComponent,
    DashboardEmployeeComponent,
    DashboardTaskComponent
  ],
  imports: [
    BrowserModule,
    NgChartjsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
