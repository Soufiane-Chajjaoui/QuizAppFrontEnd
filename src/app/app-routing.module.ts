import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './components/auth/register/register.component';
import {AuthComponent} from './components/auth/auth/auth.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {QuestionComponent} from './components/question/question.component';
import {ReponseComponent} from "./components/reponse/reponse.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'quiz', component: QuizComponent,
      },
      {
        path: ':id/questions', component: QuestionComponent
      }
    ]
  },
  {path: 'login', component: AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
