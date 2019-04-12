import {Component, OnInit} from "@angular/core";
import { SharedService } from "../../shared/shared.service"
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: "app-play-quiz",
  templateUrl: "./playQuiz.component.html",
  styleUrls: ["./playQuiz.component.css"]
})
export class PlayQuizComponent implements OnInit {
  url: string;
  quizName: string;
  questions: any = [];
  checkLink: boolean = true;

  constructor(private sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
     this.route.queryParams.subscribe((params: ParamMap) => {
      console.log(params)
      this.url = params.link;
    });
    this.getQuestions();

 console.log(this.questions)

  }

  
  onIntroQuiz() {
    this.sharedService.introQuiz('test/304944586');
    this.getQuestions
  }

  getQuestions() {
    console.log(this.url)
    this.sharedService.getQuestions('test/304944586')
      .subscribe(values => {
        console.log(values)
        this.quizName = values.quizName;
        this.questions = values.questions;
        console.log(this.questions)
      })
  }




}
