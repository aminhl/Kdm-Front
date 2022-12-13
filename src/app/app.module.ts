import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './pages/admin/error/error.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { AdminComponentsModule } from './components/admin-components/admin-components.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfessorComponent } from './pages/admin/professor/professor.component';
import { AddProfessorComponent } from './pages/admin/professor/add-professor/add-professor.component';
import { EditprofessorComponent } from './pages/admin/professor/edit-professor/edit-professor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { EventCalendarComponent } from './pages/admin/event-calendar/event-calendar.component';
import { NgChartsModule } from 'ng2-charts';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { LoggedInGuard } from './pages/LoggedInGuard';
import { AddDetailEquipeComponent } from './pages/admin/equipe/detail-equipe/add-detail-equipe/add-detail-equipe.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AssignProfessorToDepartmentComponent } from './pages/admin/professor/assign-professor-to-department/assign-professor-to-department.component';
import { AssignProfessorToContractComponent } from './pages/admin/professor/assign-professor-to-contract/assign-professor-to-contract.component';
import { ToastrModule } from 'ngx-toastr';
import { DepartmentDetailsProfComponent } from './pages/admin/professor/department-details-prof/department-details-prof.component';
import { ShowDetailsEquipeToEquipeComponent } from './pages/admin/equipe/show-details-equipe-to-equipe/show-details-equipe-to-equipe.component';
import { ContratModule } from './pages/admin/contrat/contrat.module';
import { ClubModule } from './pages/admin/club/club.module';
import {EquipeModule} from "./pages/admin/equipe/equipe.module";
FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    ProfileComponent,
    EventCalendarComponent,
    ProfessorComponent,
    AddProfessorComponent,
    EditprofessorComponent,
    DashboardComponent,
    AddDetailEquipeComponent,
    AssignProfessorToDepartmentComponent,
    AssignProfessorToContractComponent,
    DepartmentDetailsProfComponent,
    ShowDetailsEquipeToEquipeComponent,
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
    ToastrModule.forRoot(),
    ContratModule,
    ClubModule,
    EquipeModule
  ],
  providers: [authInterceptorProviders, LoggedInGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
