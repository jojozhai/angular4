import {Component, OnInit} from "@angular/core";
import {Stock} from "../stock/stock.component";

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  stock:Stock = new Stock(1, "第一只股票", 1.99, 3.5, "这是第一只股票,是我在学习慕课网Angular入门实战时创建的", ["IT", "互联网"]);

  constructor() { }

  ngOnInit() {
  }

}
