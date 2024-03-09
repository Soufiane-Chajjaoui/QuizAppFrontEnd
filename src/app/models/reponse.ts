import {Question} from "./question";

export interface Reponse {
  id : number ,
  rep : string ,
  questionDTO : Question ,
  createAt : Date
}
