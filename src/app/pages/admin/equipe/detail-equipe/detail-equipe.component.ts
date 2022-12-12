import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../../core/services/admin/api.service";

@Component({
  selector: 'app-detail-equipe',
  templateUrl: './detail-equipe.component.html',
  styleUrls: ['./detail-equipe.component.css']
})
export class DetailEquipeComponent implements OnInit {
  detailEquipe! : any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


    this.apiService.refreshNeeded.subscribe(
      () => {
        this.getDetailEquipes();      }
    )
    this.getDetailEquipes();  }
  getDetailEquipes()
  {
    this.apiService.get
    ('getDetailEquipes').subscribe((detailEquipes) => (this.detailEquipe = detailEquipes));

  }

  deleteDetailEquipe(idDetailEquipe: any) {
    this.apiService.delete("deleteDetailEquipe",idDetailEquipe).subscribe()
  }

  openEditDetailEquipeDialog(detailequipe: any) {

  }
}
