import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-pupil',
  templateUrl: './pupil.component.html',
  styleUrls: ['./pupil.component.css']
})
export class PupilComponent implements OnInit, OnDestroy {

  private id: number;
  private sub: any;

  model = {firstName: "", lastName: "", classId: -1};

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; //get ID from route parameter
      if (!this.overview()) {
        this.model = this.dataService.getPupil(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formInvalid() {
    let m = this.model;
    return !(m.firstName && m.lastName && m.classId >= 0);
  }

  overview() {
    return isNaN(this.id);
  }

  @ViewChild('addPupil') addPupil;
  add() {
    console.log(this.model);
    this.modalService.open(this.addPupil).result.then((res) => {
      if (res) { //if modal got closed with data
        let m = this.model;
        this.dataService.addPupil(m.firstName, m.lastName, m.classId);
      }
    }, (reason) => {/*dismissed*/
    });
  }

  update(id) {
    let m = this.model;
    this.dataService.updatePupil(id, m.firstName, m.lastName, m.classId);
    this.router.navigate(['/pupil']);
  }

  @ViewChild('deleteQuestion') deleteQuestion; //get template from HTML
  delete(id) {
    this.modalService.open(this.deleteQuestion).result.then((reallyDelete) => {
        if (reallyDelete)
          this.dataService.removePupil(id);
      },
      (reason) => { //dismissed
      })
  }

}
