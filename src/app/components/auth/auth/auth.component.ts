import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  public formLogin: FormGroup;

  constructor(private fb: FormBuilder , private authService : AuthService , protected loadingService : LoadingService, private router : Router) {
    this.formLogin = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.min(8)]),
      password: this.fb.control('', [Validators.required, Validators.min(8)]),
    })
  }


  login() {
    let authRequest : any = {
      username : this.formLogin.value['username'],
      password : this.formLogin.value['password']
    }
    console.log(authRequest);
    this.authService.loginHttp(authRequest).subscribe({
      next : value =>  {
        this.authService.saveToken(value.token);
        this.router.navigateByUrl('/home');
      },
      error : err =>  {
        console.log(err)
      }
    }) ;
  }
}
