import {Component, OnInit, OnDestroy, ViewChild, AfterViewInit} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { ParamMap } from "@angular/router";

import {SharedService} from "../../shared/shared.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: "./CreateQuiz.component.html",
  styleUrls: ["./CreateQuiz.component.css"]
})


export class CreateQuizComponent implements OnInit {
  category;
  link;
  categoryName
  FRONTEND_URL = window.location.host;

  constructor(public sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('categoryId');
      this.categoryName = params.get('categoryName');
    });
  }

  onCreateQuiz(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.sharedService.createQuiz(form.value, this.category)
      .subscribe((data: any) => {
        this.link = `${this.FRONTEND_URL}/playQuiz?link=${data.randomLink}`;
      });
  }
}
