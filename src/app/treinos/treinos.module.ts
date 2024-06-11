import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TreinosPage } from './treinos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { TreinosPageRoutingModule } from './treinos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    TreinosPageRoutingModule
  ],
  declarations: [TreinosPage]
})
export class TreinosPageModule {}
