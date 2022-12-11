import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EtudiantComponent} from './etudiant.component';
import {AddetudiantComponent} from './addetudiant/addetudiant.component';
import {EditetudiantComponent} from './editetudiant/editetudiant.component';
import {DepartDetailsStudComponent} from './depart-details-stud/depart-details-stud.component';
import {ContratDetailsStudComponent} from './contrat-details-stud/contrat-details-stud.component';
import {EquipeDetailsStudComponent} from './equipe-details-stud/equipe-details-stud.component';
import {AssignEtudiantToDepartementComponent} from './assign-etudiant-to-departement/assign-etudiant-to-departement.component';
import {AddAndAssignEtudiantToEquipeAndContractComponent} from './add-and-assign-etudiant-to-equipe-and-contract/add-and-assign-etudiant-to-equipe-and-contract.component';
import {EtudiantMailComponent} from './etudiant-mail/etudiant-mail.component';
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {FullCalendarModule} from "@fullcalendar/angular";
import {EtudiantRoutingModule} from "./etudiant-routing.module";

@NgModule({
  declarations: [
    EtudiantComponent,
    AddetudiantComponent,
    EditetudiantComponent,
    DepartDetailsStudComponent,
    ContratDetailsStudComponent,
    EquipeDetailsStudComponent,
    AssignEtudiantToDepartementComponent,
    AddAndAssignEtudiantToEquipeAndContractComponent,
    EtudiantMailComponent
  ],


  imports: [
    CommonModule,
    EtudiantRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FullCalendarModule
  ]
})
export class EtudiantModule { }
