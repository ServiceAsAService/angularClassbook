import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from "./data.service";

@Injectable()
export class LoginService implements CanActivate {

    loggedIn: boolean = false;

    constructor(private router: Router, private dataService: DataService) {
        console.log(dataService);
        
     }

    public authenticate(user, pass) {
        if (user === "admin") {
            if (pass === "admin") {
                this.loggedIn = true;
                return true;
            }
        }
        return false;
    }

    public canActivate() {
        console.log("hey");
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    public isLoggedIn() {
        return this.dataService.getLoggedInUser() !== undefined;
    }

}
