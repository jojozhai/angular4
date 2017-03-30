import {FormControl, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
/**
 * Created by zhailiang on 2017/2/9.
 */

export function mobileValidator(control: FormControl): any {
  let value = (control.value || '')+'';
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(value);
  // console.log("mobile 是否校验通过: " + valid);
  return valid ? null : {mobile: true};
}

export function mobileAsyncValidator(control: FormControl): any {
  let value = (control.value || '')+'';
  var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  let valid = myreg.test(value);
  // console.log("mobile 是否校验通过: " + valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

export function equalValidator(group: FormGroup): any {
  let password:FormControl = group.get('password') as FormControl;
  let pconfirm:FormControl = group.get('pconfirm') as FormControl;

  let valid:boolean = false;
  if(password && pconfirm){
    valid = (password.value === pconfirm.value);
  }

  // console.log("密码 是否校验通过: " + valid);
  return valid ? null : {equal: {description:'密码和确认密码不匹配!'}};
}
