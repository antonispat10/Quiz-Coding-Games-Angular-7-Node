import {Component, OnInit} from "@angular/core";
import { SharedService } from "../../shared/shared.service"
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

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
  startedPlaying: boolean = false;
  showResults: boolean = false;
  previousScore: number = 0;
  newScore: number = 0;
  score: number;
  load: number = 0;
  index: number;
  intro: boolean = true;
  constructor(private sharedService: SharedService, private route: ActivatedRoute) {}

  ngOnInit() {
     this.route.queryParams.subscribe((params: ParamMap) => {
      this.url = params.link;
    });
    this.getQuestions();

  }

  
  onIntroQuiz() {
    this.sharedService.introQuiz(this.url)
      .subscribe(v => {
        this.intro = false;
        this.startedPlaying = true;
      });
  }

  findIndex(i) {
    this.index = i;
  }

  onSubmitQuiz(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.load += 1;

    console.log(form.value)
    console.log(this.questions)
    if (this.questions[this.index].answer ==  form.value.answer) {
      this.previousScore = +localStorage.getItem('score');
      this.newScore = this.previousScore + 1;
      localStorage.setItem('score', JSON.stringify(this.newScore));
    }
    if (this.questions.length == (this.index + 1)) {
      this.score = +localStorage.getItem('score') / this.questions.length * 100;
      console.log('ok')
      this.startedPlaying = false;
      this.intro = false;
      this.showResults = true;
      localStorage.setItem('score', '0')
    }
  }
  
  getQuestions() {
    console.log(this.url)
    this.sharedService.getQuestions(this.url)
      .subscribe(values => {
        console.log(values)
        this.quizName = values.quizName;
        this.questions = values.questions;
        console.log(this.questions)
      })
  }




}
