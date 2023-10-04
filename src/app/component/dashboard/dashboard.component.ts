import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms'
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];

  constructor(private formBuilder : FormBuilder, private empService : EmployeeService){

  }

  ngOnInit(): void{

    this.getAllEmployee();

    this.empDetail = this.formBuilder.group({
      id : [''],
      client_id : [''],
      name : [''],
      cpf : [''],
      birthdate : [''],
      job_position : [''],
      activity : [''],
      salary : [''],
      email : ['']


    });

  }

  addEmployee(){

    console.log(this.empDetail);
    this.empObj.id = this.empDetail.value.id;
    this.empObj.client_id = this.empDetail.value.client_id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.national_identity = this.empDetail.value.national_identity;
    this.empObj.birthdate = this.empDetail.value.birthdate;
    this.empObj.job_position = this.empDetail.value.job_position;
    this.empObj.activity = this.empDetail.value.activity;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.type = this.empDetail.value.type;
    this.empObj.email = this.empDetail.value.email;


    this.empService.addEmployee(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllEmployee();
    },err=>{
      console.log(err);
    
    });
  }

  getAllEmployee(){
    this.empService.getAllEmployee().subscribe(res=>{
      this.empList = res;

    },err=>{
      console.log("error while fetching data.")
    });
  }
  editEmployee(emp : Employee){
    this.empDetail.controls['id'].setValue(emp.id);
    this.empDetail.controls['client_id'].setValue(emp.client_id);
    this.empDetail.controls['name'].setValue(emp.name);
    this.empDetail.controls['national_identity'].setValue(emp.national_identity);
    this.empDetail.controls['birthdate'].setValue(emp.birthdate);
    this.empDetail.controls['job_position'].setValue(emp.job_position);
    this.empDetail.controls['activity'].setValue(emp.activity);
    this.empDetail.controls['salary'].setValue(emp.salary);
    this.empDetail.controls['type'].setValue(emp.type);
    this.empDetail.controls['email'].setValue(emp.email);
  }

}
