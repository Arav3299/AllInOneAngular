import { Employee } from './Employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrontendserviceService {

  base = 'http://localhost:8088/task/employee';
url:any;
  constructor(private http:HttpClient ) { }

  GetemployeeDetails() {
    this.url='http://localhost:8088/task/employee/get';  
    return this.http.get(this.url);  
  }

  getEmployeeById(id:number) : Observable<Employee>{
    
    return this.http.get<Employee>(`${this.base+'/get'}/${id}`);
  }

  updateEmployee(id:number , employee:Employee):Observable<Object>{

    return this.http.put(`${this.base+'/edit'}/${id}`,employee);
  }

  delteEmployee(id:number){

    return this.http.delete(`${this.base+'/dlt'}/${id}`);
  }

}
