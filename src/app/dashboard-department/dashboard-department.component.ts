import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-dashboard-department',
  templateUrl: './dashboard-department.component.html',
  styleUrls: ['./dashboard-department.component.css']
})
export class DashboardDepartmentComponent implements OnInit {
  departments: Department[];
  selectedDepartment: Department;
  depsAPI: Department[];
  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    // this.getDepartments();
    this.getApiDepartments();
  }
  onRemoveDepartment(index) {
    this.departments.splice(index, 1);
  }
  getDepartments(): void {
    this.departments = this.departmentService.getDepartments();
  }
  getApiDepartments() {
    this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
  }
  onSelect(department: Department): void {
    this.selectedDepartment = department;
  }
}
