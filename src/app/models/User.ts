import {Role} from "./Role";
import {Sex} from "./Sex";

export interface User {
  password: string,
  completeName: string,
  sex: Sex ,
  sub: string,
  role: Role
}
