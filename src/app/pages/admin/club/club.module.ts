import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClubRoutingModule } from './club-routing.module';
import { ClubComponent } from './club.component';
import { AssignEtudiantToClubComponent } from './assign-etudiant-to-club/assign-etudiant-to-club.component';
import { EditClubComponent } from './edit-club/edit-club.component';
import { SearchCustomPipe } from '../../../core/search-custom.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ContratModule } from '../contrat/contrat.module';
import { AddClubComponent } from './add-club/add-club.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [
    ClubComponent,
    AddClubComponent,
    AssignEtudiantToClubComponent,
    EditClubComponent,
  ],
  imports: [
    CommonModule,
    ClubRoutingModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    ContratModule,
  ],
  exports: [ClubComponent, AssignEtudiantToClubComponent, EditClubComponent],
})
export class ClubModule {}
