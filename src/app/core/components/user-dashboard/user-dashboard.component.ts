import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  drawer = false;
  currentUser: any;
  role: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  this.api.getUser().subscribe( (res: any) => {
      this.currentUser = res;
      this.role = res.roles;
      localStorage.setItem('user_id', res.id);
      localStorage.setItem('current user', JSON.stringify(res));
  })
  }

  signOut() {
    this.api.signOut().subscribe();
    localStorage.removeItem('User Role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('current user');
    location.href = "";
  }

}
