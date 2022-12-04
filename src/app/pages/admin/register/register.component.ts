import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../../core/services/admin/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form : FormGroup;


  constructor(private  formBuilder : FormBuilder,private apiService: ApiService,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: "",
        email:"",
        password:"",
      }
    )
  }

  submit() {
    this.register(this.form.value);

  }
  register(registerbody:Object){
    console.log(this.form.getRawValue());
    this.apiService.register("user/save",registerbody).subscribe(() => null);
  }
}
