import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { ApiService } from 'src/app/core/services/admin/api.service';
import { MatDialog } from '@angular/material/dialog';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import {co} from "chart.js/dist/chunks/helpers.core";
import {FormControl} from "@angular/forms";
import {FloatLabelType} from "@angular/material/form-field";

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
  floatLabelControl = new FormControl('auto' as FloatLabelType)

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
}
