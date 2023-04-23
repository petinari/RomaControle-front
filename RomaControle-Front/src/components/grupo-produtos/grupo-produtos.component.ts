import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoProdutosService } from 'src/services/GrupoProdutos.service';
import { GrupoProdutos } from 'src/models/GrupoProdutos';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    this.toastr.success('Hello world!', 'Toastr fun!');
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
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show();

    this.getGrupoProdutos();

    this.spinner.hide();
  }

  //get grupo produtos and subscribe to the response
  getGrupoProdutos() {
    this.grupoProdutosService.getGrupoProdutos().subscribe({
      next: (grupoProdutos) => {
        this.grupoProdutos = grupoProdutos;
        this.grupoProdutosFiltrados = this.grupoProdutos;
      },
      error: (err: Error) => {
        this.spinner.hide();
        this.toastr.error(
          `Erro ao tentar carregar grupo de produtos: ${err.message}`
        );
      },
      complete: () => this.spinner.hide(),
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
