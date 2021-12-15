import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimePickerPageRoutingModule } from './date-time-picker-routing.module';

import { DateTimePickerPage } from './date-time-picker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePickerPageRoutingModule
  ],
  declarations: [DateTimePickerPage]
})
export class DateTimePickerPageModule {}
