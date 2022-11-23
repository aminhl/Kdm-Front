import { Component, OnInit } from '@angular/core';
import {Equipe} from "./Equipe";
import {ApiService} from "../../../core/services/admin/api.service";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
   equipes!: any;

  constructor(private equipeService: ApiService) { }


  public getEquipes(){
    this.equipeService.get("getContrats").subscribe(
      (equipes)=>{
        this.equipes=equipes;

      },
      (error: HttpErrorResponse)=>{
        alert(error.message);
      }
    )
  }


  ngOnInit(): void {
   this.getEquipes();
   // this.getContrats();
  }

}
