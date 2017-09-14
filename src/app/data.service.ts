import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  saveRaw(key, data) {
    sessionStorage.classBook[key] = JSON.stringify(data);
  }

  getRaw(key) {
    return JSON.parse(sessionStorage.classBook[key]);
  }

  getTeachers(){
    return [
      {id: 0, firstName: 'Lehrer', lastName: '1', mail: 'lehrer.1@schule.de', pass: 'passwort'},
      {id: 1, firstName: 'Lehrer', lastName: '2', mail: 'lehrer.2@schule.de', pass: 'passwort'},
      {id: 2, firstName: 'Lehrer', lastName: '3', mail: 'lehrer.3@schule.de', pass: 'passwort'},
    ]
  }

}
