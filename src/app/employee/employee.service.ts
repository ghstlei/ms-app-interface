import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Employee } from '../employee/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  addEmpURL : string;
  getEmpURL : string;

  constructor(private http : HttpClient) { 

    this.addEmpURL = 'http://localhost:5500/emp/addEmployee';
    this.getEmpURL = 'http://localhost:5500/emp/getAll';

  }

  addEmployee(emp : Employee): Observable<Employee>{
    return this.http.post<Employee>(this.addEmpURL, emp);
  }

  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL);
  }

}