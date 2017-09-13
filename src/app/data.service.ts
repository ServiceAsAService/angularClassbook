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

}
