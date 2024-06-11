import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HometrPage } from './hometr.page';

const routes: Routes = [
  {
    path: '',
    component: HometrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HometrPageRoutingModule {}
