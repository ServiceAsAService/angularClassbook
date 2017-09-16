import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  wrongCredentials: boolean = false;

  model = {user: "", pass: ""};

  constructor(private router: Router, private loginService: LoginService, private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.loginService.authenticate(this.model.user, this.model.pass)) {
      this.wrongCredentials = false;
      this.dataService.setLoggedInUser(0); //todo replace with real logged in user
      this.router.navigate(['/dashboard']);
    }
    else
      this.wrongCredentials = true;
  }

}
