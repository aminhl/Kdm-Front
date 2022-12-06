import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { DepartementComponent } from '../departement.component';

@Component({
  selector: 'app-show-etudiants',
  templateUrl: './show-etudiants.component.html',
  styleUrls: ['./show-etudiants.component.css']
})
export class ShowEtudiantsComponent implements OnInit {
  receivedRow!: any
  etudiants!: any
  
  
  constructor(
    public dialogRef: MatDialogRef<DepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.receivedRow = data
  
  }

  ngOnInit(): void {
    this.getEtudiatnByDepartement(this.receivedRow.departement.idDepart)
  }

  getEtudiatnByDepartement(idDepart: number) {
    this.apiService
      .get('getEtudiantsByDepartement/' + idDepart)
      .subscribe((etudiants) => {
          console.log(etudiants)
        this.etudiants = etudiants})

  }


}
