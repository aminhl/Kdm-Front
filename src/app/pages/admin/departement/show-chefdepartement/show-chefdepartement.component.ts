import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { DepartementComponent } from '../departement.component';

@Component({
  selector: 'app-show-chefdepartement',
  templateUrl: './show-chefdepartement.component.html',
  styleUrls: ['./show-chefdepartement.component.css']
})
export class ShowChefdepartementComponent implements OnInit {
  receivedRow!: any

  Professor!: any;
  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<DepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.receivedRow = data
      console.log(data)
  }

  ngOnInit(): void {
    this.getProfessorbyid(this.receivedRow.departement.chefdepartement.idProfessor)

  }

  getProfessorbyid(idProfessor: number) {
    this.apiService.getbyID
      ('getProfessorById', idProfessor).subscribe((Professor) => { this.Professor = Professor; })
  }

}


