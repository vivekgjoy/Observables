import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getData() : Observable <any>{
    return this.http.get("http://localhost:9080/api/crudusers");
    
  }
}
