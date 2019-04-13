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


export class CreateQuizComponent implements OnInit, OnDestroy {
  category;
  link;
  FRONTEND_URL = 'localhost:4200/';
  linkSub: Subscription;

  constructor(public sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      console.log(params.get('categoryId'))
      this.category = params.get('categoryId');
    });

    this.linkSub = this.sharedService.generatedLink
      .subscribe(link => {
        this.link = link;
      })

  }

  onCreateQuiz(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.sharedService.createQuiz(form.value, this.category)
      .subscribe((data: any) => {
        this.sharedService.generatedLink.next(`${this.FRONTEND_URL}playQuiz?link=${data.randomLink}`);
      });
  }

  ngOnDestroy() {
    this.linkSub.unsubscribe();
  }

}
