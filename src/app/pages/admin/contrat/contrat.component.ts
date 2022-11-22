import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css'],
})
export class ContratComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getContrats();
  }

  contrats!: any;

  getContrats() {
    this.apiService
      .get('getContrats')
      .subscribe((contrats) => (this.contrats = contrats));
  }

  deleteContrat(elementId: number) {
    this.apiService
      .delete('deleteContrat', elementId)
      .subscribe(() => location.reload());
  }
}
