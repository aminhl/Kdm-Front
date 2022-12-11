import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import {  MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-addetudiant',
  templateUrl: './addetudiant.component.html',
  styleUrls: ['./addetudiant.component.css']
})
export class AddetudiantComponent implements OnInit {
  etudiantFrom!: FormGroup;
  nomE!: FormControl;
  prenomE!: FormControl;
  option!: FormControl;
  etudiants: any;

  constructor(private apiService: ApiService,
    public dialogRef: MatDialogRef<AddetudiantComponent>)
    {
      this.initForm();
      this.createForm();
    }

  ngOnInit(): void {
  }
  initForm()
  {
    this.nomE = new FormControl('', [Validators.required]);
    this.prenomE = new FormControl('', [Validators.required]);
    this.option = new FormControl('', [Validators.required]);
  }
  createForm() {
    this.etudiantFrom = new FormGroup({
      nomE: this.nomE,
      prenomE: this.prenomE,
      option: this.option,
    });
  }
  onSubmit() {
    const etudianttoAdd = {
      nomE: this.etudiantFrom.value.nomE,
      prenomE: this.etudiantFrom.value.prenomE,
      option: this.etudiantFrom.value.option,
    };
    this.addEtudiant(etudianttoAdd);
    this.resetControls();
    this.closeDialog();
  }

  addEtudiant(etudiantBody: Object) {
    this.apiService.add('addEtudiant', etudiantBody).subscribe((etudiant) => this.apiService.get
    ('getEtudiants').subscribe((etudiants) => (this.etudiants = etudiants)));
  }
  resetControls() {
    this.etudiantFrom.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
