import {Component, OnInit} from '@angular/core';
import {LoggedInGuard} from "./pages/LoggedInGuard";
import {LoginComponent} from "./pages/admin/login/login.component";
import {AuthService} from "./_services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'ngKaddem';
  currentUsername=window.sessionStorage.getItem("username");

  addUsername(usename:string){
    window.sessionStorage.setItem("username",usename);
    this.currentUsername=window.sessionStorage.getItem("username");
  }



}
