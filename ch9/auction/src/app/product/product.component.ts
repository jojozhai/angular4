import {Component, Input, OnInit} from "@angular/core";
import {Product, ProductService} from "../shared/product.service";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  products: Observable<Product[]>

  private imgUrl = 'http://placehold.it/320x150';

  constructor(private productService: ProductService) {

  }

  ngOnInit() {

    this.products = this.productService.getProducts();

    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    );
  }



}



