import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from "./data.service";

import bcrypt from 'bcryptjs';

@Injectable()
export class LoginService implements CanActivate {

    constructor(private router: Router, private dataService: DataService) {
        console.log(dataService);
    }
    public logOut() {
        this.dataService.setLoggedInUser(undefined);
    }
    public authentificate(email: string, password: string) {
        return new Promise((resolve, reject) => {
            if (email === "Wurzelbenutzer" && password === "Wurzelbenutzer") {
                this.dataService.setLoggedInUser(0);
                resolve();
                return;
            }
            let teacher = this.dataService.getTeacherByMail(email);
            console.log(teacher, email);
            bcrypt.compare(password, teacher.pass)
                .then((result) => {
                    if (result) {
                        this.dataService.setLoggedInUser(teacher.id);
                        resolve();
                    }
                    else {
                        reject();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    reject();
                });
        });
    }

    public setPassword(id, password) {
        let th = this;
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10).then(result => {
                th.dataService.setTeacherPassword(id, result);
                resolve();
            })
                .catch(() => reject());
        });
    }

    public canActivate() {
        if (!this.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

    public isLoggedIn() {
        if (this.dataService.getTeachers() == []) {
            return false;
        }
        return this.dataService.getLoggedInUser() !== undefined;
    }

}
