import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddClubComponent } from './add-club/add-club.component';
import { Router } from '@angular/router';
import { EditClubComponent } from './edit-club/edit-club.component';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
})
export class ClubComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private dialog: MatDialog,
    private router: Router
  ) {}

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

  deleteClub(clubId: number) {
    this.apiService
      .delete('deleteClub', clubId)
      .subscribe(() => location.reload());
  }

  openEditClubDialog(club: Object) {
    this.dialog.open(EditClubComponent, {
      width: '40%',
      data: { club },
    });
  }
}
