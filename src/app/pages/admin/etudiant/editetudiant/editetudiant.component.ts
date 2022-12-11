import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import { EtudiantComponent } from '../etudiant.component';

@Component({
  selector: 'app-editetudiant',
  templateUrl: './editetudiant.component.html',
  styleUrls: ['./editetudiant.component.css']
})
export class EditetudiantComponent implements OnInit {
  etudiantFrom!: FormGroup;
  nomE!: FormControl;
  prenomE!: FormControl;
  option!: FormControl;
  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<EtudiantComponent>,
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
    this.nomE = new FormControl(this.receivedRow.etudiant.nomE, [Validators.required]);
    this.prenomE = new FormControl(this.receivedRow.etudiant.prenomE, [Validators.required]);
    this.option = new FormControl(this.receivedRow.etudiant.option, [Validators.required]);
  }
  createForm() {
    this.etudiantFrom = new FormGroup({
      nomE: this.nomE,
      prenomE: this.prenomE,
      option: this.option,
    });
  }

  upadteEtudiant(etudiantId: number) {
    const etudiantUpdated = {
      idEtudiant: etudiantId,
      prenomE: this.etudiantFrom.value.prenomE,
      nomE: this.etudiantFrom.value.nomE,
      option: this.etudiantFrom.value.option,

    };
    this.apiService
      .update('updateEtudiant', etudiantId, etudiantUpdated)
      .subscribe(() => {
        this.closeDialog();
      });
  }
  resetControls() {
    this.etudiantFrom.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
