import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/User";
import {JwtService} from "./jwt.service";
import {jwtDecode} from "jwt-decode";
import {BASE_URL} from "../core/constants/injection";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user : User | undefined;

  private UrlAuth : string = this.base_url + "/auth" ;

  constructor(private http : HttpClient , private jwtService : JwtService , @Inject(BASE_URL) private base_url : string) {}

  loginHttp(user : User) : Observable<any>{
     return this.http.post<any>( this.UrlAuth + "/login" , user) ;
  }
  registerHttp(user : User) : Observable<any> {
     return this.http.post<any>(this.UrlAuth + "/register" , user);
  }
  logout() : Observable<any>{
    return this.http.get(this.UrlAuth + '/logout') ;
  }


  saveToken(token : string) : void{
    console.log(jwtDecode(token))
    this.jwtService.setToken(token);
  }
  loadProfil(u : User)  {
    this.user = u ;
  }


}
