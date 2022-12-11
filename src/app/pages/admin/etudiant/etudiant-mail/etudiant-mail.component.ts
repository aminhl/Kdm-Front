import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ApiService} from "../../../../core/services/admin/api.service";

@Component({
  selector: 'app-etudiant-mail',
  templateUrl: './etudiant-mail.component.html',
  styleUrls: ['./etudiant-mail.component.css']
})
export class EtudiantMailComponent implements OnInit {
  emailForm!: FormGroup;
  etudiantEmail : any;
  object: FormControl;
  message: FormControl;

  constructor(private apiService: ApiService,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.etudiantEmail=this.data.emailE;
    this.initForm();
    this.createForm();
  }
  onSubmit() {
    const emailFormtoSend = {
      destinataire:this.etudiantEmail,
      object: this.emailForm.value.object,
      message: this.emailForm.value.message,
    };
    this.sendMail(emailFormtoSend);

  }
  sendMail(MailBody:any)
{
this.apiService.add(
  'sendmail',MailBody).subscribe((ss) => null);

}
  initForm()
  {
    this.object = new FormControl('', [Validators.required]);
    this.message = new FormControl('', [Validators.required]);
  }
  createForm() {
    this.emailForm = new FormGroup({
      object: this.object,
      message: this.message,
    });
  }
  resetControls() {
    this.emailForm.reset();
  }


}
