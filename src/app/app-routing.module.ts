import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationComponent} from "./components/auth/authentication/authentication.component";
import {RegisterComponent} from "./components/auth/register/register.component";
import {AuthComponent} from "./components/auth/auth/auth.component";

const routes: Routes = [
  { path : "" , redirectTo : "/login" , pathMatch : "full" },
  { path : "register" , component : RegisterComponent },
  { path : "login" , component : AuthenticationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
