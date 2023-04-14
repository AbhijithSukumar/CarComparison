import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  register!:FormGroup
  error:Boolean=false
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService,private router:Router){}
  ngOnInit(): void {
    this.register=this.formBuilder.group({
      UserName:"",
      Email:"",
      Phone:"",
      Password:""
    })
  }

  registerUser(registerForm:FormGroup){
    let registerData={
      UserName:registerForm.value.UserName,
      Email:registerForm.value.Email,
      Phone:registerForm.value.Phone,
      Password:registerForm.value.Password
    }

    this.userService.registerUser(registerData).subscribe((msg)=>{
      if(msg=="ok")
      {
        this.router.navigate(['/userLogin'])
      }
      else
      {
        this.error=true
      }

    })
  }
}
