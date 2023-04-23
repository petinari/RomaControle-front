import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoProdutosComponent } from '../components/grupo-produtos/grupo-produtos.component';
import { ContatosComponent } from 'src/components/contatos/contatos.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { PerfilComponent } from 'src/components/perfil/perfil.component';

const routes: Routes = [
  {
    path: 'grupoprodutos',
    component: GrupoProdutosComponent,
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
