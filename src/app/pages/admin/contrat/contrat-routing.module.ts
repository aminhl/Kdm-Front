import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteComponent } from '../universite/universite.component';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { ContratComponent } from './contrat.component';

const routes: Routes = [{ path: '', component: ContratComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContratRoutingModule {}
