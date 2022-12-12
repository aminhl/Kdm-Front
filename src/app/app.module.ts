import {NgModule} from '@angular/core';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorComponent} from './pages/admin/error/error.component';
import {RegisterComponent} from './pages/admin/register/register.component';
import {LoginComponent} from './pages/admin/login/login.component';
import {ContactComponent} from './pages/admin/contact/contact.component';
import {ProfileComponent} from './pages/admin/profile/profile.component';
import {ContratComponent} from './pages/admin/contrat/contrat.component';
import {AdminComponentsModule} from './components/admin-components/admin-components.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfessorComponent} from './pages/admin/professor/professor.component';
import {AddProfessorComponent} from './pages/admin/professor/add-professor/add-professor.component';
import {EditprofessorComponent} from './pages/admin/professor/edit-professor/edit-professor.component';
import {AddContratComponent} from './pages/admin/contrat/add-contrat/add-contrat.component';
import {EquipeComponent} from './pages/admin/equipe/equipe.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EditContratComponent} from './pages/admin/contrat/edit-contrat/edit-contrat.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {AddEquipeComponent} from './pages/admin/equipe/add-equipe/add-equipe.component';
import {UpdateEquipeComponent} from './pages/admin/equipe/update-equipe/update-equipe.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {ShowUnivEtudiantsComponent} from './pages/admin/universite/show-univ-etudiants/show-univ-etudiants.component';
import {ShowUnivDepartsComponent} from './pages/admin/universite/show-univ-departs/show-univ-departs.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {EventCalendarComponent} from "./pages/admin/event-calendar/event-calendar.component";
import {ArchiveStatsComponent} from './pages/admin/contrat/archive-stats/archive-stats.component';
import {NgChartsModule} from 'ng2-charts';
import {UniversiteComponent} from './pages/admin/universite/universite.component';
import {AddUniversiteComponent} from './pages/admin/universite/add-universite/add-universite.component';
import {EditUniversiteComponent} from './pages/admin/universite/edit-universite/edit-universite.component';
import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {LoggedInGuard} from './pages/LoggedInGuard';
import {DetailEquipeComponent} from './pages/admin/equipe/detail-equipe/detail-equipe.component';
import {
  AddDetailEquipeComponent
} from './pages/admin/equipe/detail-equipe/add-detail-equipe/add-detail-equipe.component';
import {SearchCustomPipe} from './core/search-custom.pipe';
import {DashboardComponent} from './pages/admin/dashboard/dashboard.component';
import {ClubComponent} from './pages/admin/club/club.component';
import {AddClubComponent} from './pages/admin/club/add-club/add-club.component';
import {EditClubComponent} from './pages/admin/club/edit-club/edit-club.component';
import {RouterModule} from '@angular/router';
import {
  AssignUnivEtudiantComponent
} from './pages/admin/universite/assign-univ-etudiant/assign-univ-etudiant.component';
import {
  AssignUnivDepartementComponent
} from './pages/admin/universite/assign-univ-departement/assign-univ-departement.component';
import {
  AssignEtudiantToClubComponent
} from './pages/admin/club/assign-etudiant-to-club/assign-etudiant-to-club.component';

FullCalendarModule.registerPlugins([dayGridPlugin,interactionPlugin]);


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
    ArchiveStatsComponent,
    UniversiteComponent,
    AddUniversiteComponent,
    EditUniversiteComponent,
    ShowUnivEtudiantsComponent,
    ShowUnivDepartsComponent,
    EventCalendarComponent,
    SearchCustomPipe,
    ProfessorComponent,
    AddProfessorComponent,
    EditprofessorComponent,
    ShowUnivDepartsComponent,
    DashboardComponent,
    ClubComponent,
    AddClubComponent,
    EditClubComponent,
    DetailEquipeComponent,
    AddDetailEquipeComponent,
    AssignUnivEtudiantComponent,
    AssignUnivDepartementComponent,
    AssignEtudiantToClubComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
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
    Ng2SearchPipeModule,
    FullCalendarModule,
    RouterModule,
  ],
  providers: [authInterceptorProviders, LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
