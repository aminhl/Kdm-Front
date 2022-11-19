import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css'],
})
export class ContratComponent implements OnInit {
  contratForm!: FormGroup;
  dateDebut!: FormControl;
  dateFin!: FormControl;
  specialite!: FormControl;
  archivee!: FormControl;
  montant!: FormControl;

  constructor() {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contratForm);
  }

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
}
