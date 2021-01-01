import { Component, OnInit, Input, Output} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
    empsAPI: Employee[];
    employees: Employee[];
    selectedEmployee: Employee;
    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
      this.getEmployees();
      this.getApiEmployees();
    }
    onRemoveEmployee(empName: string) {
      this.employeeService.removeEmployee(empName);
    }
    onRemoveFromApi(emp: Employee) {
      this.empsAPI = this.empsAPI.filter(h => h !== emp);
      this.employeeService.deleteEmployee(emp).subscribe();
    }
    getEmployees(): void {
      this.employees = this.employeeService.getEmployees();
    }
    getApiEmployees() {
      this.employeeService.getApiEmployees() .subscribe(emps => this.empsAPI = emps);
    }
    onSelect(employee: Employee): void {
      this.selectedEmployee = employee;
    }

  }
