import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ContratComponent } from '../contrat.component';

@Component({
  selector: 'app-add-contrat',
  templateUrl: './add-contrat.component.html',
  styleUrls: ['./add-contrat.component.css'],
})
export class AddContratComponent implements OnInit {
  contratForm!: FormGroup;
  dateDebut!: FormControl;
  dateFin!: FormControl;
  specialite!: FormControl;
  archivee!: FormControl;
  montant!: FormControl;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddContratComponent>
  ) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.dateDebut = new FormControl('', [Validators.required]);
    this.dateFin = new FormControl('', [Validators.required]);
    this.specialite = new FormControl('', [Validators.required]);
    this.archivee = new FormControl('');
    this.montant = new FormControl('', [Validators.required]);
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

  onSubmit() {
    const contratToAdd = {
      dateDebutContrat: this.contratForm.value.dateDebut,
      dateFinContrat: this.contratForm.value.dateFin,
      specialite: this.contratForm.value.specialite,
      archive: this.contratForm.value.archivee,
      montantContrat: this.contratForm.value.montant,
    };
    this.addContrat(contratToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addContrat(contratBody: Object) {
    this.apiService.add('addContrat', contratBody).subscribe((contrat) => null);
  }

  resetControls() {
    this.contratForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
