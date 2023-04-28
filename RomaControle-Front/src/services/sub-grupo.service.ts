import { Injectable } from '@angular/core';
import {take} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {SubGrupoProduto} from "../models/sub-grupo-produto";

@Injectable({
  providedIn: 'root'
})
export class SubGrupoService {

  baseUrl = 'http://localhost:8080/api/produtos/subgrupos';
  constructor(private http: HttpClient) { }

  // get subgrupos by gruposId
  getSubGruposByGruposId(id: string): any {
    return this.http.get<SubGrupoProduto[]>(`${this.baseUrl}/grupos/${id}`).pipe(take(1));
  }

  //post subgrupo
  post(subGrupo: SubGrupoProduto): any {
    return this.http.post<SubGrupoProduto>(this.baseUrl, subGrupo).pipe(take(1));
  }

  // put subgrupo
  put(subGrupo: SubGrupoProduto): any {
    return this.http.put<SubGrupoProduto>(this.baseUrl, subGrupo).pipe(take(1));
  }

}
