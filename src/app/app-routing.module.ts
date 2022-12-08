import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/admin/contact/contact.component';
import { RegisterComponent } from './pages/admin/register/register.component';
import { LoginComponent } from './pages/admin/login/login.component';
import { ProfileComponent } from './pages/admin/profile/profile.component';
import { ErrorComponent } from './pages/admin/error/error.component';
import { ContratComponent } from './pages/admin/contrat/contrat.component';
import { AddContratComponent } from './pages/admin/contrat/add-contrat/add-contrat.component';
import { EquipeComponent } from './pages/admin/equipe/equipe.component';
import { AddEquipeComponent } from './pages/admin/equipe/add-equipe/add-equipe.component';
import { EtudiantComponent } from './pages/admin/etudiant/etudiant.component';
import { UniversiteComponent } from './pages/admin/universite/universite.component';
import { LoggedInGuard } from './pages/LoggedInGuard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ClubComponent } from './pages/admin/club/club.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'contrat',
    component: ContratComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'addcontrat',
    component: AddContratComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'equipe', component: EquipeComponent, canActivate: [LoggedInGuard] },
  {
    path: 'addequipe',
    component: AddEquipeComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'etudiant',
    component: EtudiantComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'departement',
    loadChildren: () =>
      import('./pages/admin/departement/departement.module').then(
        (m) => m.DepartementsModule
      ),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'universite',
    component: UniversiteComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [LoggedInGuard],
  },
  { path: 'club', component: ClubComponent, canActivate: [LoggedInGuard] },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
