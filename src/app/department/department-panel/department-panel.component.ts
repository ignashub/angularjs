import { Component, OnInit, Input, Output } from '@angular/core';
import {Department} from 'src/app/department';
import { DepartmentService } from 'src/app/department.service';

@Component({
  selector: 'app-department-panel',
  templateUrl: './department-panel.component.html',
  styleUrls: ['./department-panel.component.css']
})
export class DepartmentPanelComponent implements OnInit {

  search = '';
  searchDepartment: Department;
  departments: Department[] = [];


  formIsShowing: boolean;
  depsAPI: Department[];

  onShowForm() {
    if (this.formIsShowing === false) {
      this.formIsShowing = true;
    } else {
      this.formIsShowing = false;
    }
  }

  getApiDepartments() {
    this.departmentService.getApiDepartments() .subscribe(deps => this.depsAPI = deps);
  }
  getSearchDepartment() {
   this.setSearchDepartment(this.search);
  }
  setSearchDepartment(search: string) {
    for (const i of this.depsAPI) {
      if ( search === i.name ) {
        this.searchDepartment = i;
      }
    }
  }

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.formIsShowing = false;
    this.getApiDepartments();
  }

}
