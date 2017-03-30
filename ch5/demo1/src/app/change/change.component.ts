import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: {name: string};
  message: string = '初始化消息';

  private oldUserName:string;

  private changeDetected: boolean = false;

  private noChangeCount: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['greeting']){
      console.log('greeting属性是否是首次更新:'+changes['greeting'].isFirstChange());
    }
    if(changes['user']){
      console.log('user属性是否是首次更新:'+changes['user'].isFirstChange());
    }
    console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck() {
    if (this.user.name !== this.oldUserName) {
      this.changeDetected = true;
      console.log(`DoCheck: user.name 从 "${this.oldUserName}" 变为 "${this.user.name}"`);
      this.oldUserName = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    }else{
      this.noChangeCount = this.noChangeCount + 1;
      console.log(`DoCheck: user.name没变化时ngDoCheck已经被调用${this.noChangeCount}次"`);
    }

    this.changeDetected = false;
  }

}
