import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { SessionStorageService } from '../session-storage.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Iuser } from '../interfaces/Iuser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  user!:Iuser
  login!:FormGroup
  invalidUser:Boolean=false
  invalidPassword:Boolean=false
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService,private router: Router,private session:SessionStorageService){}

  ngOnInit(): void {
    this.login=this.formBuilder.group({
      username:"",
      password:""
     })

     this.invalidUser=false
     this.invalidPassword=false
  }

  userLogin(loginForm:FormGroup){
    let loginData={
      username:loginForm.value.username,
      password:loginForm.value.password
    }
    this.userService.checkLogin(loginData).subscribe((msg:any)=>{
      console.log(msg);
      
      if(msg!=null && msg!="invalid password" && msg!="invalid user")
      {
        this.user=msg.user
        console.log(this.user);
        
        this.session.setItem('userId',this.user._id)
        this.router.navigate(['/userHome'])
      }
      else if(msg=="invalid password")
      {
        this.invalidPassword=true
      }
      else
      {
        this.invalidUser=true
      }
      
    })

   }
}
