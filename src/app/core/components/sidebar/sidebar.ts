import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class SidebarComponent implements OnInit {

  drawer = false;
  currentUser: any;
  role: any;
  isPremium: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  this.api.getUser().subscribe( (res: any) => {
      this.currentUser = res;
      this.isPremium = res.subscribed;
      this.role = res.roles;
      localStorage.setItem('user_id', res.id);
      localStorage.setItem('current user', JSON.stringify(res));
  })
  }

  signOut() {
    this.api.signOut().subscribe( () => {
    localStorage.removeItem('User Role');
    localStorage.removeItem('user_id');
    localStorage.removeItem('current user');
    location.href = "";
    });
  }

}
