import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]' // use as <div app-servers/>, it looks on the attribute of the html elements.
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Testserver', 'Testserver 2'];
  showSecret = false;
  clicks = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Created new server! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onShowPassword() {
    this.showSecret = !this.showSecret;
    this.clicks.push(new Date());
  }

  ngOnInit() {
  }

}
