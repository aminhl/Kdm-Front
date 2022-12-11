import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit {

   professorForm!: FormGroup;
   firstName!: FormControl;
  lastName!: FormControl;
  email!: FormControl;
  phone!: FormControl;
  speciality!: FormControl;


  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddProfessorComponent>
  ) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {
  }
  initForm() {
    this.firstName = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.phone = new FormControl('');
    this.speciality = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.professorForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      speciality: this.speciality,
    });
  }

  onSubmit() {
    const professorToAdd = {
      firstName: this.professorForm.value.firstName,
      lastName: this.professorForm.value.lastName,
      email: this.professorForm.value.email,
      phone: this.professorForm.value.phone,
      speciality: this.professorForm.value.speciality,
    };
    this.addProfessor(professorToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addProfessor(professorBody: Object) {
    this.apiService.add('addProfessor', professorBody).subscribe((professor) => null);
  }

  resetControls() {
    this.professorForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
