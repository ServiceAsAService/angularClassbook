import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
  }

  saveRaw(key, data) {
    if (!localStorage.classBook)
      localStorage.classBook = {};
    localStorage['classBook.' + key] = JSON.stringify(data);
  }

  getRaw(key) {
    return JSON.parse(localStorage['classBook.' + key]);
  }

  generateInitialData() {
    this.saveRaw('teachers', [
      {id: 0, firstName: 'Lehrer', lastName: '1', mail: 'lehrer.1@schule.de', pass: 'passwort'},
      {id: 1, firstName: 'Lehrer', lastName: '2', mail: 'lehrer.2@schule.de', pass: 'passwort'},
      {id: 2, firstName: 'Lehrer', lastName: '3', mail: 'lehrer.3@schule.de', pass: 'passwort'},
    ]);
  }

  getTeachers() {
    let ret = this.getRaw('teachers');
    if (!ret)
      return [];
    else
      return ret;
  }

  getTeacher(id) {
    let teachers = this.getTeachers();
    return teachers.filter(e => e.id === id)[0];
  }

  addTeacher(fName, lName, mail, pass) {
    let teachers = this.getTeachers();
    let id = Math.max.apply(this, teachers.map(e => e.id)) + 1; //generate new id
    id = id || 0;
    let t = {id: id, firstName: fName, lastName: lName, mail: mail, pass: pass};
    teachers.push(t);
    this.saveRaw('teachers', teachers);
  }

  removeTeacher(id) {
    let teachers = this.getTeachers();
    teachers = teachers.filter(e => e.id !== id);
    this.saveRaw('teachers', teachers);
  }
}
