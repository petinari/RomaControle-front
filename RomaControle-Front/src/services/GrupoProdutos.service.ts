import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, take} from 'rxjs';
import { GrupoProdutos } from 'src/models/GrupoProdutos';

@Injectable({
  providedIn: 'root',
})
export class GrupoProdutosService {
  baseUrl = 'http://localhost:8080/api/produtos/grupos';
  constructor(private http: HttpClient) {}

  getGrupoProdutos(): Observable<GrupoProdutos[]> {
    return this.http.get<GrupoProdutos[]>(this.baseUrl).pipe(take(1));
  }

  getGrupoProdutosById(id: string): Observable<GrupoProdutos> {
    console.log(`${this.baseUrl}/${id}`);
    return this.http.get<GrupoProdutos>(`${this.baseUrl}/${id}`).pipe(take(1));

  }

  //post grupoProdutos
  post(grupoProdutos: GrupoProdutos): Observable<GrupoProdutos> {
    return this.http.post<GrupoProdutos>(this.baseUrl, grupoProdutos).pipe(take(1));

  }

  // put grupoProdutos
  put(grupoProdutos: GrupoProdutos): Observable<GrupoProdutos> {
    return this.http.put<GrupoProdutos>(this.baseUrl, grupoProdutos).pipe(take(1));
  }

  //get grupoProdutos by nome
  getGrupoProdutosByNome(nome: string): Observable<GrupoProdutos> {
    return this.http.get<GrupoProdutos>(`${this.baseUrl}/nome/${nome}`).pipe(take(1));
  }

  //delete grupoProdutos
  desabilitaGrupoProdutos(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, null).pipe(take(1));
  }
}
