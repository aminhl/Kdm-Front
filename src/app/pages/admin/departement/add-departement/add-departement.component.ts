import { ApiService } from './../../../../core/services/admin/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-departement',
  templateUrl: './add-departement.component.html',
  styleUrls: ['./add-departement.component.css']
})
export class AddDepartementComponent implements OnInit {
  departementForm!: FormGroup;
  nomDepart!: FormControl;
  departements!: any;
  receivedRow: any;

  constructor(
    public dialogRef: MatDialogRef<AddDepartementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastrService: ToastrService,
    private apiService: ApiService
  ) {
    this.receivedRow = data;
    this.initForm();
    this.createForm();
  }

  ngOnInit(): void {
  }

  initForm() {
    this.nomDepart = new FormControl('', [Validators.required]);
  }

  createForm() {
    this.departementForm = new FormGroup({
      nomDepart: new FormControl('', [Validators.required,
      Validators.pattern("^departement +[a-zA-Z ]*"),
      Validators.minLength(15)])
    });
  }

  onSubmit() {
    const departementToAdd = {
      nomDepart: this.departementForm.value.nomDepart,
    };
    this.addDepartement(departementToAdd);
    this.toastrService.success("Departement bien ajouté");
    this.resetControls();
    this.closeDialog();

  }

  addDepartement(departBody: Object) {
    this.apiService.add('addDepartement', departBody).subscribe((departement) =>
      this.apiService.get
        ('getDepartements').subscribe((departements) => (this.departements = departements))
    );
  }


  resetControls() {
    this.departementForm.reset();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
