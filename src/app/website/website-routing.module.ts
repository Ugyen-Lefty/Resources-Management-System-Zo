import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './components/website/website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
