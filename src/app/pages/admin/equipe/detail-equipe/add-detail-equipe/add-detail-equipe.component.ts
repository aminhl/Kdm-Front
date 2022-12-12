import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ApiService} from "../../../../../core/services/admin/api.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-detail-equipe',
  templateUrl: './add-detail-equipe.component.html',
  styleUrls: ['./add-detail-equipe.component.css']
})
export class AddDetailEquipeComponent implements OnInit {

  constructor(private apiService: ApiService,  private dialogRef: MatDialogRef<AddDetailEquipeComponent>) { }

  ngOnInit(): void {
  }


  submit(f: NgForm) {

    const detailToAdd = {
      salle: f.value.salle,
      thematique: f.value.thematique,
    };
    this.addDetailEquipe(detailToAdd);

    this.dialogRef.close();
  }

  addDetailEquipe(detailBody: Object) {
    this.apiService.add('addDetailEquipe', detailBody).subscribe();
  }
}
