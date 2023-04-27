import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export default class ValidatorField {
  // funcao estatica que verifica se o valor de dois campos sao iguais
  static MustMatch(
    controlName: string,
    matchingControlName: string
    // AbstractControlOptions?: AbstractControlOptions
  ): ValidatorFn {
    return (fb: AbstractControl): ValidationErrors | null => {
      const control = fb.get(controlName);
      const matchingControl = fb.get(matchingControlName);

      if (matchingControl?.errors && !matchingControl.errors['mustMatch']) {
        return null;
      }

      if (control?.value !== matchingControl?.value) {
        matchingControl?.setErrors({ mustMatch: true });
      } else {
        matchingControl?.setErrors(null);
      }
      return null;
    };
  }
}
