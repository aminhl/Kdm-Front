import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { A } from 'chart.js/dist/chunks/helpers.core';
@Component({
  selector: 'app-add-universite',
  templateUrl: './add-universite.component.html',
  styleUrls: ['./add-universite.component.css']
})
export class AddUniversiteComponent implements OnInit {
  universiteForm!:FormGroup;
  nomUniv!: FormControl;
  universites !:any;


  constructor(private apiService: ApiService,public dialogRef: MatDialogRef<AddUniversiteComponent>) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {
  }
  
  initForm() {
    this.nomUniv= new FormControl('', [Validators.required]);
  }
  createForm(){
    this.universiteForm = new FormGroup({
      nomUniv: this.nomUniv
    });
  }

  onSubmit(){
    const universiteToAdd ={
      nomUniv: this.universiteForm.value.nomUniv
    };
    this.addUniversite(universiteToAdd);
    this.closeDialog();
    this.resetControls();
  }
  addUniversite(universiteBody: Object) {
    this.apiService.add('addUniversite', universiteBody).subscribe((universite) => this.apiService.get('getUniversitiesSorted').subscribe((universites)=>(this.universites=universites)));
  }
  resetControls() {
    this.universiteForm.reset();
  }
  closeDialog() {
    this.dialogRef.close();
  }
}