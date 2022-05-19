import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { TalentsComponent } from './components/talents/talents.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { WorkTrackerComponent } from './components/work-tracker/work-tracker.component';

const routes: Routes = [
  { path: '', component: UserDashboardComponent, children: [
    { path: 'landing', component: UserLandingPageComponent},
    { path: 'job-posting', component: JobPostingComponent},
    { path: 'work-tracker', component: WorkTrackerComponent},
    { path: 'talents', component: TalentsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
