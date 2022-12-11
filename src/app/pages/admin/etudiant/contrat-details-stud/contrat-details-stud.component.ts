import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { jsPDF } from "jspdf";
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-contrat-details-stud',
  templateUrl: './contrat-details-stud.component.html',
  styleUrls: ['./contrat-details-stud.component.css']
})
export class ContratDetailsStudComponent implements OnInit {
  contrats! :any
  nomE : string
  prenomE:string
  ContratToExtract! :any

  @ViewChild('content', {static:false}) element!: ElementRef
  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.getDetails()
    this.nomE=this.data.nomE;
    this.prenomE=this.data.prenomE;
    this.contrats = [];

  }
  getDetails()
  {
    this.apiService.getbyID
    ('getAllContratByIdEtudiant',this.data.etudiantID).subscribe((contrat) => {this.contrats = contrat  });

  }
  generateContratPDF(idContrat : number)
  {

    for (let i = 0; i < this.contrats.length; i++) {
      if (this.contrats[i].idContrat==idContrat)
      {
        let pdf = new jsPDF({
          orientation: "l",
          format : 'a4'

        });
        pdf.setFont("helvetica");
        pdf.setFontSize(20);

        pdf.text("Contrat",140,10)

        pdf.text("Specialite : ",20,30)
        pdf.text(this.contrats[i].specialite,100,30)

        pdf.text("Date Debut : ",20,50)
        pdf.text(this.contrats[i].dateDebutContrat,100,50)

        pdf.text("dateFinContrat : ",20,70)
        pdf.text(this.contrats[i].dateFinContrat,100,70)

        pdf.text("montantContrat : ",20,90)
        pdf.text(this.contrats[i].montantContrat+"Dt",100,90)

        pdf.save("Contrat.pdf")
      }
    }


  }
}
