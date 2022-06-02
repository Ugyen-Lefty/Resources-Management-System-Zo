import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, take, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { findIndex } from 'lodash-es';
import { CardCreationComponent } from '../post-details/card-creation/card-creation.component';
import { ActivatedRoute, Router } from '@angular/router';

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

  ngOnInit(): void {
    this.api.getAllJobs()
      .pipe(
        filter(res => !!res)
      )
      .subscribe(res => {
        res.forEach((ans: any) => {
          //DYNAMIC USER
          if (ans.postedBy === '0uv4r4jLry1UEtW2XAJz') {
            this.projects.push(ans);
          }
        });
      });
  }

  constructor(private dialog: MatDialog, private api: ApiService, private router: Router, private route: ActivatedRoute) { }

  newTask(): void {
    this.dialog.open(CardCreationComponent, {
      width: '600px',
      data: this.selectedProject.id,
    }).afterClosed()
      .pipe(
        filter(res => !!res)
      )
      .subscribe((result: any) => {
        if (!result) {
          return;
        }
        this.api.postCard(result);
        setTimeout(() => {
          this.getCards(this.id, true);
        }, 1000);
      });
  }

  editTask(list: 'done' | 'todo' | 'inProgress', task: any): void {
    // const dialogRef = this.dialog.open(TaskDialogComponent, {
    //   width: '270px',
    //   data: {
    //     task,
    //     enableDelete: true,
    //   },
    // });
    // dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
    //   if (!result) {
    //     return;
    //   }
    //   const dataList = this[list];
    //   const taskIndex = dataList.indexOf(task);
    //   if (result.delete) {
    //     dataList.splice(taskIndex, 1);
    //   } else {
    //     dataList[taskIndex] = task;
    //   }
    // });
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
    this.api.updateCardStatus(event.container.data[index].id, this.getStatus(drop));
  }

  getStatus(index?: number) {
    if (index == 0) {
      return 'requested';
    }
    else if (index == 1) {
      return 'inProgress';
    }
    else {
      return 'done';
    }
  }

  selectProject(id: any) {
    this.projects.forEach((res: any) => {
      res.id === id.value ? this.selectedProject = res : '';
    });
    if (this.selectedProject) {
      this.id = id;
      this.getCards(this.id);
      this.todo = [];
      this.inProgress = [];
      this.done = [];
    }
  }

  getCards(id?: any, reset = false): void {
  if(reset){
     this.todo = [];
     this.inProgress = [];
     this.done = [];
  }
    this.api.getCards()
      .pipe(
        take(1),
        filter(res => !!res))
      .subscribe(res => {
        // res.forEach((ans: any) => {
        //   if (ans.jobid === id.value) {
        //     const payload = {
        //       id: ans.id,
        //       title: ans.title,
        //       description: ans.description
        //     };
        //     if (ans.status === 'requested') {
        //       this.todo.push(payload);
        //     }
        //     else if (ans.status === 'inProgress') {
        //       this.inProgress.push(payload);
        //     }
        //     else {
        //       this.done.push(payload);
        //     }
        //   }
        // });
      });
  }

  setId(task: any) {
    this.movedId = task?.id;
  }

  showCardDetails(id: any) {
    this.router.navigate(['card-details', id], {relativeTo: this.route.parent});
  }

}
