import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

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
  etudiantBody: Object
  constructor(private apiService: ApiService, private dialog: MatDialog,public dialogRef: MatDialogRef<AddAndAssignEtudiantToEquipeAndContractComponent>) {}
  ngOnInit(): void
  {
    this.getEtudiant();
    this.getEquipes();
    this.getContrats();
  }
  getEtudiant()
  {
    this.apiService.get
    ('getEtudiants').subscribe((etudiants) => {this.etudiants = etudiants ; });
  }
  getEquipes()
  {
    this.apiService.get
    ('getEquipes').subscribe((equipes) => {this.equipes = equipes; });
  }
  getContrats()
  {
    this.apiService.get
    ('getContrats').subscribe((contrats) => {this.contrats = contrats ; });
  }
  ChangeEtu(e)
  {

    this.SelectedEtu=e.target.value;
    this.apiService.getbyName
    ('findetudiantByName',this.SelectedEtu).subscribe((etudiant) => {this.etudiantBody = etudiant; this.SelectedEtu=this.etudiant ;   });

  }
  ChangeEqu(e)
  {
    this.SelectedEqu=e.target.value;
    this.apiService.getbyID
    ('findEquipeByNomEquipe',this.SelectedEqu).subscribe((equipe) => {this.equipe = equipe;this.SelectedEqu=this.equipe[0].idEquipe;   });
  }
  ChangeCon(e)
  {
    this.SelectedCon=e.target.value;
   let s = this.SelectedCon.split(/ (.*)/);
   let x =s[1].split(/ (.*)/);
   let y = x[1].split(/ (.*)/);

    let datedebut=x[0].replace(/\s/g, "")
    let specialite=s[0].replace(/\s/g, "")
    let montant=y[1].replace(/\s/g, "")
    let datefin=y[0].replace(/\s/g, "")


    this.apiService.findContratBySpecialiteAndDateDebutContratAndDateFinContrat
    ('findContratBySpecialiteAndDateDebutContratAndDateFinContratAndMontantContrat',specialite,datedebut,datefin,montant).subscribe((contrat) => {this.contrat = contrat; this.SelectedCon=this.contrat[0].idContrat   });
  }
  upadteEtudiant()
  {

    this.apiService.addAndAssignEtudiantToEquipeAndContract(
      'addAndAssignEtudiantToEquipeAndContract',this.SelectedCon,this.SelectedEqu,this.etudiantBody).subscribe((ss) => this.closeDialog());
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
