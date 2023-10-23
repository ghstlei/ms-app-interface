import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { EmployeeLeave } from './employee-leave';
import { EmployeeLeaveService } from './employee-leave.service';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client';
import { EmployeeService } from '../employee/employee.service';
import { Employee } from '../employee/employee';
import { LeaveType } from '../employee-leave/leave-type';
import { Type } from '../employee-leave/type';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.scss']
})
export class EmployeeLeaveComponent implements OnInit {

  empDetail !: FormGroup;
  empObj: EmployeeLeave = new EmployeeLeave();
  empList: EmployeeLeave[] = [];
  employee: Employee[] = [];
  client: Client[] = [];
  type: Type[] = [];

  leaveType!: number;
  leaveDays!: number;
  leaveTypes: any[] = [];
  isLeaveDaysEnabled: boolean = false;


  constructor(private formBuider: FormBuilder, private leaveService: EmployeeLeaveService, private empService: EmployeeService, private clientService: ClientService) {
  }



  ngOnInit(): void {

    this.getAllLeave();

    this.empDetail = this.formBuider.group({
      id: [''],
      client_id: [''],
      employee_id: [''],
      leave_type: [''],
      leave_date: [''],
      number_days: [''],
      return_date: [''],
      type: [''],
    });

    // GET FUNCIONARIOS PARA O CAMPO SELECT

    this.empService.getAllEmployee().subscribe(employee => {
      this.employee = employee;
    });

    // GET CLIENT PARA O CAMPO SELECT

    this.clientService.getAllClient().subscribe(client => {
      this.client = client;
    });

    // GET LEAVE TYPE PARA O CAMPO SELECT

    this.leaveTypes = [
      { id: 1, name: 'Sick Leave' },
      { id: 2, name: 'Vacation' },
      { id: 3, name: 'Maternity Leave' },
      { id: 4, name: 'Paternity Leave' }
    ]

    // GET TYPE PARA O CAMPO SELECT

    this.leaveService.getAllType().subscribe(type => {
      this.type = type;
    });

  }

  // NUMBER OF DAYS ENABLE
  changeInputValue() {
    if (this.leaveType === 3 || this.leaveType === 4 || this.leaveType === 2) {
      // Enable the input field
      this.isLeaveDaysEnabled = true;

      // Set the default value or any specific value
      this.leaveDays = 0;
    } else {
      // Disable the input field and reset the value
      this.isLeaveDaysEnabled = false;
      this.leaveDays = 0;
    }

  }


  addLeave() {

    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.client_id = this.empDetail.value.client_id;
    this.empObj.employee_id = this.empDetail.value.employee_id;
    this.empObj.leave_type = this.empDetail.value.leave_type;
    this.empObj.leave_date = this.empDetail.value.leave_date;
    this.empObj.number_days = this.empDetail.value.number_days;
    this.empObj.return_date = this.empDetail.value.return_date;
    this.empObj.type = this.empDetail.value.type;

    this.leaveService.addLeave(this.empObj).subscribe(res => {
      console.log(res);
      this.getAllLeave();
    }, err => {
      console.log(err);
    });
  }

  editLeave(emp: EmployeeLeave) {
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['client_id'].setValue(emp.client_id);
    this.empDetail.controls['employee_id'].setValue(emp.employee_id);
    this.empDetail.controls['leave_type'].setValue(emp.leave_type);
    this.empDetail.controls['leave_date'].setValue(emp.leave_date);
    this.empDetail.controls['number_days'].setValue(emp.number_days);
    this.empDetail.controls['return_date'].setValue(emp.return_date);
    this.empDetail.controls['type'].setValue(emp.type);

  }

  updateLeave() {
    this.empObj.id = this.empDetail.value.id;
    this.empObj.client_id = this.empDetail.value.client_id;
    this.empObj.employee_id = this.empDetail.value.employee_id;
    this.empObj.leave_type = this.empDetail.value.leave_type;
    this.empObj.leave_date = this.empDetail.value.leave_date;
    this.empObj.number_days = this.empDetail.value.number_days;
    this.empObj.return_date = this.empDetail.value.return_date;
    this.empObj.type = this.empDetail.value.type;


    this.leaveService.updateLeave(this.empObj).subscribe(res => {
      console.log(res);
      this.getAllLeave();
    }, err => {
      console.log(err);
    });

  }

  getAllLeave() {

    this.leaveService.getAllLeave().subscribe(res => {
      this.empList = res;
    }, err => {
      console.log("error while fetching data.")
    });

  }

  deleteLeaveById(emp: EmployeeLeave) {
    this.leaveService.deleteLeaveById(emp).subscribe(res => {
      console.log(res);
      alert('Employee deleted successfull');
      this.getAllLeave;
    }, err => {
      console.log(err);
    });


  }

}

