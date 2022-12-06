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
import { EquipeComponent } from "./pages/admin/equipe/equipe.component";
import { AddEquipeComponent } from "./pages/admin/equipe/add-equipe/add-equipe.component";
import { EtudiantComponent } from './pages/admin/etudiant/etudiant.component';
import { UniversiteComponent } from './pages/admin/universite/universite.component';
import { DepartementComponent } from './pages/admin/departement/departement.component';
import { AddDepartementComponent } from './pages/admin/departement/add-departement/add-departement.component';
import {LoggedInGuard} from "./pages/LoggedInGuard";



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'contrat', component: ContratComponent,canActivate:[LoggedInGuard] },
  { path: 'addcontrat', component: AddContratComponent,canActivate:[LoggedInGuard] },
  { path: 'departement', component: DepartementComponent ,canActivate:[LoggedInGuard]},
  { path: 'adddepartement', component: AddDepartementComponent,canActivate:[LoggedInGuard] },
  { path: 'equipe', component: EquipeComponent,canActivate:[LoggedInGuard], },
  { path: 'addequipe', component: AddEquipeComponent,canActivate:[LoggedInGuard] },
  { path: 'etudiant', component: EtudiantComponent,canActivate:[LoggedInGuard] },
  { path: 'login', component: LoginComponent,},
  { path: 'contact', component: ContactComponent,canActivate:[LoggedInGuard] },
  { path: 'profile', component: ProfileComponent,canActivate:[LoggedInGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'universite', component: UniversiteComponent },
  { path: 'departement', loadChildren: () => import('./pages/admin/departement/departement.module').then(m => m.DepartementsModule) },
  { path: '**', component: ErrorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
