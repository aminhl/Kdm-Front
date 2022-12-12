import {Component, Inject, OnInit} from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-show-details-equipe-to-equipe',
  templateUrl: './show-details-equipe-to-equipe.component.html',
  styleUrls: ['./show-details-equipe-to-equipe.component.css']
})
export class ShowDetailsEquipeToEquipeComponent implements OnInit {
idEquipe! : number;
  equipesDetails! :any;
  constructor(private apiService: ApiService, public dialogRef: MatDialogRef<ShowDetailsEquipeToEquipeComponent>, @Inject(MAT_DIALOG_DATA) public data: any)
  {

  }

  ngOnInit(): void
  {
    this.equipesDetails=[];
    this.getDetailsEquipe();

  }
getDetailsEquipe()
{
this.apiService.getbyID
('findDetailEquipeByEquipe',this.data).subscribe((data) =>{this.equipesDetails=data;console.log(this.equipesDetails)});
}
}
