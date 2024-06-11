import { NgModule } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Routes, RouterModule } from '@angular/router';

import { AlunosPage } from './alunos.page';

const routes: Routes = [
  {
    path: '',
    component: AlunosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunosPageRoutingModule {}
