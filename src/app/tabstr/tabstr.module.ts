import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabstrPageRoutingModule } from './tabstr-routing.module';

import { TabstrPage } from './tabstr.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabstrPageRoutingModule
  ],
  declarations: [TabstrPage]
})
export class TabstrPagePageModule {}
