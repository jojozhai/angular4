import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
/**
 * Created by zhailiang on 2017/1/23.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent> {

  canDeactivate() {

    return window.confirm("你还没有保存.确定要离开么?");
  }

}
