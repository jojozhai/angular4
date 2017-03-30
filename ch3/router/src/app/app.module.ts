import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ProductDescComponent} from "./product/product-desc/product-desc.component";
import {SellerInfoComponent} from "./product/seller-info/seller-info.component";
import {LoginGuard} from "./guard/login.guard";
import {UnsavedGuard} from "./guard/unsaved.guard";
import { ChatComponent } from './chat/chat.component';
import {ProductResolveGuard} from "./guard/product.guard";

const routes: Routes = [
  {path: '',  redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'chat', component: ChatComponent, outlet:"aux"},
  {
    path: 'product/:id',
    resolve: {
      product:ProductResolveGuard
    },
    component: ProductComponent,
    canActivate: [LoginGuard],
    canDeactivate: [UnsavedGuard],
    data: [{isProd: true}],
    children: [
      {
        path: '', component: ProductDescComponent,
      },
      {
        path: 'seller/:id', component: SellerInfoComponent
      }
    ]
  },
  {
    path: '**', component: Code404Component
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component,
    ProductDescComponent,
    SellerInfoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    LoginGuard, UnsavedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
