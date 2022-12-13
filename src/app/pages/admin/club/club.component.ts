import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddClubComponent } from './add-club/add-club.component';
import { Router } from '@angular/router';
import { EditClubComponent } from './edit-club/edit-club.component';
import { AssignEtudiantToClubComponent } from './assign-etudiant-to-club/assign-etudiant-to-club.component';
import { jsPDF } from 'jspdf';

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
    this.apiService.refreshNeeded.subscribe(
      () => {
        this.getClubs();
      }
    )
    this.getClubs();
  }

  clubs: any;
  searchedClub: any;

  getClubs() {
    this.apiService.get('getClubs').subscribe((clubs) => (this.clubs = clubs));
  }

  openAddClubDialog() {
    this.dialog.open(AddClubComponent, { width: '40%' });
  }

  deleteClub(clubId: number) {
    this.apiService
      .delete('deleteClub', clubId)
      .subscribe();
  }

  openEditClubDialog(club: Object) {
    this.dialog.open(EditClubComponent, {
      width: '40%',
      data: { club },
    });
  }

  openAssignEtudiantClubDialog() {
    this.dialog.open(AssignEtudiantToClubComponent);
  }

  generateClubPDF(idClub: number) {
    for (let i = 0; i < this.clubs.length; i++) {
      if (this.clubs[i].idClub == idClub) {
        let pdf = new jsPDF({
          orientation: 'l',
          format: 'a4',
        });
        pdf.setFont('helvetica');
        pdf.setFontSize(20);
        pdf.text('Club', 140, 10);
        pdf.text('Nom : ', 20, 30);
        pdf.text(this.clubs[i].nomClub, 100, 30);
        pdf.text('Logo: ', 20, 50);
        let img = this.clubs[i].logoClub;
        pdf.addImage(img, 'JPEG', 100, 40, 20, 20);
        pdf.text('Domaine : ', 20, 70);
        pdf.text(this.clubs[i].domaine, 100, 70);
        pdf.save('Club.pdf');
      }
    }
  }
}
