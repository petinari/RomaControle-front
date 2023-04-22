import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoProdutosService } from 'src/services/GrupoProdutos.service';
import { GrupoProdutos } from 'src/models/GrupoProdutos';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-grupo-produtos',
  templateUrl: './grupo-produtos.component.html',
  styleUrls: ['./grupo-produtos.component.scss'],
})
export class GrupoProdutosComponent implements OnInit {
  modalRef?: BsModalRef;
  message?: string;
  public grupoProdutos: GrupoProdutos[] = [];
  private _filtroGrupoProdutos: string = '';
  grupoProdutosFiltrados: GrupoProdutos[] = [];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef?.hide();
  }

  decline(): void {
    this.message = 'Declined!';
    this.modalRef?.hide();
  }

  public get filtroGrupoProdutos(): string {
    return this._filtroGrupoProdutos;
  }

  public set filtroGrupoProdutos(value: string) {
    this._filtroGrupoProdutos = value;
    this.grupoProdutosFiltrados = this.filtroGrupoProdutos
      ? this.filtrarGrupoProdutos(this.filtroGrupoProdutos)
      : this.grupoProdutos;
  }
  constructor(
    private grupoProdutosService: GrupoProdutosService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    this.getGrupoProdutos();
  }
  getGrupoProdutos() {
    this.grupoProdutosService.getGrupoProdutos().subscribe((resp) => {
      this.grupoProdutos = resp;
      this.grupoProdutosFiltrados = this.grupoProdutos;
    });
  }

  private filtrarGrupoProdutos(filtrarPor: string): GrupoProdutos[] {
    filtrarPor = filtrarPor.toString().toLocaleLowerCase();
    return this.grupoProdutos.filter(
      (grupo: { nome: any }) =>
        grupo.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }
}
