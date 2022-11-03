import { Employee } from './../../Employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FrontendserviceService } from 'src/app/frontendservice.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 emp:any;
  constructor(private router : Router,private service:FrontendserviceService,private spinservice:NgxSpinnerService) { }

  ngOnInit(): void {
    this.GetemployeeDetails();
    
   
  }

  GetemployeeDetails() {  
    this.spinservice.show();
    setTimeout(() => {
     
      this.service.GetemployeeDetails().subscribe((data: any) => {  
        this.emp = data;  
        console.log(this.emp);  
         this.spinservice.hide();  
      },
      (err)=>{
        console.log(err);
      }); 
    },4000);  
     
}

updateEmployee(id:any){

  this.router.navigate(['update',id])

}

 

deleteEmployee(id:any){
 
  this.service.delteEmployee(id).subscribe(
    data=>{
    Swal.fire({
      title: 'Success!',
      text: 'Deleted successfuly',
      icon: 'success',
      toast: false,
      allowOutsideClick: false
  }).then(() =>{
    this.GetemployeeDetails();
});
    
  },(err)=>{

  });
}

}
