import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContratRoutingModule } from './contrat-routing.module';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ArchiveStatsComponent } from './archive-stats/archive-stats.component';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';
import { ContratComponent } from './contrat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SearchCustomPipe } from '../../../core/search-custom.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {NgxPaginationModule} from "ngx-pagination";

@NgModule({
  declarations: [
    ContratComponent,
    AddContratComponent,
    ArchiveStatsComponent,
    EditContratComponent,
    SearchCustomPipe,
  ],
  imports: [
    CommonModule,
    ContratRoutingModule,
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
  exports: [
    ArchiveStatsComponent,
    ContratComponent,
    AddContratComponent,
    EditContratComponent,
    SearchCustomPipe,
  ],
})
export class ContratModule {}
