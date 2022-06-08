import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  currentUser: any;
  rmaForm!: FormGroup;
  totalCost!: any;
  netCost!: any;
  platformCharge!: any;
  
  constructor(private api: ApiService, private fb: FormBuilder, private router: Router, public dialogRef: MatDialogRef<PortalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.totalCost = data?.cost;
   }

  ngOnInit(): void {
    this.rmaForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bank: ['', Validators.required],
      accountNo: ['', Validators.required]
    });
    this.api.getUser().subscribe(res => {
      this.currentUser = res;
      this.rmaForm.patchValue(this.currentUser);
    });
    this.platformCharge = 0.03 * +this.totalCost;
    this.netCost = +this.platformCharge + +this.totalCost;
  }
  
  close(){
    this.dialogRef.close();
  }

  premium() {
    this.dialogRef.close(true);
  }

}
