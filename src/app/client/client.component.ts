import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Client } from './client';
import { ClientService } from './client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  cltDetail !: FormGroup;
  cltObj : Client = new Client();
  cltList : Client[] = [];

  constructor(private formBuider : FormBuilder, private cltService : ClientService){
  }

  

  ngOnInit(): void{

    this.getAllClient();
    

    this.cltDetail = this.formBuider.group({
      id : [''],
      name : ['']
      
    });


  }

  addClient(){

    console.log(this.cltDetail);
    this.cltObj.id = this.cltDetail.value.id;
    this.cltObj.name = this.cltDetail.value.name;

    this.cltService.addClient(this.cltObj).subscribe(res=>{
      console.log(res);
      this.getAllClient();
    },err=>{
      console.log(err);
    });
  }

  editClient(clt : Client){
    this.cltDetail.controls['id'].setValue(clt.id);
    this.cltDetail.controls['name'].setValue(clt.name);

  } 

  updateClient(){
    this.cltObj.id = this.cltDetail.value.id;
    this.cltObj.name = this.cltDetail.value.name;

    this.cltService.updateClient(this.cltObj).subscribe(res=>{
      console.log(res);
      this.getAllClient();
    },err=>{
      console.log(err);
    });

  }

  getAllClient(){

    this.cltService.getAllClient().subscribe(res=>{
      this.cltList = res;
    },err=>{
      console.log("error while fetching data.")
    });

  }

  deleteClient(clt : Client){
    this.cltService.deleteClient(clt).subscribe(res=>{
      console.log(res);
      alert('Client deleted successfull');
      this.getAllClient;
    }, err => {
      console.log(err);
    });


  }
}
