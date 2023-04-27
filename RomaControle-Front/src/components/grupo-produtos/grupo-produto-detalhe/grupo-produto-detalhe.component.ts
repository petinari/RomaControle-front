import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-grupo-produto-detalhe',
  templateUrl: './grupo-produto-detalhe.component.html',
  styleUrls: ['./grupo-produto-detalhe.component.css'],
})
export class GrupoProdutoDetalheComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validation();
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
    });
  }

  //func thats reset form on clicl on cancelar açao
  public resetForm(): void {
    this.form.reset();
  }
}
