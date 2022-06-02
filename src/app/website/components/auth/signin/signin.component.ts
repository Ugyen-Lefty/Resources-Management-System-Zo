import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm!: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signin() {
    this.api.signin(this.signinForm.value).subscribe((res: any) => {
      Swal.fire('Signed in successfully!', '', 'success').then(() => {
        localStorage.setItem('User Role', res.roles);
        this.router.navigate(['core']);
      });
    }, () => {
      Swal.fire('Wrong email or password!', '', 'error');
    });
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
