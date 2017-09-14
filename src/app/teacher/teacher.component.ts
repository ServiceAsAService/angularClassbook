import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../data.service";

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
  providers: [DataService]
})
export class TeacherComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; //

      // In a real app: dispatch action to load the details here.
    });
  }

  log() {
    console.log(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
