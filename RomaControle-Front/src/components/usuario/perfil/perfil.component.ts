import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import ValidatorField from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validation();
  }
  validation() {
    this.form = this.fb.group(
      {
        primeiroNome: [null, [Validators.required]],
        ultimoNome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        telefone: [null, Validators.required],
        funcao: [null, Validators.required],
        descricao: [null, Validators.required],
        senha: [null, [Validators.required, Validators.minLength(6)]],
        confirmarSenha: [null, Validators.required],
      },
      { validator: ValidatorField.MustMatch('senha', 'confirmarSenha') }
    );
  }
}
