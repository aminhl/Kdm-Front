import {Component, Inject, Input, OnInit, Output} from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {EtudiantComponent} from "../etudiant.component";

@Component({
  selector: 'app-depart-details-stud',
  templateUrl: './depart-details-stud.component.html',
  styleUrls: ['./depart-details-stud.component.css']
})
export class DepartDetailsStudComponent implements OnInit {
  departement! :any
  nomE : string
  prenomE:string

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
this.getDetails()
this.nomE=this.data.nomE;
this.prenomE=this.data.prenomE;
    this.departement=[];

  }
  getDetails()
  {
    this.apiService.getbyID
    ('ShowDepartementEtudiantDetails',this.data.departementId).subscribe((departement) => {this.departement = departement });
  }
}
