import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateTimePickerPage } from './date-time-picker.page';

const routes: Routes = [
  {
    path: '',
    component: DateTimePickerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimePickerPageRoutingModule {}
