import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  loggedIn: boolean = false;

  constructor() { }

  public authenticate(user, pass) {
      if(user === "admin") {
          if(pass === "admin") {
              this.loggedIn = true;
              return true;
          }
      }
      return false;
  }

  public isLoggedIn() {
    return this.loggedIn;
  }

}
