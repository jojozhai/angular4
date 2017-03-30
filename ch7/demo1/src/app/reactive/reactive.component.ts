import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  stockFilter: FormControl = new FormControl('IBM');

  formModel:FormGroup = new FormGroup({
    dateRange: new FormGroup({
      from: new FormControl(),
      to: new FormControl()
    }),

    emails: new FormArray([
      new FormControl()
    ])
  });

  addEmail() {
    let emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
