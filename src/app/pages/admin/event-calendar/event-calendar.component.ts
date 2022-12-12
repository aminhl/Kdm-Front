import {Component, Inject, OnInit} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/angular";
import {ApiService} from "../../../core/services/admin/api.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-event-calendar',
  templateUrl: './event-calendar.component.html',
  styleUrls: ['./event-calendar.component.css']
})
export class EventCalendarComponent implements OnInit {

  etudiant: any;
  events:any;
  dateEvent:any;
  titre:any;
  calendarOptions!: CalendarOptions;

  constructor(private apiService: ApiService, @Inject(MAT_DIALOG_DATA) public data: any) {}


  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(): void {
    this.getDetails();

  }
  getDetails()
  {


    if (this.data.idEtudiant!=null){
    this.apiService.getbyID
    ('getEtudiant',this.data.idEtudiant).subscribe((eventss) =>
    {this.etudiant = eventss ;
      this.events=this.etudiant.evenements
      this.dateEvent=this.events[0].dateEvent
      this.titre=this.events[0].titreEvent


      this.calendarOptions =
        {
          initialView:'dayGridMonth',
          dateClick:this.handleDateClick.bind(this),
          events: [
            { title: this.events[0].titreEvent, date:this.events[0].dateEvent  },

          ]
        }
    });

  }
  }
}
