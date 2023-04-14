import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { CompanyServiceService } from '../company-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-register',
  templateUrl: './company-register.component.html',
  styleUrls: ['./company-register.component.css']
})
export class CompanyRegisterComponent implements OnInit{

  register!:FormGroup
  error:Boolean=false
  constructor(private formBuilder:FormBuilder,private companyService:CompanyServiceService,private router:Router){}

  ngOnInit(): void {
    this.register=this.formBuilder.group({
      companyName:"",
      website:"",
      customerCareNo:"",
      email:"",
      password:""
    })
  }

  registerCompany(registerForm:FormGroup){
    let registerData={
      companyName:registerForm.value.companyName,
      website:registerForm.value.website,
      customerCareNo:registerForm.value.customerCareNo,
      email:registerForm.value.email,
      password:registerForm.value.password
    }

    this.companyService.registerCompany(registerData).subscribe((msg)=>{
      if(msg=="ok")
      {
        this.router.navigate(['/companyLogin'])
      }
      else
      {
        this.error=true
      }

    })
  }

  
}
