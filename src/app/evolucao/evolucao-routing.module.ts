import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvolucaoPage } from './evolucao.page';

const routes: Routes = [
  {
    path: '',
    component: EvolucaoPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvolucaoPageRoutingModule {}
