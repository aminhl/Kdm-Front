import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {LoginComponent} from "./admin/login/login.component";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor() {

  }

  canActivate() {
  if (window.sessionStorage.getItem("auth-token").length>0){
    return true;
  }
  else return false;
  }
}
