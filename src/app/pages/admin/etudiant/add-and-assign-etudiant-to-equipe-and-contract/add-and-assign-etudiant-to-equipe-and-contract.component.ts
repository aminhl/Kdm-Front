import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-and-assign-etudiant-to-equipe-and-contract',
  templateUrl: './add-and-assign-etudiant-to-equipe-and-contract.component.html',
  styleUrls: ['./add-and-assign-etudiant-to-equipe-and-contract.component.css']
})
export class AddAndAssignEtudiantToEquipeAndContractComponent implements OnInit {
  etudiants! :any
  equipes! :any
  contrats! :any
  SelectedEtu! :any
  SelectedEqu! :any
  SelectedCon! :any
  etudiant! :any
  equipe! :any
  contrat! :any
  constructor(private apiService: ApiService, private dialog: MatDialog)
  {

  }

  ngOnInit(): void
  {
    this.getEtudiant();
    this.getEquipes();
    this.getContrats();
  }
  getEtudiant()
  {
    this.apiService.get
    ('getEtudiants').subscribe((etudiants) => {this.etudiants = etudiants ;console.log(etudiants) });
  }
  getEquipes()
  {
    this.apiService.get
    ('getEquipes').subscribe((equipes) => {this.equipes = equipes;console.log(equipes) });
  }
  getContrats()
  {
    this.apiService.get
    ('getContrats').subscribe((contrats) => {this.contrats = contrats ;console.log(contrats) });
  }
  ChangeEtu(e)
  {

    this.SelectedEtu=e.target.value;
    this.apiService.getbyID
    ('getEtudiant',this.SelectedEtu).subscribe((etudiant) => {this.etudiant = etudiant   });

  }
  ChangeEqu(e)
  {
    this.SelectedEqu=e.target.value;
    this.apiService.getbyID
    ('getEquipe',this.SelectedEqu).subscribe((equipe) => {this.equipe = equipe   });
  }
  ChangeCon(e)
  {
    this.SelectedCon=e.target.value;
    this.apiService.getbyID
    ('getContrat',this.SelectedCon).subscribe((contrat) => {this.contrat = contrat   });
  }
  upadteEtudiant()
  {
    this.apiService.addAndAssignEtudiantToEquipeAndContract(
      'addAndAssignEtudiantToEquipeAndContract',this.SelectedCon,this.SelectedEqu,this.etudiant).subscribe((ss) =>
    location.reload());
  }
}
