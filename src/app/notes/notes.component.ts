import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Location} from "@angular/common";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit, OnDestroy {

  private id: number;
  private pupilId: number;
  private sub: any;
  notes: any;
  interval: any;

  model: any = {pupilId: -1, teacherId: -1, text: "", date: new Date()};

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private modalService: NgbModal,
              private router: Router,
              private location: Location) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; //get ID from route parameter
      if (!this.overview()) {
        this.model = this.dataService.getNote(this.id);
        if(this.model)
          this.convertToModelDate(this.model.date);
      }
      this.pupilId = +params['pId'];
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
    this.sub.unsubscribe();
  }

  overview() {
    return isNaN(this.id);
  }

  pupilView() {
    return !isNaN(this.pupilId);
  }

  goBack() {
    if(this.pupilView()) {
      this.router.navigate(['/notes/pupil', this.pupilId]);
    }
    else
      this.router.navigate(['/notes']);
  }

  dateToString(date) {
    let d = date.toISOString();
    d = d.replace('T', ' ');
    d = d.substr(0, d.indexOf('.') - 3); //get rid of milliseconds and also seconds
    return d;
  }

  trimString(str, length, wordWise) {
    let regex = '/^(.{' + length + '}[^\s]*).*/'; //.replace(/^(.{11}[^\s]*).*/, "$1")
    let originalLength = str.length;
    let trimmed = str.substr(0, length);
    if (wordWise && originalLength > length) {
      trimmed = trimmed.substr(0, Math.min(trimmed.length, trimmed.lastIndexOf(" "))); //retrim if cutting of a word
      trimmed += "[...]";
    }
    return trimmed;
  }

  formInvalid() {
    let m = this.model;
    return !(m.pupilId >= 0 && m.teacherId >= 0 && m.text && m.date);
  }

  getNotes() {
    let n = this.dataService.getNotes();
    if (this.pupilId)
      return n.filter(e => e.id === this.pupilId);
    else
      return n;
  }

  convertToModelDate(d) {
    this.model.datePicker = {year: d.getFullYear(), month: d.getMonth() + 1, day: d.getDate()};
    this.model.time = {hour: d.getHours(), minute: d.getMinutes()};
  }

  @ViewChild('addNote') addNote;

  add() {
    let d = new Date();
    this.convertToModelDate(d);
    if(this.pupilId)
      this.model.pupilId = this.pupilId;
    this.modalService.open(this.addNote).result.then((res) => {
      if (res) { //if modal got closed with data
        let m = this.model;
        this.dataService.addNote(m.pupilId, m.teacherId, m.text, m.date);
      }
    }, (reason) => {/*dismissed*/
    });
  }

  update(id) {
    let m = this.model;
    this.dataService.updateNote(id, m.pupilId, m.teacherId, m.text, m.date);
    this.router.navigate(['/notes']);
  }

  @ViewChild('deleteQuestion') deleteQuestion; //get template from HTML
  delete(id) {
    this.modalService.open(this.deleteQuestion).result.then((reallyDelete) => {
        if (reallyDelete)
          this.dataService.removeNote(id);
        //workaround because for some reason it wants to open the detail page, but doesn't do it on any other overview page
        this.location.back(); //TODO: fix this
      },
      (reason) => { //dismissed
      });
  }

}
