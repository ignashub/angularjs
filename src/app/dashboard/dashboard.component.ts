import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formTaskShowing: boolean;
  formDepartmentShowing: boolean;
  formEmployeeShowing: boolean;
  formDashboardShowing: boolean;
  formCalenderShowing: boolean;
  today = Date.now();


  constructor() { }

  ngOnInit() {
    this.formTaskShowing = false;
    this.formDepartmentShowing = false;
    this.formEmployeeShowing = false;
    this.formDashboardShowing = false;
    this.formCalenderShowing = false;
  }

  onShowTask() {
    if (this.formTaskShowing === false) {
      this.formTaskShowing = true;
      this.formDashboardShowing = false;
      this.formDepartmentShowing = false;
      this.formEmployeeShowing = false;
      this.formCalenderShowing = false;
    }
  }
  onShowCalender() {
    if (this.formCalenderShowing === false) {
      this.formCalenderShowing = true;
      this.formDashboardShowing = false;
      this.formDepartmentShowing = false;
      this.formEmployeeShowing = false;
      this.formTaskShowing = false;
    }
  }
  onShowDepartment() {
    if (this.formDepartmentShowing === false) {
      this.formDepartmentShowing = true;
      this.formDashboardShowing = false;
      this.formTaskShowing = false;
      this.formEmployeeShowing = false;
      this.formCalenderShowing = false;
    }
  }
  onShowEmployee() {
    if (this.formEmployeeShowing === false) {
      this.formEmployeeShowing = true;
      this.formDashboardShowing = false;
      this.formTaskShowing = false;
      this.formDepartmentShowing = false;
      this.formCalenderShowing = false;
    }
  }
  onShowDashBoard() {
    if (this.formDashboardShowing === false) {
      this.formTaskShowing = false;
      this.formDashboardShowing = true;
      this.formDepartmentShowing = false;
      this.formEmployeeShowing = false;
      this.formCalenderShowing = false;
    }
  }

}
