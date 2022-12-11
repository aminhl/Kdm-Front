import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-equipe-details-stud',
  templateUrl: './equipe-details-stud.component.html',
  styleUrls: ['./equipe-details-stud.component.css']
})
export class EquipeDetailsStudComponent implements OnInit {
  equipes! :any
  etudiant! :any
  nomE : string
  prenomE:string

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.getDetails()
    this.nomE=this.data.nomE;
    this.prenomE=this.data.prenomE;
    this.equipes= [];

  }
  getDetails()
  {
    this.apiService.getbyID
    ('getEtudiant',this.data.etudiantID).subscribe((equipe) =>
    {this.etudiant = equipe ;
      this.equipes=this.etudiant.equipes
       });
  }
  openDetailsEquipeDetaileeDialog(idEquipe: number)
  {}
}
