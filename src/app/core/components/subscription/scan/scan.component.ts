import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

  currentUser: any;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getUser().subscribe(res => {
      this.currentUser = res;
    });
  }

  payMoney() {
    this.api.premium({...this.currentUser, subscribed: true}).subscribe(() => {
      Swal.fire('Subscribed to Premium Successfully', '', 'success').then(() => {
        this.router.navigate(['core/landing']);
      });
    }, () => {
      Swal.fire('Subscribed to Premium Failed', '', 'error');
    });
  }

}
