import {Question} from "./question";


export interface Quiz {
  id: number ,
  titre: string ,
  questionsDTO: Array<Question>,
  createAt : Date
}
