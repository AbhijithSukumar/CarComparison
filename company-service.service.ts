import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {

  constructor(private client:HttpClient) { }

  BASE_URL="http://localhost:8000/company"

  checkLogin(loginData:any){
    return this.client.post(`${this.BASE_URL}/login`,loginData)
  }

  registerCompany(registerData:any){
    return this.client.post(`${this.BASE_URL}`,registerData)
  }

  GetCompanyData(id:string){
    const params = new HttpParams().set('id',id)

    return this.client.get(`${this.BASE_URL}/getCompany`,{params})
  }

  registerCar(carData:any){
    const formData = new FormData()
    formData.append('CarName',carData.CarName)
    formData.append('ManDate',carData.ManDate)
    formData.append('Mileage',carData.Mileage)
    formData.append('FuelType',carData.FuelType)
    formData.append('SeatCapacity',carData.SeatCapacity)
    formData.append('EngineCapacity',carData.EngineCapacity)
    formData.append('ShowRoomPrice',carData.ShowRoomPrice)
    formData.append('Image',carData.Image)
    formData.append('OnRoadPrice',carData.OnRoadPrice)
    formData.append('colors',carData.colors)
    formData.append('varient',carData.varient)
    formData.append('_id',carData._id)
    return this.client.post(`${this.BASE_URL}/addCar`,formData)
  }

  getCarDetails(){
    return this.client.get(`${this.BASE_URL}/getCars`)
  }
}
