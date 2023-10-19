import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService{

    addEmpURL : string;
    getEmpURL : string;
    updateEmpURL : string;
    deleteEmpURL : string;

    constructor(private http : HttpClient){ 

        this.addEmpURL = 'http://localhost:5500/emp/addEmployee';
        this.getEmpURL = 'http://localhost:5500/emp/getAllEmployee';
        this.updateEmpURL = 'http://localhost:5500/emp/updateEmployee';
        this.deleteEmpURL = 'http://localhost:5500/emp/deleteEmployeeById';
    }


    addEmployee(emp : Employee) : Observable<Employee>{
        return this.http.post<Employee>(this.addEmpURL, emp);
    }

    getAllEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>(this.getEmpURL);
    }


    updateEmployee(emp : Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.updateEmpURL, emp);
    
    
    }

    deleteEmployee(emp : Employee) : Observable<Employee>{
    return this.http.delete<Employee>(this.deleteEmpURL+'/'+emp.id);
    }
    
}