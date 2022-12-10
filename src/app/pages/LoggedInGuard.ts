import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {LoginComponent} from "./admin/login/login.component";

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor() {

  }

  canActivate() {
  if (window.sessionStorage.getItem("auth-user")!= null){
    return true;
  }
  return false;
  }
}
