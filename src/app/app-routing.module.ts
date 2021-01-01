import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from 'src/app/task/task.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { DepartmentComponent } from 'src/app/department/department.component';
import { DashboardDetailsComponent } from 'src/app/dashboard/dashboard-details/dashboard-details.component';
import { CalenderComponent } from 'src/app/calender/calender.component';


const routes: Routes = [
  { path: 'task', component: TaskComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'dashboard', component: DashboardDetailsComponent },
  { path: 'department', component: DepartmentComponent },
  { path: 'calender', component: CalenderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
