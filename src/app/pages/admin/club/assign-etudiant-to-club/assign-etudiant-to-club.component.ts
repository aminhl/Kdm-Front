import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../../../core/services/admin/api.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-assign-etudiant-to-club',
  templateUrl: './assign-etudiant-to-club.component.html',
  styleUrls: ['./assign-etudiant-to-club.component.css'],
})
export class AssignEtudiantToClubComponent implements OnInit {
  etudiants!: any;
  clubs!: any;
  SelectedEtu!: any;
  selectedClub!: any;
  etudiant!: any;
  club!: any;

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getEtudiants();
    this.getClubs();
  }

  getEtudiants() {
    this.apiService.get('getEtudiants').subscribe((etudiants) => {
      this.etudiants = etudiants;
    });
  }

  getClubs() {
    this.apiService.get('getClubs').subscribe((clubs) => {
      this.clubs = clubs;
    });
  }

  ChangeEtu(e) {
    this.SelectedEtu = e.target.value;
    this.apiService
      .getbyName('findetudiantByName', this.SelectedEtu)
      .subscribe((etudiant) => {
        this.etudiant = etudiant;
        this.SelectedEtu = this.etudiant.idEtudiant;
      });
  }

  ChangeClub(e) {
    this.selectedClub = e.target.value;
    this.apiService
      .getbyID('getClubByNom', this.selectedClub)
      .subscribe((club) => {
        this.club = club;
        this.selectedClub = this.club.idClub;
      });
  }
  updateEtudiant() {
    this.apiService
      .assignEtudiantToDepartement(
        'assignEtudiantToClub',
        this.SelectedEtu,
        this.selectedClub
      )
      .subscribe((ss) => location.reload());
  }
}
