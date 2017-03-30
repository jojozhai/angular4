import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  private productId:number;

  private test:boolean;

  private isProd:boolean;

  constructor(private routeInfo: ActivatedRoute) {
    routeInfo.params.subscribe((params: Params) => this.productId = params["id"]);
    routeInfo.queryParams.subscribe((params: Params) => this.test = params["test"]);
    this.isProd = routeInfo.snapshot.data[0]['isProd'];
  }

  ngOnInit() {

  }

}

export class Product {

  constructor(public id:number,
              public name:string
  ){}
}
