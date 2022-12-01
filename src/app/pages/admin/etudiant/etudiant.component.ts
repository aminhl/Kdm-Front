import {Component, Input, OnInit} from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import {DepartDetailsStudComponent} from "./depart-details-stud/depart-details-stud.component";
import {ContratDetailsStudComponent} from "./contrat-details-stud/contrat-details-stud.component";
import {EquipeDetailsStudComponent} from "./equipe-details-stud/equipe-details-stud.component";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 etudiants! : any;
 departement! :any

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

  openDetailsDepartEtudiantDialog(departementId: number,nomE : string,prenomE : string)
  {
console.log(departementId)
    this.dialog.open(DepartDetailsStudComponent, {
      width: '20%',
      data: { departementId,
        nomE,
        prenomE
      },
    });
  }
  openDetailsContratEtudiantDialog(etudiantID: number,nomE : string,prenomE : string)
  {
console.log()
    this.dialog.open(ContratDetailsStudComponent, {
      width: '50%',
      data: { etudiantID,
        nomE,
        prenomE
      },
    });
  }
  openDetailsEquipeEtudiantDialog(etudiantID: number,nomE : string,prenomE : string)
  {
    console.log()
    this.dialog.open(EquipeDetailsStudComponent, {
      width: '50%',
      data: { etudiantID,
        nomE,
        prenomE
      },
    });
  }
}
