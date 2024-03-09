import {Quiz} from "./quiz";
import {Reponse} from "./reponse";

export interface Question {
  id : number ,
  content : string ,
  responsesDTO : Array<Reponse> ,
  quizDTO : Quiz ,
  createAt : Date

}
