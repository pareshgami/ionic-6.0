import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderFadePage } from './header-fade.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderFadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderFadePageRoutingModule {}
