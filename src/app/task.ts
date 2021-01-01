import { Department } from './department';
import { Employee } from './employee';

export class Task {
    id: number;
    department_id: number;
    name: string;
    due_date: string;
    description: string;
   // department: Department;
    employees: number[];
   // employees: string[];
  //  checked: boolean;
}
