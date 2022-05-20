import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { WorkTrackerComponent } from './components/work-tracker/work-tracker.component';
import { TalentsComponent } from './components/talents/talents.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {FlexLayoutModule} from "@angular/flex-layout";
import { YourProjectsComponent } from './components/your-projects/your-projects.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserLandingPageComponent,
    JobPostingComponent,
    WorkTrackerComponent,
    TalentsComponent,
    YourProjectsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class CoreModule { }
