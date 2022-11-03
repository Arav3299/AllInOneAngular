import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http : HttpClient) {  }

  api ='http://localhost:8000/api/student';

  public registerStudent(studentData: any){//interface use here
    return this.http.post(this.api+'/saving',studentData);
  }

  public getstudents(){
    return this.http.get(this.api+'/show');
  }

  public deleteStudent(id: string ){
    return this.http.delete(this.api+'/delete/'+id );
  }

  public updateStudent(student: any){
    return this.http.post(this.api+'/saving',student);
  }
}
