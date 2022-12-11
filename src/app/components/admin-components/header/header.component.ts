import { Component, OnInit, Input } from '@angular/core';
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() usernameHeader:string="Root";
  constructor( private tokenStorage: TokenStorageService) { }
token:any=this.tokenStorage.getToken();
  signout(){
    this.tokenStorage.signOut();
    location.reload();
    this.usernameHeader="";
  }

  ngOnInit(): void {
  }

}
