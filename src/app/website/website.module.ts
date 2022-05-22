import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './components/website/website.component';
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    WebsiteComponent
  ],
    imports: [
        CommonModule,
        WebsiteRoutingModule,
        FlexLayoutModule
    ]
})
export class WebsiteModule { }
