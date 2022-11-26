import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../core/services/admin/api.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  equipeForm!: FormGroup;
  niveau!: FormControl;
  nom!: FormControl;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddEquipeComponent>
  ) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
  ;
    this.niveau = new FormControl('', [Validators.required]);
    this.nom = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.equipeForm = new FormGroup({

      niveau: this.niveau,
      nom: this.nom,
    });
  }

  onSubmit() {
    const contratToAdd = {
      niveau: this.equipeForm.value.specialite,
      nom: this.equipeForm.value.montant,
    };
    this.addEquipe(contratToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addEquipe(contratBody: Object) {
    this.apiService.add('addEquipe', contratBody).subscribe((contrat) => null);
  }

  resetControls() {
    this.equipeForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
