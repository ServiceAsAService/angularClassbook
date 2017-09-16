import { Component } from '@angular/core';
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService, DataService]
})
export class AppComponent {
  title = 'app';
  constructor(private loginService: LoginService,private dataService:DataService, private router: Router) {}

  logoutVisible() {
    let url = this.router.url;
    return !(url === '/login' || url == '/logout');
  }
}
