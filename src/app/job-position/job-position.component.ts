import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { JobPosition } from './job-position';
import { JobService } from './job-position.service';

@Component({
  selector: 'app-job-position',
  templateUrl: './job-position.component.html',
  styleUrls: ['./job-position.component.scss']
})
export class JobPositionComponent implements OnInit {

  jobDetail !: FormGroup;
  jobObj : JobPosition = new JobPosition();
  jobList : JobPosition[] = [];

  constructor(private formBuider : FormBuilder, private jobService : JobService){
  }

  

  ngOnInit(): void{

    this.getAllJob();
    

    this.jobDetail = this.formBuider.group({
      id : [''],
      name : ['']
      
    });


  }

  addJobPosition(){

    console.log(this.jobDetail);
    this.jobObj.id = this.jobDetail.value.id;
    this.jobObj.name = this.jobDetail.value.name;

    this.jobService.addJobPosition(this.jobObj).subscribe(res=>{
      console.log(res);
      this.getAllJob();
    },err=>{
      console.log(err);
    });
  }

  editJobPosition(job : JobPosition){
    this.jobDetail.controls['id'].setValue(job.id);
    this.jobDetail.controls['name'].setValue(job.name);

  } 

  updateJob(){
    this.jobObj.id = this.jobDetail.value.id;
    this.jobObj.name = this.jobDetail.value.name;

    this.jobService.updateJob(this.jobObj).subscribe(res=>{
      console.log(res);
      this.getAllJob();
    },err=>{
      console.log(err);
    });

  }

  getAllJob(){

    this.jobService.getAllJob().subscribe(res=>{
      this.jobList = res;
    },err=>{
      console.log("error while fetching data.")
    });

  }

  deleteJobById(job : JobPosition){
    this.jobService.deleteJobById(job).subscribe(res=>{
      console.log(res);
      alert('Client deleted successfull');
      this.getAllJob;
    }, err => {
      console.log(err);
    });


  }
}
