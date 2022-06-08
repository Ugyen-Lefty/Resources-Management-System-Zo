import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, take, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { findIndex, uniqBy } from 'lodash-es';
import { CardCreationComponent } from '../post-details/card-creation/card-creation.component';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

export interface Task {
  id?: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-work-progress',
  templateUrl: './work-progress.component.html',
  styleUrls: ['./work-progress.component.scss']
})

export class WorkProgressComponent implements OnInit {

  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];
  projects: any = [];
  selectedProject: any;
  id: any;
  status: any;
  movedId!: any;
  currentProject: any;
  role: any;

  ngOnInit(): void {
    this.role = localStorage.getItem('User Role');

    if (this.role === 'Buyer') {
      this.api.getJobs().subscribe((res: any) => {
        this.projects = res;
        this.currentProject = this.projects[0].id;
        this.selectProject(this.projects[0].id);
      });
    } else {
      this.api.getWorkerJobs().subscribe((res: any) => {
          this.projects = res;
          this.projects = uniqBy(this.projects, 'id');
          this.currentProject = this.projects[0].id;
        this.selectProject(this.projects[0].id);
        }
      )
    }
  }


  constructor(private dialog: MatDialog, private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  newTask(): void {
    this.dialog.open(CardCreationComponent, {
      width: '600px',
      data: {id : this.id, card: undefined},
    }).afterClosed().pipe(filter (val => !!val)).subscribe((result: any) => {
        this.api.postCard(result).subscribe( res => {
         Swal.fire('Card successfully created!', '', 'success');
         this.getCards(this.id, true);
        });
      });
  }

  drop(event: CdkDragDrop<any[]>, drop?: number): void {
    if (event.previousContainer === event.container) {
      return;
    }
    if (!event.container.data || !event.previousContainer.data) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
    const index = findIndex(event.container.data, (data) => { return data.id === this.movedId; })
    this.api.updateCardStatus(event.container.data[index].id, this.getStatus(drop), this.id).subscribe(() => {
      if (drop === 2) {
        Swal.fire('Transaction','Payment to worker pending, will receive shortly','info');
      }
    });
  }

  getStatus(index?: number) {
    if (index == 0) {
      return 'requested';
    }
    else if (index == 1) {
      return 'in_progress';
    }
    else {
      return 'done';
    }
  }

  selectProject(id: any) {
     this.currentProject = id;
      this.id = id;
      if(this.role === 'Buyer'){
      this.getCards(this.id);
      } else {
      this.getWorkerCards(this.id);
      }

      this.todo = [];
      this.inProgress = [];
      this.done = [];

  }

  getCards(id?: any, reset = false): void {
  if(reset){
     this.todo = [];
     this.inProgress = [];
     this.done = [];
  }
    this.api.getCards(this.id).subscribe( (res: any) => {
      res.forEach((res: any) => {
        if (res.status === 'requested') {
          this.todo.push(res);
        } else if (res.status === 'in_progress') {
          this.inProgress.push(res);
        } else {
          this.done.push(res);
           }
         });
       });
    }

    getWorkerCards(id?: any, reset = false): void {
      if (reset) {
        this.todo = [];
        this.inProgress = [];
        this.done = [];
      }
      this.api.getWorkerCards(this.id).subscribe((res: any) => {
        res.forEach((res: any) => {
          if (res.status === 'requested') {
            this.todo.push(res);
          } else if (res.status === 'in_progress') {
            this.inProgress.push(res);
          } else {
            this.done.push(res);
          }
        });
      });
    }

  setId(task: any) {
    this.movedId = task?.id;
  }

  showCardDetails(id: any) {
    this.router.navigate([`job/${this.id}/card-details/`, id], {relativeTo: this.route.parent});
  }

}
