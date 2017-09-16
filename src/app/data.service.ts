import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
  }

  saveLocalstorage(key, data) {
    if (!localStorage.classBook)
      localStorage.classBook = {};
    localStorage['classBook.' + key] = JSON.stringify(data);
  }

  getLocalstorage(key) {
    let data = localStorage['classBook.' + key];
    if (data) return JSON.parse(data);
    else return undefined;
  }

  generateInitialData() {
    this.saveLocalstorage('teachers', [
      {id: 0, firstName: 'Lehrer', lastName: '1', mail: 'lehrer.1@schule.de', pass: 'passwort'},
      {id: 1, firstName: 'Lehrer', lastName: '2', mail: 'lehrer.2@schule.de', pass: 'passwort'},
      {id: 2, firstName: 'Lehrer', lastName: '3', mail: 'lehrer.3@schule.de', pass: 'passwort'},
    ]);
  }

  getLoggedInUser() {
    let teacherId = this.getLocalstorage('loggedInUser');
    return teacherId;
  }

  setLoggedInUser(teacherId) {
    this.saveLocalstorage('loggedInUser', teacherId);
  }

  getTeachers() {
    let ret = this.getLocalstorage('teachers');
    if (!ret) { //no data found in localstorage
      this.generateInitialData();
      return [];
    }
    else
      return ret;
  }

  getTeacher(id) {
    let teachers = this.getTeachers();
    return teachers.filter(e => e.id == id)[0];
  }

  addTeacher(fName, lName, mail, pass) {
    let teachers = this.getTeachers();
    let id = Math.max.apply(this, teachers.map(e => e.id)) + 1; //generate new id
    id = id || 0;
    let t = {id: id, firstName: fName, lastName: lName, mail: mail, pass: pass};
    teachers.push(t);
    this.saveLocalstorage('teachers', teachers);
  }

  updateTeacher(id, fName, lName, mail, pass) {
    let t = this.getTeachers();
    t[id] = {id: id, firstName: fName, lastName: lName, mail: mail, pass: pass};
    this.saveLocalstorage('teachers', t);
  }

  removeTeacher(id) {
    let teachers = this.getTeachers();
    teachers = teachers.filter(e => e.id !== id);
    this.saveLocalstorage('teachers', teachers);
  }
}
