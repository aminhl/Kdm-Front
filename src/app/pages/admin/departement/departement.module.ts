import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { DepartementComponent } from './departement.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AddDepartementComponent } from './add-departement/add-departement.component';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { ShowEtudiantsComponent } from './show-etudiants/show-etudiants.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ShowProfessorComponent } from './show-professor/show-professor.component';
import { AssignchefdepartementComponent } from './assignchefdepartement/assignchefdepartement.component';
import { ShowChefdepartementComponent } from './show-chefdepartement/show-chefdepartement.component';


@NgModule({
  declarations: [
    DepartementComponent, AddDepartementComponent, EditDepartementComponent, ShowEtudiantsComponent, ShowProfessorComponent, AssignchefdepartementComponent, ShowChefdepartementComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  // exports: [DepartementComponent, AddDepartementComponent, EditDepartementComponent, ShowEtudiantsComponent
  // ]
})
export class DepartementsModule { }
