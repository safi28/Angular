import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./create/create.component";
import { AuthGuard } from "../auth/auth.guard";
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from "./list/list.component";
import { FoodComponent } from "./food/food.component";
import { AdventureComponent } from "./travel/adventure/adventure.component";
import { RelaxComponent } from "./travel/relax/relax.component";
import { LandscapesComponent } from "./travel/landscapes/landscapes.component";
import { FastFoodComponent } from "./food/fast-food/fast-food.component";
import { HomeMadeComponent } from "./food/home-made/home-made.component";
import { RestaurantsComponent } from "./food/restaurants/restaurants.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "list",
        pathMatch: "full",
        component: ListComponent,
        canActivate: [AuthGuard]
      },
      { path: "food", canActivate: [AuthGuard], component: FoodComponent },
      {
        path: "create",
        component: CreateComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        }
      },

      {
        path: "list/:id",
        component: DetailComponent,
        canActivate: [AuthGuard],
        data: {
          shouldFetchCause: true,
          isLogged: true
        }
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "adventure",
        canActivate: [AuthGuard],
        component: AdventureComponent
      },
      { path: "relax", canActivate: [AuthGuard], component: RelaxComponent },
      {
        path: "landscapes",
        canActivate: [AuthGuard],
        component: LandscapesComponent
      }
    ]
  },

  {
    path: "",
    children: [
      { path: "fast", canActivate: [AuthGuard], component: FastFoodComponent },
      {
        path: "home-made",
        canActivate: [AuthGuard],
        component: HomeMadeComponent
      },
      {
        path: "restaurant",
        canActivate: [AuthGuard],
        component: RestaurantsComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
