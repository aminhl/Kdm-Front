import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipeRoutingModule } from './equipe-routing.module';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { EquipeComponent } from './equipe.component';
import { AssignEquipeDetailEquipeComponent } from './assign-equipe-detail-equipe/assign-equipe-detail-equipe.component';
import { DetailEquipeComponent } from './detail-equipe/detail-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { ContratRoutingModule } from '../contrat/contrat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    EquipeComponent,
    AddEquipeComponent,
    AssignEquipeDetailEquipeComponent,
    DetailEquipeComponent,
    UpdateEquipeComponent,
  ],
    imports: [
        CommonModule,
        EquipeRoutingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FormsModule,
        MatIconModule,
        NgxPaginationModule,
    ],
})
export class EquipeModule {}
