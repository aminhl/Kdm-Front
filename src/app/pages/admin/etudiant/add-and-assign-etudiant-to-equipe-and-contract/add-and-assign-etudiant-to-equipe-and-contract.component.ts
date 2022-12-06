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
    ('findetudiantByName',this.SelectedEtu).subscribe((etudiant) => {this.etudiant = etudiant; this.SelectedEtu=this.etudiant[0].idEtudiant ;   });


  }
  ChangeEqu(e)
  {
    this.SelectedEqu=e.target.value;
    this.apiService.getbyID
    ('findEquipeByNomEquipe',this.SelectedEqu).subscribe((equipe) => {this.equipe = equipe;this.SelectedEqu=this.equipes[0].idEquipe;   });
  }
  ChangeCon(e)
  {
    this.SelectedCon=e.target.value;
   let s = this.SelectedCon.split(/ (.*)/);
   let x =s[1].split(/ (.*)/);
   let y = x[1].split(/ (.*)/);

    let datedebut=x[0]
    let specialite=s[0];
    let montant=y[1]
    let datefin=y[0]
    console.log(specialite);
    console.log(datedebut);
    console.log(datefin);
    console.log(montant);

    this.apiService.findContratBySpecialiteAndDateDebutContratAndDateFinContrat
    ('findContratBySpecialiteAndDateDebutContratAndDateFinContrat',specialite,datedebut,montant,datefin).subscribe((contrat) => {this.contrat = contrat; this.SelectedCon=this.contrat[0].idContrat   });
  }
  upadteEtudiant()
  {
    this.apiService.addAndAssignEtudiantToEquipeAndContract(
      'addAndAssignEtudiantToEquipeAndContract',this.SelectedCon,this.SelectedEqu,this.etudiant).subscribe((ss) =>
    location.reload());
  }
}
