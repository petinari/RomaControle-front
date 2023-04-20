import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Options} from "ngx-bootstrap/positioning/models";

@Component({
  selector: 'app-grupo-produtos',
  templateUrl: './grupo-produtos.component.html',
  styleUrls: ['./grupo-produtos.component.scss'],
})



export class GrupoProdutosComponent implements OnInit {

  public grupoProdutos: any


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

}
