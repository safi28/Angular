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
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "dashboard",
    component: LoggedHomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "guide", component: GuideComponent },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
