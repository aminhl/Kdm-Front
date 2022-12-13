import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../core/services/admin/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css'],
})
export class AddClubComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<AddClubComponent>
  ) {}

  ngOnInit(): void {}

  @ViewChild('clubForm') clubForm: NgForm;

  onSubmit() {
    const clubToAdd = {
      nomClub: this.clubForm.controls['nomClub'].value,
      logoClub: this.clubForm.controls['logoClub'].value.replace(
        /C:\\fakepath\\/,
        'assets/admin/img/'
      ),
      domaine: this.clubForm.controls['domaine'].value,
    };
    this.addClub(clubToAdd);
    this.closeDialog();
  }

  closeDialog() {
    this.dialogRef.close();
  }

  addClub(clubBody: Object) {
    this.apiService.add('addClub', clubBody).subscribe((contrat) => null);
  }
}
