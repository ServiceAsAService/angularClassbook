import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  model = {firstName: "", lastName: "", mail: "", pass: ""};

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; //get ID from route parameter
      if (this.id) {
        this.model = this.dataService.getTeacher(this.id);
      }
    });
  }

  log(l) {
    console.log(l);
  }

  formInvalid() {
    return !(this.model.firstName && this.model.lastName && this.model.mail && this.model.pass);
  }

  add(content) {
    this.modalService.open(content).result.then((res) => {
      if (res) { //if modal got closed with data
        this.dataService.addTeacher(this.model.firstName, this.model.lastName, this.model.mail, this.model.pass);
      }
    }, (reason) => {/*dismissed*/
    });
  }

  update(id) {
    console.log(this.model);
    this.dataService.updateTeacher(id, this.model.firstName, this.model.lastName, this.model.mail, this.model.pass);
    this.router.navigate(['/teacher']);
  }

  test() {
    //this.dataService.setLoggedInUser(5);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
