import {Injectable} from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
  }

  saveLocalstorage(key, data) {
    if (data !== undefined) {
      localStorage['classBook.' + key] = JSON.stringify(data);
    }
    else {
      localStorage.removeItem('classBook.' + key);
    }
  }

  getLocalstorage(key) {
    let data = localStorage['classBook.' + key];
    if (data) return JSON.parse(data);
    else return undefined;
  }

  generateInitialData() {
    this.saveLocalstorage('teachers', [
      {
        id: 0,
        firstName: 'Wurzel',
        lastName: 'Benutzer',
        mail: 'Wurzelbenutzer',
        pass: '$2a$10$F3stp/lEsbvQROvdt5pRaOG6tAIAlVOacd1sZi1ONwvi.L6Q7QEfa'
      },
      {id: 1, firstName: 'Lehrer', lastName: '1', mail: 'lehrer.1@schule.de', pass: 'passwort'},
      {id: 2, firstName: 'Lehrer', lastName: '2', mail: 'lehrer.2@schule.de', pass: 'passwort'},
      {id: 3, firstName: 'Lehrer', lastName: '3', mail: 'lehrer.3@schule.de', pass: 'passwort'},
    ]);
    this.saveLocalstorage('classes', [
      {id: 0, name: '5a', grade: 5},
      {id: 1, name: '5b', grade: 5},
      {id: 2, name: '6a', grade: 6},
      {id: 3, name: '7a', grade: 7},
    ]);
    this.saveLocalstorage('pupils', [
      {id: 0, firstName: 'Schüler', lastName: '1', classId: 0},
      {id: 1, firstName: 'Schüler', lastName: '2', classId: 0},
      {id: 2, firstName: 'Schüler', lastName: '3', classId: 1},
      {id: 3, firstName: 'Schüler', lastName: '4', classId: 2},
      {id: 4, firstName: 'Schüler', lastName: '5', classId: 3},
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

  getTeacherList() {
    let t = this.getTeachers();
    t.shift(); //remove root user from List
    return t;
  }

  getTeacher(id) {
    let teachers = this.getTeachers();
    return teachers.filter(e => e.id == id)[0];
  }

  getTeacherByMail(mail) {
    return this.getTeachers().find(x => x.mail.toLowerCase() == mail.toLowerCase());
  }

  removeTeacher(id) {
    let teachers = this.getTeachers();
    teachers = teachers.filter(e => e.id !== id);
    this.saveLocalstorage('teachers', teachers);
  }

  addTeacher(fName, lName, mail) {
    let teachers = this.getTeachers();
    let id = Math.max.apply(this, teachers.map(e => e.id)) + 1; //generate new id
    if (id < 0) id = 0; //set id to zero, if no previous id was found

    // password unset due to asynchronous encryption
    let t = {id: id, firstName: fName, lastName: lName, mail: mail, pass: ''};
    teachers.push(t);
    this.saveLocalstorage('teachers', teachers);
    return id;
  }

  getTeacherPassword(id) {
    let t = this.getTeacher(id);
    return t.password;
  }

  public updateTeacherObj(obj) {
    this.updateTeacher(obj.id, obj.firstName, obj.lastName, obj.mail);
  }

  updateTeacher(id, fName, lName, mail) {
    let t = this.getTeachers();
    // password unset due to asynchronous encryption
    t[id] = {id: id, firstName: fName, lastName: lName, mail: mail, pass: ''};
    this.saveLocalstorage('teachers', t);
  }

  setTeacherPassword(id, pass) {
    let t = this.getTeachers();
    if (!t[id]) return false;
    t[id].pass = pass;
    this.saveLocalstorage('teachers', t);
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
    if (id < 0) id = 0; //set id to zero, if no previous id was found
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


  /******************** Pupil **********************/

  getPupils() {
    let ret = this.getLocalstorage('pupils');
    if (!ret) { //no data found in localstorage
      this.generateInitialData();
      return this.getPupils();
    }
    else
      return ret;
  }

  getPupil(id) {
    let pupils = this.getPupils();
    return pupils.filter(e => e.id == id)[0];
  }

  addPupil(firstName, lastName, classId) {
    let pupils = this.getPupils();
    let id = Math.max.apply(this, pupils.map(e => e.id)) + 1; //generate new id
    if (id < 0) id = 0; //set id to zero, if no previous id was found
    let p = {id: id, firstName: firstName, lastName: lastName, classId: classId};
    pupils.push(p);
    this.saveLocalstorage('pupils', pupils);
  }

  updatePupil(id, firstName, lastName, classId) {
    let p = this.getPupils();
    p[id] = {id: id, firstName: firstName, lastName: lastName, classId: classId};
    this.saveLocalstorage('pupils', p);
  }

  removePupil(id) {
    let p = this.getPupils();
    p = p.filter(e => e.id !== id);
    this.saveLocalstorage('pupils', p);
  }

  getPupilClass(pId) {
    let p = this.getPupil(pId);
    let c = this.getClass(p.classId);
    return c;
  }


  /******************** Notes **********************/
  notes = [];

  getNotes() {
    let ret = this.getLocalstorage('notes');
    if (!ret) { //no data found in localstorage
      return [];
    }
    else {
      ret = ret.map(elem => {
        elem.date = new Date(elem.date); //convert date string back to date
        return elem;
      });
      if (JSON.stringify(this.notes) !== JSON.stringify(ret))
        this.notes = ret;
      return this.notes;
    }

  }

  getNote(id) {
    let notes = this.getNotes();
    return notes.filter(e => e.id == id)[0];
  }

  getNotesOfPupil(pId) {
    let notes = this.getNotes();
    return notes.filter(e => e.pupilId == pId);
  }

  getNoteCount(pId) {
    let n = this.getNotesOfPupil(pId);
    let c = 0;
    if (n) c = n.length; //only return length if notes aren't undefined
    return c;
  }

  getNotePupilName(id) {
    let n = this.getNote(id);
    let p = this.getPupil(n.pupilId);
    return p.firstName + " " + p.lastName;
  }

  getNoteTeacherName(id) {
    let n = this.getNote(id);
    let p = this.getTeacher(n.teacherId);
    return p.firstName + " " + p.lastName;
  }

  addNote(pupilId, teacherId, text, date) {
    let notes = this.getNotes();
    let id = Math.max.apply(this, notes.map(e => e.id)) + 1; //generate new id
    if (id < 0) id = 0; //set id to zero, if no previous id was found
    let n = {id: id, pupilId: pupilId, teacherId: teacherId, text: text, date: date};
    notes.push(n);
    this.saveLocalstorage('notes', notes);
  }

  updateNote(id, pupilId, teacherId, text, date) {
    let n = this.getNotes();
    n[id] = {id: id, pupilId: pupilId, teacherId: teacherId, text: text, date: date};
    this.saveLocalstorage('notes', n);
  }

  removeNote(id) {
    let n = this.getNotes();
    n = n.filter(e => e.id !== id);
    this.saveLocalstorage('notes', n);
  }
}
