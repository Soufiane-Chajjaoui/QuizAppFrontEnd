import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Question} from "../../models/question";
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../models/quiz";
import {QuizDetails} from "../../models/quiz-details";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  protected quizDetails$ : Observable<QuizDetails> | undefined ;
  // protected quiz : Quiz;
  constructor(private router : Router, private activeRouter : ActivatedRoute , private quizService : QuizService) {}
  ngOnInit(): void {
    console.log(this.activeRouter.snapshot.params['id']);
    this.fetchQuestions();
  }

  fetchQuestions() : void {
    console.log("ddddddd")
  }
}
