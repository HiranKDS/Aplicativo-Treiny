import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HometrPageRoutingModule } from './hometr-routing.module';

import { HometrPage } from './hometr.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HometrPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [HometrPage]
})
export class HometrPageModule {}
