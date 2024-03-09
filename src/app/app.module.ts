import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthComponent } from './components/auth/auth/auth.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';
import { ReponseComponent } from './components/reponse/reponse.component';
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import {AppInterceptor} from "./interceptors/app.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    QuizComponent,
    QuestionComponent,
    ReponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ {provide : HTTP_INTERCEPTORS , useClass : AuthInterceptor , multi : true} ,
    {provide : HTTP_INTERCEPTORS , useClass : AppInterceptor , multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
