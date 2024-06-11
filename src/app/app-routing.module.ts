import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dieta',
    loadChildren: () => import('./dieta/dieta.module').then(m => m.DietaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'login-acad',
    loadChildren: () => import('./login-acad/login-acad.module').then(m => m.LoginAcadPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabstr/tabstr.module').then(m => m.TabstrPagePageModule)
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosPageModule)
  },
  {
    path: 'hometr',
    loadChildren: () => import('./hometr/hometr.module').then(m => m.HometrPageModule)
  },
  {
    path: 'exercicios/:id',
    loadChildren: () => import('./exercicios/exercicios.module').then(m => m.ExerciciosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
