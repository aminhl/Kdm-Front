import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';

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

  constructor(private apiService: ApiService) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.dateDebut = new FormControl('');
    this.dateFin = new FormControl('');
    this.specialite = new FormControl('');
    this.archivee = new FormControl('');
    this.montant = new FormControl('');
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
  }

  addContrat(contratBody: Object) {
    this.apiService.add('addContrat', contratBody).subscribe((contrat) => null);
  }

  resetControls() {
    this.contratForm.reset();
  }
}
