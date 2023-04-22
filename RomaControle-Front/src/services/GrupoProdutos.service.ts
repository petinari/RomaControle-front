import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GrupoProdutos } from 'src/models/GrupoProdutos';

@Injectable({
  providedIn: 'root',
})
export class GrupoProdutosService {
  baseUrl = 'http://localhost:8080/api/produtos/grupos';
  constructor(private http: HttpClient) {}

  getGrupoProdutos(): Observable<GrupoProdutos[]> {
    return this.http.get<GrupoProdutos[]>(this.baseUrl);
  }

  getGrupoProdutosById(id: string): Observable<GrupoProdutos> {
    return this.http.get<GrupoProdutos>(`${this.baseUrl}/${id}`);
  }

  //get grupoProdutos by nome
  getGrupoProdutosByNome(nome: string): Observable<GrupoProdutos> {
    return this.http.get<GrupoProdutos>(`${this.baseUrl}/nome/${nome}`);
  }
}
