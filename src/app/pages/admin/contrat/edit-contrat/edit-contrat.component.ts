import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContratComponent } from '../contrat.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';

@Component({
  selector: 'app-edit-contrat',
  templateUrl: './edit-contrat.component.html',
  styleUrls: ['./edit-contrat.component.css'],
})
export class EditContratComponent implements OnInit {
  contratForm!: FormGroup;
  dateDebut!: FormControl;
  dateFin!: FormControl;
  specialite!: FormControl;
  archivee!: FormControl;
  montant!: FormControl;

  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<ContratComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService
  ) {
    this.receivedRow = data;
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.dateDebut = new FormControl(
      this.receivedRow.contrat.dateDebutContrat,
      [Validators.required]
    );
    this.dateFin = new FormControl(this.receivedRow.contrat.dateFinContrat, [
      Validators.required,
    ]);
    this.specialite = new FormControl(this.receivedRow.contrat.specialite, [
      Validators.required,
    ]);
    this.archivee = new FormControl(this.receivedRow.contrat.archive);
    this.montant = new FormControl(this.receivedRow.contrat.montantContrat, [
      Validators.required,
    ]);
  }

  createForm() {
    this.contratForm = new FormGroup({
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      specialite: this.specialite,
      archivee: this.archivee,
      montant: this.montant,
    });
  }

  resetControls() {
    this.contratForm.reset();
  }

  upadteContrat(contratId: number) {
    const contratUpdated = {
      idContrat: contratId,
      dateDebutContrat: this.contratForm.value.dateDebut,
      dateFinContrat: this.contratForm.value.dateFin,
      specialite: this.contratForm.value.specialite,
      archive: this.contratForm.value.archivee,
      montantContrat: this.contratForm.value.montant,
    };
    this.apiService
      .update('updateContrat', contratId, contratUpdated)
      .subscribe(() => {
        this.closeDialog();
        location.reload();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
