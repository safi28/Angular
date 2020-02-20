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
        component: ListComponent
      },
      { path: "food", component: FoodComponent },
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
      { path: "adventure", component: AdventureComponent },
      { path: "relax", component: RelaxComponent },
      { path: "landscapes", component: LandscapesComponent }
    ]
  },

  {
    path: "",
    children: [
      { path: "fast", component: FastFoodComponent },
      { path: "home-made", component: HomeMadeComponent },
      { path: "restaurant", component: RestaurantsComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
