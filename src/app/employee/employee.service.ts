import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class EmployeeService{
    private apiUrl = 'http://localhost:5500/emp'

}