import {Component, OnDestroy, OnInit} from "@angular/core";
import { SharedService } from "../../shared/shared.service"
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Quiz } from 'src/models/Quiz';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: "app-search-results",
  templateUrl: "./SearchResults.component.html",
  styleUrls: ["./SearchResults.component.css"]
})
export class SearchResultsComponent {
  url: string;
  quizName: string;
  questions: any = [];
  results: Quiz[] = [];
  played: boolean = true;
  ifResult: boolean = false;
  startedPlaying: boolean = false;
  subFindResults: Subscription;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) {}

  onFindResults(form: NgForm) {
    this.subFindResults = this.sharedService.findResults(form.value.email)
    .pipe(take(1))
    .subscribe(response => {
      this.results = response.quiz
      console.log(this.results)
      this.ifResult = true;
    })
  }
}
