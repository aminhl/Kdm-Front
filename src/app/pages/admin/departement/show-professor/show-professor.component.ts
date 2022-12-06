import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { DepartementComponent } from '../departement.component';

@Component({
  selector: 'app-show-professor',
  templateUrl: './show-professor.component.html',
  styleUrls: ['./show-professor.component.css']
})
export class ShowProfessorComponent implements OnInit {
  receivedRow!:any;
  professors!:any;

  constructor(
    public dialogRef: MatDialogRef<DepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.receivedRow = data

   }

  ngOnInit(): void {
    this.getProfessornByDepartement(this.receivedRow.departement.idDepart)
  }

  getProfessornByDepartement(idDepart: number) {
    this.apiService
      .get('getProfessorsByDepartmentId/' + idDepart)
      .subscribe((professors) => this.professors = professors)

  }
}
