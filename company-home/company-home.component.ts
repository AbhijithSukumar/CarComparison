import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { SessionStorageService } from '../session-storage.service';
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { FormBuilder,FormGroup } from "@angular/forms";


@Component({
  selector: 'app-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent implements OnInit{

  isAdminApproved:Boolean=false
  _id:string=""
  colors = []
  colors_settings:IDropdownSettings={}
  selectedColors=[]
  fuel_types=['Petrol','Diesel','CNG','Electric']
  imageUrl:any=[]
  file:File
  showCarCreateForm:boolean=false
  showCarModelForm:boolean=false
  car_form!:FormGroup
  btn_text1:string="view details"
  car_models_count:number=0
  car_models_data:any
 constructor(private companyService:CompanyServiceService,private session:SessionStorageService,private formBuilder:FormBuilder){}

 ngOnInit(): void {
  this.car_form=this.formBuilder.group({
    CarName:"",
    ManDate:"",
    Mileage:"",
    FuelType:"",
    SeatCapacity:"",
    EngineCapacity:"",
    ShowRoomPrice:"",
    Image:[''],
    OnRoadPrice:"",
    colors:[],
    varient:"",

  })

  //for dropdown
  this.colors=[
    { item_id: 1, item_text: 'black' },
      { item_id: 2, item_text: 'grey' },
      { item_id: 3, item_text: 'silver' },
      { item_id: 4, item_text: 'white' },
      { item_id: 5, item_text: 'green' },
      { item_id: 6, item_text: 'orange' },
      { item_id: 7, item_text: 'yellow' },
      { item_id: 8, item_text: 'red' },
      { item_id: 9, item_text: 'blue' }
  ]

  this.colors_settings={
    idField: 'item_id',
    textField: 'item_text',
  }

   this._id=this.session.getItem('_id')
   this.companyService.GetCompanyData(this._id).subscribe((msg:any)=>{
     console.log("company details",msg);
     if(msg.AdminApproved==true)
     {
      this.car_models_count=msg.Cars.length
      this.isAdminApproved=true
     }
   })
 }


 createCarModel(car_form:FormGroup){
  let copy_colors=car_form.value.colors
  let filtered_colors=copy_colors.map((color:any)=>{
    return color.item_text
  })
  let data={
    CarName:car_form.value.CarName,
    ManDate:car_form.value.ManDate,
    Mileage:car_form.value.Mileage,
    FuelType:car_form.value.FuelType,
    SeatCapacity:car_form.value.SeatCapacity,
    EngineCapacity:car_form.value.EngineCapacity,
    ShowRoomPrice:car_form.value.ShowRoomPrice,
    Image:this.file,
    OnRoadPrice:car_form.value.OnRoadPrice,
    colors:filtered_colors,
    varient:car_form.value.varient,
    _id:this._id
  }
  console.log(data)
  this.companyService.registerCar(data).subscribe((msg)=>{
    console.log(msg);
    if(msg==='ok')
    {
      console.log(msg);
      
    }
  })
  window.location.reload()
 }

 

 onFileSelected(event: any) {
  this.file = event.target.files[0]
  const reader = new FileReader();
  reader.readAsDataURL(this.file);
  reader.onload = () => {
     this.imageUrl= reader.result as string;
  };
  console.log("resent "+this.imageUrl);
  
  
}

carModelForm(){
  this.showCarCreateForm=true
  this.showCarModelForm=false
}

carDetailForm(){
  this.showCarModelForm=true
  this.showCarCreateForm=false
  this.companyService.getCarDetails().subscribe((msg)=>{
    this.car_models_data=msg
  })
}

cancellCarDetailForm(){
  this.showCarModelForm=false
}
}
