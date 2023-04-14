import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  
  constructor(private client:HttpClient) { }

  BASE_URL="http://localhost:8000/user"

  checkLogin(loginData:any){
    return this.client.post(`${this.BASE_URL}/login`,loginData)
  }

  registerUser(registerData:any){
    return this.client.post(`${this.BASE_URL}/signup`,registerData)
  }

  comparisonFilters(filterData:any){
    return this.client.post(`${this.BASE_URL}/comparison`,filterData)
  }
}
