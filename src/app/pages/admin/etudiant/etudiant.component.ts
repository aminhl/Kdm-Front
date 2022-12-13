import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { AddetudiantComponent } from './addetudiant/addetudiant.component';
import { EditetudiantComponent } from './editetudiant/editetudiant.component';
import {DepartDetailsStudComponent} from "./depart-details-stud/depart-details-stud.component";
import {ContratDetailsStudComponent} from "./contrat-details-stud/contrat-details-stud.component";
import {EquipeDetailsStudComponent} from "./equipe-details-stud/equipe-details-stud.component";
import {
  AssignEtudiantToDepartementComponent
} from "./assign-etudiant-to-departement/assign-etudiant-to-departement.component";
import {
  AddAndAssignEtudiantToEquipeAndContractComponent
} from "./add-and-assign-etudiant-to-equipe-and-contract/add-and-assign-etudiant-to-equipe-and-contract.component";
import {EtudiantMailComponent} from "./etudiant-mail/etudiant-mail.component";
import {EventCalendarComponent} from "../event-calendar/event-calendar.component";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
 etudiants! : any;
 departement! :any
  searchText:any;
  PageNumber!: any;

  constructor(private apiService: ApiService, private dialog: MatDialog)
  {

  }

  ngOnInit(): void
  {
    this.apiService.refreshNeeded.subscribe(
      () => {
        this.getEtudiant();
      }
    )
    this.getEtudiant();

  }

  getEtudiant()
  {
    this.apiService.get
    ('getEtudiants').subscribe((etudiants) => {this.etudiants = etudiants });

  }

  deleteEtudiants(etudiantid: number) {
    this.apiService
      .delete('deleteEtudiant', etudiantid).subscribe((e) => this.etudiants=e)

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

    this.dialog.open(DepartDetailsStudComponent, {
      width: '50%',
      data: { departementId,
        nomE,
        prenomE
      },
    });
  }
  openDetailsContratEtudiantDialog(etudiantID: number,nomE : string,prenomE : string)
  {

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
    this.dialog.open(EquipeDetailsStudComponent, {
      width: '50%',
      data: { etudiantID,
        nomE,
        prenomE
      },
    });
  }
  openAssignEtudiantToDepartementDialog() {
    this.dialog.open(AssignEtudiantToDepartementComponent, {
      width: '40%',

    });
  }
  openaddAndAssignEtudiantToEquipeAndContractDialog() {
    this.dialog.open(AddAndAssignEtudiantToEquipeAndContractComponent, {
      width: '40%',

    });
  }

  openMailDialog(emailE: any) {
   this.dialog.open(EtudiantMailComponent,{
     width: '40%',
      data: { emailE,
    },
  });
}

  openCalendarDialog(idEtudiant: any) {
    this.dialog.open(EventCalendarComponent,
      {
        width: '80%',
        height: '80%',
        data: { idEtudiant,
        },
      }
      )
  }
}
