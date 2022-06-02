import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', Validators.required],
      gender: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      roles: ['', Validators.required],
      avatar: ['']
    })
  }

  signup() {
    this.api.signup(this.signupForm.value).subscribe(res => {
      Swal.fire('Signed Up successfully!', '', 'success').then(() => {
        localStorage.setItem('User Role', this.signupForm.get('role')?.value);
        this.router.navigate(['login']);
      });
    }, () => {
      Swal.fire('Signed Up Failed!', '', 'error');
    });
  }

}
