import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import { ApiService } from 'src/app/core/services/admin/api.service';


@Component({
  selector: 'app-department-details-prof',
  templateUrl: './department-details-prof.component.html',
  styleUrls: ['./department-details-prof.component.css']
})
export class DepartmentDetailsProfComponent implements OnInit {
  firstName!: String
  lastName!: String
  departement!:any
  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getDetails()
this.firstName=this.data.firstName;
this.lastName=this.data.lastName;
    this.departement=[]
  }
  getDetails()
  {
    this.apiService.getbyID
    ('ShowDepartementProfDetails',this.data.departementId).subscribe((departement) => {this.departement = departement });
  }
}
