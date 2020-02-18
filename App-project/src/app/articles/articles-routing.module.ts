import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { AuthGuard } from "../auth/auth.guard";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "list",
        pathMatch: "full",
        component: ListComponent
      },
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: '/article/create',
      // },
      {
        path: "create",
        component: CreateComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        }
      },
      {
        path: "article/:id",
        component: DetailComponent,
        canActivate: [AuthGuard],
        data: {
          shouldFetchCause: true,
          isLogged: true
        }
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
