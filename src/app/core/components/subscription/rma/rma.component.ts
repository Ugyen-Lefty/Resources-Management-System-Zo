import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rma',
  templateUrl: './rma.component.html',
  styleUrls: ['./rma.component.scss']
})
export class RmaComponent implements OnInit {

  currentUser: any;
  rmaForm!: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) { }

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
  }
  
  premium() {
    this.api.premium({...this.currentUser, subscribed: true}).subscribe(() => {
      Swal.fire('Subscribed to Premium Successfully', '', 'success').then(() => {
        this.router.navigate(['core/landing']);
      });
    }, () => {
      Swal.fire('Subscribed to Premium Failed', '', 'error');
    });
  }

}
