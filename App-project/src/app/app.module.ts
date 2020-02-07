import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from './app-routing.module';
//import { AppRoutingModule } from "../app/shared/routing/app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material/app-material.module";
import { ReactiveFormsModule } from "@angular/forms";

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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    CoreModule
  ],
  providers: [
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
