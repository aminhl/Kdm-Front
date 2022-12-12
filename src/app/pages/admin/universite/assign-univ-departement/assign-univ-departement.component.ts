import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-assign-univ-departement',
  templateUrl: './assign-univ-departement.component.html',
  styleUrls: ['./assign-univ-departement.component.css']
})
export class AssignUnivDepartementComponent implements OnInit {
  departements! :any
  universites! :any
  SelectedDep! :any
  SelectedUniv! :any
  departement! :any
  universite! :any
  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getDepartements();
    this.getUniversites();
  }

  getUniversites()
  {
    this.apiService.get
    ('getUniversitiesSorted').subscribe((universites) => {this.universites = universites  });
  }
  getDepartements()
  {
    this.apiService.get
    ('getDepartements').subscribe((departements) => {this.departements = departements });
  }
  ChangeDep(e)
  {
    this.SelectedDep=e.target.value;
    this.apiService.getbyID
    ('findDepartementByname',this.SelectedDep).subscribe((departement) => {this.departement = departement ; this.SelectedDep=this.departement.idDepart; console.log(this.departement)  });
  }
  ChangeUniv(e)
  {
    this.SelectedUniv=e.target.value;
    this.apiService.getbyID
    ('findUniversiteByName',this.SelectedUniv).subscribe((universite) => {this.universite=universite;this.SelectedUniv=this.universite.idUniv})
  }
  UpadateUniv()
  {
    this.apiService.assignEtudiantToDepartement(
      'assignUniversiteToDepartement',this.SelectedUniv,this.SelectedDep).subscribe((universite) => this.apiService.get('getUniversitiesSorted').subscribe((universites)=>(this.universites=universites)));
      this.closeDialog();
  }
  closeDialog() {
    this.dialog.closeAll();

  }
}
