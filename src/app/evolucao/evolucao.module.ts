import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EvolucaoPage } from './evolucao.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { EvolucaoPageRoutingModule } from './evolucao-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    EvolucaoPageRoutingModule
  ],
  declarations: [EvolucaoPage]
})
export class EvolucaoPageModule {}
