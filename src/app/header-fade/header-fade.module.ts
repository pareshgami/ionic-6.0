import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderFadePageRoutingModule } from './header-fade-routing.module';

import { HeaderFadePage } from './header-fade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderFadePageRoutingModule
  ],
  declarations: [HeaderFadePage]
})
export class HeaderFadePageModule {}
