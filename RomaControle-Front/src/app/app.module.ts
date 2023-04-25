import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoProdutosComponent } from '../components/grupo-produtos/grupo-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateFormatPipePipe } from './helpers/DateFormatPipe.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContatosComponent } from 'src/components/contatos/contatos.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { PerfilComponent } from 'src/components/usuario/perfil/perfil.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { GrupoProdutosListaComponent } from 'src/components/grupo-produtos/grupo-produtos-lista/grupo-produtos-lista.component';
import { GrupoProdutoDetalheComponent } from 'src/components/grupo-produtos/grupo-produto-detalhe/grupo-produto-detalhe.component';
import { UsuarioComponent } from 'src/components/usuario/usuario.component';
import { LoginComponent } from 'src/components/usuario/login/login.component';
import { RegistroComponent } from 'src/components/usuario/registro/registro.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    GrupoProdutosComponent,
    ContatosComponent,
    DashboardComponent,
    PerfilComponent,
    NavComponent,
    TituloComponent,
    DateFormatPipePipe,
    GrupoProdutosListaComponent,
    GrupoProdutoDetalheComponent,
    UsuarioComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      progressBar: true,
    }),
    NgxSpinnerModule,
  ],

  providers: [],
})
export class AppModule {}
