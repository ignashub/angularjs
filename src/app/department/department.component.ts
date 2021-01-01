import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Department } from '../department';
import { DepartmentService } from '../department.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit, AfterViewChecked {
    departments: Department[];
    depsAPI: Department[];
    selectedDepartment: Department;
    constructor(private departmentService: DepartmentService) { }

    ngOnInit() {
      this.getDepartments();
      this.getApiDepartments();
    }
    ngAfterViewChecked() {
      // this.getApiDepartments();
    }
    onRemoveDepartment(depName: string) {
      this.departmentService.removeDepartment(depName);
    }
    onRemoveFromApi(dep: Department) {
      this.depsAPI = this.depsAPI.filter(h => h !== dep);
      this.departmentService.deleteDepartemnt(dep).subscribe();
    }
    getDepartments(): void {
      this.departments = this.departmentService.getDepartments();
    }
    getApiDepartments() {
      this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
    }
    onSelect(department: Department): void {
      this.selectedDepartment = department;
      this.getApiDepartments();
    }

  }
