import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  private stocks: Array<Stock>;

  constructor(public router: Router) {
  }

  ngOnInit() {

    this.stocks = [
      new Stock(1, "第一只股票", 1.99, 3.5, "这是第一只股票,是我在学习慕课网Angular入门实战时创建的", ["IT", "互联网"]),
      new Stock(2, "第二只股票", 2.99, 4.5, "这是第二只股票,是我在学习慕课网Angular入门实战时创建的", ["金融"]),
      new Stock(3, "第三只股票", 3.99, 2.5, "这是第三只股票,是我在学习慕课网Angular入门实战时创建的", ["IT"]),
      new Stock(4, "第四只股票", 4.99, 3.5, "这是第四只股票,是我在学习慕课网Angular入门实战时创建的", ["互联网"]),
      new Stock(5, "第五只股票", 5.99, 4.5, "这是第五只股票,是我在学习慕课网Angular入门实战时创建的", ["金融"]),
      new Stock(6, "第六只股票", 6.99, 2.5, "这是第六只股票,是我在学习慕课网Angular入门实战时创建的", ["互联网", "金融"])
    ]
  }

  update(stock: Stock) {
    this.router.navigate(['/stock', stock.id]);
  }

}

export class Stock {
  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
