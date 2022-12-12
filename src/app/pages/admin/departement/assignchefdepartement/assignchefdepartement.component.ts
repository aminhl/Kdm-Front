import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-assignchefdepartement',
  templateUrl: './assignchefdepartement.component.html',
  styleUrls: ['./assignchefdepartement.component.css']
})
export class AssignchefdepartementComponent implements OnInit {

  professors!: any
  departements!: any
  SelectedDep!: any
  SelectedProf!: any
  departement!: any
  Professor!: any
  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getprofessors();
    this.getProfessors();
  }

  getProfessors() {
    this.apiService.get
      ('getDepartements').subscribe((departements) => { this.departements = departements });
  }
  getprofessors() {
    this.apiService.get
      ('getProfessors').subscribe((professors) => { this.professors = professors });
  }
  ChangeDep(e) {
    this.SelectedDep = e.target.value;
    this.apiService.getbyID
      ('findDepartByname', this.SelectedDep).subscribe((departement) => { this.departement = departement; this.SelectedDep = this.departement.idDepart; });
  }
  ChangeProf(e) {

    this.SelectedProf = e.target.value;
    this.apiService.getbyID
      ('getProfessorById', this.SelectedProf).subscribe((Professor) => { this.Professor = Professor; this.SelectedProf = this.Professor.idProfessor; })
  }
  UpadateDep() {


    this.apiService.assignchefdepartement(
      'ajouterchefdepartemnt', this.SelectedDep, this.SelectedProf).subscribe((departement) => this.apiService.get('getDepartements').subscribe((departement) => (this.departement = departement)));
    this.closeDialog();
  }
  closeDialog() {
    this.dialog.closeAll();
  }

}
