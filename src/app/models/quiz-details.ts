import {Question} from "./question";

export interface QuizDetails {
  idQuiz : number ,
  titre : string ,
  currentPage : number ,
  totalPage : number ,
  pageSize : number ,
  questions : Array<Question>
}
