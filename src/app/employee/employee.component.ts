import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { JobService } from '../job-position/job-position.service';
import { JobPosition } from '../job-position/job-position';
import { ClientService } from '../client/client.service';
import { Client } from '../client/client';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  empDetail !: FormGroup;
  empObj : Employee = new Employee();
  empList : Employee[] = [];
  job_position : JobPosition[] = [];
  client : Client[] = [];

  constructor(private formBuider : FormBuilder, private empService : EmployeeService, private jobService : JobService,  private clientService : ClientService){
  }

  

  ngOnInit(): void{

    this.getAllEmployee();


    this.empDetail = this.formBuider.group({
      id : [''],
      client_id : [''],
      name : [''],
      national_identity : [''],
      birthdate : [''],
      job_position : [''],
      activity : [''],
      salary : [''],
      type : [''],
      
    });
    
// GET CARGOS PARA O CAMPO SELECT

    this.jobService.getAllJob().subscribe(job_position => {
      this.job_position = job_position;
    });

// GET CLIENT PARA O CAMPO SELECT

    this.clientService.getAllClient().subscribe(client => {
      this.client = client;
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
    

    this.empService.addEmployee(this.empObj).subscribe(res=>{
      console.log(res);
      this.getAllEmployee();
    },err=>{
      console.log(err);
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
    
  } 

  updateEmployee(){
    this.empObj.id = this.empDetail.value.id;
    this.empObj.client_id = this.empDetail.value.client_id;
    this.empObj.name = this.empDetail.value.name;
    this.empObj.national_identity = this.empDetail.value.national_identity;
    this.empObj.birthdate = this.empDetail.value.birthdate;
    this.empObj.job_position = this.empDetail.value.job_position;
    this.empObj.activity = this.empDetail.value.activity;
    this.empObj.salary = this.empDetail.value.salary;
    this.empObj.type = this.empDetail.value.type;
    

    this.empService.updateEmployee(this.empObj).subscribe(res=>{
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

  

  deleteEmployee(emp : Employee){
    this.empService.deleteEmployee(emp).subscribe(res=>{
      console.log(res);
      alert('Employee deleted successfull');
      this.getAllEmployee;
    }, err => {
      console.log(err);
    });


  }
}

