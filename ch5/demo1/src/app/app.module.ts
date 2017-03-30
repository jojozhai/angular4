import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BindComponent} from "./bind/bind.component";
import {MultiplePipe} from "./pipe/multiple.pipe";
import {ChildComponent} from "./child/child.component";
import {LifeComponent} from "./life/life.component";
import {ChangeComponent} from "./change/change.component";
import {Child1Component} from "./child1/child1.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {Routes, RouterModule} from "@angular/router";

var routeConfig:Routes = [
  {path:'', component: HeaderComponent},
  {path:'footer', component: FooterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    MultiplePipe,
    ChildComponent,
    LifeComponent,
    ChangeComponent,
    Child1Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
