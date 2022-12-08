import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddContratComponent } from '../contrat/add-contrat/add-contrat.component';
import { AddClubComponent } from './add-club/add-club.component';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
})
export class ClubComponent implements OnInit {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getClubs();
  }

  clubs: any;

  getClubs() {
    this.apiService.get('getClubs').subscribe((clubs) => (this.clubs = clubs));
  }

  openAddClubDialog() {
    this.dialog.open(AddClubComponent, { width: '40%' });
  }
}
