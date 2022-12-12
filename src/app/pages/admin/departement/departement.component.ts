import { FormGroup, FormControl } from '@angular/forms';
import { EditDepartementComponent } from './edit-departement/edit-departement.component';
import { EditContratComponent } from './../contrat/edit-contrat/edit-contrat.component';
import { AddDepartementComponent } from './add-departement/add-departement.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from './../../../core/services/admin/api.service';
import { Component, OnInit } from '@angular/core';
import { ShowEtudiantsComponent } from './show-etudiants/show-etudiants.component';
import { ShowProfessorComponent } from './show-professor/show-professor.component';
import { AssignchefdepartementComponent } from './assignchefdepartement/assignchefdepartement.component';
import { ToastrService } from 'ngx-toastr';
import { ShowChefdepartementComponent } from './show-chefdepartement/show-chefdepartement.component';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  constructor(private apiService: ApiService, private toastrService: ToastrService, private dialog: MatDialog) { }
  nomDepartement!: any;
  departements!: any;
  nbrPage!: any;

  ngOnInit(): void {
    this.apiService.refreshNeeded.subscribe(
      () => {
        this.getDepartements();
      }
    )
    this.getDepartements();
  }

  getDepartements() {
    this.apiService
      .get('getDepartements')
      .subscribe((departements) => (this.departements = departements));
  }

  deleteDepartement(elementId: number) {
    this.apiService
      .delete('deleteDepartement', elementId)
      .subscribe((e) => e);
    this.toastrService.success("Departement supprimé");

  }

  openAddDepartementDialog() {
    this.dialog.open(AddDepartementComponent, { width: '40%' });
  }

  openEtudiantDialog(departement: Object) {
    this.dialog.open(ShowEtudiantsComponent, { width: '60%', data: { departement }, })
  }

  openEditDepartementDialog(departement: Object) {
    this.dialog.open(EditDepartementComponent, {
      width: '40%',
      data: { departement },
    });
  }
  openchefDialog(departement: Object) {
    this.dialog.open(ShowChefdepartementComponent, { width: '60%', data: { departement } })
  }
  openProfessorDialog(departement: Object) {
    this.dialog.open(ShowProfessorComponent, { width: '60%', data: { departement } })
  }

  openAssignChefDialog() {
    this.dialog.open(AssignchefdepartementComponent, { width: '60%' })
  }
  exportPDF() {
    this.apiService
      .exportPDF('exportdepartpdf/')
      .subscribe(x => {
        const blob = new Blob([x], { type: 'application/pdf' });
        const data = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = data;
        link.download = 'departements.pdf';
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

        setTimeout(function () {
          window.URL.revokeObjectURL(data);
          link.remove();
        }, 100);
      })
  }


}
