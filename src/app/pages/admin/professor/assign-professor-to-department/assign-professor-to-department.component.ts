import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-assign-professor-to-department',
  templateUrl: './assign-professor-to-department.component.html',
  styleUrls: ['./assign-professor-to-department.component.css']
})
export class AssignProfessorToDepartmentComponent implements OnInit {

   professors! :any
  departements! :any
  selectedP! :any
  selectedD! :any
  professor! :any
  departement! :any
  constructor(private apiService: ApiService, private dialog: MatDialog,public dialogRef: MatDialogRef<AssignProfessorToDepartmentComponent>)
  {

  }
  ngOnInit(): void {
    this.getProfessors();
    this.getDepartements();

  }
  getProfessors()
  {
    this.apiService.get
    ('getProfessors').subscribe((professors) => {this.professors = professors  });
  }
  getDepartements()
  {
    this.apiService.get
    ('getDepartements').subscribe((departements) => {this.departements = departements });
  }

  ChangeProf(prof)
  {
   this.selectedP=prof.target.value;
    this.apiService.getbyID
    ('findProfByName',this.selectedP).subscribe((professor) => {this.professor = professor; this.selectedP=this.professor.idProfessor ;  });


  }
  ChangeDep(dep)
  {
    this.selectedD=dep.target.value;
    this.apiService.getbyID
    ('findDepartementByname',this.selectedD).subscribe((departement) => {this.departement = departement ; this.selectedD=this.departement.idDepart;  });
  }
  updateProfessor()
  {
    this.apiService.assignProfessorToDepartement(
      'assignProfessorToDepartment',this.selectedP,this.selectedD).subscribe(()=>this.closeDialog());
  }
  closeDialog() {
    this.dialogRef.close();
  }

}
