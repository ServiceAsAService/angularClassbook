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
    this.saveLocalstorage('classes', [
      {id: 0, name: '5a', grade: 5},
      {id: 1, name: '5b', grade: 5},
      {id: 2, name: '6a', grade: 6},
      {id: 3, name: '7a', grade: 7},
    ])
  }

  getLoggedInUser() {
    let teacherId = this.getLocalstorage('loggedInUser');
    return teacherId;
  }

  setLoggedInUser(teacherId) {
    this.saveLocalstorage('loggedInUser', teacherId);
  }



  /******************** Teachers **********************/

  getTeachers() {
    let ret = this.getLocalstorage('teachers');
    if (!ret) { //no data found in localstorage
      this.generateInitialData();
      return this.getTeachers();
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
    if(id < 0) id = 0; //set id to zero, if no previous id was found
    let t = {id: id, firstName: fName, lastName: lName, mail: mail, pass: pass};
    teachers.push(t);
    this.saveLocalstorage('teachers', teachers);
  }

  updateTeacher(id, fName, lName, mail, pass) {
    let t = this.getTeachers();
    t[id] = {id: id, firstName: fName, lastName: lName, mail: mail, pass: pass};
    this.saveLocalstorage('teachers', t);
  }

  updateTeacherObj(obj) {
    this.updateTeacher(obj.id, obj.firstName, obj.lastName, obj.mail, obj.pass);
  }

  removeTeacher(id) {
    let teachers = this.getTeachers();
    teachers = teachers.filter(e => e.id !== id);
    this.saveLocalstorage('teachers', teachers);
  }

  getTeacherPassword(id) {
    let t = this.getTeacher(id);
    return t.password;
  }

  setTeacherPassword(id, pass) {
    let t = this.getTeacher(id);
    if(!t) return false;
    t.pass = pass;
    this.updateTeacherObj(t);
  }



  /******************** Class **********************/

  getClasses() {
    let ret = this.getLocalstorage('classes');
    if (!ret) { //no data found in localstorage
      this.generateInitialData();
      return this.getClasses();
    }
    else
      return ret;
  }

  getClass(id) {
    let classes = this.getClasses();
    return classes.filter(e => e.id == id)[0];
  }

  addClass(name, grade) {
    let classes = this.getClasses();
    let id = Math.max.apply(this, classes.map(e => e.id)) + 1; //generate new id
    if(id < 0) id = 0; //set id to zero, if no previous id was found
    let c = {id: id, name: name, grade: grade};
    classes.push(c);
    this.saveLocalstorage('classes', classes);
  }

  updateClass(id, name, grade) {
    let c = this.getClasses();
    c[id] = {id: id, name: name, grade: grade};
    this.saveLocalstorage('classes', c);
  }

  removeClass(id) {
    let c = this.getClasses();
    c = c.filter(e => e.id !== id);
    this.saveLocalstorage('classes', c);
  }
}
