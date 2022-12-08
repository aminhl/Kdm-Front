import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/admin/error/error.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { ContratComponent } from './pages/admin/contrat/contrat.component';
import { AdminComponentsModule } from './components/admin-components/admin-components.module';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddContratComponent } from './pages/admin/contrat/add-contrat/add-contrat.component';
import { EquipeComponent } from './pages/admin/equipe/equipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditContratComponent } from './pages/admin/contrat/edit-contrat/edit-contrat.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatDatepicker,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import { AddEquipeComponent } from './pages/admin/equipe/add-equipe/add-equipe.component';
import { UpdateEquipeComponent } from './pages/admin/equipe/update-equipe/update-equipe.component';
import { EtudiantComponent } from './pages/admin/etudiant/etudiant.component';
import { AddetudiantComponent } from './pages/admin/etudiant/addetudiant/addetudiant.component';
import { EditetudiantComponent } from './pages/admin/etudiant/editetudiant/editetudiant.component';
import {ArchiveStatsComponent} from "./pages/admin/contrat/archive-stats/archive-stats.component";
import {NgChartsModule} from "ng2-charts";

import { UniversiteComponent } from './pages/admin/universite/universite.component';
import { AddUniversiteComponent } from './pages/admin/universite/add-universite/add-universite.component';
import { EditUniversiteComponent } from './pages/admin/universite/edit-universite/edit-universite.component';

import { DepartementComponent } from './pages/admin/departement/departement.component';
import { AddDepartementComponent } from './pages/admin/departement/add-departement/add-departement.component';
import { EditDepartementComponent } from './pages/admin/departement/edit-departement/edit-departement.component';
import {authInterceptorProviders} from "./_helpers/auth.interceptor";
import {LoggedInGuard} from "./pages/LoggedInGuard";

import { ShowEtudiantsComponent } from './pages/admin/departement/show-etudiants/show-etudiants.component';
import { DepartDetailsStudComponent } from './pages/admin/etudiant/depart-details-stud/depart-details-stud.component';
import { ContratDetailsStudComponent } from './pages/admin/etudiant/contrat-details-stud/contrat-details-stud.component';
import { EquipeDetailsStudComponent } from './pages/admin/etudiant/equipe-details-stud/equipe-details-stud.component';


import { AssignEtudiantToDepartementComponent } from './pages/admin/etudiant/assign-etudiant-to-departement/assign-etudiant-to-departement.component';
import { AddAndAssignEtudiantToEquipeAndContractComponent } from './pages/admin/etudiant/add-and-assign-etudiant-to-equipe-and-contract/add-and-assign-etudiant-to-equipe-and-contract.component';


import {SearchContratPipe} from "./core/search-contrat.pipe";
// @ts-ignore
import {Ng2SearchPipeModule} from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    ContratComponent,
    AddContratComponent,
    EquipeComponent,
    EditContratComponent,
    AddEquipeComponent,
    UpdateEquipeComponent,
    EtudiantComponent,
    AddetudiantComponent,
    EditetudiantComponent,
    ArchiveStatsComponent,
    UniversiteComponent,
    AddUniversiteComponent,
    EditUniversiteComponent,
    DepartementComponent,
    AddDepartementComponent,
    EditDepartementComponent,
    ShowEtudiantsComponent,
    DepartDetailsStudComponent,
    ContratDetailsStudComponent,
    EquipeDetailsStudComponent,
    AssignEtudiantToDepartementComponent,
    AddAndAssignEtudiantToEquipeAndContractComponent,
    SearchContratPipe
  ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        AdminComponentsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        NgChartsModule,
        FormsModule,
      Ng2SearchPipeModule
    ],
 providers: [authInterceptorProviders,LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
