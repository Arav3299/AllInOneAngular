import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicecommonService {
 
  constructor(private http : HttpClient){

  }

  get() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1");
  }

  
 

}
