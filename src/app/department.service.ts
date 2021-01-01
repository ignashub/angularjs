import { Injectable } from '@angular/core';
import { Department } from './department';
import { DEPARTMENTS } from './list-departments';
import { Employee } from 'src/app/employee';

import { stringify } from '@angular/compiler/src/util';
import { from, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// http://i875395.hera.fhict.nl/api/419549/department
export class DepartmentService {
  idCounter = 1;
  departments: Department[];

  constructor(private http: HttpClient) { }
  private depURL = 'http://i875395.hera.fhict.nl/api/419549/department';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  getNewId() {
    return this.idCounter;
  }
  setNewId() {
    this.idCounter = this.idCounter + 1;
  }

  getDepartments(): Department[] {
   // return DEPARTMENTS;
   var localStorageItem = JSON.parse(localStorage.getItem('departemnts'));
   if (localStorageItem === null) {
      return [];
    } else {
      return localStorageItem.departemnts;
    }
  }

  getApiDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.depURL);
  }

  searchApiDepartments(dep: string): Observable<Department> {
    return this.http.get<Department>(`${this.depURL}/?name=${dep}`);
  }

  getDepartmentID(dep: Department): number {
    return dep.id;
  }
  removeDepartment(depName: string): void {
    // this.getTasks().splice(index, 1);
     let departemnts = this.getDepartments();
     departemnts = departemnts.filter((task) => task.name !== depName);
     this.setLocalStorageDepartments(departemnts);
   }

  addNewDepartment(newDepartment: Department): void {
    // this.getDepartments().push(newDepartment);
    this.departments = this.getDepartments();
    this.departments.push(newDepartment);
    this.setLocalStorageDepartments(this.departments);
  }
  private setLocalStorageDepartments(departemnts: Department[]): void {
    localStorage.setItem('departments', JSON.stringify({ departemnts }));
  }

  addToApiDepartment(dep: Department): Observable<Department> {
    return this.http.post<Department>(this.depURL, dep, this.httpOptions);
  }

  deleteDepartemnt(dep: Department): Observable<Department> {
    const id = dep.id;
    const url = `${this.depURL}/?id=${id}`;
    return this.http.delete<Department>(url, this.httpOptions);
  }
  updateDepartment(dep: Department): Observable<Department> {
    const url = `${this.depURL}/?id=${dep.id}`;
    return this.http.put<Department>(url, dep , this.httpOptions);
  }

}
