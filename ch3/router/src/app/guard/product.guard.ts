import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {ProductComponent, Product} from "../product/product.component";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
/**
 * Created by zhailiang on 2017/1/23.
 */
@Injectable()
export class ProductResolveGuard implements Resolve<ProductComponent> {

  constructor(private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductComponent>|Promise<ProductComponent>|ProductComponent {

    let productId:number = route.params['id'];

    if(productId == 1) {
      return undefined;
    }else{
      this.router.navigate(['/home']);
      return undefined;
    }


  }

}
