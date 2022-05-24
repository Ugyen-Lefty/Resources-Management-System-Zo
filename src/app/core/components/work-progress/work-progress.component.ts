import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  ngOnInit(): void {
  }
  todo: Task[] = [];
  inProgress: Task[] = [];
  done: Task[] = [];

  constructor(private dialog: MatDialog) { }

  newTask(): void {
    //   const dialogRef = this.dialog.open(TaskDialogComponent, {
    //     width: '270px',
    //     data: {
    //       task: {},
    //     },
    //   });
    //   dialogRef
    //     .afterClosed()
    //     .subscribe((result: TaskDialogResult) => {
    //       if (!result) {
    //         return;
    //       }
    //       this.todo.push(result.task);
    //     });
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

  drop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
