import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
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

export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }
  close() {
    this.updateEmployee();
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
  updateEmployee() {
    this.employeeService.updateDepartment(this.employee).subscribe();
  }
}
