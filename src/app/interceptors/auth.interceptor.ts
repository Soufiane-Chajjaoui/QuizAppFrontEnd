import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtService} from "../services/jwt.service";
import {MessageService} from "../services/message.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtService : JwtService, private messageService : MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let token = this.jwtService.getToken();
   if (token == null){
     return next.handle(request);
   }
    console.log(token)
    let req = request.clone({
     setHeaders : {Authorization : 'Bearer ' + token}
   });
    return next.handle(req);
  }
}
