import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private client:HttpClient) { }

  BASE_URL:String="http://localhost:8000/admin/"

  CheckLogin(login_data:any){
    return this.client.post(`${this.BASE_URL}`,login_data)
  }

  GetCompanyData(){
    return this.client.get(`${this.BASE_URL}/getCompany`)
  }

  ApproveCompany(id:string){
    const params = new HttpParams().set('id',id)
    return this.client.get(`${this.BASE_URL}/approveCompany`,{params})
  }
}
