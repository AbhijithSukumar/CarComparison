import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { CompanyServiceService } from '../company-service.service';
import { Router } from '@angular/router';
import {Icompany} from "../interfaces/Icompany"
import { SessionStorageService } from '../session-storage.service';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent implements OnInit {
   constructor(private formBuilder:FormBuilder,private companyService:CompanyServiceService,private router: Router,private session:SessionStorageService){}
   company!:Icompany
   login!:FormGroup
   invalidCompany:Boolean=false
   invalidPassword:Boolean=false

   ngOnInit(): void {
     this.login=this.formBuilder.group({
      username:"",
      password:""
     })

     this.invalidCompany=false
     this.invalidPassword=false
   }

   companyLogin(loginForm:FormGroup){
    let loginData={
      username:loginForm.value.username,
      password:loginForm.value.password
    }
    this.companyService.checkLogin(loginData).subscribe((msg:any)=>{
      if(msg!=null && msg!="invalid password" && msg!="invalid company")
      {
        this.company=msg.company
        console.log(this.company);
        
        this.session.setItem('_id',this.company._id)
        this.router.navigate(['/companyHome'])
      }
      else if(msg=="invalid password")
      {
        this.invalidPassword=true
      }
      else
      {
        this.invalidCompany=true
      }
      
    })

   }
}

