import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-contrat-details-stud',
  templateUrl: './contrat-details-stud.component.html',
  styleUrls: ['./contrat-details-stud.component.css']
})
export class ContratDetailsStudComponent implements OnInit {
  contrats! :any
  nomE : string
  prenomE:string
  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.getDetails()
    this.nomE=this.data.nomE;
    this.prenomE=this.data.prenomE;

  }
  getDetails()
  {
    this.apiService.getbyID
    ('getAllContratByIdEtudiant',this.data.etudiantID).subscribe((contrat) => {this.contrats = contrat  });

  }
}
