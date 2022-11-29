import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { DepartementComponent } from '../departement.component';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.css']
})
export class EditDepartementComponent implements OnInit {

  receivedRow: any;
  departementForm!: FormGroup;
  nomDepart!: FormControl;


  ngOnInit(): void {
  }
  constructor(
    public dialogRef: MatDialogRef<DepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.receivedRow = data;
    this.initForm();
    this.createForm();
  }

  initForm() {
    this.nomDepart = new FormControl(this.receivedRow.departement.nomDepart),
      [Validators.required]

  }
  createForm() {
    this.departementForm = new FormGroup({
      nomDepart: this.nomDepart,
    })
  }

  resetControls() {
    this.departementForm.reset();
  }
  updateDepartement(idDepart: number) {
    const departementUpdated = {
      nomDepart: this.departementForm.value.nomDepart
    };
    this.apiService.update('updateDepartement', idDepart, departementUpdated).subscribe(() => {
      this.closeDialog(); location.reload()
    });

  }
  closeDialog() {
    this.dialogRef.close();
  }
}
