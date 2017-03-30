import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  mobileValid:boolean = true;

  mobilePristine:boolean = true;

  onSubmit(formValues:any, valid:boolean) {
    console.log(formValues);
  }

  onMobileInput(form:NgForm){
    if(form) {
      this.mobileValid = form.form.get('mobile').valid;
      this.mobilePristine = form.form.get('mobile').pristine;
    }
  }


}
