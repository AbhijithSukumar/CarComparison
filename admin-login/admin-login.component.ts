import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
constructor(private formBuilder:FormBuilder,private adminService:AdminServiceService,private router: Router){}

login!:FormGroup
invalid:Boolean=false

ngOnInit(){
  this.login=this.formBuilder.group({
    username:"",
    password:""
  })
  this.invalid=false
}

getFormData(loginForm:FormGroup){
  let loginData={
    username:loginForm.value.username,
    password:loginForm.value.password
  }

  this.adminService.CheckLogin(loginData).subscribe((msg)=>{
    console.log(msg);
    if(msg=="ok")
    {
      this.router.navigate(['adminHome'])
    }
    else
    {
      this.invalid=true
    }
  })

  
  
}
}
