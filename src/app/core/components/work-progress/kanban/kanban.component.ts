import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  jobId!: any;
  @Input() task!: any;
  // @Input() set id (id: any) {
  //   this.jobId = id;
  // } 
  @Output() edit = new EventEmitter<Task>();

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

}
