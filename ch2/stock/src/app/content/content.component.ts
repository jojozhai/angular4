import {Component, OnInit} from "@angular/core";
import {NavigationCancel, NavigationEnd, Router} from "@angular/router";
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pageTitle = '';

  pageDesc = '';

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        if(event.url == '/dashboard'){
          this.pageTitle = '这里是首页';
          this.pageDesc = '';
        }else if(event.url.startsWith('/stock')){
          this.pageTitle = '股票信息管理';
          this.pageDesc = '进行股票信息基本增删改查';
        }
      });
  }

  ngOnInit() {
  }

}
