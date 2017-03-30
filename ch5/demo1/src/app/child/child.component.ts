import {
  Component, OnInit, ViewEncapsulation, ContentChildren, AfterContentInit,
  AfterContentChecked, QueryList, AfterViewInit, AfterViewChecked
} from '@angular/core';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
  }

  @ContentChildren(HeaderComponent)
  header:QueryList<HeaderComponent>;

  ngAfterContentInit(): void {
    console.log("child投射内容初始化完毕,参数是"+this.getParam());
  }

  ngAfterContentChecked(): void {
    console.log("child投射变更检测完毕,参数是"+this.getParam());
    this.header.map(p => p.param = "1");
  }

  ngAfterViewInit(): void {
    console.log("child视图初始化完毕");
  }

  ngAfterViewChecked(): void {
    console.log("child视图变更检测完毕");
  }

  private getParam() {
    let value;
    this.header.map(p => value = p.param);
    return value;
  }
}
