import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./auth/auth.guard";
import { HomeComponent } from "./home/home.component";
import { LoggedHomeComponent } from "././core/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "dashboard", component: LoggedHomeComponent },
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
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
