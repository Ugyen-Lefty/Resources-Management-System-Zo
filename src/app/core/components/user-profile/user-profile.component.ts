import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserProfileModalComponent } from './user-profile-modal/user-profile-modal.component';
import { filter } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any;
  isEdit = false;
  isAdditional = false;
  userForm!: FormGroup;

  constructor(private dialog: MatDialog, private api: ApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializer();
  }

  initializer() {
    this.api.getUser().subscribe(user => {
      this.user = user;
    });
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      roles: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  editProfile() {
    this.isEdit = true;
  }

  toggleEdit(isedit: any){
    this.isEdit = isedit;
  }

  updateProfile(){

  }

  goBack() {
    this.isEdit = false;
    this.initializer();
  }

  goBackAdd() {
    this.isAdditional = false;
    this.initializer();
  }

  additionalInfo() {
    this.isAdditional = true;
  }

  toggleAdditional(isAdditional: any){
    this.isAdditional = isAdditional;
  }

  uploadProfileImage(event: any) {
     const photo = event.target['files'][0];
     const payload = {
       ...this.userForm.value,
        avatar: photo
     }
      this.api.updateUser(payload).subscribe(user => {
          debugger
      });
  }
}
