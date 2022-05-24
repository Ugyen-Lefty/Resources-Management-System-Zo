import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-card-creation',
  templateUrl: './card-creation.component.html',
  styleUrls: ['./card-creation.component.scss']
})
export class CardCreationComponent implements OnInit {

  cardForm!: FormGroup;
  id!: string;
  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, public dialogRef: MatDialogRef<CardCreationComponent>) {
       this.id = data;
  }

  ngOnInit(): void {
    this.createCard();
  }

  createCard() {
    this.cardForm = this.fb.group({
      title: [''],
      description: ['']
    });
  }

  addCard() {
    const payload = {
       ...this.cardForm.value,
       status: 'requested',
       jobid: this.id
    }
    this.close(payload);
  }

  close(data?: any){
    this.dialogRef.close(data);
  }
}
