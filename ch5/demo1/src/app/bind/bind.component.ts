import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  birthday:Date = new Date();

  pi:number = 3;

  size:number = 7;

  constructor() {
  }

  ngOnInit() {
  }

}
