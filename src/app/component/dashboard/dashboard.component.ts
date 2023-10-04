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
    this.empObj.client_id = this.empDetail.value.id;
    this.empObj.name = this.empDetail.value.id;
    this.empObj.national_identity = this.empDetail.value.id;
    this.empObj.birthdate = this.empDetail.value.id;
    this.empObj.job_position = this.empDetail.value.id;
    this.empObj.activity = this.empDetail.value.id;
    this.empObj.salary = this.empDetail.value.id;
    this.empObj.email = this.empDetail.value.id;


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

}
