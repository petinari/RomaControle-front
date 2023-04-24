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
  ngOnInit(): void {}
}
