import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UniversiteComponent } from '../universite.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';

@Component({
  selector: 'app-edit-universite',
  templateUrl: './edit-universite.component.html',
  styleUrls: ['./edit-universite.component.css']
})
export class EditUniversiteComponent implements OnInit {
  universiteForm!:FormGroup;
  nomUniv!: FormControl;

  receivedRow: any;
  constructor(
    public dialogRef: MatDialogRef<UniversiteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService) {
      this.receivedRow = data;
      this.initForm();
      this.createForm() }

  ngOnInit(): void {
  }

  initForm() {
    this.nomUniv= new FormControl(this.receivedRow.universite.nomUniv, [Validators.required]);
  }

  createForm(){
    this.universiteForm = new FormGroup({
      nomUniv: this.nomUniv
    });
  }
  resetControls() {
    this.universiteForm.reset();
  }
  upadteUniversite(univId: number) {
    const universiteUpdated = {
      idUniversite: univId,
      nomUniv: this.universiteForm.value.nomUniv
    };
    this.apiService
      .update('updateUniversite', univId, universiteUpdated)
      .subscribe(() => {
        this.closeDialog();
      });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
