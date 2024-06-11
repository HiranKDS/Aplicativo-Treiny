import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginAcadPage } from './login-acad.page';

const routes: Routes = [
  {
    path: '',
    component: LoginAcadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginAcadPageRoutingModule {}
