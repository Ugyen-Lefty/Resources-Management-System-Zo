import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent implements OnInit {

  currentUser: any;
  role: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.role = localStorage.getItem('User Role');
    this.api.getUser().subscribe(res => this.currentUser = res);
  }

}
