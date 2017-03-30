import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){

  }

  private productId:number = 1;

  title = 'app works!';

  toProductDetail() {
    this.router.navigate(["/product", 2], {
      queryParams: {test: false}
    });
  }
}
