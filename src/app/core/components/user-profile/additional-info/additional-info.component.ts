import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.scss']
})
export class AdditionalInfoComponent implements OnInit {

  @Output() isAdditional = new EventEmitter<any>();
  bankList: string[] = ['Bank of Bhutan', 'Bhutan National Bank', 'Druk PNB', 'Tashi Bank'];
  additionalForm!: FormGroup;
  currentUser: any;
  workerDetails: any;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('current user') || '');
    this.setForm();
    this.initializer();
  }

  initializer(){
    if (this.currentUser.worker_profile) {
      this.additionalForm.patchValue(this.currentUser.worker_profile);
    }
  }

  setForm() {
    this.additionalForm = this.fb.group({
      rate: ['', Validators.required],
      profession: ['', Validators.required],
      available: ['', Validators.required],
      bank_name: ['', Validators.required],
      account_number: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }

  cancel() {
    this.additionalForm.reset();
    this.isAdditional.emit(false);
  }

  newAdditional() {
    if(!this.currentUser.worker_profile){
      const payload = {
        ...this.additionalForm.value,
        user_id: this.currentUser.id
      }
      this.api.postAddtionalInfo(payload).subscribe(() => {
        this.initializer();
        this.cancel();
      });
    }
    else {
      this.editAdditional();
    }
  }

  editAdditional() {
    const payload = {
      ...this.additionalForm.value,
      user_id: this.currentUser.worker_profile.id
    }
    this.api.updateAddtionalInfo(payload, this.currentUser.id).subscribe(() => {
      this.initializer();
      Swal.fire('Additional Information added Successfully', '', 'success').then(() => this.cancel());
    }, () => {
      Swal.fire('Additional Information added Failed', '', 'error');
    });
  }

}
