import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public tabAuth = [
    { route : "/login" , title : "Login" },
    { route : "/register" , title : "Register" }
  ] ;
  public tabActive : any;


  changeTab(param: any) : void {
    this.tabActive = param ;
  }
}
