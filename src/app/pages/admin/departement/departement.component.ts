import { FormGroup, FormControl } from '@angular/forms';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { EditContratComponent } from './../contrat/edit-contrat/edit-contrat.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../../../core/services/admin/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(private apiService: ApiService, private dialog: MatDialog) { }

  departements!: any;

  ngOnInit(): void {
    this.getDepartements()
  }

  getDepartements() {
    this.apiService
      .get('getDepartements')
      .subscribe((departements) => (this.departements = departements));
  }

  deleteDepartement(elementId: number) {
    this.apiService
      .delete('deleteDepartement', elementId)
      .subscribe(() => location.reload());
  }

  openAddDepartementDialog() {
    this.dialog.open(AddDepartementComponent, { width: '40%' });
  }

  openEditDepartementDialog(departement: Object) {
    this.dialog.open(EditDepartementComponent, {
      width: '40%',
      data: { departement },
    });
  }

}
