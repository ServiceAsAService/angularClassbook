import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../login.service";
import { DataService } from "../data.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  wrongCredentials: boolean = false;

  model = { user: "", pass: "" };

  constructor(private router: Router, private loginService: LoginService, private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loginService.setPassword(0, this.model.pass).then(() =>
      this.loginService.authentificate(this.model.user, this.model.pass)
        .then(() => {
          console.log("authentificated");
          this.wrongCredentials = false;
          this.router.navigate(['/dashboard']);
        }).catch((err) => {
          console.log("not authentificated");
          console.log(err);
          this.wrongCredentials = true
        }));
  }

}
