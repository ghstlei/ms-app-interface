import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class JobService{
    private apiUrl = 'http://localhost:5500/job'

}