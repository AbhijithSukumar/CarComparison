import { Component,OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { SessionStorageService } from '../session-storage.service';
import { UserServiceService } from '../user-service.service';
import {DomSanitizer,SafeUrl} from '@angular/platform-browser';
import { Buffer } from "buffer";
import { window } from 'rxjs';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  filters!:FormGroup
  fuel_types=['Petrol','Diesel','CNG','Electric']
  compared_cars=[]
  Images=[]
  constructor(private formBuilder:FormBuilder,private userService:UserServiceService,private session:SessionStorageService,private sanitizer:DomSanitizer ){}
  ngOnInit(): void {
    this.filters=this.formBuilder.group({
      Budget:"",
      SeatCapacity:"",
      Mileage:"",
      Color:"",
      FuelType:""
    })
  }

  addFilters(form:FormGroup){
    let filterData={
      Budget:form.value.Budget,
      SeatCapacity:form.value.SeatCapacity,
      Mileage:form.value.Mileage,
      Color:form.value.Color,
      FuelType:form.value.FuelType
    }
    console.log(filterData);

    this.userService.comparisonFilters(filterData).subscribe((msg:any)=>{
      console.log(msg);
      this.compared_cars=msg
    })
    
  }

  getImageUrl(image:Buffer):SafeUrl {
    
    const base64Image = btoa(
      new Uint8Array(image).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ''
      )
    );
  return base64Image
  }

  sanitize( url:string ) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}


