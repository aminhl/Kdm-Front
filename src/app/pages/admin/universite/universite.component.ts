import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { ShowUnivEtudiantsComponent } from './show-univ-etudiants/show-univ-etudiants.component';
import { ShowUnivDepartsComponent } from './show-univ-departs/show-univ-departs.component';
@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUniversites();
  }
  nomUniv!: any;
  universites!: any;
  PageNumber!: any;

  getUniversites() {
    this.apiService
      .get('getUniversitiesSorted')
      .subscribe((universites) => (this.universites = universites));
  }

  deleteUniversite(elementId: number) {
    this.apiService.delete('deleteUniversite', elementId).subscribe(() => null);
    location.reload();
  }

  openAddUniversiteDialog() {
    this.dialog.open(AddUniversiteComponent, { width: '40%' });
  }

  openEditUniversiteDialog(universite: Object) {
    this.dialog.open(EditUniversiteComponent, {
      width: '40%',
      data: { universite },
    });
  }
  openEtudiantUnivDialog(universite:Object) {
    this.dialog.open(ShowUnivEtudiantsComponent, { width: '60%', data: { universite}, })
  }

  openDepartementUnivDialog(universite:Object) {
    this.dialog.open(ShowUnivDepartsComponent, { width: '40%', data: { universite}, })
  }
}
