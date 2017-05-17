import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Array<Menu> = [];

  currentMenuId: number = 0;

  constructor(public router: Router) {
    router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        if (event.url == '/dashboard') {
          this.currentMenuId = 0;
        } else if (event.url.startsWith('/stock') ) {
          this.currentMenuId = 1;
        }
      });
  }

  ngOnInit() {
    this.menus = [
      new Menu(0, '首页', 'dashboard'),
      new Menu(1, '股票管理', 'stock'),
      new Menu(3, '系统管理', null, [
        new Menu(4, '参数管理', 'param'),
        new Menu(5, '权限管理', 'permission')
      ]),
    ];
  }

  nav(menu: Menu) {
    if (menu.link) {
      this.router.navigateByUrl(menu.link);
    }
    this.currentMenuId = menu.id;
  }

}

export class Menu {
  constructor(public id: number,
              public name: string,
              public link: string,
              public childs?: Array<Menu>) {

  }
}
