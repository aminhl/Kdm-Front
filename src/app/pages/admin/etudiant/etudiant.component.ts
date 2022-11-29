import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 etudiants! : any;
 userloggedOut 
  constructor(private apiService: ApiService, private dialog: MatDialog) 
  { 

  }

  ngOnInit(): void {this.getEtudiant();}
 
  getEtudiant()
  {
    this.apiService.get
    ('getEtudiants').subscribe((etudiants) => (this.etudiants = etudiants));
  
  }

  deleteEtudiants(etudiantid: number) {
    this.apiService
      .delete('deleteEtudiant', etudiantid)
      .subscribe(() => location.reload());
  }
  openAddEtudiantDialog() {
    this.dialog.open(AddetudiantComponent, { width: '40%' });
  }

  openEditEtudiantDialog(etudiant: Object) {
    this.dialog.open(EditetudiantComponent, {
      width: '40%',
      data: { etudiant },
    });
  }

  
}
