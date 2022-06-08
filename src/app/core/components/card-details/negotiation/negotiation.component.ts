import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private api: ApiService) {
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
    this.buyerForm.get('negotiated_price')?.setValue(this.cardDetails?.price);
    // this.api.getUser().subscribe((res: any) => this.workerForm.patchValue(res));
  }

  negotiateAmount() {
    this.api.negotiateAmount(this.buyerForm.value, this.cardDetails.id, this.cardDetails.job_id).subscribe((res: any) => {
      this.workerForm.get('negotiated_price')?.setValue(res.negotiated_price);
    });
  }

}
