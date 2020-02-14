import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./core/header/header.component";
import { HomeComponent } from "./core/unLoggedHome/home.component";
import { LoginComponent } from "./authentication/login/login.component";
import {
  NoopAnimationsModule,
  BrowserAnimationsModule
} from "@angular/platform-browser/animations";
import { AppMaterialModule } from "./app-material/app-material.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InterceptorService } from "./_services/interceptor.service";
import { RegisterComponent } from "./authentication/register/register.component";
import { UserService } from "./_services/user.service";
import { ToastrModule } from "ngx-toastr";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from "../environments/environment";

import { CoreModule } from "./core/core.module";

import { UserModule } from "./user/user.module";
import { ArticlesModule } from "./articles/articles.module";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
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
    AngularFirestoreModule, // Only required for database features
    AngularFireAuthModule, // Only required for auth features,
    AngularFireStorageModule, // Only required for storage features,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
