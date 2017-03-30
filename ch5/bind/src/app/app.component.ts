import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {PriceQuote} from "./price-quote/price-quote.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  priceQuote:PriceQuote = new PriceQuote("",0);

  priceQuoteHandler(event: PriceQuote) {
    this.priceQuote = event;
  }

  constructor() {
    var subscription = Observable.from([1,2,3,4])
      .filter((e) => e%2 == 0)
      .map((e) => e*e)
      .subscribe(
        e => console.log(e),
        error => console.error(error),
        () => console.log("结束啦!")
      );

    subscription.unsubscribe();
  }
}
