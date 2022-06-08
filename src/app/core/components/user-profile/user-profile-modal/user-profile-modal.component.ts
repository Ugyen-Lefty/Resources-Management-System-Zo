import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile-modal',
  templateUrl: './user-profile-modal.component.html',
  styleUrls: ['./user-profile-modal.component.scss']
})
export class UserProfileModalComponent implements OnInit {

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
  }

  gender = new FormControl()
  genderList: string[] = ['Male', 'Female'];
  roles: string[] = ['Buyer', 'Worker'];
  userEditForm!: FormGroup;
  attachment = new FormControl();
  @Output() isEdit = new EventEmitter<any>();
  currentUser!: any;
  avatar!: any;

  ngOnInit(): void {
    this.setForm();
    this.api.getUser().subscribe((res: any) => {
      this.userEditForm.patchValue(res);
      this.currentUser = res;
    });
  }

  setForm(): void {
    this.userEditForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      roles: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  selectFiles(files: any) {
    this.attachment.setValue(files.files);
  }

  cancel() {
    this.userEditForm.reset();
    this.isEdit.emit(false);
  }

  editUser(event?: any) {
    this.api.updateUser({...this.userEditForm.value, avatar: this.avatar }).subscribe(() => {
      Swal.fire('User Edited Successfully!', '', 'success');
    }, () => {
      Swal.fire('User Edit Failed!', '', 'error');
    });
  }

  uploadAvatar(event: any): void {
    this.avatar = event.target['files'][0];
  }

}
