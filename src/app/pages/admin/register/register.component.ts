import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/admin/api.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ContratComponent} from "../contrat/contrat.component";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;


  constructor(
              private apiService: ApiService,
              public dialogRef: MatDialogRef<ContratComponent>) { }

  ngOnInit(): void {
  }





  register(registerbody:Object){
   // console.log(this.form.getRawValue());
    this.apiService.register("user/save",registerbody)
      .subscribe(() => null);
  }

  close() {
    this.dialogRef.close();
  }

  submit(f: NgForm) {
    console.log(f.value)
    this.register(f.value);
    this.dialogRef.close();
  }
}
