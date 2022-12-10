import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../../core/services/admin/api.service";
import {AuthService} from "../../../_services/auth.service";
import {TokenStorageService} from "../../../_services/token-storage.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {AddDetailEquipeComponent} from "../equipe/detail-equipe/add-detail-equipe/add-detail-equipe.component";
import {RegisterComponent} from "../register/register.component";

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
  @Output() newUsernameEvent= new EventEmitter<string>();
  username:string='';
  roles: string[] = [];


  constructor(private  formBuilder : FormBuilder,
              private apiService: ApiService
              ,private  authService: AuthService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private dialog: MatDialog) {


  }


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
  getCurrentUsername(){
    this.newUsernameEvent.emit(this.username);
  }

  submit() {

   this.apiService.login(this.form.getRawValue().username,this.form.getRawValue().password)
     .subscribe(
       data => {
        //console.log(data.access_token);
         this.tokenStorage.saveToken(data.access_token);
         this.tokenStorage.saveUser(data);
        // console.log(this.tokenStorage.getUser())
         this.isLoginFailed = false;
         this.isLoggedIn = true;
         this.roles = this.tokenStorage.getUser().roles;
        this.username= this.tokenStorage.getUser().sub;
        this.getCurrentUsername();
        this.router.navigate(["/profile"])
       },
       err => {
         this.errorMessage = err.error.message;
         this.isLoginFailed = true;
       }
     );
  }
  openRegisterDialog(){
    this.dialog.open(RegisterComponent, { width: '60%',height:'60% '});
  }
  reloadPage(): void {
    window.location.reload();
  }

}
