import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../../_services/token-storage.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  roles:any;
  username:any;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  this.username= this.tokenStorage.getUser().sub;
  this.roles= this.tokenStorage.getUser().roles;

  }

}
