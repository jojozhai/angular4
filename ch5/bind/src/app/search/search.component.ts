import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges
      .subscribe(stockCode => this.getStockInfo(stockCode));
  }

  getStockInfo(stockCode:string) {
    console.log(`获取${stockCode}的股票信息`)
  }

  ngOnInit() {
  }

}
