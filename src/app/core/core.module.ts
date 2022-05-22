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
import { ReactiveFormsModule } from '@angular/forms';
import { JobPostingModalComponent } from './components/job-posting/job-posting-modal/job-posting-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    UserDashboardComponent,
    UserLandingPageComponent,
    JobPostingComponent,
    WorkTrackerComponent,
    TalentsComponent,
    YourProjectsComponent,
    JobPostingModalComponent,
    YourProjectsComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    FlexLayoutModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class CoreModule { }
