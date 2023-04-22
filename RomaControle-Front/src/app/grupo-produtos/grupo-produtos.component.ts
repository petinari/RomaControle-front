import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grupo-produtos',
  templateUrl: './grupo-produtos.component.html',
  styleUrls: ['./grupo-produtos.component.scss'],
})
export class GrupoProdutosComponent implements OnInit {
  public grupoProdutos: any = [];
  private _filtroGrupoProdutos: string = '';
  grupoProdutosFiltrados: any = [];

  public get filtroGrupoProdutos(): string {
    return this._filtroGrupoProdutos;
  }

  public set filtroGrupoProdutos(value: string) {
    this._filtroGrupoProdutos = value;
    this.grupoProdutosFiltrados = this.filtroGrupoProdutos
      ? this.filtrarGrupoProdutos(this.filtroGrupoProdutos)
      : this.grupoProdutos;
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getGrupoProdutos();
  }
  getGrupoProdutos() {
    this.http
      .get('http://localhost:8080/api/produtos/grupos')
      .subscribe((resp) => {
        this.grupoProdutos = resp;
        this.grupoProdutosFiltrados = this.grupoProdutos;
      });
  }

  private filtrarGrupoProdutos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toString().toLocaleLowerCase();
    return this.grupoProdutos.filter(
      (grupo: { nome: any }) =>
        grupo.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
}
