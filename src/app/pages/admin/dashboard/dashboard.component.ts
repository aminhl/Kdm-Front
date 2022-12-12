import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  universites!: any
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {    
    this.apiService.refreshNeeded.subscribe(
      () => {
    this.CountUniversites();
  }
  )
  this.CountUniversites();
  }

  CountUniversites(){
    this.apiService
      .get('countUniversites')
      .subscribe((universites) => (this.universites = universites));
  }
}
