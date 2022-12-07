import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private tokenStorage: TokenStorageService) { }
token:any=this.tokenStorage.getToken();
  signout(){
    this.tokenStorage.signOut();
  }
  
  ngOnInit(): void {
  }

}
