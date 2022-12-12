import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { AssignProfessorToDepartmentComponent } from './assign-professor-to-department/assign-professor-to-department.component';
import { EditprofessorComponent } from './edit-professor/edit-professor.component';




@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getProfessors();
  }
  professors!: any;
  firstName!: any;

  getProfessors() {
    this.apiService
      .get('getProfessors')
      .subscribe((professors) => (this.professors = professors));
  }

  deleteProfessor(elementId: number) {
    this.apiService
      .delete('deleteProfById', elementId)
      .subscribe(() => location.reload());
  }

  openAddProfessorDialog() {
    this.dialog.open(AddProfessorComponent, { width: '40%' });
  }

  openEditProfessorDialog(professor: Object) {
    this.dialog.open(EditprofessorComponent, {
      width: '40%',
      data: { professor },
    });
  }
  openAssignProfessorToDepartementDialog() {
    this.dialog.open(AssignProfessorToDepartmentComponent, {
      width: '40%',

    });
  }
}
