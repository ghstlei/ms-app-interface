import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { JobPosition } from "../job-position/job-position";

@Injectable({
    providedIn: 'root',
})
export class JobService{

    addJobURL : string;
    getJobURL : string;
    updateJobURL : string;
    deleteJobURL : string;

    constructor(private http : HttpClient){ 

        this.addJobURL = 'http://localhost:5500/job/addJobPosition';
        this.getJobURL = 'http://localhost:5500/job/getAllJob';
        this.updateJobURL = 'http://localhost:5500/job/updateJob';
        this.deleteJobURL = 'http://localhost:5500/job/deleteJobById';

    }


    addJobPosition(job : JobPosition) : Observable<JobPosition>{
        return this.http.post<JobPosition>(this.addJobURL,job);
    }

    getAllJob(): Observable<JobPosition[]>{
        return this.http.get<JobPosition[]>(this.getJobURL);
    }

    updateJob(job : JobPosition) : Observable<JobPosition>{
    return this.http.put<JobPosition>(this.updateJobURL, job);
    
    
    }

    deleteJobById(job : JobPosition) : Observable<JobPosition>{
    return this.http.delete<JobPosition>(this.deleteJobURL+'/'+job.id);
    }
    
}