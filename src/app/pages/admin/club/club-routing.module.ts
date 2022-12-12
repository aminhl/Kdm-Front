import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from '../etudiant/etudiant.component';
import { ClubComponent } from './club.component';

const routes: Routes = [{ path: '', component: ClubComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClubRoutingModule {}
