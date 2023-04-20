import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-grupo-produtos',
  templateUrl: './grupo-produtos.component.html',
  styleUrls: ['./grupo-produtos.component.scss'],
})



export class GrupoProdutosComponent implements OnInit {

  public grupoProdutos: any=[]
  private _filtroGrupoProdutos: string = ""

  public get filtroGrupoProdutos(): string{
    return this._filtroGrupoProdutos
  }

public set filtroGrupoProdutos(value: string){
    this._filtroGrupoProdutos = value
    this.grupoProdutos = this.filtroGrupoProdutos ? this.filtrarGrupoProdutos(this.grupoProdutos) : this.grupoProdutos
}
  constructor(private http: HttpClient) {
  }

   ngOnInit() {
     this.getGrupoProdutos()
  }
   getGrupoProdutos() {
     this.http.get('http://localhost:8080/api/produtos/grupos').subscribe(
      resp => {
        this.grupoProdutos = resp
      }
    )
  }

  private filtrarGrupoProdutos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toString().toLowerCase()
    return this.grupoProdutos.filter(
        (grupo: { nome: string; }) => grupo.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    )
  }
}
