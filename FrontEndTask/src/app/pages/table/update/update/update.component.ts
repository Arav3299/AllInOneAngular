import { FrontendserviceService } from 'src/app/frontendservice.service';
import { Employee } from './../../../../Employee';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  showDialog : boolean

  employee : Employee = new Employee(0,"","","","");
  updateForm : FormGroup;
  id !: number ;
  constructor(private service :FrontendserviceService,private route : ActivatedRoute,private navi :Router) {
   
    this.showDialog=false;
    this.updateForm = new FormGroup({

      id: new FormControl('', [Validators.required]),                       //building the form ,
      employeeId: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      mobileNumber: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      //injecting form control
    });
    this.updateForm.controls['employeeId'].disable();
   }
   

   get employeeId(){
    return this.updateForm.get('employeeId')
   }

   get country(){
    return this.updateForm.get('country')
   }
   get mobileNumber(){
    return this.updateForm.get('mobileNumber')
   }
   get name(){
    return this.updateForm.get('name')
   }

   

 
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.service.getEmployeeById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>{
      console.log(error)
    })
  }

  updateEmployee(){
    this.service.updateEmployee(this.id,this.employee).subscribe(res=>{
      
      //this.navi.navigate(['table']);
    });
    Swal.fire({
      title: 'Success!',
      text: 'Updated successfuly',
      icon: 'success',
      toast: false,
      allowOutsideClick: false
  }).then(() =>{
    this.navi.navigate(['table']);
});
    console.log(this.employee);
  
  }

 
 
}
