import {Component, OnInit} from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {Quiz} from "../../models/quiz";
import {Router} from "@angular/router";
import {catchError, Observable, throwError} from "rxjs";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{

  public quizzes! : Observable<Array<Quiz>> ;
  protected messageError!: string ;
  constructor(private quizService : QuizService , private router : Router) {
  }
  ngOnInit() {
   this.quizzes = this.quizService.getQuizzes().pipe(catchError(err => {
     this.messageError = err.message;
     return throwError(err);
   } )) ;
  }

  toQuestion(quiz: Quiz) {
    this.router.navigateByUrl('/home/'+quiz.id+'/questions').then(value => {
      console.log('Navigated To Questions of Quiz' + quiz.titre)
    });
  }
}
