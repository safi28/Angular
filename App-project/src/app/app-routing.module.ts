import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./core/unLoggedHome/home.component";
import { LoggedHomeComponent } from "././core/home/home.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";
import { GuideComponent } from "./core/guide/guide.component";

const routes: Routes = [
  {
    path: "home",
    pathMatch: 'full',
    component: HomeComponent,
    // canLoad: [AuthGuard],
    // data: {
    //   isLogged: false
    // }
  },
  {
    path: "dashboard",
    component: LoggedHomeComponent
    // canLoad: [AuthGuard],
    // data: { isLogged: true }
  },
  { path: "guide", component: GuideComponent },
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthGuard]
  },
  // { path: "**/**", redirectTo: "home" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
