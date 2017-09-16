import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DataService} from "../data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  private id: string;
  private sub: any;

  model = {name: "", grade: "", classTeacher: ""};

  constructor(private route: ActivatedRoute,
              private dataService: DataService,
              private modalService: NgbModal,
              private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; //get ID from route parameter
      if (this.id) {
        this.model = this.dataService.getClass(this.id);
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  formInvalid() {
    return !(this.model.name && this.model.grade);
  }

  @ViewChild('addClass') addClass;
  add() {
    this.modalService.open(this.addClass).result.then((res) => {
      if (res) { //if modal got closed with data
        this.dataService.addClass(this.model.name, this.model.grade);
      }
    }, (reason) => {/*dismissed*/
    });
  }

  update(id) {
    this.dataService.updateClass(id, this.model.name, this.model.grade);
    this.router.navigate(['/class']);
  }

  @ViewChild('deleteQuestion') deleteQuestion; //get template from HTML
  delete(id) {
    this.modalService.open(this.deleteQuestion).result.then((reallyDelete) => {
        if (reallyDelete)
          this.dataService.removeClass(id);
      },
      (reason) => { //dismissed
      })
  }

}
