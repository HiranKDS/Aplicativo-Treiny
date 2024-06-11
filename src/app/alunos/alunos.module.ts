import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { IonicModule } from '@ionic/angular';

import { AlunosPageRoutingModule } from './alunos-routing.module';

import { AlunosPage } from './alunos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlunosPageRoutingModule,
    ExploreContainerComponentModule,
  ],
  declarations: [AlunosPage]
})
export class AlunosPageModule {}
