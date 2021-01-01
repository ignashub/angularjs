import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Task } from 'src/app/task';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class TaskDetailComponent implements OnInit {
  @Input() task: Task;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  closeWindow() {
    this.task = null;
  }
  constructor(private employeeService: EmployeeService, private taskService: TaskService) { }

  ngOnInit() {
  }
  close() {
    this.updateDepartment();
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  updateDepartment() {
    this.taskService.updateTask(this.task).subscribe();
  }
}
