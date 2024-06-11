import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'evolucao',
        loadChildren: () => import('../evolucao/evolucao.module').then(m => m.EvolucaoPageModule)
      },
      {
        path: 'treinos',
        loadChildren: () => import('../treinos/treinos.module').then(m => m.TreinosPageModule)
      },
      {
        path: 'dieta',
        loadChildren: () => import('../dieta/dieta.module').then(m => m.DietaPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
