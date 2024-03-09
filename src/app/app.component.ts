import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";
import {JwtService} from "./services/jwt.service";
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'QuizAppFrontEnd';

  constructor(private router: Router,private authService : AuthService , private jwtService: JwtService) {
  }

  ngOnInit(): void {
    let token: string | null = this.jwtService.getToken();
    if (token) {
      this.authService.loadProfil(jwtDecode(token));
      this.router.navigateByUrl("/home");
    } else {
      this.router.navigateByUrl("/login");
    }
  }
}
