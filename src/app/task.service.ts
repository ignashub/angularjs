import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS} from './todo-tasks';
import { stringify } from '@angular/compiler/src/util';
import { Department } from './department';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private todos: Task[];
  private idCounter: number;

  constructor(private http: HttpClient) {
  }

  private taskURL = 'http://i875395.hera.fhict.nl/api/419549/task';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTasks(): Task[] {
    // return TASKS;
    var localStorageItem = JSON.parse(localStorage.getItem('todos'));
    if (localStorageItem === null) {
      return [];
    } else {
      return localStorageItem.todos;
    }
  }
  updateTask(task: Task): Observable<Task> {
    const url = `${this.taskURL}/?id=${task.id}`;
    return this.http.put<Task>(url, task , this.httpOptions);
  }

  getApiTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskURL);
  }

  addToApiTasks(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskURL, task, this.httpOptions);
  }

  deleteTask(task: Task): Observable<Task> {
    const id = task.id;
    const url = `${this.taskURL}/?id=${id}`;
    return this.http.delete<Task>(url, this.httpOptions);
  }

  private setLocalStorageTodos(todos: Task[]): void {
    localStorage.setItem('todos', JSON.stringify({ todos }));
  }
  private setLocalStorageAmount(amount: number): void {
    localStorage.setItem('amount', JSON.stringify({ amount }));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
     // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNewId(): number {
    // this.idCounter = this.getTasks().length;
    var localStorageItem = JSON.parse(localStorage.getItem('amount'));
    if (localStorageItem === null) {
      return 0;
    } else {
      return localStorageItem.amount;
    }
    // return this.idCounter;
  }

  setNewId() {
   this.idCounter = this.getNewId() + 1;
   this.setLocalStorageAmount(this.idCounter);
  }

  addNewTask(newTask: Task): void {
   // this.getTasks().push(newTask);
    this.todos = this.getTasks();
    this.todos.push(newTask);
    this.setLocalStorageTodos(this.todos);
  }

  removeTask(taskName: string): void {
   // this.getTasks().splice(index, 1);
    let todos = this.getTasks();
    todos = todos.filter((task) => task.name !== taskName);
    this.setLocalStorageTodos(todos);
  }

  getTasksAmount() {
   return this.getTasks().length;
  }

  getTask(serached: Task): number[] {
    let empID: number[] = [];
    this.getTasks().forEach(task => {
      if (task.name === serached.name) {
        empID = task.employees;
      }
    });
    return empID;
  }
}
