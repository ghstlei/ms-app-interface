import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { EmployeeLeave } from '../employee-leave/employee-leave';
import { LeaveType } from '../employee-leave/leave-type';
import { Type } from '../employee-leave/type';

@Injectable({
    providedIn: 'root',
})
export class EmployeeLeaveService{

    addEmpURL : string;
    getEmpURL : string;
    updateEmpURL : string;
    deleteEmpURL : string;
    getLeaveTypeURL : string;
    getTypeURL : string;

    constructor(private http : HttpClient){ 

        this.addEmpURL = 'http://localhost:5456/leave/addLeave';
        this.getEmpURL = 'http://localhost:5456/leave/getAllLeave';
        this.updateEmpURL = 'http://localhost:5456/leave/updateLeave';
        this.deleteEmpURL = 'http://localhost:5456/leave/deleteLeaveById';
        this.getLeaveTypeURL = 'http://localhost:5456/leave/getAllLeaveType';
        this.getTypeURL = 'http://localhost:5456/leave/getAllType';
    }


    addLeave(emp : EmployeeLeave) : Observable<EmployeeLeave>{
        return this.http.post<EmployeeLeave>(this.addEmpURL, emp);
    }

    getAllLeave(): Observable<EmployeeLeave[]>{
        return this.http.get<EmployeeLeave[]>(this.getEmpURL);
    }

    getAllType(): Observable<Type[]>{
        return this.http.get<Type[]>(this.getTypeURL);
    }

    getAllLeaveType(): Observable<LeaveType[]>{
        return this.http.get<LeaveType[]>(this.getLeaveTypeURL);
    }

    updateLeave(emp : EmployeeLeave) : Observable<EmployeeLeave>{
    return this.http.put<EmployeeLeave>(this.updateEmpURL, emp);
    
    
    }

    deleteLeaveById(emp : EmployeeLeave) : Observable<EmployeeLeave>{
    return this.http.delete<EmployeeLeave>(this.deleteEmpURL+'/'+emp.id);
    }
    
}