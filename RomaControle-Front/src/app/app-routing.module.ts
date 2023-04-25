import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GrupoProdutosComponent } from '../components/grupo-produtos/grupo-produtos.component';
import { ContatosComponent } from 'src/components/contatos/contatos.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { PerfilComponent } from 'src/components/usuario/perfil/perfil.component';
import { GrupoProdutosListaComponent } from 'src/components/grupo-produtos/grupo-produtos-lista/grupo-produtos-lista.component';
import { GrupoProdutoDetalheComponent } from 'src/components/grupo-produtos/grupo-produto-detalhe/grupo-produto-detalhe.component';
import { UsuarioComponent } from 'src/components/usuario/usuario.component';
import { LoginComponent } from 'src/components/usuario/login/login.component';
import { RegistroComponent } from 'src/components/usuario/registro/registro.component';

const routes: Routes = [
  {
    path: 'usuario',
    component: UsuarioComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registro',
        component: RegistroComponent,
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'usuario/perfil',
    component: PerfilComponent,
  },
  {
    path: 'grupodeprodutos',
    redirectTo: 'grupodeprodutos/lista',
  },
  {
    path: 'grupodeprodutos',
    component: GrupoProdutosComponent,
    children: [
      {
        path: 'detalhe/:id',
        component: GrupoProdutoDetalheComponent,
      },
      {
        path: 'detalhe',
        component: GrupoProdutoDetalheComponent,
      },
      {
        path: 'lista',
        component: GrupoProdutosListaComponent,
      },
    ],
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
