import {
  Component, ViewChild, OnInit, AfterViewInit, AfterViewChecked, AfterContentInit,
  AfterContentChecked, ContentChildren
} from "@angular/core";
import {Child1Component} from "./child1/child1.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {


  ngAfterContentInit(): void {
    console.log("app投射内容初始化完毕")
  }

  ngAfterContentChecked(): void {
    console.log("app投射变更检测完毕");
  }

  // @ViewChild('child1')
  // firstChild:Child1Component;

  param: string = 'Hello';
  message: string = 'Hello';
  user: {name: string} = {name: 'John'};

  age: number = 1;

  constructor() {
    // setInterval(() => this.firstChild.greet("Tom"), 1000);
  }

  ngOnInit(): void {
    // this.firstChild.greet("Tom");
  }

  ngAfterViewInit(): void {
    console.log("app视图初始化完毕");
  }

  ngAfterViewChecked(): void {
    console.log("app视图变更检测完毕");
  }


}
