import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../../core/services/admin/api.service';
import { ClubComponent } from '../club.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.css'],
})
export class EditClubComponent implements OnInit {
  receivedRow: any;
  editClubForm: FormGroup;
  logoClub: string;
  constructor(
    public dialogRef: MatDialogRef<ClubComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.receivedRow = data;
    this.logoClub = this.receivedRow.club.logoClub;
    this.editClubForm = this.formBuilder.group({
      nomClub: [`${this.receivedRow.club.nomClub}`],
      logoClub: [''],
      domaine: [`${this.receivedRow.club.domaine}`],
    });
  }

  ngOnInit(): void {}

  updateClub(clubId: number) {
    const clubUpdated = {
      idClub: clubId,
      nomClub: this.editClubForm.controls['nomClub'].value,
      logoClub:
        this.editClubForm.controls['logoClub'].value !== ''
          ? this.editClubForm.controls['logoClub'].value.replace(
              /C:\\fakepath\\/,
              'assets/admin/img/'
            )
          : this.logoClub,
      domaine: this.editClubForm.controls['domaine'].value,
    };
    this.apiService.update('updateClub', clubId, clubUpdated).subscribe(() => {
      this.closeDialog();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }

  onSubmit() {}
}
