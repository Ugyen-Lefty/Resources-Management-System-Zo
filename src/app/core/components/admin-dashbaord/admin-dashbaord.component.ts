import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-dashbaord',
  templateUrl: './admin-dashbaord.component.html',
  styleUrls: ['./admin-dashbaord.component.scss']
})
export class AdminDashbaordComponent implements OnInit {

  currentUser: any;
  dashboard: any;
  constructor(private api: ApiService)  { }

  ngOnInit(): void {
  this.currentUser = JSON.parse(localStorage.getItem('current user') || '');
    this.api.getAdminDashboard().subscribe( res => {
         this.dashboard = res;
    });
  }

}
