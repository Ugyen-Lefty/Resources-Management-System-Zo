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
}
