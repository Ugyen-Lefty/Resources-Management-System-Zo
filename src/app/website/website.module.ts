import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { WebsiteComponent } from './components/website/website.component';


@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule
  ]
})
export class WebsiteModule { }
