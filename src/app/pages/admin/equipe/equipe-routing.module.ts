import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratComponent } from '../contrat/contrat.component';
import { EquipeComponent } from './equipe.component';

const routes: Routes = [{ path: '', component: EquipeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipeRoutingModule {}
