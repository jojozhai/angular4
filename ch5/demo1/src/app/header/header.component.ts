import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log("我是页头，我被销毁了。");
  }

  param:string = "慕课网";

  constructor() {

  }

  ngOnInit() {

  }


}
