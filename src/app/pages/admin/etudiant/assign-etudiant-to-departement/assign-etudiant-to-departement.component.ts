import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import {MatDialog} from "@angular/material/dialog";
import {an} from "chart.js/dist/chunks/helpers.core";

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
  constructor(private apiService: ApiService, private dialog: MatDialog)
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
    this.apiService.getbyID
    ('getEtudiant',this.SelectedEtu).subscribe((etudiant) => {this.etudiant = etudiant   });

  }
  ChangeDep(e)
  {
    this.SelectedDep=e.target.value;
    this.apiService.getbyID
    ('getDepartement',this.SelectedDep).subscribe((departement) => {this.departement = departement   });
  }
  upadteEtudiant()
  {
    this.apiService.assignEtudiantToDepartement(
      'assignEtudiantToDepartement',this.SelectedEtu,this.SelectedDep).subscribe((ss) => location.reload());
  }

}