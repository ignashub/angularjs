import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './employeeList';
import { stringify } from '@angular/compiler/src/util';
import { Department } from './department';
import { DepartmentService } from './department.service';
import {DEPARTMENTS } from './list-departments';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// http://i875395.hera.fhict.nl/api/419549/employee
export class EmployeeService {
  idCounter = 1;
  depid: number;
  employees: Employee[];

  constructor(private departmentService: DepartmentService, private http: HttpClient) { }
  private empURL = 'http://i875395.hera.fhict.nl/api/419549/employee';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getEmployees(): Employee[] {
   // return EMPLOYEES;
   var localStorageItem = JSON.parse(localStorage.getItem('employees'));
   if (localStorageItem === null) {
      return [];
    } else {
      return localStorageItem.employees;
    }
  }
  getApiEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.empURL);
  }
  addToApiEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.empURL, emp, this.httpOptions);
  }
  updateDepartment(emp: Employee): Observable<Employee> {
    const url = `${this.empURL}/?id=${emp.id}`;
    return this.http.put<Employee>(url, emp , this.httpOptions);
  }
  deleteEmployee(emp: Employee): Observable<Employee> {
    const id = emp.id;
    const url = `${this.empURL}/?id=${id}`;
    return this.http.delete<Employee>(url, this.httpOptions);
  }
  getNewId() {
    return this.idCounter;
  }
  setNewId() {
    this.idCounter = this.idCounter + 1;
  }
  private setLocalStorageTodos(employees: Employee[]): void {
    localStorage.setItem('employees', JSON.stringify({ employees }));
  }

  addNewEmployee(newEmployee: Employee): void {
    // this.getEmployees().push(newEmployee);
    this.employees = this.getEmployees();
    this.employees.push(newEmployee);
    this.setLocalStorageTodos(this.employees);
  }
  removeEmployee(empName: string): void {
     let employees = this.getEmployees();
     employees = employees.filter((employee) => employee.first_name !== empName);
     this.setLocalStorageTodos(employees);
   }
}
