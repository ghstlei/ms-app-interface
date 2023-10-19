import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Client } from '../client/client';

@Injectable({
    providedIn: 'root',
})
export class ClientService{

    addCltURL : string;
    getCltURL : string;
    updateCltURL : string;
    deleteCltURL : string;

    constructor(private http : HttpClient){ 

        this.addCltURL = 'http://localhost:5452/clt/addClient';
        this.getCltURL = 'http://localhost:5452/clt/getAllClient';
        this.updateCltURL = 'http://localhost:5452/clt/updateClient';
        this.deleteCltURL = 'http://localhost:5452/clt/deleteClientById';

    }


    addClient(clt : Client) : Observable<Client>{
        return this.http.post<Client>(this.addCltURL,clt);
    }

    getAllClient(): Observable<Client[]>{
        return this.http.get<Client[]>(this.getCltURL);
    }

    updateClient(clt : Client) : Observable<Client>{
    return this.http.put<Client>(this.updateCltURL, clt);
    
    
    }

    deleteClient(clt : Client) : Observable<Client>{
        return this.http.delete<Client>(this.deleteCltURL+'/'+clt.id);
    }
    
}