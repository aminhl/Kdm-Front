import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import { ProfessorComponent } from '../professor.component';

@Component({
  selector: 'app-editprofessor',
  templateUrl: './edit-professor.component.html',
  styleUrls: ['./edit-professor.component.css']
})
export class EditprofessorComponent implements OnInit {
  professorForm!: FormGroup;
  firstName!: FormControl;
  lastName!: FormControl;
  phone!: FormControl;
  speciality!: FormControl;
  email!: FormControl;
  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<ProfessorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.receivedRow = data;
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {
  }
  initForm()
  {
    this.firstName = new FormControl(this.receivedRow.professor.firstName, [Validators.required]);
    this.lastName = new FormControl(this.receivedRow.professor.lastName, [Validators.required]);
    this.phone = new FormControl(this.receivedRow.professor.phone, [Validators.required]);
    this.speciality = new FormControl(this.receivedRow.professor.speciality, [Validators.required]);
    this.email = new FormControl(this.receivedRow.professor.email, [Validators.required]);

  }
  createForm() {
    this.professorForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      speciality: this.speciality,
    });
  }

  upadteProfessor(professorId: number) {
    const professorUpdated = {
      idProfessor: professorId,
      lastName: this.professorForm.value.lastName,
      firstName: this.professorForm.value.firstName,
      phone: this.professorForm.value.phone,
      email: this.professorForm.value.email,
      speciality: this.professorForm.value.speciality

    };
    this.apiService
      .update('updateProfessor', professorId, professorUpdated)
      .subscribe(() => {
        this.closeDialog();
        location.reload();
      });
  }
  resetControls() {
    this.professorForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
