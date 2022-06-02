import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/angular';
import { filter } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { createEventId } from './your-projects-utils';

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: '',
    start: '',
    end: ''
  }
];

@Component({
  selector: 'app-your-projects',
  templateUrl: './your-projects.component.html',
  styleUrls: ['./your-projects.component.scss']
})
export class YourProjectsComponent implements OnInit {

  projects: any = [];
  selectedProject: any;
  calendarVisible = true;
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
  };
  currentEvents: EventApi[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getAllJobs()
      .pipe(
        filter(res => !!res)
      )
      .subscribe(res => {
        res.forEach((ans: any) => {
          if (ans.postedBy === '0uv4r4jLry1UEtW2XAJz') {
            this.projects.push(ans);
          }
        });
      });
  }

  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }

  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    // if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    // clickInfo.event.remove();
    // }
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents = events;
  }

  selectProject(id: any) {
    this.projects.forEach((res: any) => {
      res.id === id.value ? this.selectedProject = res : '';
    });
    if (this.selectedProject) {
      INITIAL_EVENTS.map(res => {
        res.title = this.selectedProject.cardTitle,
          res.start = this.selectedProject.startDate.toDate().toISOString().replace(/T.*$/, ''),
          res.end = this.selectedProject.endDate.toDate().toISOString().replace(/T.*$/, '')
      });
      this.api.triggerReload();
      // calendarApi.addEvent({
      //   id: createEventId(),
      //   title: this.selectedProject.cardTitle,
      //   start: this.selectedProject.startDate,
      //   end: this.selectedProject.endDate,
      //   allDay: true
      // });

    }
  }
}
