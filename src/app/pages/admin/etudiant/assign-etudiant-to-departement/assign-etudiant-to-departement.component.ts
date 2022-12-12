import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {an} from "chart.js/dist/chunks/helpers.core";
import {ContratComponent} from "../../contrat/contrat.component";

@Component({
  selector: 'app-assign-etudiant-to-departement',
  templateUrl: './assign-etudiant-to-departement.component.html',
  styleUrls: ['./assign-etudiant-to-departement.component.css']
})
export class AssignEtudiantToDepartementComponent implements OnInit {
etudiants! :any
departements! :any
  SelectedEtu! :any
  SelectedDep! :any
  etudiant! :any
  departement! :any
  constructor(private apiService: ApiService, private dialog: MatDialog, public dialogRef: MatDialogRef<AssignEtudiantToDepartementComponent>)
  {

  }
  ngOnInit(): void {
    this.getEtudiant();
    this.getDepartements();

  }
  getEtudiant()
  {
    this.apiService.get
    ('getEtudiants').subscribe((etudiants) => {this.etudiants = etudiants  });
  }
  getDepartements()
  {
    this.apiService.get
    ('getDepartements').subscribe((departements) => {this.departements = departements });
  }

  ChangeEtu(e)
  {

   this.SelectedEtu=e.target.value;
    this.apiService.getbyName
    ('findetudiantByName',this.SelectedEtu).subscribe((etudiant) => {this.etudiant = etudiant; this.SelectedEtu=this.etudiant.idEtudiant ;  });


  }
  ChangeDep(e)
  {
    this.SelectedDep=e.target.value;
    this.apiService.getbyID
    ('findDepartementByname',this.SelectedDep).subscribe((departement) => {this.departement = departement ; this.SelectedDep=this.departement.idDepart;  });
  }
  upadteEtudiant()
  {
    this.apiService.assignEtudiantToDepartement(
      'assignEtudiantToDepartement',this.SelectedEtu,this.SelectedDep).subscribe(()=>this.closeDialog());
  }
  closeDialog() {
    this.dialogRef.close();
  }


}
