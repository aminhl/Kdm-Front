import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../core/services/admin/api.service";
import {HttpErrorResponse} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {AddEquipeComponent} from "./add-equipe/add-equipe.component";
import {UpdateEquipeComponent} from "./update-equipe/update-equipe.component";
import {TokenStorageService} from "../../../_services/token-storage.service";
import {AddDetailEquipeComponent} from "./detail-equipe/add-detail-equipe/add-detail-equipe.component";
import {DetailEquipeComponent} from "./detail-equipe/detail-equipe.component";
import {AssignEquipeDetailEquipeComponent} from "./assign-equipe-detail-equipe/assign-equipe-detail-equipe.component";
import {
  ShowDetailsEquipeToEquipeComponent
} from "./show-details-equipe-to-equipe/show-details-equipe-to-equipe.component";


@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {
  constructor(private apiService: ApiService,
              private dialog: MatDialog
              ,private token: TokenStorageService) {}

  ngOnInit(): void {

    this.apiService.refreshNeeded.subscribe(
      () => {
        this.getEquipes();
      }
    )
    this.getEquipes();
    //console.log("token from equipe:: "+this.token.getToken());

  }

  equipes!: any;
  PageNumber: any;

  getEquipes() {
    this.apiService
      .get('getEquipes')
      .subscribe((equipes) => {this.equipes = equipes ; console.log(equipes)});
  }

  deleteEquipe(elementId: number) {
    this.apiService
      .delete('deleteEquipe', elementId)
      .subscribe();
  }

  openAddEquipeDialog() {
    this.dialog.open(AddEquipeComponent, { width: '40%' });
  }
  openAddDetailEquipeDialog() {
    this.dialog.open(AddDetailEquipeComponent, { width: '40%' });
  }
  openDetailEquipeDialog() {
    this.dialog.open(DetailEquipeComponent, { width: '40%' });
  }

  openEditEquipeDialog(equipe: Object) {
    this.dialog.open(UpdateEquipeComponent, {
      width: '40%',
      data: { equipe },
    });
  }

  openAffectEquipeToDetailEquipe() {
    this.dialog.open(AssignEquipeDetailEquipeComponent, { width: '40%' });
  }


  openDetailsDepartEtudiantDialog(idequipe: number) {

    this.dialog.open(ShowDetailsEquipeToEquipeComponent,
      {
        width: '50%',
        data : idequipe,
      }
      )

  }
}
