import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';
import { Activity } from '../employee/activity';
import { Type } from '../employee/type';

@Injectable({
    providedIn: 'root',
})
export class EmployeeService{

    addEmpURL : string;
    getEmpURL : string;
    updateEmpURL : string;
    deleteEmpURL : string;
    getActURL : string;
    getTypeURL : string;

    constructor(private http : HttpClient){ 

        this.addEmpURL = 'http://localhost:5500/emp/addEmployee';
        this.getEmpURL = 'http://localhost:5500/emp/getAllEmployee';
        this.updateEmpURL = 'http://localhost:5500/emp/updateEmployee';
        this.deleteEmpURL = 'http://localhost:5500/emp/deleteEmployeeById';
        this.getActURL = 'http://localhost:5500/emp/getAllActivity';
        this.getTypeURL = 'http://localhost:5500/emp/getAllType';
    }


    addEmployee(emp : Employee) : Observable<Employee>{
        return this.http.post<Employee>(this.addEmpURL, emp);
    }

    getAllEmployee(): Observable<Employee[]>{
        return this.http.get<Employee[]>(this.getEmpURL);
    }

    getAllActivity(): Observable<Activity[]>{
        return this.http.get<Activity[]>(this.getActURL);
    }

    getAllType(): Observable<Type[]>{
        return this.http.get<Type[]>(this.getTypeURL);
    }

    updateEmployee(emp : Employee) : Observable<Employee>{
    return this.http.put<Employee>(this.updateEmpURL, emp);
    
    
    }

    deleteEmployee(emp : Employee) : Observable<Employee>{
    return this.http.delete<Employee>(this.deleteEmpURL+'/'+emp.id);
    }
    
}