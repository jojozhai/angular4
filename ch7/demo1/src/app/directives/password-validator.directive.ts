import { Directive } from '@angular/core';
import {equalValidator} from "../validator/validators";
import {NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[equal]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: equalValidator,
      multi: true
    }
  ]
})
export class PasswordValidatorDirective {

  constructor() { }

}
