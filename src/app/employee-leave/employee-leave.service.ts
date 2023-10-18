import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EmployeeLeave } from '../employee-leave/employee-leave';

@Injectable({
    providedIn: 'root',
})
export class EmployeeLeaveService{

    addEmpURL : string;
    getEmpURL : string;
    updateEmpURL : string;
    deleteEmpURL : string;

    constructor(private http : HttpClient){ 

        this.addEmpURL = 'http://localhost:5500/leave/addLeave';
        this.getEmpURL = 'http://localhost:5500/leave/getAllLeave';
        this.updateEmpURL = 'http://localhost:5500/leave/updateLeave';
        this.deleteEmpURL = 'http://localhost:5500/leave/deleteLeaveById';

    }


    addLeave(emp : EmployeeLeave) : Observable<EmployeeLeave>{
        return this.http.post<EmployeeLeave>(this.addEmpURL, emp);
    }

    getAllLeave(): Observable<EmployeeLeave[]>{
        return this.http.get<EmployeeLeave[]>(this.getEmpURL);
    }

    updateLeave(emp : EmployeeLeave) : Observable<EmployeeLeave>{
    return this.http.put<EmployeeLeave>(this.updateEmpURL, emp);
    
    
    }

    deleteLeaveById(emp : EmployeeLeave) : Observable<EmployeeLeave>{
    return this.http.delete<EmployeeLeave>(this.deleteEmpURL+'/'+emp.id);
    }
    
}