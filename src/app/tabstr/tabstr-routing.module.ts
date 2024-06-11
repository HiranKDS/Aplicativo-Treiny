import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabstrPage } from './tabstr.page';

const routes: Routes = [
  {
    path: 'tabstr',
    component: TabstrPage,
    children: [
      {
        path: 'hometr',
        loadChildren: () => import('../hometr/hometr.module').then(m => m.HometrPageModule)
      },
     
      {
        path: 'alunos',
        loadChildren: () => import('../alunos/alunos.module').then(m => m.AlunosPageModule)
      },


      {
        path: '',
        redirectTo: '/tabstr/hometr',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabstr/hometr',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabstrPageRoutingModule {}
