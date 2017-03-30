import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";
import 'rxjs/Rx'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Observable<any> ;

  constructor(private http: Http) {

    let myHeaders:Headers = new Headers();
    myHeaders.append("Authorization", "Basic 123456");

    this.products = this.http.get('/api/products', {headers: myHeaders})
      .map((res) => res.json());
  }

  ngOnInit() {

  }

}
