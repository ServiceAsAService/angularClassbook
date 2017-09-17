import { Component, OnInit, OnDestroy, ViewChild, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../data.service";
import { LoginService } from "../login.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [DataService]
})
export class TeacherComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  model = { firstName: "", lastName: "", mail: "", pass: "" };

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private modalService: NgbModal,
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; //get ID from route parameter
      if (!this.overview()) {
        this.model = this.dataService.getTeacher(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formInvalid() {
    return !(this.model.firstName && this.model.lastName && this.model.mail && this.model.pass);
  }

  overview() {
    return isNaN(this.id);
  }

  add(template) {
    this.modalService.open(template).result.then((res) => {
      if (res) { //if modal got closed with data
        let id = this.dataService.addTeacher(this.model.firstName, this.model.lastName, this.model.mail);
        this.loginService.setPassword(id, this.model.pass);
      }
    }, (reason) => {/*dismissed*/
    });
  }

  update(id) {
    this.dataService.updateTeacher(id, this.model.firstName, this.model.lastName, this.model.mail);
    this.loginService.setPassword(id, this.model.pass);
    this.router.navigate(['/teacher']);
  }

  @ViewChild('deleteQuestion') deleteQuestion; //get template from HTML
  delete(id) {
    this.modalService.open(this.deleteQuestion).result.then((reallyDelete) => {
      if (reallyDelete)
        this.dataService.removeTeacher(id);
    },
      (reason) => { //dismissed
      })
  }

}
