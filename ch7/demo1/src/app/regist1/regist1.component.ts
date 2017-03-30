import {Component, OnInit} from "@angular/core";
import {FormGroup, FormBuilder, AbstractControl, Validators} from "@angular/forms";
import {mobileValidator, equalValidator, mobileAsyncValidator} from "../validator/validators";

@Component({
  selector: 'app-regist1',
  templateUrl: './regist1.component.html',
  styleUrls: ['./regist1.component.css']
})
export class Regist1Component implements OnInit {

  valid(c: AbstractControl): {[key: string]: any} {
    return {"a": "b"};
  }

  formModel: FormGroup;

  constructor(fb: FormBuilder) {
    // this.formModel = new FormGroup({
    //   username': new FormControl(),
    //   'mobile': new FormControl(),
    //   'passwordsGroup': new FormGroup({
    //     'password': new FormControl(),
    //     'pconfirm': new FormControl()
    //   })
    // });

    this.formModel = fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordsGroup: fb.group({
        password: ['', Validators.minLength(6)],
        pconfirm: ['']
      }, {validator: equalValidator})
    })
  }

  onSubmit() {

    let isValid: boolean = this.formModel.get("username").valid;
    // console.log("username 是否校验通过: " + isValid);
    let errors: any = this.formModel.get("username").errors;
    // console.log("username 校验信息: " + JSON.stringify(errors));

    if(this.formModel.valid) {
      console.log(this.formModel.value);
    }

  }

  ngOnInit() {
  }

}
