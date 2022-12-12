import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {NgForm} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-assign-equipe-detail-equipe',
  templateUrl: './assign-equipe-detail-equipe.component.html',
  styleUrls: ['./assign-equipe-detail-equipe.component.css']
})
export class AssignEquipeDetailEquipeComponent implements OnInit {

  constructor(private apiService: ApiService,private dialogRef: MatDialogRef<AssignEquipeDetailEquipeComponent>) { }
  equipes:any;
  detailEquipe:any;

  ngOnInit(): void {
    this.getEquipes();
    this.getDetailEquipes();

    }

  getEquipes() {
    this.apiService
      .get('getEquipes')
      .subscribe((equipes) => (this.equipes = equipes));
  }
  getDetailEquipes()
  {
    this.apiService.get
    ('getDetailEquipes').subscribe((detailEquipes) => (this.detailEquipe = detailEquipes));

  }


  submit(f: NgForm) {
    const assign = {
      thematique: f.value.thematique,
      equipe: f.value.equipe,
    };
    this.apiService.assignEquipeToDetailEquipe("assignEquipeToDetialEquipe",assign.equipe,assign.thematique);
this.dialogRef.close();
  }
}
