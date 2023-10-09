import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ClientService{
    private apiUrl = 'http://localhost:5500/clt'

}