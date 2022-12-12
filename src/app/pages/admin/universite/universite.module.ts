import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite.component';
import { AddUniversiteComponent } from './add-universite/add-universite.component';
import { EditUniversiteComponent } from './edit-universite/edit-universite.component';
import { AssignUnivDepartementComponent } from './assign-univ-departement/assign-univ-departement.component';
import { AssignUnivEtudiantComponent } from './assign-univ-etudiant/assign-univ-etudiant.component';
import { ShowUnivDepartsComponent } from './show-univ-departs/show-univ-departs.component';
import { ShowUnivEtudiantsComponent } from './show-univ-etudiants/show-univ-etudiants.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    UniversiteComponent,
    AddUniversiteComponent,
    EditUniversiteComponent,
    AssignUnivDepartementComponent,
    AssignUnivEtudiantComponent,
    ShowUnivDepartsComponent,
    ShowUnivEtudiantsComponent],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class UniversiteModule { }
