import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar';
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
import { MatChipsModule } from '@angular/material/chips';
import { FullCalendarModule } from '@fullcalendar/angular';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { WorkProgressComponent } from './components/work-progress/work-progress.component';
import { MatCardModule } from '@angular/material/card';
import { KanbanComponent } from './components/work-progress/kanban/kanban.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CardCreationComponent } from './components/post-details/card-creation/card-creation.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatMenuModule} from "@angular/material/menu";
import { UserProfileModalComponent } from './components/user-profile/user-profile-modal/user-profile-modal.component';
import { ChatsComponent } from './components/chats/chats.component';
import { TalkService } from './services/talk.service';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TalentVisibilityComponent } from './components/talent-visibility/talent-visibility.component';
import { BookmarkedSelectedComponent } from './components/talent-visibility/bookmarked-selected/bookmarked-selected.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TalentDetailsComponent } from './components/talents/talent-details/talent-details.component';
import { JobListingComponent } from './components/job-listing/job-listing.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionModalComponent } from './components/subscription/subscription-modal/subscription-modal.component';
import { ScanComponent } from './components/subscription/scan/scan.component';
import { RmaComponent } from './components/subscription/rma/rma.component';
import { AdditionalInfoComponent } from './components/user-profile/additional-info/additional-info.component';
import { NegotiationComponent } from './components/card-details/negotiation/negotiation.component';
import {MatStepperModule} from '@angular/material/stepper';
import { PortalComponent } from './components/post-details/portal/portal.component';
import { AdminDashbaordComponent } from './components/admin-dashbaord/admin-dashbaord.component'; 


@NgModule({
  declarations: [
    SidebarComponent,
    UserLandingPageComponent,
    JobPostingComponent,
    WorkTrackerComponent,
    TalentsComponent,
    YourProjectsComponent,
    JobPostingModalComponent,
    YourProjectsComponent,
    UserProfileComponent,
    PostDetailsComponent,
    CardCreationComponent,
    UserProfileComponent,
    WorkProgressComponent,
    KanbanComponent,
    ChatsComponent,
    UserProfileModalComponent,
    CardDetailsComponent,
    TalentVisibilityComponent,
    BookmarkedSelectedComponent,
    TalentDetailsComponent,
    JobListingComponent,
    SubscriptionComponent,
    SubscriptionModalComponent,
    ScanComponent,
    RmaComponent,
    AdditionalInfoComponent,
    NegotiationComponent,
    PortalComponent,
    AdminDashbaordComponent
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
        MatChipsModule,
        MatInputModule,
        MatButtonModule,
        FullCalendarModule,
        MatCardModule,
        DragDropModule,
        MatButtonModule,
        MatDialogModule,
        MatInputModule,
        FormsModule,
        MatTabsModule,
        MatMenuModule,
        HttpClientModule,
        MatRadioModule,
        MatCheckboxModule,
        NgxMaterialTimepickerModule,
        MatStepperModule
    ],
    providers: [TalkService],

})
export class CoreModule { }
