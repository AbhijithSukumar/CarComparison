import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"adminHome",component:AdminHomeComponent},
  {path:"companyRegister",component:CompanyRegisterComponent},
  {path:"companyLogin",component:CompanyLoginComponent},
  {path:"companyHome",component:CompanyHomeComponent},
  {path:"userLogin",component:UserLoginComponent},
  {path:"userSignup",component:UserSignupComponent},
  {path:"userHome",component:UserHomeComponent},
  {path:"userFilter",component:UserInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
