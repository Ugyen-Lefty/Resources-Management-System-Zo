import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobPostingComponent } from './components/job-posting/job-posting.component';
import { TalentsComponent } from './components/talents/talents.component';
import { SidebarComponent } from './components/sidebar/sidebar';
import { UserLandingPageComponent } from './components/user-landing-page/user-landing-page.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WorkProgressComponent } from './components/work-progress/work-progress.component';
import { WorkTrackerComponent } from './components/work-tracker/work-tracker.component';
import { YourProjectsComponent } from './components/your-projects/your-projects.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';

const routes: Routes = [
  { path: '', component: SidebarComponent, children: [
    { path: 'landing', component: UserLandingPageComponent},
    { path: 'job-posting', component: JobPostingComponent},
    { path: 'work-tracker', component: WorkTrackerComponent},
    { path: 'talents', component: TalentsComponent},
    { path: 'your-projects', component: YourProjectsComponent},
    { path: 'user-profile', component: UserProfileComponent},
    { path: 'work-progress', component: WorkProgressComponent},
     {path: 'job-posting/details/:id', component: PostDetailsComponent},
     {path: 'chats', component: ChatsComponent},
     {path: 'job/:jid/card-details/:cid', component: CardDetailsComponent},
     {path: 'job-listing', component: JobListingComponent},
      { path: '', redirectTo: 'landing', pathMatch: 'full' }


  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
