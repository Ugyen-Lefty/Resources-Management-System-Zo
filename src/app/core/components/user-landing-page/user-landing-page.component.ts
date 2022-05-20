import { Component, OnInit } from '@angular/core';
import { filter, tap } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.scss']
})
export class UserLandingPageComponent implements OnInit {

  users: any;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getUsersList()
      .subscribe((res: any) => {
        res.forEach((res: any) => {
          if(res.id === "jntWRNUzw5tIItzzuafl"){
            this.users = res;
          }
        });
      });
  }

}
