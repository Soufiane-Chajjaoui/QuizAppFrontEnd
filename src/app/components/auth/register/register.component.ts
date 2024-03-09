import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../models/User";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public formRegister : FormGroup ;
  constructor(private fb : FormBuilder , protected loadingService : LoadingService, private router : Router , private authService : AuthService) {

    this.formRegister = this.fb.group(
      {
      password: this.fb.control('' , [Validators.required , Validators.min(8)]),
      completeName: this.fb.control('' , [Validators.required , Validators.min(8)]),
      sex: this.fb.control('' , [Validators.required]),
      username: this.fb.control('' , [Validators.required , Validators.min(8)]),
      role: this.fb.control('USER')
      }
    )
  }

  register() {
    let user : User = this.formRegister.value;
    console.log(user);
    this.authService.registerHttp(user).subscribe({
      next : value => {
        this.authService.saveToken(value.token);
        this.router.navigateByUrl('/home');
      },
      error : err => {
        console.log(err)
      }
    })
  }
}
