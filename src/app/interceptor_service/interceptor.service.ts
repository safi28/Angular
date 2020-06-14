import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { environment } from "src/environments/environment";

const apiURL = environment.firebase.apiURL;

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const fullURL = req.url.includes("http") ? req.url : `${apiURL}/${req.url}`;
    const isApiRequest = fullURL.includes(apiURL);
    return next.handle(
      req.clone({ url: fullURL, withCredentials: isApiRequest })
    );

    // let currentUser = this.authService.currentUserValue;
    // let reqUrl = "http://localhost:4200/";
    // req = req.clone({
    //   headers: req.headers.set(
    //     "Authorization",
    //     "Bearer " + localStorage.getItem("user")
    //   ),
    //   url: reqUrl + "" + req.url
    // });
  }
}
