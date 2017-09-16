import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [DataService]
})
export class TeacherComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;

  model = {firstName: "", lastName: "", email: "", pass: ""};

  constructor(private route: ActivatedRoute, private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; //get ID from route parameter
    });
  }

  log(l) {
    console.log(l);
  }

  add(content) {
    this.modalService.open(content).result.then((res) => {
      console.log(`closed with`, res);
      if(res) {
        this.dataService.addTeacher(res.firstName, res.lastName, res.email, res.pass);
      }
    }, (reason) => {/*dismissed*/});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
