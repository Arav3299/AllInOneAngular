import { StudentService } from './student.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'StudentFrontend';
  studentArray : any;

  edit={
    id:"",age:"",dob:"",jd:"",name:"",studentId:""
  }

constructor(private studentService:StudentService){
  this.getStudentsDetails();
}
  register(registerForm:NgForm){
    this.studentService.registerStudent(registerForm.value).subscribe(
      (res)=>{
        console.log(res);
        registerForm.reset();
        this.getStudentsDetails();
      },(err) =>{
        console.log(err);
      }
    ); 
  }
  getStudentsDetails(){
     
    this.studentService.getstudents().subscribe(
      (res)=>{
        console.log(res);
        this.studentArray=res;
      },(err)=>{
        console.log(err);
      }
    )
  }
  deleteStudentDetails(stu: { id: any; }){
    //  location.reload();
     
    this.studentService.deleteStudent(stu.id ).subscribe(
      (res)=>{
        console.log(res);
        this.getStudentsDetails();
      },(err)=>{
        this.getStudentsDetails();
        console.log(err);
        
      } 
    );
     
 
  }
   

  updateStudentDetails(updateForm:NgForm){
    this.studentService.updateStudent(updateForm.value).subscribe(
      {
        next: (v) => {console.log(v)},
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
    }
    )
  }

  edits(stu: {id: string, age: string; dob: string; jd: string; name: string; studentId: string; }){
    this.edit=stu; 

  }

  isShown: boolean = false;  
  isShowne: boolean = false ;  

hideList() {
this.isShown = ! this.isShown;
this.isShowne=false;
}

hideForm(){
  this.isShowne=!this.isShowne;
  this.isShown =false;
}
 
}