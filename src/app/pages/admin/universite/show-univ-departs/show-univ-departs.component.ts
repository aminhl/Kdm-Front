import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { UniversiteComponent } from '../universite.component';
@Component({
  selector: 'app-show-univ-departs',
  templateUrl: './show-univ-departs.component.html',
  styleUrls: ['./show-univ-departs.component.css']
})
export class ShowUnivDepartsComponent implements OnInit {
  receivedRow!: any
  departements!: any
  nbrUniv!:any
  constructor(public dialogRef: MatDialogRef<UniversiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService) { 
      this.receivedRow = data
    }

  ngOnInit(): void {
    this.getDepartementsByUniversite(this.receivedRow.universite.idUniv)
    this.nbrDepartementsByUniversite(this.receivedRow.universite.idUniv)
  }

  getDepartementsByUniversite(idUniv :number){
    this.apiService.get('retreiveDepartementsByUniversity/' + idUniv)
    .subscribe((departements) => this.departements = departements)

  }
  nbrDepartementsByUniversite(idUniv :number){
    this.apiService.get('nbrDepartementsByUniversite/' + idUniv)
    .subscribe((nbrUniv) => this.nbrUniv = nbrUniv)
  }
}