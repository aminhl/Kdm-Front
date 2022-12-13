import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { co } from 'chart.js/dist/chunks/helpers.core';
import { FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { DepartDetailsStudComponent } from '../etudiant/depart-details-stud/depart-details-stud.component';
import { ContratDetailsStudComponent } from '../etudiant/contrat-details-stud/contrat-details-stud.component';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css'],
})
export class ContratComponent implements OnInit {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {

    this.apiService.refreshNeeded.subscribe(
      () => {
        this.getContrats();
      }
    )
    this.getContrats();
  }

  contrats!: any;
  searchedContrat: any;
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  PageNumber: any;

  getContrats() {
    this.apiService
      .get('getContrats')
      .subscribe((contrats) => (this.contrats = contrats));
  }

  deleteContrat(elementId: number) {
    this.apiService
      .delete('deleteContrat', elementId)
      .subscribe();
  }

  openAddContratDialog() {
    this.dialog.open(AddContratComponent, { width: '40%' });
  }

  openEditContratDialog(contrat: Object) {
    this.dialog.open(EditContratComponent, {
      width: '40%',
      data: { contrat },
    });
  }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  generateContratPDF(idContrat: number) {
    for (let i = 0; i < this.contrats.length; i++) {
      if (this.contrats[i].idContrat == idContrat) {
        let pdf = new jsPDF({
          orientation: 'l',
          format: 'a4',
        });
        pdf.setFont('helvetica');
        pdf.setFontSize(20);
        pdf.text('Contrat', 140, 10);
        pdf.text('Specialite : ', 20, 30);
        pdf.text(this.contrats[i].specialite, 100, 30);
        pdf.text('Date Debut : ', 20, 50);
        pdf.text(this.contrats[i].dateDebutContrat, 100, 50);
        pdf.text('dateFinContrat : ', 20, 70);
        pdf.text(this.contrats[i].dateFinContrat, 100, 70);
        pdf.text('montantContrat : ', 20, 90);
        pdf.text(this.contrats[i].montantContrat + 'Dt', 100, 90);
        pdf.save('Contrat.pdf');
      }
    }
  }
}
