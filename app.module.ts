import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CompanyRegisterComponent } from './company-register/company-register.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { MatSelectModule } from "@angular/material/select";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserInputComponent } from './user-input/user-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    CompanyRegisterComponent,
    CompanyLoginComponent,
    CompanyHomeComponent,
    UserLoginComponent,
    UserSignupComponent,
    UserHomeComponent,
    UserInputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
