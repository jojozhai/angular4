import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input()
  stockCode:string;

  @Input()
  amount:number;

  constructor() {
    setTimeout(() => this.stockCode = "IBM", 3000);
  }

  ngOnInit() {
  }

}
