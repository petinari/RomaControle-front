import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import ValidatorField from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  form!: FormGroup;
  constructor(public fb: FormBuilder) {}

  get f(): any {
    return this.form.controls;
  }

  ngOnInit() {
    this.validation();
  }

  validation() {
    this.form = this.fb.group(
      {
        primeiroNome: [null, [Validators.required]],
        ultimoNome: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        usuario: [null, Validators.required],
        senha: [null, [Validators.required, Validators.minLength(6)]],
        confirmarSenha: [null, Validators.required],
      },
      { validator: ValidatorField.MustMatch('senha', 'confirmarSenha') }
    );
  }
}
