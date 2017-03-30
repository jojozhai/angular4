import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/Rx";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Observable<any>;

  productTitle:string;
  productPrice:number;

  constructor(private http: Http) {

    this.products = this.http.get("/api/products").map(res => res.json());

  }

  ngOnInit() {

  }

  getProductByID(formValue:any) {
    this.http.get("/api/product/"+formValue.productID).map(res => res.json())
      .subscribe(
        data => {
          this.productTitle = data.title;
          this.productPrice = data.price;
        }
      )
  }

}
