import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ContratComponent} from "../../contrat/contrat.component";
import {ApiService} from "../../../../core/services/admin/api.service";

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent implements OnInit {
  equipeForm!: FormGroup;
  niveau!: FormControl;
  nomEquipe !: FormControl;
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
    this.niveau =  new FormControl(this.receivedRow.equipe.niveau, [
      Validators.required,
    ]);
    this.nomEquipe = new FormControl(this.receivedRow.equipe.nomEquipe, [
      Validators.required,
    ]);
  }

  createForm() {  this.equipeForm = new FormGroup({
    niveau: this.niveau,
    nomEquipe: this.nomEquipe,
  });
  }

  resetControls() {
    this.equipeForm.reset();
  }

  updateEquipe(idEquipe: number) {
    const equipeUpdated = {
      idEquipe: idEquipe,
      nomEquipe: this.equipeForm.value.nomEquipe,
      niveau: this.equipeForm.value.niveau,
    };
    this.apiService
      .update('updateEquipe', idEquipe, equipeUpdated)
      .subscribe(() => {
        this.closeDialog();
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
