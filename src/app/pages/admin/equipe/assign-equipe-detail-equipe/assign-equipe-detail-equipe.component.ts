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

    //console.log(f.value.thematique);
    this.apiService.assignEquipeToDetailEquipe("assignEquipeToDetialEquipe",
      f.value.equipe,f.value.thematique).subscribe();
this.dialogRef.close();
console.log(f.value.equipe,f.value.thematique);
  }
}
