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
import { DepartementComponent } from './pages/admin/departement/departement.component';
import { AddDepartementComponent } from './pages/admin/departement/add-departement/add-departement.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'contrat', component: ContratComponent },
  { path: 'addcontrat', component: AddContratComponent },
  { path: 'departement', component: DepartementComponent },
  { path: 'adddepartement', component: AddDepartementComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'addequipe', component: AddEquipeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
