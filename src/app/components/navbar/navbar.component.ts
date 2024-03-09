import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {JwtService} from "../../services/jwt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(protected authService: AuthService,private router : Router , private jwtService: JwtService) {
  }

  logout() {
    this.authService.logout().subscribe({
      next : value =>  {
        this.jwtService.removeToken();
        this.router.navigateByUrl('/');
      }
    })
  }
}
