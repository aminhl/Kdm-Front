import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../../core/services/admin/api.service";
import {MatDialogRef} from "@angular/material/dialog";
import {TokenStorageService} from "../../../../_services/token-storage.service";

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

  equipeForm!: FormGroup;
  niveau!: FormControl;
  nomEquipe !: FormControl;
  currentUser: any;

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddEquipeComponent>,
    private token: TokenStorageService
  ) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {}

  initForm() {
    this.currentUser = this.token.getUser();
    console.log(this.token.getUser());
    this.niveau = new FormControl('', [Validators.required]);
    this.nomEquipe = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.equipeForm = new FormGroup({
      niveau: this.niveau,
      nomEquipe: this.nomEquipe,
    });
  }

  onSubmit() {
   this.addEquipe(this.equipeForm.value);
   this.closeDialog();

  }

  addEquipe(equipeBody: Object) {
    this.apiService.add('addEquipe', equipeBody).subscribe();
  }

  resetControls() {
    this.equipeForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
