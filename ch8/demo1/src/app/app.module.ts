import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ObservableComponent } from './observable/observable.component';
import {ObservableService} from "./shared/observable.service";
import {SocketService} from "./shared/socket.service";
import { SocketComponent } from './socket/socket.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ObservableComponent,
    SocketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ObservableService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
