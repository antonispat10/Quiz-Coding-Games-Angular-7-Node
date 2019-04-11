import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import {SharedService} from "../shared/shared.service";

@Component({
  templateUrl: "./CreateQuiz.component.html",
  styleUrls: ["./CreateQuiz.component.css"]
})
export class CreateTestComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('createTestForm') form;
  constructor(public sharedService: SharedService) {}

  ngOnInit() {
  }



  onCreateTest(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value)
    this.sharedService.createTest(form.value);

  }

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
