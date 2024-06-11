import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaPageRoutingModule } from './dieta-routing.module';

import { DietaPage } from './dieta.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [DietaPage]
})
export class DietaPageModule {}
