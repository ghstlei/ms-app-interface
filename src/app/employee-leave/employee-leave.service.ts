import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class EmployeeLeaveService{
    private apiUrl = 'http://localhost:5500/leave'

}