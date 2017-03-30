import { Component, OnInit } from '@angular/core';
import {ObservableService} from "../shared/observable.service";

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  private currentTime:Date;

  constructor(private service: ObservableService) { }

  ngOnInit() {
    this.service.createObservable().subscribe(
      data => this.currentTime = data
    );
  }

}
