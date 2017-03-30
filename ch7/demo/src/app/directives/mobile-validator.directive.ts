import {Directive} from "@angular/core";
import {NG_VALIDATORS} from "@angular/forms";
import {mobileValidator} from "../validator/validators";

@Directive({
  selector: '[mobile]',
  providers: [{provide: NG_VALIDATORS, useValue:mobileValidator, multi:true}]
})
export class MobileValidatorDirective {

  constructor() { }

}
