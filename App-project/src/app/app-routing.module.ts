import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./authentication/login/login.component";
import { RegisterComponent } from "./authentication/register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./core/unLoggedHome/home.component";
import { LoggedHomeComponent } from "././core/home/home.component";
import { NotFoundComponent } from "./core/not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "dashboard",
    component: LoggedHomeComponent,
    data: { isLogged: true }
  },

  {
    path: "login",
    component: LoginComponent,
    canLoad: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  {
    path: "register",
    component: RegisterComponent,
    canLoad: [AuthGuard],
    data: {
      isLogged: false
    }
  },
  // { path: "**", redirectTo: "" },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
