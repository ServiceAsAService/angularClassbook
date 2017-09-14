import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  wrongCredentials: boolean = false;

  model = {user: "", pass: ""};

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if(this.loginService.authenticate(this.model.user, this.model.pass)) {
      this.wrongCredentials = false;
      this.router.navigate(['/dashboard']);
    }
    else
      this.wrongCredentials = true;
  }

}
