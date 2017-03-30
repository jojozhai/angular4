import {Component, OnInit} from "@angular/core";
import {SocketService} from "../shared/socket.service";

@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  messageFromServer: string;

  constructor(private wsService: SocketService) {
  }

  ngOnInit() {

    this.wsService.createObservableSocket("ws://localhost:8085")
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('The observable stream is complete')
      );
  }

  sendMessageToServer(){
    console.log("Sending message to WebSocket server");
    this.wsService.sendMessage("Hello from client");
  }

}
