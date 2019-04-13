import {Component, OnInit} from "@angular/core";
import { SharedService } from "../../shared/shared.service"
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Quiz } from 'src/models/Quiz';

@Component({
  selector: "app-search-results",
  templateUrl: "./SearchResults.component.html",
  styleUrls: ["./SearchResults.component.css"]
})
export class SearchResultsComponent implements OnInit {
  url: string;
  quizName: string;
  questions: any = [];
  results: Quiz[] = [];
  played: boolean = true;
  ifResult: boolean = false;
  startedPlaying: boolean = false;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
  }

  
  onFindResults(form: NgForm) {
    this.sharedService.findResults(form.value.email)
      .subscribe(response => {
        this.results = response.quiz
        console.log(this.results)
        this.ifResult = true;
      })
  }


}
