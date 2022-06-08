import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-negotiation',
  templateUrl: './negotiation.component.html',
  styleUrls: ['./negotiation.component.scss']
})
export class NegotiationComponent implements OnInit {

  buyerForm!: FormGroup;
  workerForm!: FormGroup;
  cardDetails: any;
  role: any;
  confirmed!: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private api: ApiService, public dialogRef: MatDialogRef<NegotiationComponent>, private router: Router) {
    this.cardDetails = data || '';
  }

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.role = localStorage.getItem('User Role')
    this.buyerForm = this.fb.group({
      negotiated_price: ['', Validators.required]
    });
    this.workerForm = this.fb.group({
      negotiated_price: ['', Validators.required]
    });
    this.workerForm.disable();
    this.confirmed = this.cardDetails?.confirmed;
    // this.buyerForm.get('negotiated_price')?.setValue(this.cardDetails?.price);
    this.buyerForm.patchValue(this.cardDetails);
    // this.api.getUser().subscribe((res: any) => this.workerForm.patchValue(res));
  }

  negotiateAmount() {
    this.api.negotiateAmount(this.buyerForm.value, this.cardDetails.id, this.cardDetails.job_id).subscribe();
    this.workerForm.patchValue(this.buyerForm.value || '');
  }

  acceptNegotiation() {
    this.api.negotiateAmount({ confirmed: true }, this.cardDetails.id, this.cardDetails.job_id).subscribe();
  }

  close(){
    this.dialogRef.close();
  }

  finalizeNegotiation() {
    this.api.negotiateAmount({ price: this.buyerForm.get('negotiated_price')?.value  }, this.cardDetails.id, this.cardDetails.job_id).subscribe(() => {
      this.close();
      Swal.fire('Negotiation Successful' ,'' ,'success');
      this.router.navigateByUrl('core/landing');
    });
  }

}
