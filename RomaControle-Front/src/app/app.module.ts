import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrupoProdutosComponent } from './grupo-produtos/grupo-produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, GrupoProdutosComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    HttpClientModule,
  ],
  providers: [],
})
export class AppModule {}
