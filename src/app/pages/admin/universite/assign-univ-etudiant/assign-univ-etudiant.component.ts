import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-assign-univ-etudiant',
  templateUrl: './assign-univ-etudiant.component.html',
  styleUrls: ['./assign-univ-etudiant.component.css']
})
export class AssignUnivEtudiantComponent implements OnInit {
  etudiants! :any
  universites! :any
  SelectedEtu! :any
  SelectedUniv! :any
  etudiant! :any
  universite! :any
  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEtudiant();
    this.getUniversites();
  }

  getEtudiant()
  {
    this.apiService.get
    ('getEtudiants').subscribe((etudiants) => {this.etudiants = etudiants  });
  }

  getUniversites()
  {
    this.apiService.get
    ('getUniversitiesSorted').subscribe((universites) => {this.universites = universites  });
  }

  ChangeEtu(e)
  {

   this.SelectedEtu=e.target.value;
    this.apiService.getbyName
    ('findetudiantByName',this.SelectedEtu).subscribe((etudiant) => {this.etudiant = etudiant; this.SelectedEtu=this.etudiant.idEtudiant ; console.log(this.etudiant)  });


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
      'assignUniversiteToEtudiant',this.SelectedUniv,this.SelectedEtu).subscribe(() => null);
      this.closeDialog();
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}
