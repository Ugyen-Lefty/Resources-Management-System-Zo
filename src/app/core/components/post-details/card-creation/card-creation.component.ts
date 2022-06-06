import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  campaignOne?: FormGroup;
  card: any;
  requirements: string[] = [];


  constructor(private fb: FormBuilder, @Inject(MAT_DIALOG_DATA) public data: any, private api: ApiService, public dialogRef: MatDialogRef<CardCreationComponent>) {
       this.id = data.id || '';
       this.card = data.card || '';
  }

  ngOnInit(): void {
    this.initializer();
  }

  initializer(): void {
    this.createCard();
    this.cardForm.patchValue(this.card);
  }

  createCard() {
    this.cardForm = this.fb.group({
      title: [''],
      description: [''],
      price: [''],
      start_date: [''],
      end_date: [''],
      start_time: [''],
      end_time: ['']
    });
  }

  addCard() {
    const payload = {
       ...this.cardForm.value,
       status: 'requested',
       job_id: this.id,
       requirements: this.requirements
    }
    this.close(payload);
  }

  close(data?: any){
    this.dialogRef.close(data);
  }

  addRequirements(event: any) {
      this.requirements.push(event.value as never);
      event.value = '';
  }
}
