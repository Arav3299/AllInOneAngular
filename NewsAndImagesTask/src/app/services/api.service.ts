import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:8088/api/news"

  constructor(private http : HttpClient) { }

  getAllPromotedData(){
alert();
    return this.http.get(`${this.baseUrl}`+'/getAllPromotedData');

  }

}
