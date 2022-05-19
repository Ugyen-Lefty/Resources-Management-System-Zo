import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteModule } from './website/website.module';

const routes: Routes = [
  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule)},
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
