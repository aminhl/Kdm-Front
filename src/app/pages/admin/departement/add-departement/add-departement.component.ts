import { ApiService } from './../../../../core/services/admin/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  departementForm!: FormGroup;
  nomDepart!: FormControl;


  // pattern1 =  "[a-zA-Z]";

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddDepartementComponent>
  ) {
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {
  }

  initForm() {

    // this.departementForm = this.formBuilder.group({
    //   // this.nomDepart = new FormControl('', [Validators.required]);
    //   nomDepart : new FormControl ('', [Validators.required, Validators.pattern('^[a-zA-Z]')])

    // });

    this.nomDepart = new FormControl('', [Validators.required]);

    //  this.nomDepart = new FormControl ('', [Validators.required, Validators.pattern('^[a-zA-Z]')])

  }

  createForm() {
    this.departementForm = new FormGroup({
      nomDepart: this.nomDepart,
    });
  }

  onSubmit() {
    const departementToAdd = {
      nomDepart: this.departementForm.value.nomDepart,
    };
    this.addDepartement(departementToAdd);
    this.resetControls();
    this.closeDialog();
    location.reload();
  }

  addDepartement(departBody: Object) {
    this.apiService.add('addDepartement', departBody).subscribe((departement) => null);
  }

  resetControls() {
    this.departementForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }


}
