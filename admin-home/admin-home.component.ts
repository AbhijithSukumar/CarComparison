import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { SessionStorageService } from '../session-storage.service';
import { Icompany } from '../interfaces/Icompany'


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  company!:[Icompany]
  notApprovedCompanies:any[]=[]
  companies:Number=0
  approvals:number=0
  approvalClicked:Boolean=false
  notApproved=false

  constructor(private adminService: AdminServiceService, private session: SessionStorageService) { }

  ngOnInit(): void {
    this.adminService.GetCompanyData().subscribe((data:any)=>{
      this.company=data
      console.log(this.company)
      this.companies=this.company.length
      this.company.forEach((company:any)=>{
        if(company.AdminApproved==false)
        {
          this.approvals=this.approvals+1
        }
      })
      this.notApprovedCompanies=this.company.filter((company:any)=>{
        return company.AdminApproved==false
      })
    })
    console.log(this.notApprovedCompanies);
    
    if(this.notApprovedCompanies.length>0)
    {
      this.notApproved=true
    }
    else if(this.notApprovedCompanies.length==0)
    {
      this.notApproved=false
    }
    this.approvalClicked=false
  }

  showApproval(){
    this.approvalClicked=true
  }

  cancelApproval(){
    this.approvalClicked=false
  }

  approveCompany(id:string){
    console.log(id);
    this.adminService.ApproveCompany(id).subscribe((msg)=>{
      if(msg=="ok")
      {
        this.approvalClicked=false
        window.location.reload()
      }
    })
  }
}
