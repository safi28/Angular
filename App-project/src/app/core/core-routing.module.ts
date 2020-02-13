import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { LoggedHomeComponent } from "./home/home.component";

const routes: Routes = [
    // { path: "dashboard", component: LoggedHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true,  enableTracing: true})],
  exports: [RouterModule]
})
export class CoreRouting {}
