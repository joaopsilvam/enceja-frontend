import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { AlunosComponent } from './pages/alunos/alunos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Login como página inicial

  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  },

  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],  // Protege todas as páginas dentro do AdminLayout
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard], // Protege as páginas dentro do AdminLayout
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
      },
      { path: 'alunos', component: AlunosComponent } // Rota para os alunos
    ]
  },
  { path: '**', redirectTo: 'login' } // Redireciona qualquer rota inválida para login
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
