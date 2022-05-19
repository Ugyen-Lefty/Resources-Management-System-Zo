import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { WorkTrackerComponent } from './components/work-tracker/work-tracker.component';
import { TalentsComponent } from './components/talents/talents.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserLandingPageComponent,
    JobPostingComponent,
    WorkTrackerComponent,
    TalentsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
