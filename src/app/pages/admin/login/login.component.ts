import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../../../core/services/admin/api.service";
import {AuthService} from "../../../_services/auth.service";
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  token:any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private  formBuilder : FormBuilder,
              private apiService: ApiService
              ,private  authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.form=this.formBuilder.group({
      username:"",
      password:""
    })
  }

  submit() {

   this.apiService.login(this.form.getRawValue().username,this.form.getRawValue().password)
     .subscribe(
       data => {
         console.log(data.access_token);
         this.tokenStorage.saveToken(data.access_token);
         this.tokenStorage.saveUser(data);
         console.log(this.tokenStorage.getUser())
         this.isLoginFailed = false;
         this.isLoggedIn = true;
         this.roles = this.tokenStorage.getUser();
        // console.log(this.isLoggedIn +"       "+this.tokenStorage.getUser());


         //this.reloadPage();
       },
       err => {
         this.errorMessage = err.error.message;
         this.isLoginFailed = true;
       }
     );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
