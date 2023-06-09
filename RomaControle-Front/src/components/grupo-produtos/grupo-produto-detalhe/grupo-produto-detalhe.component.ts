import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {GrupoProdutosService} from "../../../services/GrupoProdutos.service";
import {GrupoProdutos} from "../../../models/GrupoProdutos";
import {SubGrupoProduto} from "../../../models/sub-grupo-produto";
import {NgxSpinner, NgxSpinnerService} from "ngx-spinner";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-grupo-produto-detalhe',
  templateUrl: './grupo-produto-detalhe.component.html',
  styleUrls: ['./grupo-produto-detalhe.component.css'],
})
export class GrupoProdutoDetalheComponent implements OnInit {
  form!: FormGroup;

  grupoProduto = {} as GrupoProdutos
  _subGrupoProduto = {} as SubGrupoProduto
  estadoSalvar: any = 'post';
  grupoProdutoId: string | null = '';

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private grupoProdutosService: GrupoProdutosService,
  private spinner: NgxSpinnerService, private toastr: ToastrService, private router: Router) {}

  ngOnInit() {
    this.carregarEvento();
    this.validation();

  }
  get f(): any {
    return this.form.controls;
  }
  public cssValidator(campoForm: FormControl | AbstractControl): any {
    return { 'is-invalid': campoForm.errors && campoForm.touched };
  }

  get subGrupos(): FormArray {
    return this.form.get('subGrupos') as FormArray;
  }

  //função que carrega o evento de acordo com o ID
  public carregarEvento(): void {
    this.grupoProdutoId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.grupoProdutoId !== null) {
      this.spinner.show()
      this.grupoProdutosService.getGrupoProdutosById(this.grupoProdutoId).subscribe(
        (grupoProduto: GrupoProdutos) => {
          this.grupoProduto = { ...grupoProduto };
          this.estadoSalvar = 'put';
          this.form.patchValue(this.grupoProduto);
        },
        (error: any) => {
          this.spinner.hide()
          this.toastr.error('Erro ao tentar carregar grupo de produtos', 'Erro!');
          console.error(error);
        },
        () =>{
          this.spinner.hide()
          console.log('Evento carregado com sucesso');
        }
      );
    }
  }

  public validation() {
    this.form = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      ativo: [true, Validators.required],
      subGrupos: this.fb.array([]),
    });
  }

  // função que adiciona subgrupos
  public adicionarSubGrupo(): void {

    this.subGrupos.push(this.criarSubGrupo(this._subGrupoProduto));

  }

  // função que retorna formGroup de subgrupos
  public criarSubGrupo(subGrupo: SubGrupoProduto): FormGroup {
    return this.fb.group({
      id: [subGrupo.id],
      nome: [subGrupo.nome, Validators.required],
      ativo: [subGrupo.ativo, Validators.required]
    });
  }

  //função que salva o evento
  public salvarGrupoProduto(): void {
    this.spinner.show()
    if (this.form.valid) {
      this.grupoProduto = { ...this.form.value };
      if (this.grupoProdutoId !== null) {
        this.grupoProduto.id = this.grupoProdutoId;
      }
      console.log(this.grupoProduto)
      this.grupoProdutosService[this.estadoSalvar](this.grupoProduto).subscribe(
        (grupoProdutoRetorno: GrupoProdutos) => {
          this.toastr.success('Grupo de produtos salvo com sucesso!', 'Sucesso!');
          this.router.navigate(['/grupodeprodutos/lista']);
        },
        (error: any) => {

          this.toastr.error('Erro ao tentar salvar grupo de produtos', 'Erro!');
          console.error(error);
        },
        () =>{

          console.log('Evento salvo com sucesso');
        }
      ).add(() => this.spinner.hide());
    }
  }

  //func thats reset form on clicl on cancelar açao
  public resetForm(): void {
    this.form.reset();
  }



}
