import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-subscription-modal',
  templateUrl: './subscription-modal.component.html',
  styleUrls: ['./subscription-modal.component.scss']
})
export class SubscriptionModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubscriptionModalComponent>, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  rmaPortal() {
    this.router.navigate(['core/subscription/rma']);
    this.close();
  }

  scan() {
    this.router.navigate(['core/subscription/scan-qr']);
    this.close();
  }

  close(){
    this.dialogRef.close();
  }

}
