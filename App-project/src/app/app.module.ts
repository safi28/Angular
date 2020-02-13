import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material/app-material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./_services/interceptor.service";
import { RegisterComponent } from "./register/register.component";
import { UserService } from "./_services/user.service";
import { ToastrModule } from "ngx-toastr";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

import { CoreModule } from "./core/core.module";
import { LoggedHomeComponent } from "./authentication/logged-home/logged-home.component";

import { UserModule } from "./user/user.module";
import { ArticlesModule } from "./articles/articles.module";
import { RouteReuseStrategy, RouterModule } from "@angular/router";

import { AngularFireAuthGuard } from "@angular/fire/auth-guard";
import { AuthGuard } from "./auth/auth.guard";
import { AuthService } from "./auth/auth.service";
import { RegisterModule } from './register/register.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoggedHomeComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    UserModule,
    CoreModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
