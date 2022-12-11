import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { UniversiteComponent } from '../universite.component';
@Component({
  selector: 'app-show-univ-etudiants',
  templateUrl: './show-univ-etudiants.component.html',
  styleUrls: ['./show-univ-etudiants.component.css']
})
export class ShowUnivEtudiantsComponent implements OnInit {
  receivedRow!: any
  etudiants!: any
  departements!: any
  constructor(public dialogRef: MatDialogRef<UniversiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService) { 
      this.receivedRow = data
    }

  ngOnInit(): void {
    this.getEtudiantByUniversite(this.receivedRow.universite.idUniv)
    this.nbrDepartementsByuniversite(this.receivedRow.departements.idDepart)
  }

  getEtudiantByUniversite(idUniv :number){
    this.apiService.get('retrieveEtudiantsByUniversite/' + idUniv)
    .subscribe((etudiants) => this.etudiants = etudiants)
  }

  nbrDepartementsByuniversite(idDepart :number){
    this.apiService.get('nbrDepartementsByuniversite/')
  }

}
