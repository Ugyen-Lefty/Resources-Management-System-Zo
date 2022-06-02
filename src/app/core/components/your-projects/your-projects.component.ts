import { Component, OnInit } from '@angular/core';
import { CalendarOptions, EventApi, DateSelectArg, EventClickArg, EventInput } from '@fullcalendar/angular';
import { filter } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { createEventId } from './your-projects-utils';

export const INITIAL_EVENTS: EventInput[] = [
  // {
  //   id: createEventId(),
  //   title: '',
  //   start: '',
  //   end: ''
  // }
  {
    id: createEventId(),
    title: 'All-day event',
    start: new Date().toISOString().replace(/T.*$/, ''),
    end: new Date().toISOString().replace(/T.*$/, ''),
    backgroundColor: 'red'

  },
  {
    id: createEventId(),
    title: 'All-day event',
    start: '2022-06-01',
    end: '2022-06-07',
    backgroundColor: 'blue'

  },
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
  calendarEvents: EventInput[] = [];
  calendarOptions!: CalendarOptions;
  currentEvents: EventApi[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getJobs().subscribe((res: any) => {
      res.forEach((ans: any) => {
        this.calendarEvents.push(
          {
            id: createEventId(),
            title: ans.title,
            start: ans.start_date,
            end: ans.end_date,
            backgroundColor: 'red'
          }
        );
      });
      this.calendarOptions = {
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        initialView: 'dayGridMonth',
        initialEvents: this.calendarEvents,
        weekends: true,
        editable: false,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
        select: this.handleDateSelect.bind(this),
        eventClick: this.handleEventClick.bind(this),
        eventsSet: this.handleEvents.bind(this)
      };
      // this.calendarEvents.map(ans => {
      //   ans.id = createEventId();
      //   ans.title = res.title;
      //   ans.start = res.start_date;
      //   ans.end = res.end_date;
      //   ans.backgroundColor = this.getRandomColor();
      // res.title = this.selectedProject.cardTitle,
      // res.start = this.selectedProject.startDate.toDate().toISOString().replace(/T.*$/, ''),
      // res.end = this.selectedProject.endDate.toDate().toISOString().replace(/T.*$/, '')
      // });
    });
  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
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

  selectProject() {
    // this.projects.forEach((res: any) => {
    //   res.id === id.value ? this.selectedProject = res : '';
    // });
    // this.api.triggerReload();
    // calendarApi.addEvent({
    //   id: createEventId(),
    //   title: this.selectedProject.cardTitle,
    //   start: this.selectedProject.startDate,
    //   end: this.selectedProject.endDate,
    //   allDay: true
    // });
  }
}
